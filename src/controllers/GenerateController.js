import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import fs from 'fs/promises';
import fsSync from 'fs-extra';
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

/**
 * GET /api/video-list
 * 从数据库获取当前用户的视频列表
 */
export const getVideoList = async (ctx) => {
    try {
        const userId = ctx.state.user?.id;

        if (!userId) {
            ctx.status = 401;
            ctx.body = {
                success: false,
                message: 'Unauthorized'
            };
            return;
        }

        console.log('[VideoList] 查询用户视频列表, userId:', userId);
        console.log('[VideoList] 转发视频列表请求到 Chrome 服务');

        const res = await axios.get(`${CHROME_SERVICE_URL}/api/get_asset_list`, {
            headers: {
                Authorization: `Bearer ${INTERNAL_SERVICE_TOKEN}`,
            },
            timeout: 60000,
        });

        if (res.data.success && res.data.data?.asset_list) {
            console.log('[VideoList] 获取成功，视频数量:', res.data.data.asset_list.length);
            
        }
        const db = await getDb();

        // 查询当前用户的视频记录，按创建时间倒序
        const rows = await db.all(
            `SELECT
                id,
                generate_id,
                video_url,
                video_local_path,
                video_thumbnail,
                cover_local_path,
                video_duration,
                prompt,
                model,
                ratio,
                duration,
                status,
                created_at,
                updated_at
            FROM video_generations
            WHERE user_id = ? OR (user_id IS NULL AND generate_id IS NOT NULL)
            ORDER BY created_at DESC`,
            [userId]
        );

        // rows和res的asset_list根据generate_id进行合并取交集
        let filteredRows = rows;
        if (res.data.success && res.data.data?.asset_list) {
            // 从 Chrome 服务返回的 asset_list 中提取所有 generate_id
            const chromeGenerateIds = new Set(
                res.data.data.asset_list
                    .map(asset => asset?.video?.generate_id)
                    .filter(id => id != null)
            );

            console.log('[VideoList] Chrome 服务返回的 generate_id 数量:', chromeGenerateIds.size);

            // 只保留那些 generate_id 存在于 Chrome 服务返回列表中的记录
            filteredRows = rows.filter(row =>
                row.generate_id && chromeGenerateIds.has(row.generate_id)
            );

            console.log('[VideoList] 交集后的视频数量:', filteredRows.length);
        }

        console.log('[VideoList] 查询到视频数量:', rows.length);

        // 转换为前端需要的格式
        const assetList = filteredRows.map(row => {
            // 将本地路径转换为可访问的 URL
            const localVideoUrl = row.video_local_path
                ? `/assets/${path.basename(path.dirname(row.video_local_path))}/${path.basename(row.video_local_path)}`
                : null;

            const localCoverUrl = row.cover_local_path
                ? `/assets/${path.basename(path.dirname(row.cover_local_path))}/${path.basename(row.cover_local_path)}`
                : null;

            // 解析 prompt（如果是 JSON 字符串）
            let promptText = '';
            try {
                if (row.prompt) {
                    const parsed = JSON.parse(row.prompt);
                    promptText = Array.isArray(parsed) ? parsed.join(' ') : parsed;
                }
            } catch {
                promptText = row.prompt || '';
            }

            // 转换为类似即梦 API 返回的格式，以兼容前端
            return {
                id: row.id,
                duration: row.duration,
                model: row.model,
                ratio: row.ratio,
                created_at: row.created_at,
                updated_at: row.updated_at,
                video_local_path: localVideoUrl,
                cover_local_path: localCoverUrl,
                prompt: promptText,
                generate_id: row.generate_id
            };
        });

        ctx.body = {
            success: true,
            data: {
                asset_list: assetList,
                has_more: false
            }
        };
    } catch (err) {
        console.error('[VideoList] Error:', err.message);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: 'Failed to fetch video list',
            error: err.message,
        };
    }
};

/**
 * POST /api/video-generations/check
 * 检查视频生成记录是否已有本地路径
 */
export const checkVideoGeneration = async (ctx) => {
    try {
        const { generate_id } = ctx.request.body;

        if (!generate_id) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: 'Missing generate_id'
            };
            return;
        }

        const db = await getDb();
        const row = await db.get(
            'SELECT video_local_path, cover_local_path FROM video_generations WHERE generate_id = ?',
            generate_id
        );

        if (!row) {
            ctx.body = {
                success: true,
                has_local: false
            };
            return;
        }

        // 检查文件是否实际存在
        const hasVideo = row.video_local_path && await fsSync.pathExists(row.video_local_path);
        const hasCover = row.cover_local_path && await fsSync.pathExists(row.cover_local_path);

        ctx.body = {
            success: true,
            has_local: hasVideo || hasCover,
            video_local_path: hasVideo ? row.video_local_path : null,
            cover_local_path: hasCover ? row.cover_local_path : null
        };
    } catch (err) {
        console.error('[checkVideoGeneration] Error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};

/**
 * POST /api/video-generations/update-paths
 * 更新视频生成记录的本地路径
 */
export const updateVideoPaths = async (ctx) => {
    try {
        const { generate_id, video_url, video_local_path, cover_url, cover_local_path } = ctx.request.body;

        if (!generate_id) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: 'Missing generate_id'
            };
            return;
        }

        const db = await getDb();
        const now = Date.now();

        // 先检查记录是否存在
        const existing = await db.get('SELECT id FROM video_generations WHERE generate_id = ?', generate_id);

        if (existing) {
            // 更新现有记录
            await db.run(
                `UPDATE video_generations SET
                    video_url = COALESCE(?, video_url),
                    video_local_path = COALESCE(?, video_local_path),
                    video_thumbnail = COALESCE(?, video_thumbnail),
                    cover_local_path = COALESCE(?, cover_local_path),
                    updated_at = ?
                WHERE generate_id = ?`,
                [video_url, video_local_path, cover_url, cover_local_path, now, generate_id]
            );
        } else {
            // 创建新记录（用于手动生成的视频）
            // 这些视频没有通过我们的系统生成，所以只记录基本信息
            const newId = uuidv4();
            await db.run(
                `INSERT INTO video_generations (
                    id, user_id, creation_type, duration, frame_mode, model, ratio,
                    generate_id, video_url, video_local_path, video_thumbnail, cover_local_path,
                    status, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    newId, null, 'video', '5s', 'both', 'unknown', '16:9',
                    generate_id, video_url, video_local_path, cover_url, cover_local_path,
                    'completed', now, now
                ]
            );
        }

        ctx.body = {
            success: true,
            generate_id
        };
    } catch (err) {
        console.error('[updateVideoPaths] Error:', err);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message
        };
    }
};
