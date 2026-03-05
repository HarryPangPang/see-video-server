import { getDb } from '../db/index.js';
import { CreditsService } from './CreditsService.js';

/** 一级/二级/三级分佣比例（0-1），仅对「下级充值」分佣 */
const COMMISSION_RATE_LEVEL1 = Number(process.env.REFERRAL_COMMISSION_LEVEL1) || 0.1;  // 10%
const COMMISSION_RATE_LEVEL2 = Number(process.env.REFERRAL_COMMISSION_LEVEL2) || 0.05; // 5%
const COMMISSION_RATE_LEVEL3 = Number(process.env.REFERRAL_COMMISSION_LEVEL3) || 0.02; // 2%

/**
 * 生成唯一邀请码（8 位字母数字）
 */
function generateInviteCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 去掉易混淆的 0,O,1,I
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

/**
 * 确保用户有邀请码；若没有则生成并写库
 */
export async function ensureInviteCode(userId) {
    const db = await getDb();
    const row = await db.get('SELECT invite_code FROM users WHERE id = ?', [userId]);
    if (row?.invite_code) return row.invite_code;
    let code;
    for (let attempt = 0; attempt < 20; attempt++) {
        code = generateInviteCode();
        try {
            await db.run('UPDATE users SET invite_code = ?, updated_at = ? WHERE id = ?', [code, Date.now(), userId]);
            return code;
        } catch (e) {
            if (!e.message?.includes('UNIQUE')) throw e;
        }
    }
    throw new Error('生成邀请码失败，请重试');
}

/**
 * 根据用户 ID 获取其上级链（一级、二级、三级），最多 3 个
 * @returns {Promise<Array<{ userId: number, level: number }>>}
 */
export async function getUplineChain(userId) {
    const db = await getDb();
    const chain = [];
    let currentId = userId;
    for (let level = 1; level <= 3; level++) {
        const row = await db.get('SELECT referred_by_id FROM users WHERE id = ?', [currentId]);
        if (!row?.referred_by_id) break;
        chain.push({ userId: row.referred_by_id, level });
        currentId = row.referred_by_id;
    }
    return chain;
}

/**
 * 对「用户充值」向其上三级上级发放分佣
 * @param {number} buyerUserId - 充值用户 ID
 * @param {number} creditsAmount - 本次充值获得的积分
 * @param {string} orderId - 订单 ID，用于记录
 */
export async function distributeRechargeCommission(buyerUserId, creditsAmount, orderId) {
    const chain = await getUplineChain(buyerUserId);
    if (chain.length === 0) {
        console.log(`[Referral] 用户 ${buyerUserId} 无上级，不发放分佣`);
        return;
    }

    const rates = [COMMISSION_RATE_LEVEL1, COMMISSION_RATE_LEVEL2, COMMISSION_RATE_LEVEL3];
    const db = await getDb();
    const now = Date.now();

    for (let i = 0; i < chain.length; i++) {
        const { userId: uplineId, level } = chain[i];
        const rate = rates[i] ?? 0;
        let commission = Math.floor(creditsAmount * rate);
        // 有比例且买家有充值时，至少发放 1 积分，避免小额充值（如 1 积分）分佣为 0
        if (rate > 0 && creditsAmount >= 1 && commission < 1) commission = 1;
        if (commission <= 0) continue;

        try {
            await db.run('BEGIN TRANSACTION');
            await db.run(
                'UPDATE users SET credits = credits + ?, updated_at = ? WHERE id = ?',
                [commission, now, uplineId]
            );
            await db.run(
                `INSERT INTO credits_transactions (user_id, amount, type, related_id, description, created_at)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    uplineId,
                    commission,
                    'referral_commission',
                    orderId,
                    `下级第${level}级充值分佣`,
                    now
                ]
            );
            await db.run('COMMIT');
            console.log(`[Referral] 用户 ${uplineId} 获得 ${commission} 积分（${level}级分佣），来自用户 ${buyerUserId} 充值订单 ${orderId}`);
        } catch (err) {
            await db.run('ROLLBACK');
            console.error(`[Referral] 分佣失败 upline=${uplineId} level=${level}`, err);
        }
    }
}

/**
 * 我的邀请概览：邀请码、链接、各级人数、累计分佣
 */
export async function getMyReferralStats(userId) {
    const db = await getDb();
    const code = await ensureInviteCode(userId);

    const levelCounts = await db.all(
        `WITH RECURSIVE downline AS (
            SELECT id, referred_by_id, 1 AS lvl FROM users WHERE referred_by_id = ?
            UNION ALL
            SELECT u.id, u.referred_by_id, d.lvl + 1
            FROM users u
            INNER JOIN downline d ON u.referred_by_id = d.id
            WHERE d.lvl < 3
        )
        SELECT lvl AS level, COUNT(*) AS count FROM downline GROUP BY lvl`
        ,
        [userId]
    );
    const byLevel = { 1: 0, 2: 0, 3: 0 };
    for (const row of levelCounts || []) {
        byLevel[row.level] = row.count;
    }

    const totalCommission = await db.get(
        `SELECT COALESCE(SUM(amount), 0) AS total FROM credits_transactions
         WHERE user_id = ? AND type = 'referral_commission'`,
        [userId]
    );

    return {
        inviteCode: code,
        level1Count: byLevel[1],
        level2Count: byLevel[2],
        level3Count: byLevel[3],
        totalCommissionEarned: totalCommission?.total ?? 0,
    };
}

/**
 * 分佣记录列表（分页）
 */
export async function getCommissionHistory(userId, limit = 20, offset = 0) {
    const db = await getDb();
    const rows = await db.all(
        `SELECT id, amount, related_id, description, created_at
         FROM credits_transactions
         WHERE user_id = ? AND type = 'referral_commission'
         ORDER BY created_at DESC LIMIT ? OFFSET ?`,
        [userId, limit, offset]
    );
    const total = await db.get(
        `SELECT COUNT(*) AS c FROM credits_transactions WHERE user_id = ? AND type = 'referral_commission'`,
        [userId]
    );
    return { list: rows, total: total?.c ?? 0 };
}

/**
 * 团队列表：只返回直接下级（一级），含简单信息
 */
export async function getTeamList(userId, level = 1, limit = 50, offset = 0) {
    const db = await getDb();
    if (level === 1) {
        const rows = await db.all(
            `SELECT u.id, u.username, u.avatar, u.created_at
             FROM users u
             WHERE u.referred_by_id = ?
             ORDER BY u.created_at DESC LIMIT ? OFFSET ?`,
            [userId, limit, offset]
        );
        const total = await db.get(
            'SELECT COUNT(*) AS c FROM users WHERE referred_by_id = ?',
            [userId]
        );
        return { list: rows, total: total?.c ?? 0 };
    }
    // level 2 or 3: 需要递归查「我的第 N 级下级」
    const depth = level;
    const rows = await db.all(
        `WITH RECURSIVE downline AS (
            SELECT id, referred_by_id, username, avatar, created_at, 1 AS lvl
            FROM users WHERE referred_by_id = ?
            UNION ALL
            SELECT u.id, u.referred_by_id, u.username, u.avatar, u.created_at, d.lvl + 1
            FROM users u INNER JOIN downline d ON u.referred_by_id = d.id
            WHERE d.lvl < 3
        )
        SELECT id, username, avatar, created_at FROM downline WHERE lvl = ? ORDER BY created_at DESC LIMIT ? OFFSET ?`,
        [userId, depth, limit, offset]
    );
    const total = await db.get(
        `WITH RECURSIVE downline AS (
            SELECT id, referred_by_id, 1 AS lvl FROM users WHERE referred_by_id = ?
            UNION ALL
            SELECT u.id, u.referred_by_id, d.lvl + 1
            FROM users u INNER JOIN downline d ON u.referred_by_id = d.id
            WHERE d.lvl < 3
        )
        SELECT COUNT(*) AS c FROM downline WHERE lvl = ?`,
        [userId, depth]
    );
    return { list: rows, total: total?.c ?? 0 };
}
