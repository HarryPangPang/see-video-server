import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs-extra';
import { PROJECT_ROOT } from '../config/constants.js';

const dbDir = path.join(PROJECT_ROOT, 'database');
const dbPath = path.join(dbDir, 'deployments.db');

fs.ensureDirSync(dbDir);

let dbInstance = null;

export const getDb = async () => {
    if (dbInstance) return dbInstance;

    dbInstance = await open({
        filename: dbPath,
        driver: sqlite3.Database
    });

    // Enable WAL mode for better concurrency
    await dbInstance.run('PRAGMA journal_mode = WAL');

    
    await dbInstance.exec(`

        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            username TEXT,
            credits INTEGER DEFAULT 0,
            created_at INTEGER NOT NULL,
            updated_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS projects (
            id TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            username TEXT,
            type TEXT,
            platform_id TEXT,
            model_label TEXT,
            model_value TEXT,
            title TEXT,
            prompt TEXT,
            chat_content TEXT,
            driveid TEXT,
            deploy_url TEXT,
            deploy_type TEXT,
            status TEXT DEFAULT 'draft',
            files TEXT,
            source_url TEXT,
            created_at INTEGER NOT NULL,
            updated_at INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS video_generations (
            id TEXT PRIMARY KEY,
            user_id INTEGER,
            creation_type TEXT NOT NULL,
            duration TEXT NOT NULL,
            end_frame TEXT,
            frame_mode TEXT NOT NULL,
            model TEXT NOT NULL,
            prompt TEXT,
            ratio TEXT NOT NULL,
            start_frame TEXT,
            omni_frames TEXT,
            generate_id TEXT,
            is_generated TEXT,
            video_url TEXT,
            cover_url TEXT,
            video_thumbnail TEXT,
            video_duration TEXT,
            video_size TEXT,
            video_local_path TEXT,
            cover_local_path TEXT,
            status TEXT DEFAULT 'pending',
            cost_credits INTEGER DEFAULT 1,
            refunded INTEGER DEFAULT 0,
            created_at INTEGER NOT NULL,
            updated_at INTEGER,
            error_message TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS payments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            order_id TEXT UNIQUE NOT NULL,
            amount REAL NOT NULL,
            credits INTEGER NOT NULL,
            status TEXT DEFAULT 'pending',
            lemonsqueezy_data TEXT,
            created_at INTEGER NOT NULL,
            updated_at INTEGER,
             create_snapshot TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id)
           
        );

        CREATE TABLE IF NOT EXISTS credits_transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            amount INTEGER NOT NULL,
            type TEXT NOT NULL,
            related_id TEXT,
            description TEXT,
            created_at INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

    `);

    // 数据库迁移：添加新字段
    const migrations = [
        { table: 'video_generations', column: 'omni_frames', type: 'TEXT' },
        { table: 'users', column: 'credits', type: 'INTEGER DEFAULT 0' },
        { table: 'video_generations', column: 'cost_credits', type: 'INTEGER DEFAULT 1' },
        { table: 'video_generations', column: 'refunded', type: 'INTEGER DEFAULT 0' },
        { table: 'video_generations', column: 'error_message', type: 'TEXT' },
    ];

    for (const { table, column, type } of migrations) {
        try {
            await dbInstance.run(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`);
            console.log(`[DB] Added ${column} column to ${table} table`);
        } catch (err) {
            if (!err.message.includes('duplicate column name')) {
                console.warn(`[DB] Migration warning for ${table}.${column}:`, err.message);
            }
        }
    }

    return dbInstance;
};
