import { getDb } from '../db/index.js';

/** Notification types: like, comment, follow */
export const NOTIFICATION_TYPES = ['like', 'comment', 'follow'];

/**
 * Create a notification (recipient gets notified about actor's action)
 * @param {number} userId - recipient user id
 * @param {string} type - 'like' | 'comment' | 'follow'
 * @param {number} actorId - user id who performed the action
 * @param {string} [relatedId] - work_id for like/comment
 * @param {string} [extra] - e.g. comment content snippet
 */
export async function createNotification(userId, type, actorId, relatedId = null, extra = null) {
    if (!NOTIFICATION_TYPES.includes(type)) return;
    if (userId === actorId) return; // don't notify self
    const db = await getDb();
    const now = Date.now();
    await db.run(
        `INSERT INTO notifications (user_id, type, actor_id, related_id, extra, read, created_at)
         VALUES (?, ?, ?, ?, ?, 0, ?)`,
        [userId, type, actorId, relatedId, extra, now]
    );
}

/**
 * List notifications for a user, with optional type filter
 */
export async function getList(userId, type = null, limit = 30, offset = 0) {
    const db = await getDb();
    let sql = `
        SELECT n.id, n.type, n.actor_id, n.related_id, n.extra, n.read, n.created_at,
               u.username AS actor_username, u.avatar AS actor_avatar,
               w.title AS work_title
        FROM notifications n
        JOIN users u ON u.id = n.actor_id
        LEFT JOIN works w ON w.id = n.related_id AND n.related_id IS NOT NULL
        WHERE n.user_id = ?
    `;
    const params = [userId];
    if (type && NOTIFICATION_TYPES.includes(type)) {
        sql += ' AND n.type = ?';
        params.push(type);
    }
    sql += ' ORDER BY n.created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const list = await db.all(sql, params);

    const totalSql = type && NOTIFICATION_TYPES.includes(type)
        ? 'SELECT COUNT(*) AS c FROM notifications WHERE user_id = ? AND type = ?'
        : 'SELECT COUNT(*) AS c FROM notifications WHERE user_id = ?';
    const totalParams = type ? [userId, type] : [userId];
    const totalRow = await db.get(totalSql, totalParams);

    return { list, total: totalRow?.c ?? 0 };
}

/**
 * Mark a notification as read
 */
export async function markRead(notificationId, userId) {
    const db = await getDb();
    await db.run('UPDATE notifications SET read = 1 WHERE id = ? AND user_id = ?', [notificationId, userId]);
}

/**
 * Mark all notifications as read for a user (optionally by type)
 */
export async function markAllRead(userId, type = null) {
    const db = await getDb();
    if (type && NOTIFICATION_TYPES.includes(type)) {
        await db.run('UPDATE notifications SET read = 1 WHERE user_id = ? AND type = ?', [userId, type]);
    } else {
        await db.run('UPDATE notifications SET read = 1 WHERE user_id = ?', [userId]);
    }
}

/**
 * Get unread count for a user (optionally by type)
 */
export async function getUnreadCount(userId, type = null) {
    const db = await getDb();
    let sql = 'SELECT COUNT(*) AS c FROM notifications WHERE user_id = ? AND read = 0';
    const params = [userId];
    if (type && NOTIFICATION_TYPES.includes(type)) {
        sql += ' AND type = ?';
        params.push(type);
    }
    const row = await db.get(sql, params);
    return row?.c ?? 0;
}
