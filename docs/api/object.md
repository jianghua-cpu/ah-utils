# 对象工具

对象工具模块提供各种对象处理函数。

## isEmptyObject

判断对象是否为空。

```typescript
function isEmptyObject(value: unknown): boolean
```

**示例**

```typescript
isEmptyObject({})              // true
isEmptyObject({ a: 1 })        // false
isEmptyObject([])              // false (数组不适用)
isEmptyObject('')              // true
isEmptyObject(null)            // true
isEmptyObject(undefined)       // true
```

## deepClone

深拷贝对象。

```typescript
function deepClone<T>(obj: T): T
```

**示例**

```typescript
const original = {
  name: 'Alice',
  age: 25,
  address: { city: 'Beijing', zip: '100000' },
  hobbies: ['reading', 'coding']
};

const cloned = deepClone(original);
cloned.address.city = 'Shanghai';
cloned.hobbies.push('traveling');

console.log(original.address.city)   // 'Beijing' (未改变)
console.log(original.hobbies)        // ['reading', 'coding'] (未改变)

// 支持 Date 和 RegExp
deepClone(new Date())        // 新的 Date 对象
deepClone(/abc/gi)           // 新的 RegExp 对象
```

## shallowClone

浅拷贝对象。

```typescript
function shallowClone<T extends object>(obj: T): T
```

**示例**

```typescript
const original = { a: 1, b: 2 };
const cloned = shallowClone(original);
cloned.a = 10;
console.log(original.a)   // 1 (未改变)
```

## get

获取对象指定路径的值。

```typescript
function get<T = unknown>(
  obj: Record<string, unknown>,
  path: string | number | (string | number)[],
  defaultValue?: T
): T | undefined
```

**示例**

```typescript
const obj = {
  user: {
    profile: {
      name: 'Alice',
      age: 25
    },
    scores: [90, 85, 88]
  }
};

get(obj, 'user.profile.name')                    // 'Alice'
get(obj, ['user', 'profile', 'age'])             // 25
get(obj, 'user.profile.name')                    // 'Alice'
get(obj, 'user.scores.0')                        // 90
get(obj, 'user.profile.country', 'China')        // 'China' (默认值)
get(obj, 'user.notExist.deep', 'default')       // 'default'
```

## set

设置对象指定路径的值。

```typescript
function set<T extends Record<string, unknown>>(
  obj: T,
  path: string | number | (string | number)[],
  value: unknown
): T
```

**示例**

```typescript
const obj: any = {};

// 设置嵌套属性
set(obj, 'user.name', 'Alice');
set(obj, ['user', 'profile', 'age'], 25);
// obj = { user: { name: 'Alice', profile: { age: 25 } } }

// 设置数组元素
set(obj, 'items.0', 'first');
set(obj, ['items', 1], 'second');
// obj = { ...items: ['first', 'second'] }
```

## omit

删除对象指定键。

```typescript
function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K>
```

**示例**

```typescript
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  password: 'secret'
};

omit(user, ['password'])           // { id: 1, name: 'Alice', email: 'alice@example.com' }
omit(user, ['id', 'password'])     // { name: 'Alice', email: 'alice@example.com' }
```

## pick

选取对象指定键。

```typescript
function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>
```

**示例**

```typescript
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  password: 'secret'
};

pick(user, ['id', 'name'])              // { id: 1, name: 'Alice' }
pick(user, ['id', 'email', 'name'])     // { id: 1, email: 'alice@example.com', name: 'Alice' }
```

## merge

合并多个对象。

```typescript
function merge<T extends object>(...objects: Partial<T>[]): T
```

**示例**

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

merge(obj1, obj2, obj3)   // { a: 1, b: 3, c: 5, d: 6 }
// obj2 和 obj3 的值会覆盖 obj1 的值
```

## toQueryString

将对象转换为查询参数字符串。

```typescript
function toQueryString(params: Record<string, unknown>): string
```

**示例**

```typescript
toQueryString({ name: 'Alice', age: 25 })
// 'name=Alice&age=25'

toQueryString({ search: 'hello world', page: 1 })
// 'search=hello%20world&page=1'

toQueryString({ active: true, count: 0 })
// 'active=true&count=0'

toQueryString({ a: 1, b: null, c: undefined })
// 'a=1'
// null 和 undefined 会被忽略
```
