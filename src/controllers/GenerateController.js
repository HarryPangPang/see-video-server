import { getDb } from '../db/index.js';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { CHROME_SERVICE_URL } from '../config/constants.js';

const INTERNAL_SERVICE_TOKEN = 'internal-service-proxy-2024-secret-token-xyz';

/**
 * POST /api/generate
 * 接收前端视频生成参数：creationType, duration, endFrame, frameMode, model, prompt, ratio, startFrame
 * 用 uuid 创建 projectId，写入 video_generations 表（generate_id 先空），
 * 再将参数转发给 see-video-chrome 的 /api/generate，由 chrome 打开即梦页面
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
                endFrame || null,
                frameMode,
                model,
                prompt || null,
                ratio,
                startFrame || null,
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
            endFrame: endFrame || null,
            frameMode,
            model,
            prompt: prompt || null,
            ratio,
            startFrame: startFrame || null,
        };

        try {
            const res = await axios.post(`${CHROME_SERVICE_URL}/api/generate`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${INTERNAL_SERVICE_TOKEN}`,
                },
                timeout: 15000,
            });
            console.log('[Generate] Chrome service response:', res.data);
            ctx.body = {
                success: true,
                data: {
                    projectId,
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
