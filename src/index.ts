/**
 * uh-util - 轻量级前端工具库
 *
 * @description 提供常用的类型判断、字符串、数组、对象、浏览器等工具函数
 * @version 1.0.0
 */

// 类型判断
export {
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isArray,
  isObject,
  isDate,
  isRegExp,
  isNil,
  isPromise,
} from './type';

// 字符串工具
export {
  trim,
  trimAll,
  capitalize,
  uncapitalize,
  camelToKebab,
  kebabToCamel,
  snakeToCamel,
  repeat,
  padStart,
  padEnd,
  truncate,
  type TrimOptions,
} from './string';

// 数组工具
export {
  isEmpty as isEmptyArray,
  unique,
  uniqueBy,
  flatten,
  flattenDeep,
  chunk,
  nth,
  first,
  last,
  intersection,
  difference,
  union,
  sample,
  shuffle,
} from './array';

// 对象工具
export {
  isEmpty as isEmptyObject,
  deepClone,
  shallowClone,
  get,
  set,
  omit,
  pick,
  merge,
  toQueryString,
} from './object';

// 浏览器工具
export {
  isBrowser,
  getQueryParam,
  getAllQueryParams,
  debounce,
  throttle,
  once,
  generateId,
  copyToClipboard,
  storage,
} from './browser';
