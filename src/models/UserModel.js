import bcrypt from 'bcrypt';
import { getDb } from '../db/index.js';

/**
 * 用户模型
 */
export class UserModel {
    /**
     * 创建新用户
     * @param {string} email
     * @param {string} password
     * @param {string} [username]
     * @param {number} [referredById] - 邀请人用户 ID（通过邀请码解析得到）
     */
    static async create(email, password, username = null, referredById = null) {
        const db = await getDb();
        const now = Date.now();
        // 邮箱注册时若无昵称，默认用 @ 前部分
        const displayName = (username && String(username).trim()) ? String(username).trim() : email.split('@')[0] || 'user';

        // 密码加密
        const hashedPassword = await bcrypt.hash(password, 10);

        const fields = ['email', 'password', 'username', 'created_at', 'updated_at'];
        const placeholders = ['?', '?', '?', '?', '?'];
        const values = [email, hashedPassword, displayName, now, now];

        if (referredById != null) {
            fields.push('referred_by_id');
            placeholders.push('?');
            values.push(referredById);
        }

        try {
            const result = await db.run(
                `INSERT INTO users (${fields.join(', ')}) VALUES (${placeholders.join(', ')})`,
                values
            );

            return {
                id: result.lastID,
                email,
                username: displayName,
                created_at: now,
                referred_by_id: referredById ?? undefined,
            };
        } catch (error) {
            if (error.message.includes('UNIQUE constraint failed')) {
                throw new Error('邮箱已被注册');
            }
            throw error;
        }
    }

    /**
     * 根据邮箱查找用户
     */
    static async findByEmail(email) {
        const db = await getDb();
        return await db.get('SELECT * FROM users WHERE email = ?', [email]);
    }

    /**
     * 根据 Google ID 查找用户
     */
    static async findByGoogleId(googleId) {
        if (!googleId) return null;
        const db = await getDb();
        return await db.get('SELECT * FROM users WHERE google_id = ?', [googleId]);
    }

    /**
     * 使用 Google 信息创建或获取用户（用于 Google 登录）
     * @param {number} [referredById] - 邀请人用户 ID（新用户且带邀请码时传入）
     */
    static async createFromGoogle(email, googleId, name = null, referredById = null) {
        const db = await getDb();
        const now = Date.now();
        const displayName = (name && String(name).trim()) ? String(name).trim() : (email.split('@')[0] || 'user');
        const hashedPassword = await bcrypt.hash('google-' + googleId + '-' + Math.random(), 10);

        const fields = ['email', 'password', 'username', 'google_id', 'created_at', 'updated_at'];
        const placeholders = ['?', '?', '?', '?', '?', '?'];
        const values = [email, hashedPassword, displayName, googleId, now, now];
        if (referredById != null) {
            fields.push('referred_by_id');
            placeholders.push('?');
            values.push(referredById);
        }

        try {
            const result = await db.run(
                `INSERT INTO users (${fields.join(', ')}) VALUES (${placeholders.join(', ')})`,
                values
            );
            return {
                id: result.lastID,
                email,
                username: displayName,
                google_id: googleId,
                created_at: now,
                referred_by_id: referredById ?? undefined,
            };
        } catch (error) {
            if (error.message.includes('UNIQUE constraint failed')) {
                const existing = await UserModel.findByGoogleId(googleId);
                if (existing) return existing;
                const byEmail = await UserModel.findByEmail(email);
                if (byEmail) return byEmail;
            }
            throw error;
        }
    }

    /**
     * 根据 ID 查找用户
     */
    static async findById(id) {
        const db = await getDb();
        return await db.get('SELECT * FROM users WHERE id = ?', [id]);
    }

    /**
     * 根据邀请码查找用户（用于注册时绑定上级）
     */
    static async findByInviteCode(inviteCode) {
        if (!inviteCode || typeof inviteCode !== 'string') return null;
        const code = String(inviteCode).trim().toUpperCase();
        if (!code) return null;
        const db = await getDb();
        return await db.get('SELECT id, username FROM users WHERE invite_code = ?', [code]);
    }

    /**
     * 验证密码
     */
    static async verifyPassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    /**
     * 更新用户信息
     */
    static async update(id, updates) {
        const db = await getDb();
        const now = Date.now();

        const allowedFields = ['username', 'password', 'avatar', 'bio', 'location', 'website', 'background'];
        const fields = [];
        const values = [];

        for (const [key, value] of Object.entries(updates)) {
            if (allowedFields.includes(key)) {
                if (key === 'password') {
                    // 密码需要加密
                    fields.push(`${key} = ?`);
                    values.push(await bcrypt.hash(value, 10));
                } else {
                    fields.push(`${key} = ?`);
                    values.push(value);
                }
            }
        }

        if (fields.length === 0) {
            throw new Error('没有可更新的字段');
        }

        fields.push('updated_at = ?');
        values.push(now);
        values.push(id);

        await db.run(
            `UPDATE users SET ${fields.join(', ')} WHERE id = ?`,
            values
        );

        return await UserModel.findById(id);
    }

    /**
     * 删除用户
     */
    static async delete(id) {
        const db = await getDb();
        await db.run('DELETE FROM users WHERE id = ?', [id]);
    }
}

/**
 * 验证码模型
 */
export class VerificationCodeModel {
    /**
     * 创建验证码
     */
    static async create(email, code, type = 'register') {
        const db = await getDb();
        const now = Date.now();
        const expiresAt = now + 5 * 60 * 1000; // 5分钟后过期

        await db.run(
            `INSERT INTO verification_codes (email, code, type, expires_at, created_at)
             VALUES (?, ?, ?, ?, ?)`,
            [email, code, type, expiresAt, now]
        );

        return { email, code, type, expires_at: expiresAt };
    }

    /**
     * 验证验证码
     */
    static async verify(email, code, type = 'register') {
        const db = await getDb();
        const now = Date.now();

        const record = await db.get(
            `SELECT * FROM verification_codes
             WHERE email = ? AND code = ? AND type = ? AND used = 0 AND expires_at > ?
             ORDER BY created_at DESC LIMIT 1`,
            [email, code, type, now]
        );

        if (!record) {
            return { valid: false, message: '验证码无效或已过期' };
        }

        // 标记为已使用
        await db.run(
            'UPDATE verification_codes SET used = 1 WHERE id = ?',
            [record.id]
        );

        return { valid: true, record };
    }

    /**
     * 清理过期的验证码
     */
    static async cleanExpired() {
        const db = await getDb();
        const now = Date.now();
        await db.run('DELETE FROM verification_codes WHERE expires_at < ?', [now]);
    }

    /**
     * 检查验证码发送频率限制
     */
    static async checkRateLimit(email, type = 'register', limitMinutes = 1) {
        const db = await getDb();
        const now = Date.now();
        const limitTime = now - limitMinutes * 60 * 1000;

        const count = await db.get(
            `SELECT COUNT(*) as count FROM verification_codes
             WHERE email = ? AND type = ? AND created_at > ?`,
            [email, type, limitTime]
        );

        return count.count === 0;
    }
}
