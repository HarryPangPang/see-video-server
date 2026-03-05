import * as ReferralService from '../services/ReferralService.js';

/**
 * GET /api/referral/me
 * 我的邀请信息：邀请码、邀请链接、各级人数、累计分佣
 */
export async function getMyReferral(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    try {
        const stats = await ReferralService.getMyReferralStats(userId);
        const baseUrl = process.env.WEB_BASE_URL || (ctx.request.origin || '').replace(/\/$/, '');
        const invitePath = baseUrl ? `${baseUrl}/register` : '/register';
        ctx.body = {
            success: true,
            data: {
                ...stats,
                inviteUrl: stats.inviteCode ? `${invitePath}?invite=${encodeURIComponent(stats.inviteCode)}` : null,
            },
        };
    } catch (err) {
        console.error('[Referral] getMyReferral error', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || '获取邀请信息失败' };
    }
}

/**
 * GET /api/referral/team?level=1&limit=20&offset=0
 * 团队列表，level 1/2/3
 */
export async function getTeam(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    const level = Math.min(3, Math.max(1, parseInt(ctx.query.level, 10) || 1));
    const limit = Math.min(50, Math.max(1, parseInt(ctx.query.limit, 10) || 20));
    const offset = Math.max(0, parseInt(ctx.query.offset, 10) || 0);
    try {
        const result = await ReferralService.getTeamList(userId, level, limit, offset);
        ctx.body = { success: true, data: result };
    } catch (err) {
        console.error('[Referral] getTeam error', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || '获取团队列表失败' };
    }
}

/**
 * GET /api/referral/commissions?limit=20&offset=0
 * 分佣记录
 */
export async function getCommissions(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    const limit = Math.min(50, Math.max(1, parseInt(ctx.query.limit, 10) || 20));
    const offset = Math.max(0, parseInt(ctx.query.offset, 10) || 0);
    try {
        const result = await ReferralService.getCommissionHistory(userId, limit, offset);
        ctx.body = { success: true, data: result };
    } catch (err) {
        console.error('[Referral] getCommissions error', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || '获取分佣记录失败' };
    }
}
