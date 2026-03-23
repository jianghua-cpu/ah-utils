# 快速开始

## 安装

使用 npm 安装：

```bash
npm install ah-util
```

使用 yarn 安装：

```bash
yarn add ah-util
```

使用 pnpm 安装：

```bash
pnpm add ah-util
```

## 基础使用

### ESM 导入（推荐）

```typescript
import { isString, trim } from 'ah-util';

// 类型判断
isString('hello'); // true
isString(123);    // false

// 字符串处理
trim('  hello  '); // 'hello'
```

### CJS 导入

```typescript
const { isString, trim } = require('ah-util');
```

### 浏览器直接引入

```html
<script src="https://unpkg.com/ah-util/dist/index.umd.js"></script>
<script>
  const { isString, trim } = AHUtil;
</script>
```

## 按需导入

为了更好的 Tree-shaking 效果，建议按需导入：

```typescript
import { isString } from 'ah-util/type';
import { trim } from 'ah-util/string';
import { unique } from 'ah-util/array';
```

## 下一步

- 查看 [API 文档](/api/type) 了解所有可用函数
- 查看 [安装使用](/guide/installation) 了解更详细的安装配置
