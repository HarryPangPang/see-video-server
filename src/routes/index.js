import Router from 'koa-router';
import { AppController } from '../controllers/AppController.js';
import { AuthController } from '../controllers/AuthController.js';
import { ProjectController } from '../controllers/ProjectController.js';
import { generate, serveFrame, getVideoList, checkVideoGeneration, updateVideoPaths } from '../controllers/GenerateController.js';
import { createPayment, webhookHandler, getPaymentHistory, getCreditsBalance, getCreditsTransactions } from '../controllers/PaymentController.js';

const router = new Router();

// ==================== 公开路由（无需认证） ====================
// Auth Routes - 注册和登录无需认证
router.post('/api/auth/register', AuthController.register);
router.post('/api/auth/login', AuthController.login);

// Payment Webhook - LemonSqueezy 回调无需认证（有签名验证）
router.post('/api/payment/webhook', webhookHandler);



// ==================== 受保护路由（需要认证） ====================
// 所有以下路由都需要登录后才能访问

// Auth Routes - 获取当前用户信息
router.get('/api/auth/me', AuthController.authenticate, AuthController.getCurrentUser);


// App Routes - 应用源码存储
router.post('/api/apps', AuthController.authenticate, AppController.save);
router.get('/api/apps', AuthController.authenticate, AppController.get);

// Project Routes - 项目管理
router.post('/api/projects', AuthController.authenticate, ProjectController.create);

// 视频生成：接收参数 -> 落库 -> 转发 chrome 并打开即梦页面（可选带 token 以记录 user_id）
router.post('/api/generate', AuthController.authenticate, generate);

// 首帧/尾帧图片地址：供 DB 中 start_frame/end_frame 的 URL 访问
router.get('/api/generations/:id/frame/:which', serveFrame);

// 获取视频列表：转发到 Chrome 服务获取即梦视频列表
router.get('/api/video-list', AuthController.authenticate, getVideoList);

// 视频生成资源管理：用于 Chrome 服务检查和保存视频本地路径
router.post('/api/video-generations/check', checkVideoGeneration);
router.post('/api/video-generations/update-paths', updateVideoPaths);

// Payment Routes - 支付和积分管理
router.post('/api/payment/create', AuthController.authenticate, createPayment);
router.get('/api/payment/history', AuthController.authenticate, getPaymentHistory);
router.get('/api/credits/balance', AuthController.authenticate, getCreditsBalance);
router.get('/api/credits/transactions', AuthController.authenticate, getCreditsTransactions);

export default router;
