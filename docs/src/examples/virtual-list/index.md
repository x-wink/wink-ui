---
title: 虚拟列表
---

# 虚拟列表 VirtualList

## 功能介绍

用于长列表性能优化，只渲染可见区域附近的元素，减轻浏览器渲染压力

## 使用方式

### 固定高度

<br />
<VirtualListUse1 />

::: details 查看代码

<<< @/examples/virtual-list/use1.vue

:::

### 多列

<br />
<VirtualListUse2 />

::: details 查看代码

<<< @/examples/virtual-list/use2.vue

:::

## API 参考

::: tip

基础 API 参考前往 [滚动条 Scrollbar](/examples/scrollbar) 查看  
虚拟列表是泛型组件，类型 `T` 取决于传入的数据列表的元素类型

:::

### 属性

|   名称    |    说明    |                             类型                              | 默认值 |
| :-------: | :--------: | :-----------------------------------------------------------: | :----: |
|   data    |  数据列表  |                              T[]                              |  必填  |
| rowHeight |  元素高度  | [ValueProvider\<number\>](/common/data.md#valueprovider-type) |   30   |
|  columns  |    列数    |                            number                             |   1    |
|  buffer   | 预加载行数 |                            number                             |   1    |

### 事件

|  名称  |     说明     | 触发时机 |            回调类型            |
| :----: | :----------: | :------: | :----------------------------: |
| scroll | 返回滚动距离 | 容器滚动 | (x: number, y: number) => void |

### 插槽

|  名称   |   说明   |                 类型定义                 |
| :-----: | :------: | :--------------------------------------: |
| default | 渲染元素 | [VirtualListItem](#virtuallistitem-type) |

### 实例

| 成员 | 说明 | 类型定义 |
| :--: | :--: | :------: |
|  -   |  -   |    -     |

## 附加内容

### VirtualListItem `type`

```ts
interface VirtualListItem<T> {
    item: T;
    index: number;
}
```

<script setup>
import VirtualListUse1 from './use1.vue';
import VirtualListUse2 from './use2.vue';
</script>
