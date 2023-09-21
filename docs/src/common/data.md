---
title: 数据处理
---

# 数据处理

## CSSNumeric `type`

`CSS` 数值类型属性值

```ts
type CSSNumeric = number | string;
```

## CSSNumericUnit `type`

`CSS` 数值类型属性值的单位

```ts
type CSSNumericUnit = 'px' | 'deg' | 'rem' | 'em' | 'vw' | 'vh' | '%';
```

## completeCssNumeric `function`

补全 `CSS` 数值类型属性值单位

-   `value` : [`CSSNumeric`](#cssnumeric-type) 属性值
-   `unit` ?: [`CSSNumericUnit`](#cssnumericunit-type) 单位，默认 `px`
-   `reutrn` : `string`

## limitPrecision `function`

限制数值精度

-   `value` : `number | string` 数值
-   `precision` ?: `number` 保留小数位，默认 2
-   `reutrn` : `number`

## defaults `function`

合并默认值

-   `T extends Record<string, unknown>`

---

-   `target` : `Partial<T>` 合并结果目标对象
-   `sources` : `[T, ...(Partial<T> | undefined)[]]` 可变长度数据源，第一个必须有全量属性
-   `return` : `T`

## ValueProvider `type`

值提供者，指定类型的值或者返回指定类型值的无参函数，可能为未定义

```ts
type ValueProvider<T> = T | (() => T) | undefined;
```

## getValue `function`

获取值或返回默认值

-   `valueProvider` : [`ValueProvider<T>`](#valueprovider-type) 值提供者
-   `defaultValue` ?: `T` 默认值
-   `return` : `T | undefined` 当传入默认值时返回值类型固定为 `T`

## mapConvert `function`

根据映射规则转换源数组为指定类型数组

-   `Target = unknown`
-   `Source extends Record<string, unknown> = Record<string, unknown>`
-   `MapRule extends Record<keyof Target, string> = Record<keyof Target, string>`

---

-   `source` : `Source[]` 源数据数组
-   `mapRule` : `MapRule` 映射规则
-   `defaultValue` ?: `Partial<Taget>`
-   `return` : `Target`

## copy `function`

复制文本到粘贴板

-   `content` : `string` 文本内容
