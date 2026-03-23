/**
 * 字符串工具函数
 */

export interface TrimOptions {
  /** 去除左侧空格 */
  left?: boolean;
  /** 去除右侧空格 */
  right?: boolean;
}

/**
 * 去除字符串两端空格，默认去除两端
 */
export function trim(str: string, options: TrimOptions = {}): string {
  const { left = true, right = true } = options;

  if (left && right) {
    return str.trim();
  }
  if (left) {
    return str.trimStart();
  }
  if (right) {
    return str.trimEnd();
  }
  return str;
}

/**
 * 去除字符串中所有空格
 */
export function trimAll(str: string): string {
  return str.replace(/\s+/g, '');
}

/**
 * 首字母大写
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 首字母小写
 */
export function uncapitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * 驼峰命名转短横线命名
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 短横线命名转驼峰命名
 */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

/**
 * 下划线命名转驼峰命名
 */
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

/**
 * 字符串重复指定次数
 */
export function repeat(str: string, times: number): string {
  return str.repeat(times);
}

/**
 * 字符串补全到指定长度（左侧补全）
 */
export function padStart(str: string, length: number, fillStr: string = ' '): string {
  return str.padStart(length, fillStr);
}

/**
 * 字符串补全到指定长度（右侧补全）
 */
export function padEnd(str: string, length: number, fillStr: string = ' '): string {
  return str.padEnd(length, fillStr);
}

/**
 * 截断字符串并在末尾添加省略号
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}
