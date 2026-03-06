import * as NotificationModel from '../models/NotificationModel.js';

/**
 * GET /api/notifications?type=like|comment|follow&limit=30&offset=0
 * List notifications for current user
 */
export async function getList(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    const type = ctx.query.type && NotificationModel.NOTIFICATION_TYPES.includes(ctx.query.type)
        ? ctx.query.type
        : null;
    const limit = Math.min(50, Math.max(1, parseInt(ctx.query.limit, 10) || 30));
    const offset = Math.max(0, parseInt(ctx.query.offset, 10) || 0);
    try {
        const result = await NotificationModel.getList(userId, type, limit, offset);
        ctx.body = { success: true, data: result };
    } catch (err) {
        console.error('[Notification] getList error', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
}

/**
 * GET /api/notifications/unread-count?type=like|comment|follow
 * Unread count (for badge)
 */
export async function getUnreadCount(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    const type = ctx.query.type && NotificationModel.NOTIFICATION_TYPES.includes(ctx.query.type)
        ? ctx.query.type
        : null;
    try {
        const count = await NotificationModel.getUnreadCount(userId, type);
        ctx.body = { success: true, data: { count } };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
}

/**
 * PATCH /api/notifications/:id/read
 * Mark one as read
 */
export async function markRead(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    const id = parseInt(ctx.params.id, 10);
    if (!id) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Invalid id' };
        return;
    }
    try {
        await NotificationModel.markRead(id, userId);
        ctx.body = { success: true };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
}

/**
 * PATCH /api/notifications/read-all?type=like|comment|follow
 * Mark all as read (optional type filter)
 */
export async function markAllRead(ctx) {
    const userId = ctx.state.user?.id;
    if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Unauthorized' };
        return;
    }
    const type = ctx.query.type && NotificationModel.NOTIFICATION_TYPES.includes(ctx.query.type)
        ? ctx.query.type
        : null;
    try {
        await NotificationModel.markAllRead(userId, type);
        ctx.body = { success: true };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
}
