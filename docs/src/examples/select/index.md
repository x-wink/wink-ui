---
title: 选择器
---

# 选择器 Select

## 功能介绍

选择器组件

## 使用方式

### 下拉框状态

<br />
<SelectUse1 />

::: details 查看代码

<<< @/examples/select/use1.vue

:::

### 多选

<br />
<SelectUse2 />

::: details 查看代码

<<< @/examples/select/use2.vue

:::

## API 参考

### 属性

| 名称 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :----: |
|  -   |  -   |  -   |   -    |

### 事件

| 名称 | 说明 | 触发时机 | 回调类型 |
| :--: | :--: | :------: | :------: |
|  -   |  -   |    -     |    -     |

### 插槽

| 名称 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

### 实例

| 成员 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

## 附加内容

### SelectValue `type`

下拉选择框值联合类型

```ts
type SelectValue = string | number | boolean;
```

<script setup>
import SelectUse1 from './use1.vue';
import SelectUse2 from './use2.vue';
</script>
