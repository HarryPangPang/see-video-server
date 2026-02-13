# 支付和积分流程测试文档

## 📋 完整流程图

```
┌─────────────────────────────────────────────────────────────┐
│                    用户发起视频生成请求                        │
│                  POST /api/generate                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
            ┌────────────────────────┐
            │  检查用户是否登录        │
            └────────┬───────────────┘
                     │
                     ├─ 未登录 → 返回 401 Unauthorized
                     │
                     └─ 已登录
                         │
                         ▼
            ┌────────────────────────┐
            │  检查积分余额 >= 1      │
            │  CreditsService         │
            │  .getUserCredits()     │
            └────────┬───────────────┘
                     │
                     ├─ 积分不足 (< 1)
                     │      │
                     │      └─→ 返回 400 错误
                     │           "积分不足，请先充值"
                     │              │
                     │              ▼
                     │      前端检测错误 → 跳转支付页面
                     │              │
                     │              ▼
                     │      用户选择充值套餐
                     │      POST /api/payment/create
                     │              │
                     │              ▼
                     │      创建 Lemon Squeezy 订单
                     │      保存 payments 表 (status: pending)
                     │              │
                     │              ▼
                     │      返回 Checkout URL
                     │              │
                     │              ▼
                     │      用户在 Lemon Squeezy 完成支付
                     │              │
                     │              ▼
                     │      Lemon Squeezy 发送 Webhook
                     │      POST /api/payment/webhook
                     │              │
                     │              ▼
                     │      验证 Webhook 签名
                     │              │
                     │              ├─ 签名无效 → 返回 401
                     │              │
                     │              └─ 签名有效
                     │                  │
                     │                  ▼
                     │         解析订单信息 (order_created)
                     │                  │
                     │                  ▼
                     │         检查订单状态 = "paid"
                     │                  │
                     │                  └─→ 更新 payments (status: completed)
                     │                      增加用户积分
                     │                      CreditsService.addCredits()
                     │                      记录 credits_transactions
                     │                          │
                     │                          └─→ 用户重新发起生成
                     │
                     └─ 积分充足 (>= 1)
                            │
                            ▼
               ┌────────────────────────┐
               │  立即扣除 1 积分        │
               │  CreditsService         │
               │  .deductCredits()      │
               │  creditsDeducted = true│
               └────────┬───────────────┘
                        │
                        ▼
               保存到 video_generations 表
               (status: pending, cost_credits: 1)
                        │
                        ▼
               转发到 Chrome 服务
               POST ${CHROME_SERVICE_URL}/api/generate
                        │
                        ├─────────────────────┐
                        │                     │
                        ▼                     ▼
                  ⚠️ 业务错误          ⚠️ 系统错误
              (图片尺寸不符等)        (服务异常、超时)
                        │                     │
                        └──────┬──────────────┘
                               │
                               ▼
                      CreditsService.refundCredits()
                      退还 1 积分
                      记录 credits_transactions (type: refund)
                      更新 video_generations (refunded: 1)
                               │
                               └─→ 返回错误信息给用户

                        ▼
                  ✅ 生成成功
                        │
                        └─→ 返回 generateId
                            视频生成中...
```

## 🔍 关键代码位置

### 1️⃣ 积分检查 & 扣除
**文件**: `src/controllers/GenerateController.js`
- **Line 66-73**: 检查用户登录
- **Line 75-88**: 检查积分余额
- **Line 91-103**: 扣除积分

### 2️⃣ 支付创建
**文件**: `src/controllers/PaymentController.js`
- **Line 38-87**: 创建支付订单
- **Line 60-77**: 调用 Lemon Squeezy API

### 3️⃣ Webhook 处理
**文件**: `src/controllers/PaymentController.js`
- **Line 112-184**: Webhook 处理器
- **Line 118-123**: 签名验证
- **Line 154-168**: 支付成功 → 增加积分

### 4️⃣ 积分退还
**文件**: `src/controllers/GenerateController.js`
- **Line 185-200**: 业务错误退款
- **Line 218-234**: 系统错误退款
- **Line 238-252**: 未预期错误退款 (新增)

### 5️⃣ 积分服务
**文件**: `src/services/CreditsService.js`
- **Line 10-14**: 获取用户积分
- **Line 22-50**: 增加积分 (充值)
- **Line 58-92**: 扣除积分 (消费)
- **Line 100-134**: 退还积分 (退款)

## ✅ 测试用例

### 测试 1: 积分不足 → 支付 → 生成成功

1. **准备**: 确保测试用户积分为 0
2. **操作**:
   ```bash
   # 1. 尝试生成视频（应该失败）
   curl -X POST http://localhost:80/api/generate \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "duration": "5s",
       "frameMode": "startEnd",
       "model": "v1.5",
       "ratio": "16:9"
     }'
   ```
3. **预期结果**:
   ```json
   {
     "success": false,
     "message": "积分不足，请先充值",
     "data": {
       "currentCredits": 0,
       "requiredCredits": 1
     }
   }
   ```
4. **操作**: 创建支付订单
   ```bash
   curl -X POST http://localhost:80/api/payment/create \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "amount": 9.99,
       "credits": 10
     }'
   ```
5. **预期结果**: 返回 checkoutUrl，用户完成支付
6. **验证**:
   ```bash
   # 检查积分余额
   curl -X GET http://localhost:80/api/credits/balance \
     -H "Authorization: Bearer YOUR_TOKEN"
   ```
   应该返回 10 积分

### 测试 2: 有积分 → 生成成功 → 积分减少

1. **准备**: 确保测试用户有至少 1 积分
2. **操作**: 生成视频
3. **预期结果**:
   - 返回 `success: true`
   - 返回 `projectId` 和 `generateId`
   - 用户积分减少 1

### 测试 3: 生成失败 → 积分退还

1. **准备**: 提供错误的图片格式（触发业务错误）
2. **操作**: 生成视频
3. **预期结果**:
   - 返回错误信息
   - 积分自动退还
4. **验证**: 检查 `credits_transactions` 表中有 `type: 'refund'` 记录

### 测试 4: Webhook 签名验证

```bash
# 使用测试脚本验证签名
node test-webhook-signature.js
```

## 🔧 手动测试 Webhook（本地开发）

### 方法 1: 使用 ngrok

```bash
# 1. 启动服务器
npm start

# 2. 启动 ngrok（新终端）
ngrok http 80

# 3. 复制 ngrok URL (例如: https://abc123.ngrok.io)
# 4. 在 Lemon Squeezy Dashboard 配置 Webhook:
#    URL: https://abc123.ngrok.io/api/payment/webhook
#    Event: order_created

# 5. 在 ngrok Web UI 查看请求
open http://localhost:4040
```

### 方法 2: 创建测试端点（模拟 Webhook）

创建文件 `test-webhook.sh`:

```bash
#!/bin/bash

# 生成测试 payload
PAYLOAD='{
  "meta": {
    "event_name": "order_created"
  },
  "data": {
    "id": "12345",
    "attributes": {
      "status": "paid",
      "checkout_data": {
        "custom": {
          "user_id": "1",
          "order_id": "order_test_12345",
          "credits": "10"
        }
      }
    }
  }
}'

# 生成签名
SECRET="7f715051dbc4c9809dec0cc164f501abf9c53e65"
SIGNATURE=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$SECRET" | cut -d' ' -f2)

# 发送请求
curl -X POST http://localhost:80/api/payment/webhook \
  -H "Content-Type: application/json" \
  -H "X-Signature: $SIGNATURE" \
  -d "$PAYLOAD"
```

## 📊 数据库验证

### 检查用户积分
```sql
SELECT id, email, credits FROM users WHERE email = 'test@example.com';
```

### 检查积分交易记录
```sql
SELECT
  id,
  user_id,
  amount,
  type,
  description,
  created_at
FROM credits_transactions
WHERE user_id = 1
ORDER BY created_at DESC
LIMIT 10;
```

### 检查支付订单
```sql
SELECT
  id,
  user_id,
  order_id,
  amount,
  credits,
  status,
  created_at
FROM payments
WHERE user_id = 1
ORDER BY created_at DESC;
```

### 检查视频生成记录
```sql
SELECT
  id,
  user_id,
  status,
  cost_credits,
  refunded,
  created_at
FROM video_generations
WHERE user_id = 1
ORDER BY created_at DESC
LIMIT 10;
```

## ⚠️ 已修复的问题

### ✅ 修复 1: 泛型异常未退款
**位置**: `GenerateController.js:238-252`

**修复前**: 外层 catch 块不会退还积分

**修复后**:
- 添加 `creditsDeducted` 标志追踪积分是否已扣除
- 在外层 catch 块中检查标志并退款

### ✅ 修复 2: Webhook 签名验证
**位置**: `PaymentController.js:365-398`

**状态**: 已验证正常工作
- 使用 HMAC-SHA256 验证
- 使用 `crypto.timingSafeEqual` 防止时序攻击
- 支持你的 signing secret

## 🎯 前端集成建议

### 积分不足处理
```javascript
// 前端代码示例
async function generateVideo(params) {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    const data = await response.json();

    // 检查积分不足错误
    if (!data.success && data.message.includes('积分不足')) {
      // 跳转到支付页面
      window.location.href = '/payment?reason=insufficient_credits';
      return;
    }

    if (data.success) {
      // 生成成功，显示进度
      showGenerationProgress(data.data.projectId);
    }
  } catch (error) {
    console.error('生成失败:', error);
  }
}
```

### 支付成功后返回
```javascript
// 支付页面代码
async function handlePaymentSuccess() {
  // 支付成功后，轮询检查积分
  const checkCredits = setInterval(async () => {
    const response = await fetch('/api/credits/balance', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.data.credits > 0) {
      clearInterval(checkCredits);
      // 返回生成页面
      window.location.href = '/generate?credits_added=true';
    }
  }, 2000); // 每 2 秒检查一次
}
```

## 📝 API 文档

### POST /api/generate
生成视频

**Headers:**
- `Authorization: Bearer {token}`

**Body:**
```json
{
  "duration": "5s",
  "frameMode": "startEnd",
  "model": "v1.5",
  "ratio": "16:9",
  "prompt": "描述文本",
  "startFrame": "data:image/jpeg;base64,...",
  "endFrame": "data:image/jpeg;base64,..."
}
```

**Responses:**
- `200`: 生成成功
- `400`: 积分不足 / 参数错误
- `401`: 未登录
- `500`: 服务器错误

### POST /api/payment/create
创建支付订单

**Headers:**
- `Authorization: Bearer {token}`

**Body:**
```json
{
  "amount": 9.99,
  "credits": 10
}
```

**Responses:**
```json
{
  "success": true,
  "data": {
    "orderId": "order_1234567890_1",
    "checkoutUrl": "https://checkout.lemonsqueezy.com/...",
    "amount": 9.99,
    "credits": 10
  }
}
```

### GET /api/credits/balance
获取积分余额

**Headers:**
- `Authorization: Bearer {token}`

**Responses:**
```json
{
  "success": true,
  "data": {
    "credits": 15
  }
}
```

### GET /api/credits/transactions
获取积分交易记录

**Headers:**
- `Authorization: Bearer {token}`

**Responses:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "amount": 10,
      "type": "purchase",
      "description": "充值 9.99 元",
      "created_at": 1234567890
    },
    {
      "id": 2,
      "amount": -1,
      "type": "consume",
      "description": "生成视频 - uuid",
      "created_at": 1234567891
    }
  ]
}
```

## 🔐 环境变量配置

确保 `.env` 文件配置正确:

```env
# Lemon Squeezy 配置
LEMONSQUEEZY_API_KEY=your_api_key
LEMONSQUEEZY_STORE_ID=291294
LEMONSQUEEZY_WEBHOOK_SECRET=7f715051dbc4c9809dec0cc164f501abf9c53e65

# Variant IDs
LEMONSQUEEZY_VARIANT_ID_TEST=1301436
LEMONSQUEEZY_VARIANT_ID_1=1301439
LEMONSQUEEZY_VARIANT_ID_10=1301443
LEMONSQUEEZY_VARIANT_ID_30=1301699
LEMONSQUEEZY_VARIANT_ID_50=1301700
```

## 🎉 总结

**流程完整度**: ✅ 完整
**积分检查**: ✅ 正常
**积分扣除**: ✅ 正常
**积分退还**: ✅ 完整（包含所有错误场景）
**支付流程**: ✅ 完整
**Webhook**: ✅ 正常
**签名验证**: ✅ 安全

所有核心流程已完整实现，并且已修复潜在的积分不退还问题。
