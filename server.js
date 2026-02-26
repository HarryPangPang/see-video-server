import 'dotenv/config';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import serve from 'koa-static';
import fs from 'fs-extra';
import path from 'path';
import { TMP_DIR, PORT, PLAYGROUND_DIST_DIR } from './src/config/constants.js';
import router from './src/routes/index.js';
import { startWorker } from './src/worker/index.js';

const app = new Koa();

// 内部服务认证 token（与 auto_proxy 保持一致）
const INTERNAL_SERVICE_TOKEN = 'internal-service-proxy-2024-secret-token-xyz';

// Ensure Temp Directory  Directory
fs.ensureDirSync(TMP_DIR);

// Start Build Worker (async, non-blocking)
startWorker().catch(err => {
    console.error('[Server] Failed to start worker:', err);
});

// Middleware
app.use(cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 内部服务认证中间件：检查请求来源，如果来自 localhost:1234 或有内部服务 token 则放行
app.use(async (ctx, next) => {
    const authHeader = ctx.headers.authorization;
    const referer = ctx.headers.referer || '';
    const origin = ctx.headers.origin || '';

    // 检查是否来自 localhost:1234 (auto_proxy)
    const isFromProxy = referer.includes('localhost:1234') ||
                        origin.includes('localhost:1234') ||
                        referer.includes('127.0.0.1:1234') ||
                        origin.includes('127.0.0.1:1234');

    // 检查是否有内部服务 token
    const hasInternalToken = authHeader === `Bearer ${INTERNAL_SERVICE_TOKEN}`;

    // 如果来自 proxy 或有内部 token，标记为已认证的内部请求
    if (isFromProxy || hasInternalToken) {
        ctx.state.isInternalService = true;
        console.log('[Auth] Internal service request authenticated from proxy');
    }

    await next();
});

// Raw body middleware for webhook signature verification
app.use(async (ctx, next) => {
    if (ctx.path === '/api/payment/webhook') {
        // For webhook routes, we need to preserve the raw body for signature verification
        const chunks = [];
        await new Promise((resolve, reject) => {
            ctx.req.on('data', chunk => chunks.push(chunk));
            ctx.req.on('end', () => {
                // Keep as Buffer - Stripe's constructEvent needs the raw bytes, not a parsed object
                ctx.request.rawBody = Buffer.concat(chunks);
                ctx.request.body = {};
                resolve();
            });
            ctx.req.on('error', reject);
        });
        // Skip bodyParser for webhook route
        await next();
        return;
    }
    await next();
});

// Body parser for all routes except webhook
app.use(bodyParser({
    jsonLimit: '50mb',
    formLimit: '50mb',
    textLimit: '50mb'
}));

// Serve static files from /assets path (videos and covers)
app.use(async (ctx, next) => {
    if (ctx.path.startsWith('/assets/')) {
        // 从 URL 中提取路径，例如 /assets/generate_id/video.mp4 -> .tmp/generate_id/video.mp4
        const relativePath = ctx.path.replace('/assets/', '');
        const filePath = path.join(TMP_DIR, relativePath);

        if (await fs.pathExists(filePath)) {
            const ext = path.extname(filePath).toLowerCase();

            // 设置正确的 Content-Type
            const mimeTypes = {
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.mov': 'video/quicktime',
                '.avi': 'video/x-msvideo',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
            };

            ctx.type = mimeTypes[ext] || 'application/octet-stream';
            ctx.body = fs.createReadStream(filePath);
            return;
        }
    }

    // 兼容旧的 /covers/ 路径
    if (ctx.path.includes('/covers/')) {
        if (ctx.path.endsWith('.png')) {
            const coverPath = path.join(TMP_DIR, ctx.path);
            if (await fs.pathExists(coverPath)) {
                ctx.type = 'image/png';
                ctx.body = fs.createReadStream(coverPath);
                return;
            }
        } else if (ctx.path.endsWith('.svg')) {
            const coverPath = path.join(TMP_DIR, ctx.path);
            if (await fs.pathExists(coverPath)) {
                ctx.type = 'image/svg+xml';
                ctx.body = fs.createReadStream(coverPath);
                return;
            }
        }
    }
    await next();
});


app.use(router.routes()).use(router.allowedMethods());

// Serve frontend dist files
app.use(serve(PLAYGROUND_DIST_DIR));

const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
server.timeout = 0;           // 所有接口不超时
server.keepAliveTimeout = 65000;