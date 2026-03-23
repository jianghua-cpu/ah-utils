/**
 * 浏览器相关工具函数
 */

/**
 * 判断是否为浏览器环境
 */
export const isBrowser: boolean = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * 获取 URL 查询参数
 */
export function getQueryParam(name: string): string | null {
  if (!isBrowser) return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * 获取所有 URL 查询参数
 */
export function getAllQueryParams(): Record<string, string> {
  if (!isBrowser) return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait: number = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait: number = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastTime = 0;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();

    if (!lastTime) lastTime = now;

    const remaining = wait - (now - lastTime);

    if (remaining <= 0 || remaining > wait) {
      lastTime = now;
      fn.apply(this, args);
      timer = null;
    } else if (!timer) {
      timer = setTimeout(() => {
        lastTime = Date.now();
        fn.apply(this, args);
        timer = null;
      }, remaining);
    }
  };
}

/**
 * once 函数：确保函数只执行一次
 */
export function once<T extends (...args: unknown[]) => unknown>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let called = false;
  let result: ReturnType<T>;

  return function (this: unknown, ...args: Parameters<T>) {
    if (!called) {
      called = true;
      result = fn.apply(this, args) as ReturnType<T>;
    }
    return result;
  };
}

/**
 * 生成唯一 ID
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 复制文本到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!isBrowser) return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * 本地存储工具类
 */
export const storage = {
  get<T>(key: string, defaultValue?: T): T | undefined {
    if (!isBrowser) return defaultValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set<T>(key: string, value: T): boolean {
    if (!isBrowser) return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key: string): boolean {
    if (!isBrowser) return false;
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },

  clear(): boolean {
    if (!isBrowser) return false;
    try {
      localStorage.clear();
      return true;
    } catch {
      return false;
    }
  },
};
