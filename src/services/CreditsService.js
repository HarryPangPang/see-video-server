import { getDb } from '../db/index.js';

/**
 * 积分服务类
 */
export class CreditsService {
    /**
     * 获取用户当前积分
     */
    static async getUserCredits(userId) {
        const db = await getDb();
        const user = await db.get('SELECT credits FROM users WHERE id = ?', [userId]);
        return user?.credits || 0;
    }

    /**
     * 增加用户积分（充值）
     * @param {number} userId - 用户 ID
     * @param {number} amount - 积分数量
     * @param {string} relatedId - 关联的支付 ID
     */
    static async addCredits(userId, amount, relatedId, description = '充值') {
        const db = await getDb();
        const now = Date.now();

        await db.run('BEGIN TRANSACTION');

        try {
            // 更新用户积分
            await db.run(
                'UPDATE users SET credits = credits + ?, updated_at = ? WHERE id = ?',
                [amount, now, userId]
            );

            // 记录交易
            await db.run(
                `INSERT INTO credits_transactions (user_id, amount, type, related_id, description, created_at)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [userId, amount, 'purchase', relatedId, description, now]
            );

            await db.run('COMMIT');

            console.log(`[Credits] 用户 ${userId} 增加 ${amount} 积分`);
            return await this.getUserCredits(userId);
        } catch (error) {
            await db.run('ROLLBACK');
            throw error;
        }
    }

    /**
     * 扣除用户积分（消费）
     * @param {number} userId - 用户 ID
     * @param {number} amount - 积分数量
     * @param {string} relatedId - 关联的生成 ID
     */
    static async deductCredits(userId, amount, relatedId, description = '生成视频') {
        const db = await getDb();
        const now = Date.now();

        // 检查余额
        const currentCredits = await this.getUserCredits(userId);
        if (currentCredits < amount) {
            throw new Error('积分不足');
        }

        await db.run('BEGIN TRANSACTION');

        try {
            // 扣除积分
            await db.run(
                'UPDATE users SET credits = credits - ?, updated_at = ? WHERE id = ?',
                [amount, now, userId]
            );

            // 记录交易
            await db.run(
                `INSERT INTO credits_transactions (user_id, amount, type, related_id, description, created_at)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [userId, -amount, 'consume', relatedId, description, now]
            );

            await db.run('COMMIT');

            console.log(`[Credits] 用户 ${userId} 扣除 ${amount} 积分`);
            return await this.getUserCredits(userId);
        } catch (error) {
            await db.run('ROLLBACK');
            throw error;
        }
    }

    /**
     * 退还用户积分（生成失败）
     * @param {number} userId - 用户 ID
     * @param {number} amount - 积分数量
     * @param {string} relatedId - 关联的生成 ID
     */
    static async refundCredits(userId, amount, relatedId, description = '生成失败退款') {
        const db = await getDb();
        const now = Date.now();

        // 幂等性检查：先查询是否已经退款
        const record = await db.get(
            'SELECT refunded FROM video_generations WHERE id = ?',
            [relatedId]
        );

        if (record?.refunded === 1) {
            console.log(`[Credits] 项目 ${relatedId} 已经退款过，跳过重复退款`);
            return await this.getUserCredits(userId);
        }

        await db.run('BEGIN TRANSACTION');

        try {
            // 退还积分
            await db.run(
                'UPDATE users SET credits = credits + ?, updated_at = ? WHERE id = ?',
                [amount, now, userId]
            );

            // 记录交易
            await db.run(
                `INSERT INTO credits_transactions (user_id, amount, type, related_id, description, created_at)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [userId, amount, 'refund', relatedId, description, now]
            );

            // 标记生成记录为已退款
            await db.run(
                'UPDATE video_generations SET refunded = 1 WHERE id = ?',
                [relatedId]
            );

            await db.run('COMMIT');

            console.log(`[Credits] 用户 ${userId} 退还 ${amount} 积分`);
            return await this.getUserCredits(userId);
        } catch (error) {
            await db.run('ROLLBACK');
            throw error;
        }
    }

    /**
     * 获取用户积分交易记录
     */
    static async getTransactionHistory(userId, limit = 50) {
        const db = await getDb();
        const transactions = await db.all(
            `SELECT * FROM credits_transactions
             WHERE user_id = ?
             ORDER BY created_at DESC
             LIMIT ?`,
            [userId, limit]
        );
        return transactions;
    }
}
