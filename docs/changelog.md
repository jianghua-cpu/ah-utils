# 更新日志

所有重要的版本更新都会记录在此。

## v1.0.0 (2024-01-01)

### 首次发布

ah-util 1.0.0 正式发布！

#### 新增功能

- **类型判断模块** - 提供 10 种类型判断函数
  - `isString` - 判断字符串
  - `isNumber` - 判断数字
  - `isBoolean` - 判断布尔值
  - `isFunction` - 判断函数
  - `isArray` - 判断数组
  - `isObject` - 判断对象
  - `isDate` - 判断日期
  - `isRegExp` - 判断正则
  - `isNil` - 判断空值
  - `isPromise` - 判断 Promise

- **字符串模块** - 提供 11 种字符串处理函数
  - `trim` / `trimAll` - 去除空格
  - `capitalize` / `uncapitalize` - 首字母大小写
  - `camelToKebab` / `kebabToCamel` / `snakeToCamel` - 命名转换
  - `repeat` - 字符串重复
  - `padStart` / `padEnd` - 字符串补全
  - `truncate` - 字符串截断

- **数组模块** - 提供 14 种数组处理函数
  - `isEmptyArray` - 判断空数组
  - `unique` / `uniqueBy` - 数组去重
  - `flatten` / `flattenDeep` - 数组扁平化
  - `chunk` - 数组分块
  - `nth` / `first` / `last` - 获取元素
  - `intersection` / `difference` / `union` - 数组集合运算
  - `sample` - 随机抽样
  - `shuffle` - 数组洗牌

- **对象模块** - 提供 9 种对象处理函数
  - `isEmptyObject` - 判断空对象
  - `deepClone` / `shallowClone` - 对象拷贝
  - `get` / `set` - 属性存取
  - `omit` / `pick` - 属性筛选
  - `merge` - 对象合并
  - `toQueryString` - 转查询字符串

- **浏览器模块** - 提供 8 种浏览器工具
  - `isBrowser` - 环境判断
  - `getQueryParam` / `getAllQueryParams` - URL 参数解析
  - `debounce` / `throttle` - 函数节流防抖
  - `once` - 单次执行
  - `generateId` - ID 生成
  - `copyToClipboard` - 剪贴板操作
  - `storage` - 本地存储封装

#### 特性

- 零依赖，体积小
- 完整的 TypeScript 类型定义
- 支持 ESM、CJS、UMD 三种导出格式
- 支持按需导入，Tree-shaking 友好
- 详细的 API 文档
