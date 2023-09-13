---
title: 文本
---

# 文本 Text

## 功能介绍

显示文本，提供主题颜色和溢出隐藏功能

## 使用方式

### 主题颜色

<br />
<TextUse1 />

::: details 查看代码

<<< @/examples/text/use1.vue

:::

### 溢出隐藏

<br />
<TextUse2 />

::: details 查看代码

<<< @/examples/text/use2.vue

:::

## API 参考

### 属性

|   名称   |   说明   |                      类型                      | 默认值  |
| :------: | :------: | :--------------------------------------------: | :-----: |
|  theme   | 主题颜色 |         [ThemeColor](#themecolor-type)         | default |
|   tag    | 元素标签 | [HTMLElementTagName](#htmlelementtagname-type) |  span   |
| ellipsis | 溢出隐藏 |                    boolean                     | `false` |

### 事件

| 名称 | 说明 | 触发时机 | 回调类型 |
| :--: | :--: | :------: | :------: |
|  -   |  -   |    -     |    -     |

### 插槽

|  名称   |   说明   | 类型定义 |
| :-----: | :------: | :------: |
| default | 文本内容 |    -     |

### 实例

| 成员 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

## 附加内容

### HTMLElementTagName `type`

原生 `HTML` 元素标签名

### ThemeColor `type`

主题颜色联合类型，可选值：

<ul>
    <li v-for="(item, index) in themeColors" :key="index">{{ item }}</li>
</ul>

### themeColors `const`

主题颜色枚举列表，类型为 [`ThemeColor[]`](#themecolor-type)

<script setup>
import { themeColors } from 'wink-ui';
import TextUse1 from './use1.vue';
import TextUse2 from './use2.vue';
</script>
