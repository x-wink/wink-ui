---
title: 图标
---

# 图标 Icon

## 功能介绍

::: tip
`WINK UI` 从 `ElementPlus` 扒了所有图标过来使用
:::

用于显示 `SVG` 图标，相较于传统的图片和字体图标：

-   **灵活**：可以通过 `CSS样式` 自由控制颜色和尺寸
-   **方便**：随时增减或修改图标
-   **矢量**：不会因为放大而模糊失真
-   **易用**：前端自己就可以编辑 `SVG` 源码

## 使用方式

### 图标作为组件

渲染结果为 `svg` 元素，宽高默认为 `1em`，填充颜色为 `currentColor`
<br />
<IconUse1 />

::: details 查看代码

<<< @/examples/icon/use1.vue

:::

### 使用 XIcon 组件

图标名称通过 `name` 属性传值，渲染结果为类名为 `x-icon` 的 `i` 标签包裹着 `svg` 元素

<br />
<IconUse2 />

::: details 查看代码

<<< @/examples/icon/use2.vue

:::

### 图标动画

<br />
<IconUse3 />

::: details 查看代码

<<< @/examples/icon/use3.vue

:::

## API 参考

### 属性

|   名称    |   说明   |              类型              | 默认值  |
| :-------: | :------: | :----------------------------: | :-----: |
|   size    | 图标尺寸 |             String             |   1em   |
|   color   | 图标颜色 |             String             | inherit |
| animation | 图标动画 | [XAnimation](#xanimation-type) |    -    |

### 事件

| 名称 | 说明 | 触发时机 | 回调类型 |
| :--: | :--: | :------: | :------: |
|  -   |  -   |    -     |    -     |

### 插槽

|  名称   |   说明   | 类型定义 |
| :-----: | :------: | :------: |
| default | 图标内容 |    -     |

### 实例

| 成员 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

## 图标列表

<IconList />

## 附加内容

### IconName `type`

图标名称联合类型，可选值[点击这里](#图标列表)

### XAnimation `type`

动画联合类型，可选值：

<ul>
    <li v-for="(item, index) in animations" :key="index">{{ item }}</li>
</ul>

### animations `const`

动画枚举列表，类型为 [`XAnimation[]`](#XAnimation-type)

<script setup>
import { animations } from 'wink-ui';
import IconUse1 from './use1.vue';
import IconUse2 from './use2.vue';
import IconUse3 from './use3.vue';
import IconList from './list.vue';
</script>
