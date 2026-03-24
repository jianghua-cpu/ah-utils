# ah-utils-tools

轻量级前端工具库，支持 ESM、CJS、UMD 三种模块格式，可通过 npm 安装或 script 标签直接引入。

## 特性

- 📦 **多种格式**：同时支持 ESM、CJS、UMD，自动适配不同环境
- 📝 **TypeScript**：使用 TypeScript 编写，提供完整的类型定义
- 🌳 **轻量小巧**：只包含必要的工具函数，无外部依赖
- 🔧 **使用简单**：统一的 API 设计，易于理解和使用

## 安装

### npm 安装

```bash
npm install ah-utils-tools
```

### yarn 安装

```bash
yarn add ah-utils-tools
```

### pnpm 安装

```bash
pnpm add ah-utils-tools
```

### CDN 引入（浏览器）

```html
<!-- 引入 UMD 版本，通过 window.UhUtil 访问 -->
<script src="https://unpkg.com/ah-utils-tools/dist/index.umd.js"></script>
```

## 使用方式

### ES Module（推荐）

```javascript
import { isString, trim, debounce } from 'ah-utils-tools';
```

### CommonJS

```javascript
const { isString, trim, debounce } = require('ah-utils-tools');
```

### 浏览器全局变量

```javascript
// UMD 方式引入后，通过 UhUtil 访问
UhUtil.isString('hello'); // true
UhUtil.debounce(fn, 300);
```

## API 文档

### 类型判断

| 函数 | 说明 |
|------|------|
| `isString(value)` | 判断是否为字符串 |
| `isNumber(value)` | 判断是否为数字 |
| `isBoolean(value)` | 判断是否为布尔值 |
| `isFunction(value)` | 判断是否为函数 |
| `isArray(value)` | 判断是否为数组 |
| `isObject(value)` | 判断是否为对象 |
| `isDate(value)` | 判断是否为日期对象 |
| `isRegExp(value)` | 判断是否为正则表达式 |
| `isNil(value)` | 判断是否为 null 或 undefined |
| `isPromise(value)` | 判断是否为 Promise 对象 |

### 字符串工具

| 函数 | 说明 |
|------|------|
| `trim(str, options?)` | 去除字符串两端空格 |
| `trimAll(str)` | 去除字符串中所有空格 |
| `capitalize(str)` | 首字母大写 |
| `uncapitalize(str)` | 首字母小写 |
| `camelToKebab(str)` | 驼峰转短横线命名 |
| `kebabToCamel(str)` | 短横线转驼峰命名 |
| `snakeToCamel(str)` | 下划线转驼峰命名 |
| `repeat(str, times)` | 重复字符串指定次数 |
| `padStart(str, length, fillStr?)` | 字符串左侧补全 |
| `padEnd(str, length, fillStr?)` | 字符串右侧补全 |
| `truncate(str, maxLength, suffix?)` | 截断字符串并添加省略号 |

### 数组工具

| 函数 | 说明 |
|------|------|
| `isEmptyArray(arr)` | 判断数组是否为空 |
| `unique(arr)` | 去除数组重复项 |
| `uniqueBy(arr, compareFn)` | 基于比较函数去重 |
| `flatten(arr, depth?)` | 扁平化数组 |
| `flattenDeep(arr)` | 完全扁平化数组 |
| `chunk(arr, size)` | 分块数组 |
| `nth(arr, n)` | 获取第 n 个元素（支持负数） |
| `first(arr)` | 获取第一个元素 |
| `last(arr)` | 获取最后一个元素 |
| `intersection(arr1, arr2)` | 数组交集 |
| `difference(arr1, arr2)` | 数组差集 |
| `union(arr1, arr2)` | 数组并集 |
| `sample(arr)` | 随机获取数组元素 |
| `shuffle(arr)` | 打乱数组顺序 |

### 对象工具

| 函数 | 说明 |
|------|------|
| `isEmptyObject(value)` | 判断对象是否为空 |
| `deepClone(obj)` | 深拷贝对象 |
| `shallowClone(obj)` | 浅拷贝对象 |
| `get(obj, path, defaultValue?)` | 获取对象指定路径的值 |
| `set(obj, path, value)` | 设置对象指定路径的值 |
| `omit(obj, keys)` | 排除指定键 |
| `pick(obj, keys)` | 选取指定键 |
| `merge(...objects)` | 合并多个对象 |
| `toQueryString(params)` | 转换为查询参数字符串 |

### 浏览器工具

| 函数/属性 | 说明 |
|------|------|
| `isBrowser` | 是否为浏览器环境 |
| `getQueryParam(name)` | 获取 URL 查询参数 |
| `getAllQueryParams()` | 获取所有 URL 查询参数 |
| `debounce(fn, wait)` | 防抖函数 |
| `throttle(fn, wait)` | 节流函数 |
| `once(fn)` | 确保函数只执行一次 |
| `generateId(prefix?)` | 生成唯一 ID |
| `copyToClipboard(text)` | 复制文本到剪贴板 |
| `storage` | 本地存储工具集 |

### storage 本地存储

| 方法 | 说明 |
|------|------|
| `storage.get(key, defaultValue?)` | 获取存储值 |
| `storage.set(key, value)` | 设置存储值 |
| `storage.remove(key)` | 删除指定项 |
| `storage.clear()` | 清空所有存储 |

## 示例

### 类型判断

```javascript
import { isString, isArray, isNil } from 'ah-utils-tools';

isString('hello');    // true
isString(123);        // false
isArray([1, 2, 3]);   // true
isNil(null);          // true
isNil(undefined);     // true
```

### 字符串处理

```javascript
import { trim, camelToKebab, truncate } from 'ah-utils-tools';

trim('  hello  ');           // 'hello'
camelToKebab('helloWorld');  // 'hello-world'
truncate('这是一个很长的字符串', 10); // '这是一个很长的...'
```

### 数组操作

```javascript
import { unique, chunk, intersection } from 'ah-utils-tools';

unique([1, 2, 2, 3]);              // [1, 2, 3]
chunk([1, 2, 3, 4, 5], 2);         // [[1, 2], [3, 4], [5]]
intersection([1, 2, 3], [2, 3]);  // [2, 3]
```

### 对象操作

```javascript
import { deepClone, get, set } from 'ah-utils-tools';

const obj = { user: { profile: { name: '张三' } } };
get(obj, 'user.profile.name');     // '张三'
set(obj, 'user.profile.age', 18); // { user: { profile: { name: '张三', age: 18 } } }
deepClone(obj);                    // 深拷贝
```

### 函数工具

```javascript
import { debounce, throttle, once } from 'ah-utils-tools';

// 防抖：最后一次点击后 300ms 执行
const debouncedFn = debounce(() => {
  console.log('执行');
}, 300);

// 节流：每 300ms 最多执行一次
const throttledFn = throttle(() => {
  console.log('执行');
}, 300);

// 只执行一次
const onceFn = once(() => {
  console.log('只执行一次');
});
```

### 本地存储

```javascript
import { storage } from 'ah-utils-tools';

// 存储数据（自动 JSON 序列化）
storage.set('user', { name: '张三', age: 18 });

// 读取数据（自动 JSON 反序列化）
const user = storage.get('user');
console.log(user); // { name: '张三', age: 18 }

// 删除数据
storage.remove('user');

// 清空所有数据
storage.clear();
```

## 注意事项

1. 所有工具函数均为纯函数，无副作用
2. `deepClone` 支持 Date、RegExp、Array 等常用类型的深拷贝
3. 浏览器相关工具在 Node.js 环境中会返回安全默认值
4. `storage` 工具会自动处理 JSON 序列化/反序列化

## 文档

在线文档：https://your-username.github.io/ah-utils-tools

本地开发文档：

```bash
npm run docs:dev
```

构建文档：

```bash
npm run docs:build
```

## License

MIT
