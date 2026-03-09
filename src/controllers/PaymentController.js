import { getDb } from '../db/index.js';
import { CreditsService } from '../services/CreditsService.js';
import { distributeRechargeCommission } from '../services/ReferralService.js';
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
const STRIPE_SUCCESS_URL = 'https://see.lightchaser.xyz/#/payment/success';
const STRIPE_CANCEL_URL = 'https://see.lightchaser.xyz/#/payment/cancel';

// 套餐配置：amount(USD) → { priceId, baseCredits, firstBonus, planId }
// baseCredits: 正常购买获得的积分
// firstBonus: 首次购买该档位额外赠送的积分（0 表示无赠送）
const PLAN_CONFIG = {
    1:   { priceId: process.env.STRIPE_PRICE_ID_1   || '', baseCredits: 1,   firstBonus: 0,  planId: 'plan_1'   },
    5:   { priceId: process.env.STRIPE_PRICE_ID_5   || '', baseCredits: 6,   firstBonus: 2,  planId: 'plan_5'   },
    10:  { priceId: process.env.STRIPE_PRICE_ID_10  || '', baseCredits: 13,  firstBonus: 4,  planId: 'plan_10'  },
    30:  { priceId: process.env.STRIPE_PRICE_ID_30  || '', baseCredits: 45,  firstBonus: 10, planId: 'plan_30'  },
    50:  { priceId: process.env.STRIPE_PRICE_ID_50  || '', baseCredits: 80,  firstBonus: 20, planId: 'plan_50'  },
    100: { priceId: process.env.STRIPE_PRICE_ID_100 || '', baseCredits: 200, firstBonus: 50, planId: 'plan_100' },
};

const stripe = new Stripe(STRIPE_SECRET_KEY);

/**
 * POST /api/payment/create
 * 创建充值订单
 */
export const createPayment = async (ctx) => {
    try {
        const { amount } = ctx.request.body || {};
        const userId = ctx.state.user?.id;
        const userEmail = ctx.state.user?.email;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        const plan = PLAN_CONFIG[amount];
        if (!amount || !plan || !plan.priceId) {
            ctx.status = 400;
            ctx.body = { success: false, message: `Invalid plan: $${amount}` };
            return;
        }

        const orderId = `order_${Date.now()}_${userId}`;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price: plan.priceId, quantity: 1 }],
            mode: 'payment',
            customer_email: userEmail,
            metadata: {
                user_id: String(userId),
                order_id: orderId,
                credits: String(plan.baseCredits),
            },
            success_url: `${STRIPE_SUCCESS_URL}?order_id=${orderId}`,
            cancel_url: STRIPE_CANCEL_URL,
        });

        console.log('[Payment] Created Stripe checkout session:', session.id, 'URL:', session.url);

        const db = await getDb();
        const now = Date.now();
        await db.run(
            `INSERT INTO payments (user_id, order_id, amount, credits, status, created_at, updated_at, create_snapshot)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, orderId, amount, plan.baseCredits, 'pending', now, now, JSON.stringify({ sessionId: session.id })]
        );

        ctx.body = {
            success: true,
            data: {
                orderId,
                checkoutUrl: session.url,
                amount,
                credits: plan.baseCredits,
            }
        };
    } catch (err) {
        console.error('[Payment] Create error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * POST /api/payment/webhook
 * Stripe Webhook 回调
 *
 * 监听两种事件：
 * - checkout.session.completed：覆盖正式付款（paid）和 $0 测试（no_payment_required）
 * - payment_intent.succeeded：正式付款的补充保障，$0 不触发此事件
 * 两者均调用 fulfillOrder()，内置幂等保护防止重复发积分。
 */
export const webhookHandler = async (ctx) => {
    try {
        const signature = ctx.headers['stripe-signature'];
        const rawBody = ctx.request.rawBody || JSON.stringify(ctx.request.body);

        // 验证 Stripe webhook 签名
        let event;
        if (!STRIPE_WEBHOOK_SECRET) {
            console.warn('[Payment] STRIPE_WEBHOOK_SECRET 未配置，跳过签名验证（生产环境不安全！）');
            event = JSON.parse(ctx.request.rawBody.toString('utf8'));
        } else {
            try {
                event = stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET);
            } catch (err) {
                console.error('[Payment] Stripe webhook 签名验证失败:', err.message);
                ctx.status = 401;
                ctx.body = { success: false, message: 'Invalid signature' };
                return;
            }
        }

        console.log('===stripe event===', event.type, event.id);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const { payment_status, metadata = {}, id: sessionId } = session;

            if (payment_status === 'paid') {
                // paid = 正式付款
                // no_payment_required = $0 测试订单（已注释，不再发放积分）
                await fulfillOrder(metadata, event, `session:${sessionId}`);
            } else if (payment_status === 'no_payment_required') {
                // 测试免费支付：不再自动发积分（已注释逻辑）
                console.log(`[Payment] session ${sessionId} payment_status=no_payment_required，已跳过发积分`);
            } else {
                // unpaid = 异步支付（银行转账等），等 payment_intent.succeeded
                console.log(`[Payment] session ${sessionId} payment_status=${payment_status}，等待后续事件`);
            }

        } else if (event.type === 'payment_intent.succeeded') {
            // 正式付款的补充保障（$0 订单不会触发此事件）
            const pi = event.data.object;
            await fulfillOrder(pi.metadata || {}, event, `paymentIntent:${pi.id}`);

        } else {
            console.log(`[Payment] 未处理的事件类型: ${event.type}`);
        }

        ctx.body = { success: true };
    } catch (err) {
        console.error('[Payment] Webhook error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * 发放积分（checkout.session.completed 和 payment_intent.succeeded 共用）
 * 内置幂等保护：同一订单已 completed 则跳过，防止重复发积分
 */
async function fulfillOrder(metadata, event, eventRef) {
    const orderId = metadata.order_id;
    if (!orderId) {
        console.error(`[Payment] [${eventRef}] metadata 中没有 order_id`);
        return;
    }

    const db = await getDb();
    const payment = await db.get('SELECT * FROM payments WHERE order_id = ?', [orderId]);

    if (!payment) {
        console.warn(`[Payment] [${eventRef}] 订单不存在:`, orderId);
        return;
    }

    if (payment.status === 'completed') {
        console.log(`[Payment] [${eventRef}] 订单已处理过，跳过:`, orderId);
        return;
    }

    const now = Date.now();
    await db.run(
        `UPDATE payments SET status = ?, lemonsqueezy_data = ?, updated_at = ? WHERE order_id = ?`,
        ['completed', JSON.stringify(event), now, orderId]
    );

    // 发放基础积分
    await CreditsService.addCredits(
        payment.user_id,
        payment.credits,
        orderId,
        `充值 $${payment.amount}`
    );

    // 首次购买该档位：额外发放奖励积分
    const plan = PLAN_CONFIG[payment.amount];
    if (plan && plan.firstBonus > 0) {
        const planId = plan.planId;
        const existing = await db.get(
            'SELECT 1 FROM purchase_plan_firsts WHERE user_id = ? AND plan_id = ?',
            [payment.user_id, planId]
        );
        if (!existing) {
            await db.run(
                'INSERT INTO purchase_plan_firsts (user_id, plan_id, created_at) VALUES (?, ?, ?)',
                [payment.user_id, planId, now]
            );
            await CreditsService.addCredits(
                payment.user_id,
                plan.firstBonus,
                orderId,
                `首次购买 $${payment.amount} 套餐奖励`
            );
            console.log(`[Payment] [${eventRef}] 用户 ${payment.user_id} 首次购买 ${planId}，额外赠送 ${plan.firstBonus} 积分`);
        }
    }

    // 三级分佣
    distributeRechargeCommission(payment.user_id, payment.credits, orderId).catch((err) => {
        console.error('[Payment] 分佣失败', err);
    });

    console.log(`[Payment] [${eventRef}] 订单 ${orderId} 处理成功，用户 ${payment.user_id} 获得 ${payment.credits} 积分`);
}

/**
 * GET /api/payment/history
 * 获取充值记录
 */
export const getPaymentHistory = async (ctx) => {
    try {
        const userId = ctx.state.user?.id;

        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        const db = await getDb();
        const payments = await db.all(
            `SELECT id, order_id, amount, credits, status, created_at
             FROM payments
             WHERE user_id = ?
             ORDER BY created_at DESC
             LIMIT 50`,
            [userId]
        );

        ctx.body = {
            success: true,
            data: payments
        };
    } catch (err) {
        console.error('[Payment] Get history error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};

/**
 * GET /api/credits/balance
 * 获取当前积分余额
 */
export const getCreditsBalance = async (ctx) => {
    try {
        const userId = ctx.state.user?.id;

        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        const credits = await CreditsService.getUserCredits(userId);

        ctx.body = {
            success: true,
            data: { credits }
        };
    } catch (err) {
        console.error('[Credits] Get balance error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};

/**
 * GET /api/payment/plan-status
 * 返回用户已首次购买过的套餐 planId 列表，用于前端判断是否还能享受首购奖励
 */
export const getPlanPurchaseStatus = async (ctx) => {
    try {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        const db = await getDb();
        const rows = await db.all(
            'SELECT plan_id FROM purchase_plan_firsts WHERE user_id = ?',
            [userId]
        );

        ctx.body = {
            success: true,
            data: { purchasedPlans: rows.map(r => r.plan_id) },
        };
    } catch (err) {
        console.error('[Payment] Get plan status error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * GET /api/credits/transactions
 * 获取积分交易记录
 */
export const getCreditsTransactions = async (ctx) => {
    try {
        const userId = ctx.state.user?.id;

        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        const transactions = await CreditsService.getTransactionHistory(userId);

        ctx.body = {
            success: true,
            data: transactions
        };
    } catch (err) {
        console.error('[Credits] Get transactions error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};
