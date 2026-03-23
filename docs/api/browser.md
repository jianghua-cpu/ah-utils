# 浏览器工具

浏览器工具模块提供各种浏览器相关的工具函数。

## isBrowser

判断当前环境是否为浏览器环境。

```typescript
const isBrowser: boolean
```

**示例**

```typescript
isBrowser   // true (在浏览器中) / false (在 Node.js 中)
```

## getQueryParam

获取 URL 查询参数。

```typescript
function getQueryParam(name: string): string | null
```

**示例**

```typescript
// URL: https://example.com?id=123&name=Alice
getQueryParam('id')    // '123'
getQueryParam('name')  // 'Alice'
getQueryParam('age')    // null (不存在)
```

## getAllQueryParams

获取所有 URL 查询参数。

```typescript
function getAllQueryParams(): Record<string, string>
```

**示例**

```typescript
// URL: https://example.com?id=123&name=Alice
getAllQueryParams()    // { id: '123', name: 'Alice' }
```

## debounce

防抖函数。

```typescript
function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait?: number
): (...args: Parameters<T>) => void
```

**示例**

```typescript
const handleSearch = debounce((query: string) => {
  console.log('搜索:', query);
}, 300);

// 快速连续调用，只会在停止调用 300ms 后执行一次
handleSearch('a');
handleSearch('ab');
handleSearch('abc');
// 300ms 后只输出: '搜索: abc'
```

## throttle

节流函数。

```typescript
function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait?: number
): (...args: Parameters<T>) => void
```

**示例**

```typescript
const handleScroll = throttle(() => {
  console.log('滚动位置:', window.scrollY);
}, 200);

// 快速滚动时，每 200ms 最多执行一次
window.addEventListener('scroll', handleScroll);
```

## once

确保函数只执行一次。

```typescript
function once<T extends (...args: unknown[]) => unknown>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined
```

**示例**

```typescript
const init = once(() => {
  console.log('初始化执行');
  return 'done';
});

init()   // '初始化执行', 'done'
init()   // 不执行, undefined
init()   // 不执行, undefined
```

## generateId

生成唯一 ID。

```typescript
function generateId(prefix?: string): string
```

**示例**

```typescript
generateId()          // 'id_1234567890_abc123def'
generateId('user')    // 'user_1234567890_abc123def'
generateId('order')   // 'order_1234567890_xyz456'
```

## copyToClipboard

复制文本到剪贴板。

```typescript
async function copyToClipboard(text: string): Promise<boolean>
```

**示例**

```typescript
try {
  const success = await copyToClipboard('Hello World');
  if (success) {
    console.log('复制成功');
  } else {
    console.log('复制失败');
  }
} catch (err) {
  console.error('复制出错:', err);
}
```

## storage

本地存储工具类。

```typescript
const storage: {
  get<T>(key: string, defaultValue?: T): T | undefined
  set<T>(key: string, value: T): boolean
  remove(key: string): boolean
  clear(): boolean
}
```

**示例**

```typescript
// 存储数据 (自动 JSON 序列化)
storage.set('user', { name: 'Alice', age: 25 })   // true
storage.set('count', 100)                         // true

// 读取数据 (自动 JSON 反序列化)
storage.get('user')           // { name: 'Alice', age: 25 }
storage.get('count')         // 100
storage.get('notExist')       // undefined
storage.get('notExist', 0)   // 0 (默认值)

// 删除数据
storage.remove('count')      // true

// 清空所有数据
storage.clear()              // true
```
