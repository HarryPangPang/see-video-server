import { getDb } from '../db/index.js';

/**
 * POST /api/users/:userId/follow
 * 关注某个用户
 */
export const followUser = async (ctx) => {
    const followerId = ctx.state.user.id;
    const followingId = parseInt(ctx.params.userId);

    if (followerId === followingId) {
        ctx.status = 400;
        ctx.body = { success: false, message: '不能关注自己' };
        return;
    }

    const db = await getDb();
    try {
        await db.run(
            'INSERT INTO user_follows (follower_id, following_id, created_at) VALUES (?, ?, ?)',
            [followerId, followingId, Date.now()]
        );
    } catch (err) {
        if (!err.message.includes('UNIQUE constraint failed')) throw err;
        // 已关注，忽略
    }

    const row = await db.get('SELECT COUNT(*) AS cnt FROM user_follows WHERE following_id = ?', [followingId]);
    ctx.body = { success: true, data: { is_following: true, follower_count: row.cnt } };
};

/**
 * DELETE /api/users/:userId/follow
 * 取消关注
 */
export const unfollowUser = async (ctx) => {
    const followerId = ctx.state.user.id;
    const followingId = parseInt(ctx.params.userId);

    const db = await getDb();
    await db.run(
        'DELETE FROM user_follows WHERE follower_id = ? AND following_id = ?',
        [followerId, followingId]
    );

    const row = await db.get('SELECT COUNT(*) AS cnt FROM user_follows WHERE following_id = ?', [followingId]);
    ctx.body = { success: true, data: { is_following: false, follower_count: row.cnt } };
};

/**
 * GET /api/users/following
 * 我关注的用户列表
 */
export const getFollowing = async (ctx) => {
    const userId = ctx.state.user.id;
    const db = await getDb();
    const rows = await db.all(`
        SELECT u.id, COALESCE(u.username, u.email) AS name, u.email, uf.created_at AS followed_at
        FROM user_follows uf
        JOIN users u ON u.id = uf.following_id
        WHERE uf.follower_id = ?
        ORDER BY uf.created_at DESC
    `, [userId]);
    ctx.body = { success: true, data: rows };
};

/**
 * GET /api/users/me/stats
 * 我的主页统计（粉丝数、关注数、获赞数）
 */
export const getMyStats = async (ctx) => {
    const userId = ctx.state.user.id;
    const db = await getDb();
    const [followers, following, likes] = await Promise.all([
        db.get('SELECT COUNT(*) AS cnt FROM user_follows WHERE following_id = ?', [userId]),
        db.get('SELECT COUNT(*) AS cnt FROM user_follows WHERE follower_id = ?', [userId]),
        db.get('SELECT COUNT(*) AS cnt FROM work_likes wl JOIN works w ON w.id = wl.work_id WHERE w.user_id = ?', [userId]),
    ]);
    ctx.body = { success: true, data: { followers: followers.cnt, following: following.cnt, likes_received: likes.cnt } };
};

/**
 * GET /api/users/:userId/profile
 * 某用户的公开主页信息（含关注状态）
 */
export const getUserProfile = async (ctx) => {
    const targetId = parseInt(ctx.params.userId);
    const currentUserId = ctx.state.user?.id ?? null;
    const db = await getDb();

    const u = await db.get('SELECT id, COALESCE(username, email) AS name FROM users WHERE id = ?', [targetId]);
    if (!u) { ctx.status = 404; ctx.body = { success: false, message: 'User not found' }; return; }

    const [followers, following, likes] = await Promise.all([
        db.get('SELECT COUNT(*) AS cnt FROM user_follows WHERE following_id = ?', [targetId]),
        db.get('SELECT COUNT(*) AS cnt FROM user_follows WHERE follower_id = ?', [targetId]),
        db.get('SELECT COUNT(*) AS cnt FROM work_likes wl JOIN works w ON w.id = wl.work_id WHERE w.user_id = ?', [targetId]),
    ]);

    let is_following = false;
    if (currentUserId && currentUserId !== targetId) {
        const row = await db.get('SELECT 1 FROM user_follows WHERE follower_id = ? AND following_id = ?', [currentUserId, targetId]);
        is_following = !!row;
    }

    ctx.body = { success: true, data: { id: u.id, name: u.name, followers: followers.cnt, following: following.cnt, likes_received: likes.cnt, is_following } };
};

/**
 * GET /api/users/:userId/followers
 * 某用户的粉丝列表
 */
export const getUserFollowers = async (ctx) => {
    const targetId = parseInt(ctx.params.userId);
    const db = await getDb();
    const rows = await db.all(`
        SELECT u.id, COALESCE(u.username, u.email) AS name
        FROM user_follows uf
        JOIN users u ON u.id = uf.follower_id
        WHERE uf.following_id = ?
        ORDER BY uf.created_at DESC
    `, [targetId]);
    ctx.body = { success: true, data: rows };
};

/**
 * GET /api/users/:userId/following
 * 某用户关注的人列表
 */
export const getUserFollowing = async (ctx) => {
    const targetId = parseInt(ctx.params.userId);
    const db = await getDb();
    const rows = await db.all(`
        SELECT u.id, COALESCE(u.username, u.email) AS name
        FROM user_follows uf
        JOIN users u ON u.id = uf.following_id
        WHERE uf.follower_id = ?
        ORDER BY uf.created_at DESC
    `, [targetId]);
    ctx.body = { success: true, data: rows };
};
