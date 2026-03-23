/**
 * 类型判断工具
 */
/**
 * 判断是否为字符串
 */
declare function isString(value: unknown): value is string;
/**
 * 判断是否为数字
 */
declare function isNumber(value: unknown): value is number;
/**
 * 判断是否为布尔值
 */
declare function isBoolean(value: unknown): value is boolean;
/**
 * 判断是否为函数
 */
declare function isFunction(value: unknown): value is Function;
/**
 * 判断是否为数组
 */
declare function isArray(value: unknown): value is Array<unknown>;
/**
 * 判断是否为对象（非 null 的对象）
 */
declare function isObject(value: unknown): value is Record<string, unknown>;
/**
 * 判断是否为日期对象
 */
declare function isDate(value: unknown): value is Date;
/**
 * 判断是否为正则表达式
 */
declare function isRegExp(value: unknown): value is RegExp;
/**
 * 判断是否为空值（null 或 undefined）
 */
declare function isNil(value: unknown): value is null | undefined;
/**
 * 判断是否为 Promise 对象
 */
declare function isPromise<T = unknown>(value: unknown): value is Promise<T>;

/**
 * 字符串工具函数
 */
interface TrimOptions {
    /** 去除左侧空格 */
    left?: boolean;
    /** 去除右侧空格 */
    right?: boolean;
}
/**
 * 去除字符串两端空格，默认去除两端
 */
declare function trim(str: string, options?: TrimOptions): string;
/**
 * 去除字符串中所有空格
 */
declare function trimAll(str: string): string;
/**
 * 首字母大写
 */
declare function capitalize(str: string): string;
/**
 * 首字母小写
 */
declare function uncapitalize(str: string): string;
/**
 * 驼峰命名转短横线命名
 */
declare function camelToKebab(str: string): string;
/**
 * 短横线命名转驼峰命名
 */
declare function kebabToCamel(str: string): string;
/**
 * 下划线命名转驼峰命名
 */
declare function snakeToCamel(str: string): string;
/**
 * 字符串重复指定次数
 */
declare function repeat(str: string, times: number): string;
/**
 * 字符串补全到指定长度（左侧补全）
 */
declare function padStart(str: string, length: number, fillStr?: string): string;
/**
 * 字符串补全到指定长度（右侧补全）
 */
declare function padEnd(str: string, length: number, fillStr?: string): string;
/**
 * 截断字符串并在末尾添加省略号
 */
declare function truncate(str: string, maxLength: number, suffix?: string): string;

/**
 * 数组工具函数
 */
/**
 * 判断数组是否为空
 */
declare function isEmpty$1<T>(arr: T[]): boolean;
/**
 * 去除数组中的重复项
 */
declare function unique<T>(arr: T[]): T[];
/**
 * 去除数组中的重复项（基于比较函数）
 */
declare function uniqueBy<T>(arr: T[], compareFn: (item: T) => unknown): T[];
/**
 * 扁平化数组（指定深度）
 */
declare function flatten<T>(arr: unknown[], depth?: number): T[];
/**
 * 完全扁平化数组
 */
declare function flattenDeep<T>(arr: unknown[]): T[];
/**
 * 分块数组
 */
declare function chunk<T>(arr: T[], size: number): T[][];
/**
 * 获取数组的第 n 个元素（支持负数从末尾获取）
 */
declare function nth<T>(arr: T[], n: number): T | undefined;
/**
 * 获取数组的第一个元素
 */
declare function first<T>(arr: T[]): T | undefined;
/**
 * 获取数组的最后一个元素
 */
declare function last<T>(arr: T[]): T | undefined;
/**
 * 数组交集
 */
declare function intersection<T>(arr1: T[], arr2: T[]): T[];
/**
 * 数组差集
 */
declare function difference<T>(arr1: T[], arr2: T[]): T[];
/**
 * 数组并集
 */
declare function union<T>(arr1: T[], arr2: T[]): T[];
/**
 * 从数组中随机获取一个元素
 */
declare function sample<T>(arr: T[]): T | undefined;
/**
 * 打乱数组顺序
 */
declare function shuffle<T>(arr: T[]): T[];

/**
 * 对象工具函数
 */
/**
 * 判断对象是否为空
 */
declare function isEmpty(value: unknown): boolean;
/**
 * 深拷贝对象
 */
declare function deepClone<T>(obj: T): T;
/**
 * 浅拷贝对象
 */
declare function shallowClone<T extends object>(obj: T): T;
/**
 * 获取对象指定路径的值
 */
declare function get<T = unknown>(obj: Record<string, unknown>, path: string | number | (string | number)[], defaultValue?: T): T | undefined;
/**
 * 设置对象指定路径的值
 */
declare function set<T extends Record<string, unknown>>(obj: T, path: string | number | (string | number)[], value: unknown): T;
/**
 * 删除对象指定路径的值
 */
declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
/**
 * 选取对象指定键
 */
declare function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
/**
 * 合并多个对象
 */
declare function merge<T extends object>(...objects: Partial<T>[]): T;
/**
 * 将对象转换为查询参数字符串
 */
declare function toQueryString(params: Record<string, unknown>): string;

/**
 * 浏览器相关工具函数
 */
/**
 * 判断是否为浏览器环境
 */
declare const isBrowser: boolean;
/**
 * 获取 URL 查询参数
 */
declare function getQueryParam(name: string): string | null;
/**
 * 获取所有 URL 查询参数
 */
declare function getAllQueryParams(): Record<string, string>;
/**
 * 防抖函数
 */
declare function debounce<T extends (...args: unknown[]) => unknown>(fn: T, wait?: number): (...args: Parameters<T>) => void;
/**
 * 节流函数
 */
declare function throttle<T extends (...args: unknown[]) => unknown>(fn: T, wait?: number): (...args: Parameters<T>) => void;
/**
 * once 函数：确保函数只执行一次
 */
declare function once<T extends (...args: unknown[]) => unknown>(fn: T): (...args: Parameters<T>) => ReturnType<T> | undefined;
/**
 * 生成唯一 ID
 */
declare function generateId(prefix?: string): string;
/**
 * 复制文本到剪贴板
 */
declare function copyToClipboard(text: string): Promise<boolean>;
/**
 * 本地存储工具类
 */
declare const storage: {
    get<T>(key: string, defaultValue?: T): T | undefined;
    set<T>(key: string, value: T): boolean;
    remove(key: string): boolean;
    clear(): boolean;
};

export { camelToKebab, capitalize, chunk, copyToClipboard, debounce, deepClone, difference, first, flatten, flattenDeep, generateId, get, getAllQueryParams, getQueryParam, intersection, isArray, isBoolean, isBrowser, isDate, isEmpty$1 as isEmptyArray, isEmpty as isEmptyObject, isFunction, isNil, isNumber, isObject, isPromise, isRegExp, isString, kebabToCamel, last, merge, nth, omit, once, padEnd, padStart, pick, repeat, sample, set, shallowClone, shuffle, snakeToCamel, storage, throttle, toQueryString, trim, trimAll, truncate, uncapitalize, union, unique, uniqueBy };
export type { TrimOptions };
