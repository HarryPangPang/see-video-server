import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';

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
     * 获取所有作品列表（带作者名 + 点赞数）
     */
    static async getList() {
        const db = await getDb();
        return await db.all(`
            SELECT
                w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                COALESCE(u.username, u.email) AS author,
                u.email AS author_email,
                COUNT(wl.user_id) AS like_count
            FROM works w
            LEFT JOIN users u ON u.id = w.user_id
            LEFT JOIN work_likes wl ON wl.work_id = w.id
            GROUP BY w.id
            ORDER BY w.created_at DESC
        `);
    }

    /**
     * 获取单个作品详情（带点赞状态 + 评论）
     */
    static async getDetail(workId, currentUserId = null) {
        const db = await getDb();
        const work = await db.get(`
            SELECT
                w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                COALESCE(u.username, u.email) AS author,
                u.email AS author_email,
                COUNT(wl.user_id) AS like_count
            FROM works w
            LEFT JOIN users u ON u.id = w.user_id
            LEFT JOIN work_likes wl ON wl.work_id = w.id
            WHERE w.id = ?
            GROUP BY w.id
        `, [workId]);

        if (!work) return null;

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
