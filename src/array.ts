/**
 * 数组工具函数
 */

/**
 * 判断数组是否为空
 */
export function isEmpty<T>(arr: T[]): boolean {
  return !arr || arr.length === 0;
}

/**
 * 去除数组中的重复项
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * 去除数组中的重复项（基于比较函数）
 */
export function uniqueBy<T>(arr: T[], compareFn: (item: T) => unknown): T[] {
  const seen = new Set();
  return arr.filter(item => {
    const key = compareFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * 扁平化数组（指定深度）
 */
export function flatten<T>(arr: unknown[], depth: number = 1): T[] {
  return arr.flat(depth) as T[];
}

/**
 * 完全扁平化数组
 */
export function flattenDeep<T>(arr: unknown[]): T[] {
  return arr.flat(Infinity) as T[];
}

/**
 * 分块数组
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * 获取数组的第 n 个元素（支持负数从末尾获取）
 */
export function nth<T>(arr: T[], n: number): T | undefined {
  const len = arr.length;
  if (n < 0) {
    return arr[len + n];
  }
  return arr[n];
}

/**
 * 获取数组的第一个元素
 */
export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

/**
 * 获取数组的最后一个元素
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

/**
 * 数组交集
 */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

/**
 * 数组差集
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

/**
 * 数组并集
 */
export function union<T>(arr1: T[], arr2: T[]): T[] {
  return unique([...arr1, ...arr2]);
}

/**
 * 从数组中随机获取一个元素
 */
export function sample<T>(arr: T[]): T | undefined {
  if (isEmpty(arr)) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 打乱数组顺序
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
