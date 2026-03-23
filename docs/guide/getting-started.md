# 安装使用

## 环境要求

- Node.js >= 14.0.0
- TypeScript >= 4.0.0（可选，但推荐使用）

## 安装方式

### npm

```bash
npm install ah-util
```

### yarn

```bash
yarn add ah-util
```

### pnpm

```bash
pnpm add ah-util
```

### CDN

你也可以通过 CDN 直接在浏览器中使用：

```html
<!-- UMD 格式 -->
<script src="https://unpkg.com/ah-util/dist/index.umd.js"></script>

<!-- ESM 格式 -->
<script type="module">
  import { isString } from 'https://unpkg.com/ah-util/dist/index.esm.js';
</script>
```

## TypeScript 配置

ah-util 提供完整的类型定义，无需额外安装 `@types` 包。

确保你的 `tsconfig.json` 包含以下配置：

```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

## CDN 加速

你也可以使用其他 CDN 服务：

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/ah-util/dist/index.umd.js"></script>

<!-- cdnjs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ah-util/1.0.0/index.umd.js"></script>
```

## 版本说明

| 格式 | 文件 | 适用场景 |
|------|------|----------|
| ESM | `dist/index.esm.js` | 现代打包工具（Vite、Webpack 5） |
| CJS | `dist/index.cjs.js` | Node.js、Serverless |
| UMD | `dist/index.umd.js` | 浏览器直接引入 |
| Types | `dist/index.d.ts` | TypeScript 类型声明 |
