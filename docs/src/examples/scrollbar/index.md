---
title: 滚动条
---

# 滚动条 Scrollbar

## 功能介绍

滚动条组件

## 使用方式

### 限制高度

<br />
<ScrollbarUse1 />

::: details 查看代码

<<< @/examples/scrollbar/use1.vue

:::

### 限制宽度

<br />
<ScrollbarUse2 />

::: details 查看代码

<<< @/examples/scrollbar/use2.vue

:::

### 最大高度

<br />
<ScrollbarUse3 />

::: details 查看代码

<<< @/examples/scrollbar/use3.vue

:::

### 最大宽度

<br />
<ScrollbarUse4 />

::: details 查看代码

<<< @/examples/scrollbar/use4.vue

:::

### 原生样式

<br />
<ScrollbarUse5 />

::: details 查看代码

<<< @/examples/scrollbar/use5.vue

:::

### 手动滚动

<br />
<ScrollbarUse6 />

::: details 查看代码

<<< @/examples/scrollbar/use6.vue

:::

### 无限加载

<br />
<ScrollbarUse7 />

::: details 查看代码

<<< @/examples/scrollbar/use7.vue

:::

## API 参考

### 属性

|      名称      |          说明          |                             类型                              | 默认值  |
| :------------: | :--------------------: | :-----------------------------------------------------------: | :-----: |
|      tag       |  滚动区域包裹元素标签  | [HTMLElementTagName](/common/base.md#htmlelementtagname-type) |   div   |
|     width      |        固定宽度        |                            string                             |  100%   |
|     height     |        固定高度        |                            string                             |  100%   |
|    maxWidth    |        最大宽度        |                            string                             |    -    |
|   maxHeight    |        最大高度        |                            string                             |    -    |
|     always     |     滚动条总是显示     |                            boolean                            | `false` |
|    noresize    |     不响应尺寸变化     |                            boolean                            | `false` |
|     native     |     使用原生滚动条     |                            boolean                            | `false` |
| containerStyle |      滚动容器样式      |                          StyleValue                           |    -    |
|  wrapperStyle  |      内容包裹样式      |                          StyleValue                           |    -    |
| containerClass |      滚动容器类名      |                            string                             |    -    |
|  wrapperClass  |      内容包裹类名      |                            string                             |    -    |
|   threshold    | 触底阈值，取值范围 0~1 |                            number                             |    0    |

### 事件

|  名称  |          说明          |    触发时机    |                             回调类型                             |
| :----: | :--------------------: | :------------: | :--------------------------------------------------------------: |
| scroll | 返回滚动位置和滚动距离 |    容器滚动    | (position: [number, number], distance: [number, number]) => void |
|  load  |        触底加载        | 容器滚动到底部 |                            () => void                            |

### 插槽

|  名称   |   说明   | 类型定义 |
| :-----: | :------: | :------: |
| default | 滚动内容 |    -     |

### 实例

|      成员       |        说明         |           类型定义            |
| :-------------: | :-----------------: | :---------------------------: |
|     update      |    更新滚动状态     |          () => void           |
|    scrollBy     |    滚动指定距离     | (x: number, y:number) => void |
|    scrollTo     |   滚动到指定位置    | (x: number, y:number) => void |
|     scrollX     | 水平滚动到指定位置  |      (x: number) => void      |
|     scrollY     | 垂直滚动到指定位置  |      (y: number) => void      |
|  refsContainer  | 滚动容器 `ref` 引用 |       Ref\<HTMLElement>       |
| containerWidth  |    滚动容器宽度     |         Ref\<number>          |
| containerHeight |    滚动容器高度     |         Ref\<number>          |

<script setup>
import ScrollbarUse1 from './use1.vue';
import ScrollbarUse2 from './use2.vue';
import ScrollbarUse3 from './use3.vue';
import ScrollbarUse4 from './use4.vue';
import ScrollbarUse5 from './use5.vue';
import ScrollbarUse6 from './use6.vue';
import ScrollbarUse7 from './use7.vue';
</script>
