import formidable from 'formidable';
import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs-extra';
import { TMP_DIR } from '../config/constants.js';

/**
 * POST /api/works - Publish from existing video generation (body: { videoGenerationId, title })
 */
export async function publishFromGeneration(ctx) {
    try {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }
        const { videoGenerationId, title } = ctx.request.body || {};
        if (!videoGenerationId || !title || !String(title).trim()) {
            ctx.status = 400;
            ctx.body = { success: false, message: 'videoGenerationId and title are required' };
            return;
        }

        const db = await getDb();
        const gen = await db.get(
            'SELECT id, user_id, video_url, video_local_path, cover_local_path, prompt FROM video_generations WHERE id = ? AND user_id = ?',
            [videoGenerationId, userId]
        );
        if (!gen) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'Video generation not found or not yours' };
            return;
        }

        const workId = uuidv4();
        const now = Date.now();
        const videoUrl = gen.video_local_path
            ? `/assets/${path.basename(path.dirname(gen.video_local_path))}/${path.basename(gen.video_local_path)}`
            : gen.video_url;
        const coverUrl = gen.cover_local_path
            ? `/assets/${path.basename(path.dirname(gen.cover_local_path))}/${path.basename(gen.cover_local_path)}`
            : null;
        let promptText = gen.prompt || '';
        try {
            if (gen.prompt && typeof gen.prompt === 'string') {
                const parsed = JSON.parse(gen.prompt);
                promptText = Array.isArray(parsed) ? parsed.join(' ') : String(parsed);
            }
        } catch (_) {}

        await db.run(
            `INSERT INTO published_works (id, user_id, title, prompt, video_url, cover_url, video_generation_id, source, created_at, updated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, 'generation', ?, ?)`,
            [workId, userId, String(title).trim(), promptText, videoUrl, coverUrl, videoGenerationId, now, now]
        );

        ctx.body = {
            success: true,
            data: {
                id: workId,
                title: String(title).trim(),
                video_url: videoUrl,
                cover_url: coverUrl,
                prompt: promptText,
                created_at: now,
            },
        };
    } catch (err) {
        console.error('[WorksController] publishFromGeneration:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Publish failed' };
    }
}

/**
 * POST /api/works/upload - Publish from uploaded video (multipart: video file + title)
 */
export async function publishFromUpload(ctx) {
    try {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }

        const uploadDir = path.join(TMP_DIR, 'uploads');
        await fs.ensureDir(uploadDir);
        const form = formidable({
            uploadDir,
            keepExtensions: true,
            maxFileSize: 200 * 1024 * 1024,
        });
        const [fields, files] = await form.parse(ctx.req);
        const title = (fields.title && fields.title[0]) || '';
        const uploadedFile = Array.isArray(files.video) ? files.video[0] : Array.isArray(files.file) ? files.file[0] : null;

        if (!uploadedFile || !title || !String(title).trim()) {
            ctx.status = 400;
            ctx.body = { success: false, message: 'Video file and title are required' };
            return;
        }

        const workId = uuidv4();
        const workDir = path.join(TMP_DIR, 'uploads', workId);
        await fs.ensureDir(workDir);
        const ext = path.extname(uploadedFile.originalFilename || uploadedFile.newFilename || 'video.mp4') || '.mp4';
        const filename = `video${ext}`;
        const destPath = path.join(workDir, filename);
        const srcPath = uploadedFile.filepath;
        if (srcPath && (await fs.pathExists(srcPath))) {
            await fs.move(srcPath, destPath, { overwrite: true });
        } else {
            ctx.status = 400;
            ctx.body = { success: false, message: 'No video file received' };
            return;
        }

        const videoUrl = `/assets/uploads/${workId}/${filename}`;
        const now = Date.now();
        const db = await getDb();
        await db.run(
            `INSERT INTO published_works (id, user_id, title, prompt, video_url, cover_url, video_generation_id, source, created_at, updated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, 'upload', ?, ?)`,
            [workId, userId, String(title).trim(), null, videoUrl, null, null, now, now]
        );

        ctx.body = {
            success: true,
            data: {
                id: workId,
                title: String(title).trim(),
                video_url: videoUrl,
                cover_url: null,
                prompt: null,
                created_at: now,
            },
        };
    } catch (err) {
        console.error('[WorksController] publishFromUpload:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Upload failed' };
    }
}

/**
 * GET /api/works - List published works (plaza)
 */
export async function listWorks(ctx) {
    try {
        const db = await getDb();
        const rows = await db.all(
            `SELECT w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                    u.username, u.email
             FROM published_works w
             JOIN users u ON u.id = w.user_id
             ORDER BY w.created_at DESC
             LIMIT 100`
        );

        const list = rows.map((r) => ({
            id: r.id,
            user_id: r.user_id,
            author: r.username || r.email?.split('@')[0] || 'User',
            author_email: r.email,
            title: r.title,
            prompt: r.prompt,
            video_url: r.video_url || '',
            cover_url: r.cover_url || null,
            source: r.source,
            created_at: r.created_at,
        }));

        const likeCounts = await Promise.all(
            list.map((w) => db.get('SELECT COUNT(*) as c FROM work_likes WHERE work_id = ?', [w.id]).then((r) => r.c))
        );
        list.forEach((w, i) => {
            w.like_count = likeCounts[i];
        });

        ctx.body = { success: true, data: { list } };
    } catch (err) {
        console.error('[WorksController] listWorks:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Failed to list works' };
    }
}

/**
 * GET /api/works/:id - Work detail (author, prompt, like count, liked by me, comments)
 */
export async function getWorkById(ctx) {
    try {
        const workId = ctx.params.id;
        const currentUserId = ctx.state.user?.id;
        const db = await getDb();

        const work = await db.get(
            `SELECT w.id, w.user_id, w.title, w.prompt, w.video_url, w.cover_url, w.source, w.created_at,
                    u.username, u.email
             FROM published_works w
             JOIN users u ON u.id = w.user_id
             WHERE w.id = ?`,
            [workId]
        );
        if (!work) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'Work not found' };
            return;
        }

        const likeCount = await db.get('SELECT COUNT(*) as c FROM work_likes WHERE work_id = ?', [workId]);
        let liked = false;
        if (currentUserId) {
            const likeRow = await db.get('SELECT 1 FROM work_likes WHERE work_id = ? AND user_id = ?', [workId, currentUserId]);
            liked = !!likeRow;
        }

        const comments = await db.all(
            `SELECT c.id, c.content, c.created_at, u.username, u.email
             FROM work_comments c
             JOIN users u ON u.id = c.user_id
             WHERE c.work_id = ?
             ORDER BY c.created_at ASC`,
            [workId]
        );

        ctx.body = {
            success: true,
            data: {
                id: work.id,
                user_id: work.user_id,
                author: work.username || work.email?.split('@')[0] || 'User',
                author_email: work.email,
                title: work.title,
                prompt: work.prompt,
                video_url: work.video_url || '',
                cover_url: work.cover_url || null,
                source: work.source,
                created_at: work.created_at,
                like_count: likeCount?.c ?? 0,
                liked,
                comments: comments.map((c) => ({
                    id: c.id,
                    content: c.content,
                    created_at: c.created_at,
                    author: c.username || c.email?.split('@')[0] || 'User',
                })),
            },
        };
    } catch (err) {
        console.error('[WorksController] getWorkById:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Failed to get work' };
    }
}

/**
 * POST /api/works/:id/like - Like a work
 */
export async function likeWork(ctx) {
    try {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }
        const workId = ctx.params.id;
        const db = await getDb();
        const work = await db.get('SELECT id FROM published_works WHERE id = ?', [workId]);
        if (!work) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'Work not found' };
            return;
        }
        const now = Date.now();
        await db.run('INSERT OR IGNORE INTO work_likes (user_id, work_id, created_at) VALUES (?, ?, ?)', [userId, workId, now]);
        const likeCount = await db.get('SELECT COUNT(*) as c FROM work_likes WHERE work_id = ?', [workId]);
        ctx.body = { success: true, data: { liked: true, like_count: likeCount?.c ?? 0 } };
    } catch (err) {
        console.error('[WorksController] likeWork:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Like failed' };
    }
}

/**
 * DELETE /api/works/:id/like - Unlike a work
 */
export async function unlikeWork(ctx) {
    try {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }
        const workId = ctx.params.id;
        const db = await getDb();
        await db.run('DELETE FROM work_likes WHERE work_id = ? AND user_id = ?', [workId, userId]);
        const likeCount = await db.get('SELECT COUNT(*) as c FROM work_likes WHERE work_id = ?', [workId]);
        ctx.body = { success: true, data: { liked: false, like_count: likeCount?.c ?? 0 } };
    } catch (err) {
        console.error('[WorksController] unlikeWork:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Unlike failed' };
    }
}

/**
 * POST /api/works/:id/comments - Add comment
 */
export async function addComment(ctx) {
    try {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: 'Unauthorized' };
            return;
        }
        const workId = ctx.params.id;
        const { content } = ctx.request.body || {};
        if (!content || !String(content).trim()) {
            ctx.status = 400;
            ctx.body = { success: false, message: 'Content is required' };
            return;
        }
        const db = await getDb();
        const work = await db.get('SELECT id FROM published_works WHERE id = ?', [workId]);
        if (!work) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'Work not found' };
            return;
        }
        const now = Date.now();
        const result = await db.run('INSERT INTO work_comments (work_id, user_id, content, created_at) VALUES (?, ?, ?, ?)', [
            workId,
            userId,
            String(content).trim(),
            now,
        ]);
        const user = await db.get('SELECT username, email FROM users WHERE id = ?', [userId]);
        ctx.body = {
            success: true,
            data: {
                id: result.lastID,
                content: String(content).trim(),
                created_at: now,
                author: user?.username || user?.email?.split('@')[0] || 'User',
            },
        };
    } catch (err) {
        console.error('[WorksController] addComment:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message || 'Comment failed' };
    }
}
