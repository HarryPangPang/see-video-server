import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

// 将 FS 绝对路径转为可访问的 /assets/... URL 路径
const toAssetUrl = (fsPath) => {
    if (!fsPath) return null;
    return `/assets/${path.basename(path.dirname(fsPath))}/${path.basename(fsPath)}`;
};

export class WorksModel {
    /**
     * 发布作品（从 video_generation 发布）
     */
    static async create({ userId, title, prompt, videoUrl, coverUrl, source = 'jimeng', videoGenerationId = null }) {
        const db = await getDb();
        const id = uuidv4();
        const now = Date.now();
        await db.run(
            `INSERT INTO works (id, user_id, title, prompt, video_url, cover_url, source, video_generation_id, created_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, userId, title, prompt ?? null, videoUrl, coverUrl ?? null, source, videoGenerationId, now]
        );
        return { id, user_id: userId, title, prompt, video_url: videoUrl, cover_url: coverUrl, source, created_at: now };
    }

    /**
     * 获取作品列表（带作者名 + 点赞数，支持排序与分页）
     * @param {object} options
     * @param {'newest'|'likes'|'foryou'} options.sort
     * @param {number} options.limit
     * @param {number} options.offset
     * @param {number|null} options.currentUserId - 当前登录用户 ID，用于包含自己的私密作品
     * @param {boolean} options.mine - 只返回当前用户自己的作品（包括私密）
     * @param {string|null} options.source - 按来源过滤（'jimeng' | 'upload'）
     */
    static async getList({ sort = 'newest', limit = 20, offset = 0, currentUserId = null, mine = false, source = null, isPrivate = null } = {}) {
        const db = await getDb();

        const conditions = [];
        const condArgs = [];

        if (mine && currentUserId) {
            // 只显示自己的作品，包括私密
            conditions.push('w.user_id = ?');
            condArgs.push(currentUserId);
            if (isPrivate === true) conditions.push('w.is_private = 1');
            else if (isPrivate === false) conditions.push('w.is_private = 0');
        } else {
            // 公开广场：私密作品对所有人隐藏（包括作者自己）
            conditions.push('w.is_private = 0');
        }

        if (source) {
            conditions.push('w.source = ?');
            condArgs.push(source);
        }

        const whereClause = `WHERE ${conditions.join(' AND ')}`;

        const totalRow = await db.get(
            `SELECT COUNT(*) AS cnt FROM works w ${whereClause}`,
            condArgs
        );
        const total = totalRow?.cnt ?? 0;

        let rows;

        if (sort === 'foryou') {
            // 热门候选池 + 随机打散
            // 数据量充足（>= 40）时，先取热度 top 60 作为候选池，再随机取 limit 条
            // 数据量不足时，直接对全部数据随机，保证展示不为空
            const POOL_THRESHOLD = 40;
            const POOL_SIZE = 60;
            const innerLimit = total >= POOL_THRESHOLD ? POOL_SIZE : Math.max(total, 1);

            const scoreExpr = `(COUNT(wl.user_id) +
                CASE
                    WHEN w.created_at > (CAST(strftime('%s','now') AS INTEGER)*1000 - 3*86400*1000) THEN 10
                    WHEN w.created_at > (CAST(strftime('%s','now') AS INTEGER)*1000 - 7*86400*1000) THEN 5
                    WHEN w.created_at > (CAST(strftime('%s','now') AS INTEGER)*1000 - 30*86400*1000) THEN 2
                    ELSE 0
                END)`;

            // 子查询先按热度排序取候选池，外层用 RANDOM() 打散
            // 子查询的 LIMIT 已经把排序集缩小到最多 POOL_SIZE 行，外层 RANDOM() 开销极小
            rows = await db.all(`
                SELECT * FROM (
                    SELECT
                        w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                        w.is_private,
                        COALESCE(u.username, u.email) AS author,
                        u.email AS author_email,
                        COUNT(wl.user_id) AS like_count,
                        vg.video_local_path AS vg_video_path,
                        vg.cover_local_path AS vg_cover_path
                    FROM works w
                    LEFT JOIN users u ON u.id = w.user_id
                    LEFT JOIN work_likes wl ON wl.work_id = w.id
                    LEFT JOIN video_generations vg ON vg.id = w.video_generation_id
                    ${whereClause}
                    GROUP BY w.id
                    ORDER BY ${scoreExpr} DESC
                    LIMIT ?
                )
                ORDER BY RANDOM()
                LIMIT ?
            `, [...condArgs, innerLimit, limit]);
        } else {
            const orderBy = {
                newest: 'w.created_at DESC',
                likes: 'like_count DESC, w.created_at DESC',
            }[sort] ?? 'w.created_at DESC';

            rows = await db.all(`
                SELECT
                    w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                    w.is_private,
                    COALESCE(u.username, u.email) AS author,
                    u.email AS author_email,
                    COUNT(wl.user_id) AS like_count,
                    vg.video_local_path AS vg_video_path,
                    vg.cover_local_path AS vg_cover_path
                FROM works w
                LEFT JOIN users u ON u.id = w.user_id
                LEFT JOIN work_likes wl ON wl.work_id = w.id
                LEFT JOIN video_generations vg ON vg.id = w.video_generation_id
                ${whereClause}
                GROUP BY w.id
                ORDER BY ${orderBy}
                LIMIT ? OFFSET ?
            `, [...condArgs, limit, offset]);
        }

        const list = rows.map(row => ({
            id: row.id,
            user_id: row.user_id,
            title: row.title,
            prompt: row.prompt,
            video_url: toAssetUrl(row.vg_video_path) ?? row.video_url,
            cover_url: toAssetUrl(row.vg_cover_path) ?? row.cover_url ?? null,
            source: row.source,
            created_at: row.created_at,
            is_private: row.is_private,
            author: row.author,
            author_email: row.author_email,
            like_count: row.like_count,
        }));

        return { list, total, hasMore: sort !== 'foryou' && offset + list.length < total };
    }

    /**
     * 删除作品（只有作者可以删除）
     */
    static async deleteWork(workId, userId) {
        const db = await getDb();
        const work = await db.get('SELECT id FROM works WHERE id = ? AND user_id = ?', [workId, userId]);
        if (!work) return false;
        await db.run('DELETE FROM work_likes WHERE work_id = ?', [workId]);
        await db.run('DELETE FROM work_comments WHERE work_id = ?', [workId]);
        await db.run('DELETE FROM works WHERE id = ?', [workId]);
        return true;
    }

    /**
     * 设置作品隐私状态（只有作者可以操作）
     */
    static async setPrivacy(workId, userId, isPrivate) {
        const db = await getDb();
        const result = await db.run(
            'UPDATE works SET is_private = ? WHERE id = ? AND user_id = ?',
            [isPrivate ? 1 : 0, workId, userId]
        );
        return result.changes > 0;
    }

    /**
     * 获取单个作品详情（带点赞状态 + 评论）
     */
    static async getDetail(workId, currentUserId = null) {
        const db = await getDb();
        const row = await db.get(`
            SELECT
                w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                COALESCE(u.username, u.email) AS author,
                u.email AS author_email,
                COUNT(wl.user_id) AS like_count,
                vg.video_local_path AS vg_video_path,
                vg.cover_local_path AS vg_cover_path
            FROM works w
            LEFT JOIN users u ON u.id = w.user_id
            LEFT JOIN work_likes wl ON wl.work_id = w.id
            LEFT JOIN video_generations vg ON vg.id = w.video_generation_id
            WHERE w.id = ?
            GROUP BY w.id
        `, [workId]);

        if (!row) return null;

        const work = {
            ...row,
            video_url: toAssetUrl(row.vg_video_path) ?? row.video_url,
            cover_url: toAssetUrl(row.vg_cover_path) ?? row.cover_url ?? null,
        };

        // 当前用户是否点赞
        let liked = false;
        if (currentUserId) {
            const likeRow = await db.get(
                'SELECT 1 FROM work_likes WHERE work_id = ? AND user_id = ?',
                [workId, currentUserId]
            );
            liked = !!likeRow;
        }

        // 评论列表
        const comments = await db.all(`
            SELECT wc.id, wc.content, wc.created_at, COALESCE(u.username, u.email) AS author
            FROM work_comments wc
            LEFT JOIN users u ON u.id = wc.user_id
            WHERE wc.work_id = ?
            ORDER BY wc.created_at ASC
        `, [workId]);

        return { ...work, liked, comments };
    }

    /**
     * 点赞
     */
    static async like(workId, userId) {
        const db = await getDb();
        try {
            await db.run(
                'INSERT INTO work_likes (work_id, user_id, created_at) VALUES (?, ?, ?)',
                [workId, userId, Date.now()]
            );
        } catch (err) {
            if (!err.message.includes('UNIQUE constraint failed')) throw err;
            // 已点赞，忽略
        }
        const row = await db.get('SELECT COUNT(*) AS cnt FROM work_likes WHERE work_id = ?', [workId]);
        return { liked: true, like_count: row.cnt };
    }

    /**
     * 取消点赞
     */
    static async unlike(workId, userId) {
        const db = await getDb();
        await db.run('DELETE FROM work_likes WHERE work_id = ? AND user_id = ?', [workId, userId]);
        const row = await db.get('SELECT COUNT(*) AS cnt FROM work_likes WHERE work_id = ?', [workId]);
        return { liked: false, like_count: row.cnt };
    }

    /**
     * 添加评论
     */
    static async addComment(workId, userId, content) {
        const db = await getDb();
        const now = Date.now();
        const result = await db.run(
            'INSERT INTO work_comments (work_id, user_id, content, created_at) VALUES (?, ?, ?, ?)',
            [workId, userId, content, now]
        );
        const user = await db.get('SELECT COALESCE(username, email) AS author FROM users WHERE id = ?', [userId]);
        return {
            id: result.lastID,
            content,
            created_at: now,
            author: user?.author ?? '',
        };
    }

    /**
     * 根据 video_generation_id 查找作品（防重复发布）
     */
    static async findByGenerationId(videoGenerationId) {
        const db = await getDb();
        return await db.get('SELECT id FROM works WHERE video_generation_id = ?', [videoGenerationId]);
    }
}
