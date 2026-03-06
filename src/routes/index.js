import Router from 'koa-router';
import { AppController } from '../controllers/AppController.js';
import { AuthController } from '../controllers/AuthController.js';
import { ProjectController } from '../controllers/ProjectController.js';
import { generate, serveFrame, getVideoList, checkVideoGeneration, updateVideoPaths, deleteVideoGeneration } from '../controllers/GenerateController.js';
import { createPayment, webhookHandler, getPaymentHistory, getCreditsBalance, getCreditsTransactions } from '../controllers/PaymentController.js';
import { getWorksList, getWorkDetail, publishWork, publishWorkUpload, likeWork, unlikeWork, addComment, deleteWork, updateWork, hideWork, unhideWork, getMyLikes, getUserLikes } from '../controllers/WorksController.js';
import { followUser, unfollowUser, getFollowing, getMyStats, getUserProfile, getUserFollowers, getUserFollowing } from '../controllers/FollowController.js';
import { getMyReferral, getTeam, getCommissions } from '../controllers/ReferralController.js';
import { getList as getNotifications, getUnreadCount as getNotificationUnreadCount, markRead as markNotificationRead, markAllRead as markNotificationsAllRead } from '../controllers/NotificationController.js';

const router = new Router();

// ==================== 公开路由（无需认证） ====================
// Auth Routes - 注册和登录无需认证
router.post('/api/auth/register', AuthController.register);
router.post('/api/auth/login', AuthController.login);
router.post('/api/auth/google', AuthController.googleLogin);

// Payment Webhook - LemonSqueezy 回调无需认证（有签名验证）
router.post('/api/payment/webhook', webhookHandler);



// ==================== 受保护路由（需要认证） ====================
// 所有以下路由都需要登录后才能访问

// Auth Routes - 获取当前用户信息、更新资料
router.get('/api/auth/me', AuthController.authenticate, AuthController.getCurrentUser);
router.patch('/api/user/profile', AuthController.authenticate, AuthController.updateProfile);
router.post('/api/user/avatar', AuthController.authenticate, AuthController.uploadAvatar);
router.delete('/api/user/avatar', AuthController.authenticate, AuthController.removeAvatar);
router.patch('/api/user/password', AuthController.authenticate, AuthController.updatePassword);


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
router.delete('/api/video-generations/:id', AuthController.authenticate, deleteVideoGeneration);

// Payment Routes - 支付和积分管理
router.post('/api/payment/create', AuthController.authenticate, createPayment);
router.get('/api/payment/history', AuthController.authenticate, getPaymentHistory);
router.get('/api/credits/balance', AuthController.authenticate, getCreditsBalance);
router.get('/api/credits/transactions', AuthController.authenticate, getCreditsTransactions);

// Works Routes - 广场作品
router.get('/api/works', AuthController.optionalAuthenticate, getWorksList);
router.get('/api/works/:id', AuthController.optionalAuthenticate, getWorkDetail);
router.post('/api/works/upload', AuthController.authenticate, publishWorkUpload);
router.post('/api/works', AuthController.authenticate, publishWork);
router.delete('/api/works/:id', AuthController.authenticate, deleteWork);
router.patch('/api/works/:id', AuthController.authenticate, updateWork);
router.post('/api/works/:id/like', AuthController.authenticate, likeWork);
router.delete('/api/works/:id/like', AuthController.authenticate, unlikeWork);
router.post('/api/works/:id/hide', AuthController.authenticate, hideWork);
router.delete('/api/works/:id/hide', AuthController.authenticate, unhideWork);
router.post('/api/works/:id/comments', AuthController.authenticate, addComment);

// Follow & Profile Routes
router.get('/api/users/following', AuthController.authenticate, getFollowing);
router.get('/api/users/me/stats', AuthController.authenticate, getMyStats);
router.get('/api/users/me/likes', AuthController.authenticate, getMyLikes);
router.get('/api/users/:userId/likes', getUserLikes);
router.patch('/api/user/likes-visibility', AuthController.authenticate, AuthController.updateLikesVisibility);
router.get('/api/users/:userId/profile', AuthController.optionalAuthenticate, getUserProfile);
router.get('/api/users/:userId/followers', getUserFollowers);
router.get('/api/users/:userId/following', getUserFollowing);
router.post('/api/users/:userId/follow', AuthController.authenticate, followUser);
router.delete('/api/users/:userId/follow', AuthController.authenticate, unfollowUser);

// Referral - 邀请与分佣
router.get('/api/referral/me', AuthController.authenticate, getMyReferral);
router.get('/api/referral/team', AuthController.authenticate, getTeam);
router.get('/api/referral/commissions', AuthController.authenticate, getCommissions);

// Notifications - 消息通知（点赞/评论/关注）
router.get('/api/notifications', AuthController.authenticate, getNotifications);
router.get('/api/notifications/unread-count', AuthController.authenticate, getNotificationUnreadCount);
router.patch('/api/notifications/read-all', AuthController.authenticate, markNotificationsAllRead);
router.patch('/api/notifications/:id/read', AuthController.authenticate, markNotificationRead);

export default router;
