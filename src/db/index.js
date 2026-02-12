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
            created_at INTEGER NOT NULL,
            updated_at INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

    `);

    // 数据库迁移：添加新字段
    return dbInstance;
};
