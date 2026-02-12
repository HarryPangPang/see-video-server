import Router from 'koa-router';
import { AppController } from '../controllers/AppController.js';
import { AuthController } from '../controllers/AuthController.js';
import { ProjectController } from '../controllers/ProjectController.js';
import { generate } from '../controllers/GenerateController.js';

const router = new Router();

// ==================== 公开路由（无需认证） ====================
// Auth Routes - 注册和登录无需认证
router.post('/api/auth/register', AuthController.register);
router.post('/api/auth/login', AuthController.login);



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


export default router;
