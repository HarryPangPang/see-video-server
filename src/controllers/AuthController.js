import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs-extra';
import { UserModel, VerificationCodeModel } from '../models/UserModel.js';
import { TMP_DIR } from '../config/constants.js';
// import emailService from '../services/EmailService.js'; // 暂时禁用邮件服务

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';

function toUserResponse(user) {
    return {
        id: user.id,
        email: user.email,
        username: user.username,
        avatar: user.avatar || null,
        bio: user.bio || null,
        location: user.location || null,
        website: user.website || null,
        isGoogleUser: !!user.google_id,
        likes_public: user.likes_public ?? 0,
    };
}

// JWT 密钥（生产环境应该使用环境变量）
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * 认证控制器
 *
 * ===== 验证码功能已暂时禁用 =====
 * 当前阶段使用邮箱+密码注册登录
 * 验证码相关代码已保留但被注释
 */
export class AuthController {
    /**
     * 发送验证码
     * ===== 已暂时禁用 =====
     */
    static async sendVerificationCode(ctx) {
        // 暂时禁用验证码功能
        ctx.status = 501;
        ctx.body = { success: false, message: '验证码功能暂未启用' };
        return;

        /* ===== 验证码发送逻辑 - 已暂时禁用 =====
        const { email, type = 'register' } = ctx.request.body;

        // 验证邮箱格式
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            ctx.status = 400;
            ctx.body = { success: false, message: '邮箱格式无效' };
            return;
        }

        try {
            // 检查发送频率限制（1分钟内只能发送一次）
            const canSend = await VerificationCodeModel.checkRateLimit(email, type, 1);
            if (!canSend) {
                ctx.status = 429;
                ctx.body = { success: false, message: '发送过于频繁，请稍后再试' };
                return;
            }

            // 如果是注册，检查邮箱是否已存在
            if (type === 'register') {
                const existingUser = await UserModel.findByEmail(email);
                if (existingUser) {
                    ctx.status = 400;
                    ctx.body = { success: false, message: '该邮箱已被注册' };
                    return;
                }
            }

            // 如果是登录，检查邮箱是否存在
            if (type === 'login') {
                const user = await UserModel.findByEmail(email);
                if (!user) {
                    ctx.status = 400;
                    ctx.body = { success: false, message: '该邮箱未注册' };
                    return;
                }
            }

            // 生成6位数字验证码
            const code = Math.floor(100000 + Math.random() * 900000).toString();

            // 保存验证码到数据库
            await VerificationCodeModel.create(email, code, type);

            // 发送邮件
            const result = await emailService.sendVerificationCode(email, code, type);

            if (result.success) {
                ctx.body = {
                    success: true,
                    message: '验证码已发送到您的邮箱',
                    data: { email }
                };
            } else {
                ctx.status = 500;
                ctx.body = { success: false, message: '发送邮件失败，请稍后重试' };
            }
        } catch (error) {
            console.error('[AuthController] 发送验证码失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || '发送验证码失败' };
        }
        */
    }

    /**
     * 注册
     * 修改：不再需要验证码，直接使用邮箱+密码注册
     */
    static async register(ctx) {
        const { email, password, username, invite_code: inviteCode } = ctx.request.body;

        // 验证必填字段
        if (!email || !password) {
            ctx.status = 400;
            ctx.body = { success: false, message: '邮箱和密码不能为空' };
            return;
        }

        // 验证邮箱格式
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            ctx.status = 400;
            ctx.body = { success: false, message: '邮箱格式无效' };
            return;
        }

        // 验证密码长度
        if (password.length < 6) {
            ctx.status = 400;
            ctx.body = { success: false, message: '密码长度至少为6位' };
            return;
        }

        try {
            /* ===== 验证码验证逻辑 - 已暂时禁用 =====
            const verification = await VerificationCodeModel.verify(email, code, 'register');
            if (!verification.valid) {
                ctx.status = 400;
                ctx.body = { success: false, message: verification.message };
                return;
            }
            */

            // 解析邀请人（邀请码有效且不能是自己）
            let referredById = null;
            if (inviteCode && String(inviteCode).trim()) {
                const referrer = await UserModel.findByInviteCode(inviteCode);
                if (referrer) {
                    referredById = referrer.id;
                }
            }

            // 创建用户
            const user = await UserModel.create(email, password, username, referredById);

            // 生成 JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );

            /* ===== 欢迎邮件 - 已暂时禁用 =====
            emailService.sendWelcomeEmail(email, username).catch(err => {
                console.error('[AuthController] 发送欢迎邮件失败:', err);
            });
            */

            ctx.body = {
                success: true,
                message: '注册成功',
                data: {
                    token,
                    user: toUserResponse({ ...user, google_id: null }),
                }
            };
        } catch (error) {
            console.error('[AuthController] 注册失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || '注册失败' };
        }
    }

    /**
     * Google 登录：用前端传来的 id_token 验证后创建/查找用户并返回 JWT
     */
    static async googleLogin(ctx) {
        const { credential, invite_code: inviteCode } = ctx.request.body || {};
        if (!credential) {
            ctx.status = 400;
            ctx.body = { success: false, message: '缺少 Google 凭证' };
            return;
        }
        if (!GOOGLE_CLIENT_ID) {
            ctx.status = 500;
            ctx.body = { success: false, message: '服务端未配置 Google Client ID' };
            return;
        }
        try {
            const client = new OAuth2Client(GOOGLE_CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: credential,
                audience: GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const { sub: googleId, email, name } = payload;
            if (!email) {
                ctx.status = 400;
                ctx.body = { success: false, message: '无法获取 Google 邮箱信息' };
                return;
            }
            let user = await UserModel.findByGoogleId(googleId);
            if (!user) {
                user = await UserModel.findByEmail(email);
                if (user) {
                    const db = await (await import('../db/index.js')).getDb();
                    await db.run('UPDATE users SET google_id = ?, updated_at = ? WHERE id = ?', [googleId, Date.now(), user.id]);
                    user = await UserModel.findById(user.id);
                } else {
                    let referredById = null;
                    if (inviteCode && String(inviteCode).trim()) {
                        const referrer = await UserModel.findByInviteCode(inviteCode);
                        if (referrer) referredById = referrer.id;
                    }
                    user = await UserModel.createFromGoogle(email, googleId, name || undefined, referredById);
                }
            }
            const token = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );
            ctx.body = {
                success: true,
                message: '登录成功',
                data: {
                    token,
                    user: toUserResponse(user),
                },
            };
        } catch (error) {
            console.error('[AuthController] Google 登录失败:', error);
            ctx.status = 401;
            ctx.body = { success: false, message: error.message || 'Google 登录验证失败' };
        }
    }

    /**
     * 登录（密码登录）
     */
    static async login(ctx) {
        const { email, password } = ctx.request.body;

        if (!email || !password) {
            ctx.status = 400;
            ctx.body = { success: false, message: '邮箱和密码不能为空' };
            return;
        }

        try {
            // 查找用户
            const user = await UserModel.findByEmail(email);
            if (!user) {
                ctx.status = 401;
                ctx.body = { success: false, message: '邮箱或密码错误' };
                return;
            }

            // 验证密码
            const isValid = await UserModel.verifyPassword(password, user.password);
            if (!isValid) {
                ctx.status = 401;
                ctx.body = { success: false, message: '邮箱或密码错误' };
                return;
            }

            // 生成 JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );

            ctx.body = {
                success: true,
                message: '登录成功',
                data: {
                    token,
                    user: toUserResponse(user),
                },
            };
        } catch (error) {
            console.error('[AuthController] 登录失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: '登录失败' };
        }
    }

    /**
     * 验证码登录
     * ===== 已暂时禁用 =====
     */
    static async loginWithCode(ctx) {
        // 暂时禁用验证码登录
        ctx.status = 501;
        ctx.body = { success: false, message: '验证码登录功能暂未启用' };
        return;

        /* ===== 验证码登录逻辑 - 已暂时禁用 =====
        const { email, code } = ctx.request.body;

        if (!email || !code) {
            ctx.status = 400;
            ctx.body = { success: false, message: '邮箱和验证码不能为空' };
            return;
        }

        try {
            // 验证验证码
            const verification = await VerificationCodeModel.verify(email, code, 'login');
            if (!verification.valid) {
                ctx.status = 400;
                ctx.body = { success: false, message: verification.message };
                return;
            }

            // 查找用户
            const user = await UserModel.findByEmail(email);
            if (!user) {
                ctx.status = 404;
                ctx.body = { success: false, message: '用户不存在' };
                return;
            }

            // 生成 JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );

            ctx.body = {
                success: true,
                message: '登录成功',
                data: {
                    token,
                    user: {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                    }
                }
            };
        } catch (error) {
            console.error('[AuthController] 验证码登录失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: '登录失败' };
        }
        */
    }

    /**
     * 获取当前用户信息
     */
    static async getCurrentUser(ctx) {
        try {
            const user = await UserModel.findById(ctx.state.user.id);
            if (!user) {
                ctx.status = 404;
                ctx.body = { success: false, message: '用户不存在' };
                return;
            }

            ctx.body = {
                success: true,
                data: toUserResponse(user),
            };
        } catch (error) {
            console.error('[AuthController] 获取用户信息失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: '获取用户信息失败' };
        }
    }

    /**
     * 更新当前用户资料（昵称、简介、所在地、个人主页）
     */
    static async updateProfile(ctx) {
        try {
            const body = ctx.request.body || {};
            const username = typeof body.username === 'string' ? body.username.trim() : '';
            if (!username) {
                ctx.status = 400;
                ctx.body = { success: false, message: '昵称不能为空' };
                return;
            }
            if (username.length > 50) {
                ctx.status = 400;
                ctx.body = { success: false, message: '昵称最多50个字符' };
                return;
            }
            const userId = ctx.state.user?.id;
            if (!userId) {
                ctx.status = 401;
                ctx.body = { success: false, message: '未登录' };
                return;
            }
            const updates = { username };
            if (typeof body.bio === 'string') updates.bio = body.bio.trim().slice(0, 500) || null;
            if (typeof body.location === 'string') updates.location = body.location.trim().slice(0, 200) || null;
            if (typeof body.website === 'string') updates.website = body.website.trim().slice(0, 500) || null;
            const user = await UserModel.update(userId, updates);
            ctx.body = {
                success: true,
                data: toUserResponse(user),
            };
        } catch (error) {
            console.error('[AuthController] 更新资料失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || '更新资料失败' };
        }
    }

    /**
     * 上传头像
     * POST /api/user/avatar  multipart: avatar (image file)
     */
    static async uploadAvatar(ctx) {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: '未登录' };
            return;
        }
        const contentType = ctx.request.headers['content-type'] || '';
        if (!contentType.includes('multipart')) {
            ctx.status = 400;
            ctx.body = { success: false, message: '请使用 multipart/form-data 上传图片' };
            return;
        }
        const form = formidable({ multiples: false, maxFileSize: 2 * 1024 * 1024 });
        let file;
        try {
            const [fields, files] = await form.parse(ctx.req);
            file = Array.isArray(files.avatar) ? files.avatar[0] : files.avatar;
        } catch (err) {
            if (err.message && err.message.includes('maxFileSize')) {
                ctx.status = 400;
                ctx.body = { success: false, message: '头像大小不能超过 2MB' };
                return;
            }
            throw err;
        }
        if (!file || !file.filepath) {
            ctx.status = 400;
            ctx.body = { success: false, message: 'Please select an avatar image' };
            return;
        }
        const ext = (path.extname(file.originalFilename || '') || '.jpg').toLowerCase();
        const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
        if (!allowed.includes(ext)) {
            ctx.status = 400;
            ctx.body = { success: false, message: 'only support JPG、PNG、WEBP ' };
            return;
        }
        try {
            const avatarsDir = path.join(TMP_DIR, 'avatars');
            await fs.ensureDir(avatarsDir);
            const baseName = `${userId}${ext}`;
            const destPath = path.join(avatarsDir, baseName);
            await fs.move(file.filepath, destPath, { overwrite: true });
            const avatarUrl = `/assets/avatars/${baseName}`;
            const user = await UserModel.update(userId, { avatar: avatarUrl });
            ctx.body = { success: true, data: toUserResponse(user) };
        } catch (error) {
            console.error('[AuthController] 上传头像失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || 'Failed to upload avatar' };
        }
    }

    /**
     * 恢复默认头像（清除自定义头像）
     * DELETE /api/user/avatar
     */
    static async removeAvatar(ctx) {
        const userId = ctx.state.user?.id;
        if (!userId) {
            ctx.status = 401;
            ctx.body = { success: false, message: '未登录' };
            return;
        }
        try {
            const user = await UserModel.findById(userId);
            if (!user) {
                ctx.status = 404;
                ctx.body = { success: false, message: '用户不存在' };
                return;
            }
            if (user.avatar) {
                const avatarsDir = path.join(TMP_DIR, 'avatars');
                const ext = path.extname(user.avatar) || '.jpg';
                const baseName = `${userId}${ext}`;
                const filePath = path.join(avatarsDir, baseName);
                try {
                    await fs.remove(filePath);
                } catch (e) {
                    if (e.code !== 'ENOENT') console.warn('[AuthController] removeAvatar: delete file failed', e.message);
                }
            }
            await UserModel.update(userId, { avatar: null });
            const updated = await UserModel.findById(userId);
            ctx.body = { success: true, data: toUserResponse(updated) };
        } catch (error) {
            console.error('[AuthController] 恢复默认头像失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || '恢复默认头像失败' };
        }
    }

    /**
     * 修改密码（仅邮箱注册用户，Google 登录不支持）
     */
    static async updatePassword(ctx) {
        try {
            const userId = ctx.state.user?.id;
            if (!userId) {
                ctx.status = 401;
                ctx.body = { success: false, message: '未登录' };
                return;
            }
            const user = await UserModel.findById(userId);
            if (!user) {
                ctx.status = 404;
                ctx.body = { success: false, message: '用户不存在' };
                return;
            }
            if (user.google_id) {
                ctx.status = 400;
                ctx.body = { success: false, message: 'Google 登录不支持修改密码' };
                return;
            }
            const { currentPassword, newPassword } = ctx.request.body || {};
            if (!currentPassword || !newPassword) {
                ctx.status = 400;
                ctx.body = { success: false, message: '请填写当前密码和新密码' };
                return;
            }
            if (newPassword.length < 6) {
                ctx.status = 400;
                ctx.body = { success: false, message: '新密码至少6位' };
                return;
            }
            const valid = await UserModel.verifyPassword(currentPassword, user.password);
            if (!valid) {
                ctx.status = 400;
                ctx.body = { success: false, message: '当前密码错误' };
                return;
            }
            await UserModel.update(userId, { password: newPassword });
            ctx.body = { success: true, message: '密码已修改' };
        } catch (error) {
            console.error('[AuthController] 修改密码失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || '修改密码失败' };
        }
    }

    /**
     * 更新 Likes 可见性（公开/私密）
     * PATCH /api/user/likes-visibility
     */
    static async updateLikesVisibility(ctx) {
        try {
            const userId = ctx.state.user?.id;
            if (!userId) {
                ctx.status = 401;
                ctx.body = { success: false, message: '未登录' };
                return;
            }
            const body = ctx.request.body || {};
            const likesPublic = body.likes_public ? 1 : 0;
            const user = await UserModel.update(userId, { likes_public: likesPublic });
            ctx.body = { success: true, data: toUserResponse(user) };
        } catch (error) {
            console.error('[AuthController] 更新 likes 可见性失败:', error);
            ctx.status = 500;
            ctx.body = { success: false, message: error.message || 'Failed' };
        }
    }

    /**
     * JWT 认证中间件
     */
    static async authenticate(ctx, next) {
        const token = ctx.headers.authorization?.replace('Bearer ', '');
        if(ctx.state.isInternalService) {
            // 来自内部服务的请求，跳过用户认证
            await next();
            return;
        }
        if (!token) {
            ctx.status = 401;
            ctx.body = { success: false, message: '未提供认证令牌' };
            return;
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            ctx.state.user = decoded;
            await next();
        } catch (error) {
            ctx.status = 401;
            ctx.body = { success: false, message: '认证令牌无效或已过期' };
        }
    }

    /**
     * 可选 JWT 认证中间件（有 token 则解析并设置 ctx.state.user，无 token 也放行）
     */
    static async optionalAuthenticate(ctx, next) {
        const token = ctx.headers.authorization?.replace('Bearer ', '');
        if (token) {
            try {
                const decoded = jwt.verify(token, JWT_SECRET);
                ctx.state.user = decoded;
            } catch (_) {
                ctx.state.user = null;
            }
        } else {
            ctx.state.user = null;
        }
        await next();
    }

}
