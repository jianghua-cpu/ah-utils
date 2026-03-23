# 数组工具

数组工具模块提供各种数组处理函数。

## isEmptyArray

判断数组是否为空。

```typescript
function isEmptyArray<T>(arr: T[]): boolean
```

**示例**

```typescript
isEmptyArray([])        // true
isEmptyArray([1, 2, 3]) // false
isEmptyArray(null)      // false
```

## unique

去除数组中的重复项。

```typescript
function unique<T>(arr: T[]): T[]
```

**示例**

```typescript
unique([1, 2, 2, 3, 3, 3])    // [1, 2, 3]
unique(['a', 'b', 'a'])       // ['a', 'b']
unique([1, '1'])              // [1, '1'] (不同类型保留)
```

## uniqueBy

基于比较函数去除数组中的重复项。

```typescript
function uniqueBy<T>(arr: T[], compareFn: (item: T) => unknown): T[]
```

**示例**

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice2' }
];
uniqueBy(users, user => user.id)
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

## flatten

扁平化数组（指定深度）。

```typescript
function flatten<T>(arr: unknown[], depth?: number): T[]
```

**示例**

```typescript
flatten([1, [2, 3]])              // [1, 2, 3]
flatten([1, [2, [3, 4]]], 1)      // [1, 2, [3, 4]]
flatten([1, [2, [3, [4]]]], 2)    // [1, 2, 3, [4]]
```

## flattenDeep

完全扁平化数组。

```typescript
function flattenDeep<T>(arr: unknown[]): T[]
```

**示例**

```typescript
flattenDeep([1, [2, [3, [4]]]])   // [1, 2, 3, 4]
flattenDeep([[1], [2, [3]]])      // [1, 2, 3]
```

## chunk

将数组分块。

```typescript
function chunk<T>(arr: T[], size: number): T[][]
```

**示例**

```typescript
chunk([1, 2, 3, 4, 5], 2)   // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3)   // [[1, 2, 3], [4, 5]]
chunk([], 2)                // []
```

## nth

获取数组的第 n 个元素，支持负数从末尾获取。

```typescript
function nth<T>(arr: T[], n: number): T | undefined
```

**示例**

```typescript
const arr = ['a', 'b', 'c', 'd'];
nth(arr, 0)   // 'a'
nth(arr, 2)   // 'c'
nth(arr, -1)  // 'd' (最后一个)
nth(arr, -2)  // 'c' (倒数第二个)
nth(arr, 10)  // undefined
```

## first

获取数组的第一个元素。

```typescript
function first<T>(arr: T[]): T | undefined
```

**示例**

```typescript
first([1, 2, 3])   // 1
first([])          // undefined
```

## last

获取数组的最后一个元素。

```typescript
function last<T>(arr: T[]): T | undefined
```

**示例**

```typescript
last([1, 2, 3])   // 3
last([])          // undefined
```

## intersection

数组交集。

```typescript
function intersection<T>(arr1: T[], arr2: T[]): T[]
```

**示例**

```typescript
intersection([1, 2, 3], [2, 3, 4])   // [2, 3]
intersection(['a', 'b'], ['b', 'c']) // ['b']
intersection([1, 2], [3, 4])         // []
```

## difference

数组差集。

```typescript
function difference<T>(arr1: T[], arr2: T[]): T[]
```

**示例**

```typescript
difference([1, 2, 3], [2, 3, 4])   // [1]
difference(['a', 'b'], ['b', 'c']) // ['a']
difference([1, 2], [1, 2])         // []
```

## union

数组并集。

```typescript
function union<T>(arr1: T[], arr2: T[]): T[]
```

**示例**

```typescript
union([1, 2], [2, 3])      // [1, 2, 3]
union(['a'], ['a', 'b'])  // ['a', 'b']
union([], [1, 2])         // [1, 2]
```

## sample

从数组中随机获取一个元素。

```typescript
function sample<T>(arr: T[]): T | undefined
```

**示例**

```typescript
sample([1, 2, 3])   // 1 | 2 | 3 (随机)
sample([])          // undefined
```

## shuffle

打乱数组顺序（Fisher-Yates 洗牌算法）。

```typescript
function shuffle<T>(arr: T[]): T[]
```

**示例**

```typescript
shuffle([1, 2, 3, 4, 5])   // 随机排列的数组
shuffle([])                // []
```
