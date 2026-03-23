# 类型判断

类型判断模块提供各种数据类型判断的函数。

## isString

判断是否为字符串。

```typescript
function isString(value: unknown): value is string
```

**示例**

```typescript
isString('hello')    // true
isString('')          // true
isString(123)        // false
isString(null)       // false
```

## isNumber

判断是否为数字。

```typescript
function isNumber(value: unknown): value is number
```

**示例**

```typescript
isNumber(123)        // true
isNumber(3.14)       // true
isNumber(NaN)        // false (NaN 被视为无效数字)
isNumber('123')      // false
```

## isBoolean

判断是否为布尔值。

```typescript
function isBoolean(value: unknown): value is boolean
```

**示例**

```typescript
isBoolean(true)       // true
isBoolean(false)     // true
isBoolean(1)         // false
isBoolean('true')    // false
```

## isFunction

判断是否为函数。

```typescript
function isFunction(value: unknown): value is Function
```

**示例**

```typescript
isFunction(() => {})        // true
isFunction(function() {})   // true
isFunction(async () => {})   // true
isFunction({})              // false
```

## isArray

判断是否为数组。

```typescript
function isArray(value: unknown): value is Array<unknown>
```

**示例**

```typescript
isArray([])           // true
isArray([1, 2, 3])    // true
isArray(new Array())  // true
isArray('123')        // false
```

## isObject

判断是否为纯对象（仅指 `{}` 或 `Object.create(Object.prototype)` 创建的普通对象，不包含数组、函数、`Object.create(null)` 等）。

```typescript
function isObject(value: unknown): value is Record<string, unknown>
```

**示例**

```typescript
isObject({})                                    // true
isObject({ a: 1 })                             // true
isObject(new Object())                         // true
isObject(Object.create(Object.prototype))      // true
isObject([])                                   // false (数组)
isObject(() => {})                             // false (函数)
isObject(null)                                 // false
isObject('hello')                              // false
isObject(Object.create(null))                  // false (无原型对象)
```

## isDate

判断是否为日期对象。

```typescript
function isDate(value: unknown): value is Date
```

**示例**

```typescript
isDate(new Date())        // true
isDate(new Date(2024, 0, 1)) // true
isDate('2024-01-01')       // false
isDate(Date.now())         // false
```

## isRegExp

判断是否为正则表达式。

```typescript
function isRegExp(value: unknown): value is RegExp
```

**示例**

```typescript
isRegExp(/abc/)           // true
isRegExp(new RegExp('abc')) // true
isRegExp('abc')           // false
```

## isNil

判断是否为空值（null 或 undefined）。

```typescript
function isNil(value: unknown): value is null | undefined
```

**示例**

```typescript
isNil(null)       // true
isNil(undefined)  // true
isNil(0)          // false
isNil('')         // false
isNil(false)      // false
```

## isPromise

判断是否为 Promise 对象。

```typescript
function isPromise<T = unknown>(value: unknown): value is Promise<T>
```

**示例**

```typescript
isPromise(Promise.resolve())           // true
isPromise(new Promise(() => {}))       // true
isPromise(async () => {})             // false (async 函数不是 Promise)
isPromise({ then: () => {} })          // false
```
