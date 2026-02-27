import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import fs from 'fs/promises';
import fsSync from 'fs-extra';
import path from 'path';
import send from 'koa-send';
import { CHROME_SERVICE_URL, PROJECT_ROOT } from '../config/constants.js';
import { CreditsService } from '../services/CreditsService.js';

const INTERNAL_SERVICE_TOKEN = 'internal-service-proxy-2024-secret-token-xyz';

// Chrome 服务调用缓存（30秒节流）
const chromeServiceCache = {
    lastCallTime: 0,
    cachedData: null,
    THROTTLE_TIME: 30000 * 2// 30秒
};

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
            omniFrames, // 全能参考模式：1-5张图片数组
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
        let creditsDeducted = false; // 追踪积分是否已扣除

        // 检查用户积分（需要认证）
        if (!userId) {
            ctx.status = 401;
            ctx.body = {
                success: false,
                message: 'Unauthorized: Please login first',
            };
            return;
        }

        // 检查积分余额
        const currentCredits = await CreditsService.getUserCredits(userId);
        if (currentCredits < 1) {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: '积分不足，请先充值',
                data: {
                    currentCredits,
                    requiredCredits: 1
                }
            };
            return;
        }

        // 扣除积分（生成前扣费）
        try {
            await CreditsService.deductCredits(userId, 1, projectId, `生成视频 - ${projectId}`);
            creditsDeducted = true; // 标记积分已扣除
            console.log(`[Generate] 用户 ${userId} 扣除 1 积分，剩余 ${currentCredits - 1} 积分`);
        } catch (creditsErr) {
            console.error('[Generate] 扣除积分失败:', creditsErr);
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: creditsErr.message || '积分扣除失败',
            };
            return;
        }

        const imagesDir = path.join(PROJECT_ROOT, '.tmp', projectId);
        await fs.mkdir(imagesDir, { recursive: true });

        // 处理起始帧和结束帧（startEnd 模式）
        const startSaved = startFrame ? await saveDataUrlToDir(imagesDir, startFrame, 'start') : null;
        const endSaved = endFrame ? await saveDataUrlToDir(imagesDir, endFrame, 'end') : null;

        const startFrameUrl = startSaved ? `/api/generations/${projectId}/frame/start` : null;
        const endFrameUrl = endSaved ? `/api/generations/${projectId}/frame/end` : null;

        // 处理全能参考模式的多张图片
        let omniFramePaths = null;
        let omniFrameUrls = null;
        if (omniFrames && Array.isArray(omniFrames) && omniFrames.length > 0) {
            omniFramePaths = [];
            omniFrameUrls = [];
            for (let i = 0; i < omniFrames.length; i++) {
                const saved = await saveDataUrlToDir(imagesDir, omniFrames[i], `omni-${i}`);
                if (saved) {
                    omniFramePaths.push(path.join(imagesDir, saved));
                    omniFrameUrls.push(`/api/generations/${projectId}/frame/omni-${i}`);
                }
            }
        }

        const db = await getDb();
        await db.run(
            `INSERT INTO video_generations (
                id, user_id, creation_type, duration, end_frame, frame_mode,
                model, prompt, ratio, start_frame, omni_frames, generate_id, status,
                created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
                omniFrameUrls ? JSON.stringify(omniFrameUrls) : null,
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
            omniFrameUrls: omniFrameUrls || null,
            omniFramePaths: omniFramePaths || null,
        };

        try {
            const res = await axios.post(`${CHROME_SERVICE_URL}/api/generate`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${INTERNAL_SERVICE_TOKEN}`,
                },
                timeout: 45000,
            }).catch(err=>{
                throw new Error(`Chrome service request failed: ${err}`);
            });
            const generateId = res.data?.generateId || null;

            // 业务错误（图片尺寸错误等）：退还积分
            if(!res.data?.success && res.data?.error){
                console.log(`[Generate] 生成失败，退还积分给用户 ${userId}`);
                try {
                    await CreditsService.refundCredits(userId, 1, projectId, `生成失败退款 - ${res.data.error}`);
                } catch (refundErr) {
                    console.error('[Generate] 退款失败:', refundErr);
                }

                ctx.body = {
                    success: false,
                    data: {
                        projectId,
                        message: res.data?.error
                    },
                };
                return
            }

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
            // 系统错误：退还积分
            console.error('[Generate] Chrome service error:', chromeErr.message);
            console.log(`[Generate] 系统错误，退还积分给用户 ${userId}`);
            try {
                await CreditsService.refundCredits(userId, 1, projectId, `生成失败退款 - 系统错误`);
            } catch (refundErr) {
                console.error('[Generate] 退款失败:', refundErr);
            }

            ctx.status = 502;
            ctx.body = {
                success: false,
                message: chromeErr.message,
                projectId,
            };
            return;
        }

    } catch (err) {
        console.error('[Generate] Error:', err);

        // 如果积分已扣除但发生了未预期错误，尝试退款
        const userId = ctx.state.user?.id;
        if (creditsDeducted && userId && projectId) {
            try {
                await CreditsService.refundCredits(userId, 1, projectId, `生成失败退款 - 系统异常`);
                console.log(`[Generate] 未预期错误，已退还积分给用户 ${userId}`);
            } catch (refundErr) {
                console.error('[Generate] 退款失败:', refundErr);
            }
        }

        ctx.status = 500;
        ctx.body = {
            success: false,
            message: err.message || 'Generate failed',
        };
    }
};

/**
 * GET /api/generations/:id/frame/:which
 * 返回某次生成的首帧/尾帧图片（which = start | end | omni-0 | omni-1 等）
 */
export const serveFrame = async (ctx) => {
    const { id: projectId, which } = ctx.params;
    if (!projectId) {
        ctx.status = 400;
        return;
    }

    // 验证 which 参数：支持 start, end, omni-0, omni-1, ..., omni-4
    const isValidWhich = ['start', 'end'].includes(which) || /^omni-[0-4]$/.test(which);
    if (!isValidWhich) {
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

        // 节流逻辑：30秒内使用缓存，不重复调用 Chrome 服务
        const now = Date.now();
        const timeSinceLastCall = now - chromeServiceCache.lastCallTime;
        let res;

        if (timeSinceLastCall < chromeServiceCache.THROTTLE_TIME && chromeServiceCache.cachedData) {
            console.log('[VideoList] 使用缓存数据 (距上次调用 ' + Math.floor(timeSinceLastCall / 1000) + '秒)');
            res = chromeServiceCache.cachedData;
        } else {
            console.log('[VideoList] 转发视频列表请求到 Chrome 服务');
            res = await axios.get(`${CHROME_SERVICE_URL}/api/get_asset_list`, {
                headers: {
                    Authorization: `Bearer ${INTERNAL_SERVICE_TOKEN}`,
                },
                timeout: 60000,
            });

            // 更新缓存
            chromeServiceCache.lastCallTime = now;
            chromeServiceCache.cachedData = res;

            if (res.data.success && res.data.data?.asset_list) {
                console.log('[VideoList] 获取成功，视频数量:', res.data.data.asset_list.length);
            }
        }
        const db = await getDb();
        // 将本次响应中的排队信息写入数据库（按 generate_id 对应 asset.id）
        if (res?.data?.success && res.data.data?.asset_list?.length) {
            const now = Date.now();
            for (const asset of res.data.data.asset_list) {
                const generateId = asset.video?.generate_id;
                if (asset.queue_info) {
                    try {
                        const q = asset.queue_info.queue_info || {};
                        const queue_idx = Number(q.queue_idx);
                        const queue_length = Number(q.queue_length);
                        const waiting_minutes = Number.isFinite(queue_idx) ? Math.ceil(queue_idx / 300) : null;
                        const queueInfo = {
                            position: Number.isFinite(queue_idx) ? queue_idx : undefined,
                            total: Number.isFinite(queue_length) ? queue_length : undefined,
                            waiting_minutes
                        };
                        await db.run(
                            'UPDATE video_generations SET queue_info = ?, updated_at = ? WHERE generate_id = ?',
                            [JSON.stringify(queueInfo), now, generateId]
                        );
                    } catch (e) {
                        console.warn('[VideoList] 更新 queue_info 失败:', generateId, e.message);
                    }
                }
            }
        }

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
                error_message,
                queue_info,
                created_at,
                updated_at
            FROM video_generations
            WHERE user_id = ? OR (user_id IS NULL AND generate_id IS NOT NULL)
            ORDER BY created_at DESC`,
            [userId]
        );

        // 直接使用数据库中的记录，不再与 Chrome 服务返回的列表取交集
        const filteredRows = rows;

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
            // 排队信息：DB 存的是 { position, total, waiting_minutes }，返回统一为 { 位置, 总人数, 等待分钟 }
            let queueInfo = null;
            if (row.queue_info) {
                try {
                    const raw = typeof row.queue_info === 'string' ? JSON.parse(row.queue_info) : row.queue_info;
                    const pos = raw.position ?? raw.queue_info?.queue_idx;
                    const total = raw.total ?? raw.queue_info?.queue_length;
                    const posNum = Number(pos);
                    const totalNum = Number(total);
                    if (Number.isFinite(posNum) && Number.isFinite(totalNum)) {
                        const wait = Number.isFinite(raw.waiting_minutes) ? raw.waiting_minutes : Math.ceil(posNum / 300);
                        queueInfo = { pos: posNum, total: totalNum, wait: wait };
                    }
                } catch {
                    queueInfo = null;
                }
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
                generate_id: row.generate_id,
                error_message: row.error_message || null,
                queue_info: queueInfo
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
            error_message: err.message || 'Failed to fetch video list',
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
