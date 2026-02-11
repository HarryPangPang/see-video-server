import { getDb } from '../db/index.js';

let isProcessing = false;
let scanTimer = null;

// 扫描间隔配置
const SCAN_INTERVAL = {
    IDLE: 10000,      // 空闲时10秒扫描一次
    BUSY: 30000,      // 有任务运行时30秒后再扫
};

export const startWorker = async () => {
    console.log('[Worker] Started build worker with dynamic scheduling');

    // 启动时恢复被中断的任务

    // 开始扫描
    scheduleNextScan(SCAN_INTERVAL.IDLE);
};



/**
 * 调度下次扫描
 */
const scheduleNextScan = (delay) => {
    // 清除之前的定时器
    if (scanTimer) {
        clearTimeout(scanTimer);
    }


};

