---
title: 分割线
---

# 分割线 Divider

## 功能介绍

用于分割页面内容，内嵌 [文本组件 Text](/examples/text/index.md)

## 使用方式

### 分割内容

<br />
<DividerUse1 />

::: details 查看代码

<<< @/examples/divider/use1.vue

:::

### 提示文本

<br />
<DividerUse2 />

::: details 查看代码

<<< @/examples/divider/use2.vue

:::

### 垂直分割

<br />
<DividerUse3 />

::: details 查看代码

<<< @/examples/divider/use3.vue

:::

### 控制样式

<br />
<DividerUse4 />

::: details 查看代码

<<< @/examples/divider/use4.vue

:::

## API 参考

### 属性

|    名称     |   说明   |                         类型                          |       默认值       |
| :---------: | :------: | :---------------------------------------------------: | :----------------: |
|    text     | 提示文本 |                        string                         |         -          |
|  placement  | 文本位置 |  [DividerTextPlacement](#dividertextplacement-type)   |       center       |
|  vertical   | 垂直分割 |                        boolean                        |       false        |
| borderStyle | 描边样式 |    [DividerBorderStyle](#dividerborderstyle-type)     |       solid        |
| borderWidth | 描边宽度 |                        number                         |         1          |
| borderColor | 描边颜色 |                        string                         | var(--x-fade-gray) |
|    theme    | 文本颜色 | [ThemeColor](/common/base.md#themecolor-type) |         -          |

### 事件

| 名称 | 说明 | 触发时机 | 回调类型 |
| :--: | :--: | :------: | :------: |
|  -   |  -   |    -     |    -     |

### 插槽

|  名称   |                 说明                 | 类型定义 |
| :-----: | :----------------------------------: | :------: |
| default | 提示文本，默认为传入的 `text` 属性值 |    -     |

### 实例

| 成员 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

## 附加内容

### DividerTextPlacement `type`

文本位置联合类型，可选值：

<ul>
    <li v-for="(item, index) in dividerTextPlacements" :key="index">{{ item }}</li>
</ul>

### dividerTextPlacements `const`

文本位置枚举列表，类型为 [`DividerTextPlacement[]`](#dividertextplacement-type)

### DividerBorderStyle `type`

描边样式联合类型，可选值：

<ul>
    <li v-for="(item, index) in dividerBorderStyles" :key="index">{{ item }}</li>
</ul>

### dividerBorderStyles `const`

描边样式枚举列表，类型为 [`DividerBorderStyle[]`](#dividerborderstyle-type)

<script setup>
import { dividerTextPlacements, dividerBorderStyles } from 'wink-ui';
import DividerUse1 from './use1.vue';
import DividerUse2 from './use2.vue';
import DividerUse3 from './use3.vue';
import DividerUse4 from './use4.vue';
</script>
