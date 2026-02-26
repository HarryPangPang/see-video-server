import { getDb } from '../db/index.js';
import { CreditsService } from '../services/CreditsService.js';
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
// ⚠️ 需要配置：Stripe Checkout 完成/取消后的跳转地址
const STRIPE_SUCCESS_URL = 'https://see.lightchaser.xyz/#/payment/success';
const STRIPE_CANCEL_URL ='https://see.lightchaser.xyz/#/payment/cancel';

// Stripe Price ID 映射表（根据 amount 映射到对应的 Price ID）
// ⚠️ 需要配置：在 Stripe Dashboard → Products 中为每个套餐创建价格，填入对应 price_xxx ID
const PRICE_ID_MAP = {
    '-1': process.env.STRIPE_PRICE_ID_TEST || '',   // 测试用（需创建 $0 的测试价格）
    1: process.env.STRIPE_PRICE_ID_1 || '',
    10: process.env.STRIPE_PRICE_ID_10 || '',
    30: process.env.STRIPE_PRICE_ID_30 || '',
    50: process.env.STRIPE_PRICE_ID_50 || '',
};

// 价格映射表：1 USD = 1 Credit（测试除外）
const PRICE_MAP = {
    '-1': '-1',    // 测试用：免费
    1: 1,
    10: 10,
    30: 30,
    50: 50,
};
console.log('STRIPE_SECRET_KEY', STRIPE_SECRET_KEY);    
const stripe = new Stripe(STRIPE_SECRET_KEY);
/**
 * POST /api/payment/create
 * 创建充值订单
 */
export const createPayment = async (ctx) => {
    try {
        const { amount, credits } = ctx.request.body || {};
        const userId = ctx.state.user?.id;
        const userEmail = ctx.state.user?.email;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        // 验证 credits 是否有效
        if (!amount || !PRICE_ID_MAP[amount]) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: `Invalid credits value`,
            };
            return;
        }

        // 验证金额是否匹配积分（1 USD = 1 Credit，test 除外）
        const expectedAmount = PRICE_MAP[credits];
        if (!expectedAmount || String(expectedAmount) !== String(amount)) {
            if (String(amount) === '-1' && String(expectedAmount) === '1') {
                // 测试用例，允许 -1 金额对应 1 积分
            } else {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: `Price mismatch: expected $${expectedAmount} for ${credits} credits, received $${amount}`,
            };
            return;
        }
        }

        // 检查金额是否匹配（允许小数点误差）
        // const amountDiff = Math.abs(parseFloat(amount) - expectedAmount);
        // if (amountDiff > 0.01) {
        //     ctx.status = 400;
        //     ctx.body = {
        //         success: false,
        //         message: `Amount mismatch: expected $${expectedAmount} for ${credits} credits, received $${amount}`,
        //         data: {
        //             expectedAmount,
        //             receivedAmount: amount,
        //             credits
        //         }
        //     };
        //     return;
        // }

        // 创建支付订单（使用 Stripe Checkout）
        const orderId = `order_${Date.now()}_${userId}`;
        const actualCredits = String(amount) === '-1' ? '1' : String(credits); // 测试-1积分实际为1积分

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: PRICE_ID_MAP[amount],
                quantity: 1,
            }],
            mode: 'payment',
            customer_email: userEmail,
            metadata: {
                user_id: String(userId),
                order_id: orderId,
                credits: actualCredits,
            },
            success_url: `${STRIPE_SUCCESS_URL}?order_id=${orderId}`,
            cancel_url: STRIPE_CANCEL_URL,
        });

        const checkoutUrl = session.url;
        console.log('[Payment] Created Stripe checkout session:', session.id, 'URL:', checkoutUrl);

        // 保存订单记录
        const db = await getDb();
        const now = Date.now();
        await db.run(
            `INSERT INTO payments (user_id, order_id, amount, credits, status, created_at, updated_at, create_snapshot)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, orderId, amount, credits, 'pending', now, now, JSON.stringify({ sessionId: session.id })]
        );

        ctx.body = {
            success: true,
            data: {
                orderId,
                checkoutUrl,
                amount,
                credits
            }
        };
    } catch (err) {
        console.error('[Payment] Create error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};

/**
 * POST /api/payment/webhook
 * Stripe Webhook 回调
 */
export const webhookHandler = async (ctx) => {
    try {
        console.log('===stripe webhook===');
        const signature = ctx.headers['stripe-signature'];
        const rawBody = ctx.request.rawBody || JSON.stringify(ctx.request.body);

        // 验证 Stripe webhook 签名
        let event;
        if (!STRIPE_WEBHOOK_SECRET) {
            console.warn('[Payment] ⚠️  STRIPE_WEBHOOK_SECRET 未配置，跳过签名验证（生产环境不安全！）');
            event = ctx.request.body;
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

        // 处理支付完成事件
        if (event.type === 'payment_intent.succeeded') {
            const session = event.data.object;
            const paymentStatus = session.payment_status;
            // 自定义数据存在 metadata 中
            const metadata = session.metadata || {};
            const orderId = metadata.order_id;
            const credits = parseInt(metadata.credits || '0', 10);

            console.log('[Payment] Processing checkout.session.completed:', {
                orderId,
                credits,
                paymentStatus,
                stripeSessionId: session.id,
            });

            if (!orderId) {
                console.error('[Payment] No order_id in session metadata');
                ctx.body = { success: true };
                return;
            }

            // 查找订单
            const db = await getDb();
            const payment = await db.get(
                'SELECT * FROM payments WHERE order_id = ?',
                [orderId]
            );

            if (!payment) {
                console.warn('[Payment] Order not found in database:', orderId);
                ctx.body = { success: true };
                return;
            }

            if (payment.status === 'completed') {
                console.log('[Payment] Order already processed:', orderId);
                ctx.body = { success: true };
                return;
            }

            // 只有当支付状态为 paid 时才处理
            if (paymentStatus === 'paid') {
                const now = Date.now();
                await db.run(
                    `UPDATE payments SET status = ?, lemonsqueezy_data = ?, updated_at = ? WHERE order_id = ?`,
                    ['completed', JSON.stringify(event), now, orderId]
                );

                // 增加用户积分
                await CreditsService.addCredits(
                    payment.user_id,
                    payment.credits,
                    orderId,
                    `充值 ${payment.amount} 元`
                );

                console.log(`[Payment] ✅ 订单 ${orderId} 处理成功，用户 ${payment.user_id} 获得 ${payment.credits} 积分`);
            } else {
                console.log(`[Payment] ⏳ 订单 ${orderId} 支付状态为 ${paymentStatus}，等待支付完成`);
            }
        }

        ctx.body = { success: true };
    } catch (err) {
        console.error('[Payment] Webhook error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};

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

