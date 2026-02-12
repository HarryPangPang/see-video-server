import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import send from 'koa-send';
import { CHROME_SERVICE_URL, PROJECT_ROOT } from '../config/constants.js';

const INTERNAL_SERVICE_TOKEN = 'internal-service-proxy-2024-secret-token-xyz';

/** 将 data URL 的 base64 图片写入目录，返回写入的文件名，未写入返回 null */
async function saveDataUrlToDir(dir, dataUrl, filename) {
    if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) return null;
    const match = dataUrl.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!match) return null;
    const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
    const filePath = path.join(dir, `${filename}.${ext}`);
    await fs.writeFile(filePath, Buffer.from(match[2], 'base64'));
    return `${filename}.${ext}`;
}

/**
 * POST /api/generate
 * 接收前端视频生成参数：creationType, duration, endFrame, frameMode, model, prompt, ratio, startFrame
 * 若有图片则保存到 .tmp/projectId，用 uuid 创建 projectId，写入 video_generations 表（generate_id 先空），
 * 再将参数与本地图片目录路径转发给 see-video-chrome 的 /api/generate，由 chrome 打开即梦页面
 */
export const generate = async (ctx) => {
    try {
        const body = ctx.request.body || {};
        const {
            creationType = 'video',
            duration,
            endFrame,
            frameMode,
            model,
            prompt,
            ratio,
            startFrame,
        } = body;

        if (!duration || !frameMode || !model || !ratio) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: 'Missing required fields: duration, frameMode, model, ratio',
            };
            return;
        }

        const projectId = uuidv4();
        const now = Date.now();
        const userId = ctx.state.user?.id ?? null;

        const imagesDir = path.join(PROJECT_ROOT, '.tmp', projectId);
        await fs.mkdir(imagesDir, { recursive: true });
        const startSaved = startFrame ? await saveDataUrlToDir(imagesDir, startFrame, 'start') : null;
        const endSaved = endFrame ? await saveDataUrlToDir(imagesDir, endFrame, 'end') : null;

        const startFrameUrl = startSaved ? `/api/generations/${projectId}/frame/start` : null;
        const endFrameUrl = endSaved ? `/api/generations/${projectId}/frame/end` : null;

        const db = await getDb();
        await db.run(
            `INSERT INTO video_generations (
                id, user_id, creation_type, duration, end_frame, frame_mode,
                model, prompt, ratio, start_frame, generate_id, status,
                created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                projectId,
                userId,
                creationType,
                duration,
                endFrameUrl,
                frameMode,
                model,
                prompt || null,
                ratio,
                startFrameUrl,
                null,
                'pending',
                now,
                now,
            ]
        );

        const payload = {
            projectId,
            creationType,
            duration,
            frameMode,
            model,
            prompt: prompt || null,
            ratio,
            startFrameUrl: startFrameUrl || null,
            endFrameUrl: endFrameUrl || null,
            startFramePath: startSaved ? path.join(imagesDir, startSaved) : null,
            endFramePath: endSaved ? path.join(imagesDir, endSaved) : null,
        };

        try {
            const res = await axios.post(`${CHROME_SERVICE_URL}/api/generate`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${INTERNAL_SERVICE_TOKEN}`,
                },
                timeout: 45000,
            });
            const generateId = res.data?.generateId || null;
            console.log('[Generate] Chrome service response:', res.data);
            if (generateId) {
                await db.run(
                    'UPDATE video_generations SET generate_id = ?, updated_at = ? WHERE id = ?',
                    [generateId, Date.now(), projectId]
                );
                console.log('[Generate] 已写入 generate_id:', generateId);
            }
            ctx.body = {
                success: true,
                data: {
                    projectId,
                    generateId: generateId || undefined,
                },
            };
        } catch (chromeErr) {
            console.error('[Generate] Chrome service error:', chromeErr.message);
            ctx.status = 502;
            ctx.body = {
                success: false,
                message: 'Chrome service unavailable or error',
                projectId,
            };
            return;
        }

    } catch (err) {
        console.error('[Generate] Error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message || 'Generate failed',
        };
    }
};

/**
 * GET /api/generations/:id/frame/:which
 * 返回某次生成的首帧/尾帧图片（which = start | end），用于 DB 里存的 start_frame/end_frame 地址
 */
export const serveFrame = async (ctx) => {
    const { id: projectId, which } = ctx.params;
    if (!projectId || !['start', 'end'].includes(which)) {
        ctx.status = 400;
        return;
    }
    const dir = path.join(PROJECT_ROOT, '.tmp', projectId);
    let filename;
    try {
        const names = await fs.readdir(dir);
        filename = names.find((n) => n.startsWith(which + '.'));
    } catch (e) {
        ctx.status = 404;
        return;
    }
    if (!filename) {
        ctx.status = 404;
        return;
    }
    await send(ctx, filename, { root: dir });
};
