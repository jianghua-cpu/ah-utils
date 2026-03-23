/**
 * 对象工具函数
 */

/**
 * 判断对象是否为空
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
}

/**
 * 深拷贝对象
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as T;
  }

  const cloned = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

/**
 * 浅拷贝对象
 */
export function shallowClone<T extends object>(obj: T): T {
  return { ...obj };
}

/**
 * 获取对象指定路径的值
 */
export function get<T = unknown>(
  obj: Record<string, unknown>,
  path: string | number | (string | number)[],
  defaultValue?: T
): T | undefined {
  const keys = Array.isArray(path) ? path : String(path).split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result === null || result === undefined) return defaultValue;
    result = (result as Record<string, unknown>)[String(key)];
  }

  return (result === undefined ? defaultValue : result) as T;
}

/**
 * 设置对象指定路径的值
 */
export function set<T extends Record<string, unknown>>(
  obj: T,
  path: string | number | (string | number)[],
  value: unknown
): T {
  const keys = Array.isArray(path) ? path : String(path).split('.');
  const lastKey = keys.pop()!;
  let current: Record<string, unknown> = obj;

  for (const key of keys) {
    const k = String(key);
    if (!(k in current) || typeof current[k] !== 'object' || current[k] === null) {
      current[k] = {};
    }
    current = current[k] as Record<string, unknown>;
  }

  current[String(lastKey)] = value;
  return obj;
}

/**
 * 删除对象指定路径的值
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

/**
 * 选取对象指定键
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * 合并多个对象
 */
export function merge<T extends object>(...objects: Partial<T>[]): T {
  return Object.assign({}, ...objects) as T;
}

/**
 * 将对象转换为查询参数字符串
 */
export function toQueryString(params: Record<string, unknown>): string {
  const pairs: string[] = [];
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const value = params[key];
      if (value !== undefined && value !== null) {
        pairs.push(`${encodeURIComponent(String(key))}=${encodeURIComponent(String(value))}`);
      }
    }
  }
  return pairs.join('&');
}
