# 字符串工具

字符串工具模块提供各种字符串处理函数。

## trim

去除字符串两端空格，默认去除两端。

```typescript
function trim(str: string, options?: TrimOptions): string

interface TrimOptions {
  left?: boolean   // 去除左侧空格
  right?: boolean  // 去除右侧空格
}
```

**示例**

```typescript
trim('  hello  ')              // 'hello'
trim('  hello  ', { left: true })    // 'hello  '
trim('  hello  ', { right: true })   // '  hello'
trim('  hello  ', { left: true, right: true }) // 'hello'
```

## trimAll

去除字符串中所有空格。

```typescript
function trimAll(str: string): string
```

**示例**

```typescript
trimAll('  hello  world  ')    // 'helloworld'
trimAll('a b c')               // 'abc'
trimAll('带    空格')           // '带空格'
```

## capitalize

首字母大写。

```typescript
function capitalize(str: string): string
```

**示例**

```typescript
capitalize('hello')    // 'Hello'
capitalize('')         // ''
capitalize('a')        // 'A'
```

## uncapitalize

首字母小写。

```typescript
function uncapitalize(str: string): string
```

**示例**

```typescript
uncapitalize('Hello')    // 'hello'
uncapitalize('')         // ''
uncapitalize('A')        // 'a'
```

## camelToKebab

驼峰命名转短横线命名（kebab-case）。

```typescript
function camelToKebab(str: string): string
```

**示例**

```typescript
camelToKebab('helloWorld')    // 'hello-world'
camelToKebab('getElementById') // 'get-element-by-id'
camelToKebab('myURL')         // 'my-u-r-l'
```

## kebabToCamel

短横线命名（kebab-case）转驼峰命名。

```typescript
function kebabToCamel(str: string): string
```

**示例**

```typescript
kebabToCamel('hello-world')    // 'helloWorld'
kebabToCamel('get-element-by-id') // 'getElementById'
kebabToCamel('my-url')         // 'myUrl'
```

## snakeToCamel

下划线命名转驼峰命名。

```typescript
function snakeToCamel(str: string): string
```

**示例**

```typescript
snakeToCamel('hello_world')       // 'helloWorld'
snakeToCamel('get_element_by_id') // 'getElementById'
snakeToCamel('my_var')            // 'myVar'
```

## repeat

字符串重复指定次数。

```typescript
function repeat(str: string, times: number): string
```

**示例**

```typescript
repeat('a', 3)      // 'aaa'
repeat('ab', 2)     // 'abab'
repeat('*', 5)      // '*****'
```

## padStart

字符串左侧补全到指定长度。

```typescript
function padStart(str: string, length: number, fillStr?: string): string
```

**示例**

```typescript
padStart('5', 3, '0')      // '005'
padStart('abc', 5)         // '  abc'
padStart('1234', 10, '0')  // '0000001234'
```

## padEnd

字符串右侧补全到指定长度。

```typescript
function padEnd(str: string, length: number, fillStr?: string): string
```

**示例**

```typescript
padEnd('5', 3, '0')      // '500'
padEnd('abc', 5)         // 'abc  '
padEnd('1234', 10, '0')  // '1234000000'
```

## truncate

截断字符串并在末尾添加省略号。

```typescript
function truncate(str: string, maxLength: number, suffix?: string): string
```

**示例**

```typescript
truncate('Hello World', 8)           // 'Hello...'
truncate('Hello World', 8, '>>>')   // 'Hello>>>'
truncate('Hi', 10)                   // 'Hi' (未超过最大长度)
truncate('Hello', 5, '...')          // '...'
```
