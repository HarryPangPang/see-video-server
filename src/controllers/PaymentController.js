import { getDb } from '../db/index.js';
import { CreditsService } from '../services/CreditsService.js';
import crypto from 'crypto';
import { lemonSqueezySetup, createCheckout,getAuthenticatedUser } from '@lemonsqueezy/lemonsqueezy.js';

// LemonSqueezy 配置（需要在环境变量中设置）
const LEMONSQUEEZY_API_KEY = process.env.LEMONSQUEEZY_API_KEY || '';
const LEMONSQUEEZY_STORE_ID = process.env.LEMONSQUEEZY_STORE_ID || '';
const LEMONSQUEEZY_WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';

// Variant ID 映射表（根据 credits 数量映射到对应的 Variant ID）
const VARIANT_ID_MAP = {
    '-1': process.env.LEMONSQUEEZY_VARIANT_ID_TEST || '',
    1: process.env.LEMONSQUEEZY_VARIANT_ID_1 || '',
    10: process.env.LEMONSQUEEZY_VARIANT_ID_10 || '',
    30: process.env.LEMONSQUEEZY_VARIANT_ID_30 || '',
    50: process.env.LEMONSQUEEZY_VARIANT_ID_50 || '',

};

// 价格映射表：1 USD = 1 Credit（测试除外）
const PRICE_MAP = {
    '-1': '-1',    // 测试用：免费
    1: 1,      // 1 积分 = 1 美元
    10: 10,    // 10 积分 = 10 美元
    30: 30,    // 30 积分 = 30 美元
    50: 50,    // 50 积分 = 50 美元
};
// 初始化 LemonSqueezy SDK
lemonSqueezySetup({
    apiKey: LEMONSQUEEZY_API_KEY,
    onError: (error) => console.error("LemonSqueezy Error:", error)
});

getAuthenticatedUser().then(({data, error}) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(data);
    }
})
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
        if (!amount || !VARIANT_ID_MAP[amount]) {
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

        // 创建支付订单（使用 LemonSqueezy API）
        const orderId = `order_${Date.now()}_${userId}`;
        const checkoutRes = await createCheckout(
            LEMONSQUEEZY_STORE_ID,
            VARIANT_ID_MAP[amount],
            {
                checkoutData: {
                    email: userEmail,
                    custom: {
                        user_id: String(userId),
                        order_id: orderId,
                        credits: String(amount) === '-1' ? '1' : String(credits) //测试-1积分实际为1积分，避免金额验证问题
                    }
                },
                productOptions: {
                    name: `${credits} point`,
                    description: `${amount} purchase ${credits} point`,
                }
            }
        )
        const checkoutUrl = checkoutRes.data?.data?.attributes?.url;
        console.log('[Payment] Created checkout URL:', checkoutRes);
        // 保存订单记录
        const db = await getDb();
        const now = Date.now();
        await db.run(
            `INSERT INTO payments (user_id, order_id, amount, credits, status, created_at, updated_at, create_snapshot)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, orderId, amount, credits, 'pending', now, now, JSON.stringify(checkoutRes)]
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
        console.log('===event===',JSON.stringify(event));

        console.log('[Payment] Webhook event:', meta?.event_name, 'Order ID:', data?.id);

        // 处理订单创建事件
        if (meta?.event_name === 'order_created') {
            const orderStatus = data?.attributes?.status;
            // 从 meta.custom_data 中获取我们自定义的数据（LemonSqueezy 将 custom 数据放在 meta 中）
            const customData = meta?.custom_data || {};
            const orderId = customData.order_id;
            const credits = parseInt(customData.credits || '0', 10);

            console.log('[Payment] Processing order:', {
                orderId,
                credits,
                status: orderStatus,
                lemonSqueezyOrderId: data?.id
            });

            if (!orderId) {
                console.error('[Payment] No order_id in custom data');
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


            // 只有当订单状态为 paid 时才处理
            if (orderStatus === 'paid') {
                // 更新订单状态
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
                console.log(`[Payment] ⏳ 订单 ${orderId} 状态为 ${orderStatus}，等待支付完成`);
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

// ========== 辅助函数 ==========

/**
 * 创建 LemonSqueezy 支付链接
 */
async function createLemonSqueezyCheckout({ userId, orderId, amount, credits }) {
    // 根据 credits 数量获取对应的 Variant ID
    const variantId = VARIANT_ID_MAP[credits];

    if (!variantId) {
        throw new Error(`不支持的充值金额：${credits} 积分。可选：1, 30, 50`);
    }

    if (!LEMONSQUEEZY_STORE_ID) {
        throw new Error('LemonSqueezy Store ID 未配置');
    }

    try {
        // 使用 LemonSqueezy SDK 创建 Checkout
        const checkout = await createCheckout(
            LEMONSQUEEZY_STORE_ID,
            variantId,
            {
                checkoutData: {
                    custom: {
                        user_id: String(userId),
                        order_id: orderId,
                        credits: String(credits)
                    }
                },
                productOptions: {
                    name: `${credits} 积分`,
                    description: `购买 ${credits} 个视频生成积分`,
                }
            }
        );

        // 检查响应
        if (checkout.error) {
            console.error('[Payment] LemonSqueezy API error:', checkout.error);
            throw new Error(checkout.error.message || 'Failed to create checkout');
        }

        if (!checkout.data?.attributes?.url) {
            console.error('[Payment] Invalid checkout response:', checkout);
            throw new Error('无法获取支付链接');
        }

        console.log(`[Payment] Created checkout for order ${orderId}, URL: ${checkout.data.attributes.url}`);
        return checkout.data.attributes.url;

    } catch (error) {
        console.error('[Payment] Failed to create LemonSqueezy checkout:', error);
        throw new Error(`创建支付链接失败: ${error.message}`);
    }
}

/**
 * 验证 Webhook 签名
 * LemonSqueezy 使用 HMAC-SHA256 签名，签名在 X-Signature header 中
 */
function verifyWebhookSignature(payload, signature) {
    if (!LEMONSQUEEZY_WEBHOOK_SECRET) {
        console.warn('[Payment] ⚠️  Webhook secret not configured, skipping verification');
        console.warn('[Payment] ⚠️  This is UNSAFE for production! Please configure LEMONSQUEEZY_WEBHOOK_SECRET');
        return true; // 开发环境可以跳过验证
    }

    if (!signature) {
        console.error('[Payment] No signature provided in X-Signature header');
        return false;
    }

    try {
        const hmac = crypto.createHmac('sha256', LEMONSQUEEZY_WEBHOOK_SECRET);
        const digest = hmac.update(payload).digest('hex');

        // LemonSqueezy 的签名格式通常是 hex 编码的
        const isValid = crypto.timingSafeEqual(
            Buffer.from(signature, 'hex'),
            Buffer.from(digest, 'hex')
        );

        if (!isValid) {
            console.error('[Payment] Signature verification failed');
            console.error('[Payment] Expected:', digest);
            console.error('[Payment] Received:', signature);
        }

        return isValid;
    } catch (error) {
        console.error('[Payment] Error verifying webhook signature:', error);
        return false;
    }
}
