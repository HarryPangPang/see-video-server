import { getDb } from '../db/index.js';
import { CreditsService } from '../services/CreditsService.js';
import crypto from 'crypto';

// LemonSqueezy 配置（需要在环境变量中设置）
const LEMONSQUEEZY_API_KEY = process.env.LEMONSQUEEZY_API_KEY || '';
const LEMONSQUEEZY_STORE_ID = process.env.LEMONSQUEEZY_STORE_ID || '';
const LEMONSQUEEZY_WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';

/**
 * POST /api/payment/create
 * 创建充值订单
 */
export const createPayment = async (ctx) => {
    try {
        const { amount, credits } = ctx.request.body || {};
        const userId = ctx.state.user?.id;

        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        if (!amount || !credits || amount <= 0 || credits <= 0) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: 'Invalid amount or credits'
            };
            return;
        }

        // 创建支付订单（使用 LemonSqueezy API）
        const orderId = `order_${Date.now()}_${userId}`;
        const checkoutUrl = await createLemonSqueezyCheckout({
            userId,
            orderId,
            amount,
            credits
        });

        // 保存订单记录
        const db = await getDb();
        const now = Date.now();
        await db.run(
            `INSERT INTO payments (user_id, order_id, amount, credits, status, created_at, updated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [userId, orderId, amount, credits, 'pending', now, now]
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
 * LemonSqueezy Webhook 回调
 */
export const webhookHandler = async (ctx) => {
    try {
        const signature = ctx.headers['x-signature'];
        const rawBody = ctx.request.rawBody || JSON.stringify(ctx.request.body);

        // 验证 webhook 签名
        if (!verifyWebhookSignature(rawBody, signature)) {
            console.error('[Payment] Invalid webhook signature');
            ctx.status = 401;
            ctx.body = { success: false, message: 'Invalid signature' };
            return;
        }

        const event = ctx.request.body;
        const { meta, data } = event;

        console.log('[Payment] Webhook event:', meta?.event_name);

        // 处理订单成功事件
        if (meta?.event_name === 'order_created' && data?.attributes?.status === 'paid') {
            const orderId = data.attributes.first_order_item?.order_id || data.id;
            const customData = JSON.parse(data.attributes.custom_data || '{}');

            // 查找订单
            const db = await getDb();
            const payment = await db.get(
                'SELECT * FROM payments WHERE order_id = ?',
                [orderId]
            );

            if (!payment) {
                console.warn('[Payment] Order not found:', orderId);
                ctx.body = { success: true };
                return;
            }

            if (payment.status === 'completed') {
                console.log('[Payment] Order already processed:', orderId);
                ctx.body = { success: true };
                return;
            }

            // 更新订单状态
            const now = Date.now();
            await db.run(
                `UPDATE payments SET status = ?, lemonsqueezy_data = ?, updated_at = ? WHERE order_id = ?`,
                ['completed', JSON.stringify(data), now, orderId]
            );

            // 增加用户积分
            await CreditsService.addCredits(
                payment.user_id,
                payment.credits,
                orderId,
                `充值 ${payment.amount} 元`
            );

            console.log(`[Payment] 订单 ${orderId} 处理成功，用户 ${payment.user_id} 获得 ${payment.credits} 积分`);
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

// ========== 辅助函数 ==========

/**
 * 创建 LemonSqueezy 支付链接
 */
async function createLemonSqueezyCheckout({ userId, orderId, amount, credits }) {
    // TODO: 实际调用 LemonSqueezy API
    // 这里是示例代码，需要根据 LemonSqueezy 文档实现

    const checkoutData = {
        data: {
            type: 'checkouts',
            attributes: {
                custom_price: amount * 100, // 转换为分
                product_options: {
                    name: `${credits} 积分`,
                    description: `购买 ${credits} 个视频生成积分`,
                },
                checkout_data: {
                    custom: {
                        user_id: userId,
                        order_id: orderId
                    }
                }
            },
            relationships: {
                store: {
                    data: {
                        type: 'stores',
                        id: LEMONSQUEEZY_STORE_ID
                    }
                }
            }
        }
    };

    // 示例：返回模拟的支付链接
    // 实际需要调用 LemonSqueezy API
    return `https://lemonsqueezy.com/checkout/${orderId}`;

    // 实际代码示例：
    // const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': `Bearer ${LEMONSQUEEZY_API_KEY}`,
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(checkoutData)
    // });
    // const result = await response.json();
    // return result.data.attributes.url;
}

/**
 * 验证 Webhook 签名
 */
function verifyWebhookSignature(payload, signature) {
    if (!LEMONSQUEEZY_WEBHOOK_SECRET) {
        console.warn('[Payment] Webhook secret not configured, skipping verification');
        return true; // 开发环境可以跳过验证
    }

    const hmac = crypto.createHmac('sha256', LEMONSQUEEZY_WEBHOOK_SECRET);
    const digest = hmac.update(payload).digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(digest)
    );
}
