---
title: 按钮
---

# 按钮 Button

## 功能介绍

最常用的基础交互组件之一，提供多种主题颜色、样式风格、按钮状态

## 使用方式

### 主题颜色

七种不同的主题颜色

<br />
<ButtonUse1 />

::: details 查看代码

<<< @/examples/button/use1.vue

:::

### 简约风格

简约镂空风格，普通状态下没有背景颜色

<br />
<ButtonUse2 />

::: details 查看代码

<<< @/examples/button/use2.vue

:::

### 禁用状态

表示按钮不可用，无交互效果，不会触发点击事件

<br />
<ButtonUse3 />

::: details 查看代码

<<< @/examples/button/use3.vue

:::

### 加载状态

同[禁用状态](#禁用状态)，并且显示加载中图标动画效果，会覆盖传入的按钮图标

<br />
<ButtonUse4 />

::: details 查看代码

<<< @/examples/button/use4.vue

:::

### 图标按钮

文字前面带有图标，或者仅显示图标

<br />
<ButtonUse5 />

::: details 查看代码

<<< @/examples/button/use5.vue

:::

### 文字按钮

普通状态下显示为普通文本，鼠标移入时才表现出按钮交互样式

<br />
<ButtonUse6 />

::: details 查看代码

<<< @/examples/button/use6.vue

:::

### 链接按钮

普通状态下显示为普通文本，鼠标移入时才表现出超链接交互样式

<br />
<ButtonUse7 />

::: details 查看代码

<<< @/examples/button/use7.vue

:::

### 圆形按钮

根据内容自适应显示为圆形

::: danger

在 `safari` 浏览器种有兼容性问题待修复

:::

<br />
<ButtonUse8 />

::: details 查看代码

<<< @/examples/button/use8.vue

:::

### 圆角按钮

按钮两端普通圆角放大为半圆

<br />
<ButtonUse9 />

::: details 查看代码

<<< @/examples/button/use9.vue

:::

## API 参考

### 属性

|   名称   |   说明   |                         类型                          |   默认值    |
| :------: | :------: | :---------------------------------------------------: | :---------: |
|  theme   | 主题风格 | [ThemeColor](/examples/text/index.md#themecolor-type) |   default   |
|   icon   | 图标组件 |   [IconComponent](/examples/icon/index.md#图标列表)   | `undefined` |
|  simple  | 简约风格 |                        boolean                        |   `false`   |
| disabled | 禁用状态 |                        boolean                        |   `false`   |
| loading  | 加载状态 |                        boolean                        |   `false`   |
|   text   | 文本风格 |                        boolean                        |   `false`   |
|   link   | 链接风格 |                        boolean                        |   `false`   |
|  circle  | 圆形风格 |                        boolean                        |   `false`   |
|  round   | 圆角风格 |                        boolean                        |   `false`   |
|  block   | 块状风格 |                        boolean                        |   `false`   |

### 事件

| 名称  |     说明     | 触发时机 | 回调类型 |
| :---: | :----------: | :------: | :------: |
| click | 原生点击事件 |    -     |    -     |

### 插槽

|  名称   |   说明   | 类型定义 |
| :-----: | :------: | :------: |
| default | 按钮内容 |    -     |

### 实例

| 成员 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

<script setup>
    import ButtonUse1 from "./use1.vue";
    import ButtonUse2 from "./use2.vue";
    import ButtonUse3 from "./use3.vue";
    import ButtonUse4 from "./use4.vue";
    import ButtonUse5 from "./use5.vue";
    import ButtonUse6 from "./use6.vue";
    import ButtonUse7 from "./use7.vue";
    import ButtonUse8 from "./use8.vue";
    import ButtonUse9 from "./use9.vue";
</script>
