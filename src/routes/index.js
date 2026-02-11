import Router from 'koa-router';
import { AppController } from '../controllers/AppController.js';
import { AuthController } from '../controllers/AuthController.js';
import { ProjectController } from '../controllers/ProjectController.js';

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
router.get('/api/chatRecord', AuthController.authenticate, AppController.chatRecord);
router.get('/api/buildRecord', AuthController.authenticate, AppController.buildRecord);


// Project Routes - 项目管理
router.post('/api/projects', AuthController.authenticate, ProjectController.create);
router.post('/api/projects/save', AuthController.authenticate, ProjectController.createOrUpdate);
router.post('/api/projects/migrate', AuthController.authenticate, ProjectController.migrate);
router.get('/api/projects', AuthController.authenticate, ProjectController.getList);
router.get('/api/projects/by-driveid/:driveid', AuthController.authenticate, ProjectController.getByDriveid);
router.get('/api/projects/:id', AuthController.authenticate, ProjectController.getById);
router.put('/api/projects/:id', AuthController.authenticate, ProjectController.update);
router.delete('/api/projects/:id', AuthController.authenticate, ProjectController.delete);


export default router;
