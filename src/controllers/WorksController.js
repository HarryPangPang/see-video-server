import { getDb } from '../db/index.js';
import { WorksModel } from '../models/WorksModel.js';
import formidable from 'formidable';
import fs from 'fs-extra';
import path from 'path';
import { TMP_DIR } from '../config/constants.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * GET /api/works
 * 获取公开作品列表（支持 sort/page/limit 分页）
 * Query: sort=newest|likes|foryou, page=1, limit=20
 */
export const getWorksList = async (ctx) => {
    try {
        const { sort = 'newest', page = '1', limit = '20', mine, source } = ctx.query;
        const pageNum = Math.max(1, parseInt(page) || 1);
        const limitNum = Math.min(100, Math.max(1, parseInt(limit) || 20));
        const offset = (pageNum - 1) * limitNum;
        const currentUserId = ctx.state.user?.id ?? null;
        const result = await WorksModel.getList({
            sort, limit: limitNum, offset, currentUserId,
            mine: mine === 'true',
            source: source || null,
        });
        ctx.body = { success: true, data: result };
    } catch (err) {
        console.error('[Works] getList error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * GET /api/works/:id
 * 获取作品详情（含点赞状态 + 评论）
 */
export const getWorkDetail = async (ctx) => {
    const { id } = ctx.params;
    const currentUserId = ctx.state.user?.id ?? null;
    try {
        const work = await WorksModel.getDetail(id, currentUserId);
        if (!work) {
            ctx.status = 404;
            ctx.body = { success: false, message: '作品不存在' };
            return;
        }
        ctx.body = { success: true, data: work };
    } catch (err) {
        console.error('[Works] getDetail error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * POST /api/works
 * 从 video_generation 发布作品到广场
 * body: { videoGenerationId, title }
 */
export const publishWork = async (ctx) => {
    const { videoGenerationId, title } = ctx.request.body || {};
    const userId = ctx.state.user.id;

    if (!videoGenerationId || !title?.trim()) {
        ctx.status = 400;
        ctx.body = { success: false, message: '缺少 videoGenerationId 或 title' };
        return;
    }

    try {
        // 防止重复发布同一个视频
        const existing = await WorksModel.findByGenerationId(videoGenerationId);
        if (existing) {
            ctx.status = 409;
            ctx.body = { success: false, message: '该视频已发布到广场' };
            return;
        }

        // 查询 video_generation，确认归属当前用户
        const db = await getDb();
        const gen = await db.get(
            'SELECT * FROM video_generations WHERE id = ? AND user_id = ?',
            [videoGenerationId, userId]
        );

        if (!gen) {
            ctx.status = 404;
            ctx.body = { success: false, message: '视频不存在或无权限' };
            return;
        }

        // 将 FS 绝对路径转换为可访问的 URL 路径（与 GenerateController.getVideoList 保持一致）
        // video_local_path 形如 /abs/path/.tmp/{generate_id}/video.mp4 → /assets/{generate_id}/video.mp4
        const toAssetUrl = (fsPath) => {
            if (!fsPath) return null;
            return `/assets/${path.basename(path.dirname(fsPath))}/${path.basename(fsPath)}`;
        };
        const videoUrl = gen.video_local_path ? toAssetUrl(gen.video_local_path) : gen.video_url;
        const coverUrl = gen.cover_local_path ? toAssetUrl(gen.cover_local_path) : (gen.cover_url || null);

        if (!videoUrl) {
            ctx.status = 400;
            ctx.body = { success: false, message: '视频尚未生成完成，无法发布' };
            return;
        }

        const work = await WorksModel.create({
            userId,
            title: title.trim(),
            prompt: gen.prompt ?? null,
            videoUrl,
            coverUrl,
            source: 'jimeng',
            videoGenerationId,
        });

        ctx.body = { success: true, data: { id: work.id } };
    } catch (err) {
        console.error('[Works] publish error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * POST /api/works/upload
 * 直接上传视频文件发布作品
 * form-data: { video: File, title: string }
 */
export const publishWorkUpload = async (ctx) => {
    const userId = ctx.state.user.id;

    const form = formidable({ multiples: false, maxFileSize: 500 * 1024 * 1024 });
    const [fields, files] = await form.parse(ctx.req);

    const title = (Array.isArray(fields.title) ? fields.title[0] : fields.title)?.trim();
    const videoFile = Array.isArray(files.video) ? files.video[0] : files.video;
    const coverFile = Array.isArray(files.cover) ? files.cover[0] : files.cover;

    if (!title || !videoFile) {
        ctx.status = 400;
        ctx.body = { success: false, message: '缺少 title 或 video 文件' };
        return;
    }

    try {
        const uploadId = uuidv4();
        const destDir = path.join(TMP_DIR, uploadId);
        await fs.ensureDir(destDir);

        const ext = path.extname(videoFile.originalFilename || 'video.mp4') || '.mp4';
        const destPath = path.join(destDir, `video${ext}`);
        await fs.move(videoFile.filepath, destPath);

        const videoUrl = `/assets/${uploadId}/video${ext}`;

        let coverUrl = null;
        if (coverFile) {
            const coverDest = path.join(destDir, 'cover.jpg');
            await fs.move(coverFile.filepath, coverDest);
            coverUrl = `/assets/${uploadId}/cover.jpg`;
        }

        const work = await WorksModel.create({
            userId,
            title,
            prompt: null,
            videoUrl,
            coverUrl,
            source: 'upload',
            videoGenerationId: null,
        });

        ctx.body = { success: true, data: { id: work.id } };
    } catch (err) {
        console.error('[Works] upload error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * POST /api/works/:id/like
 */
export const likeWork = async (ctx) => {
    const { id } = ctx.params;
    const userId = ctx.state.user.id;
    try {
        const result = await WorksModel.like(id, userId);
        ctx.body = { success: true, data: result };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * DELETE /api/works/:id/like
 */
export const unlikeWork = async (ctx) => {
    const { id } = ctx.params;
    const userId = ctx.state.user.id;
    try {
        const result = await WorksModel.unlike(id, userId);
        ctx.body = { success: true, data: result };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * DELETE /api/works/:id
 * 删除自己的作品
 */
export const deleteWork = async (ctx) => {
    const { id } = ctx.params;
    const userId = ctx.state.user.id;
    try {
        const deleted = await WorksModel.deleteWork(id, userId);
        if (!deleted) {
            ctx.status = 404;
            ctx.body = { success: false, message: '作品不存在或无权限' };
            return;
        }
        ctx.body = { success: true };
    } catch (err) {
        console.error('[Works] delete error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * PATCH /api/works/:id
 * 更新作品隐私状态
 * body: { isPrivate: boolean }
 */
export const updateWork = async (ctx) => {
    const { id } = ctx.params;
    const userId = ctx.state.user.id;
    const { isPrivate } = ctx.request.body || {};
    if (typeof isPrivate !== 'boolean') {
        ctx.status = 400;
        ctx.body = { success: false, message: '缺少 isPrivate 参数' };
        return;
    }
    try {
        const updated = await WorksModel.setPrivacy(id, userId, isPrivate);
        if (!updated) {
            ctx.status = 404;
            ctx.body = { success: false, message: '作品不存在或无权限' };
            return;
        }
        ctx.body = { success: true };
    } catch (err) {
        console.error('[Works] update error:', err);
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};

/**
 * POST /api/works/:id/comments
 * body: { content }
 */
export const addComment = async (ctx) => {
    const { id } = ctx.params;
    const userId = ctx.state.user.id;
    const { content } = ctx.request.body || {};

    if (!content?.trim()) {
        ctx.status = 400;
        ctx.body = { success: false, message: '评论内容不能为空' };
        return;
    }
    try {
        const comment = await WorksModel.addComment(id, userId, content.trim());
        ctx.body = { success: true, data: comment };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { success: false, message: err.message };
    }
};
