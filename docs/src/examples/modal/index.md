---
title: 模态框
---

# 模态框 Modal

## 功能介绍

模态框组件

## 使用方式

### 普通模态框

<br />
<ModalUse1 />

::: details 查看代码

<<< @/examples/modal/use1.vue

:::

### 取消按钮

<br />
<ModalUse2 />

::: details 查看代码

<<< @/examples/modal/use2.vue

:::

### 标题栏

<br />
<ModalUse3 />

::: details 查看代码

<<< @/examples/modal/use3.vue

:::

### 输入框

<br />
<ModalUse4 />

::: details 查看代码

<<< @/examples/modal/use4.vue

:::

### 自定义输入框

<br />
<ModalUse5 />

::: details 查看代码

<<< @/examples/modal/use5.vue

:::

### 关闭模态框

<br />
<ModalUse6 />

::: details 查看代码

<<< @/examples/modal/use6.vue

:::

### 动态模态框

<br />
<ModalUse7 />

::: details 查看代码

<<< @/examples/modal/use7.vue

:::

## API 参考

::: tip

基础 API 参考前往 [弹出层 Popup](/examples/popup) 查看

:::

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

### ModalCloseReason `type`

模态框关闭原因联合类型，可选值：

<ul>
    <li v-for="(item, index) in modalCloseReasons" :key="index">{{ item }}</li>
</ul>

### modalCloseReasons `const`

模态框关闭原因枚举列表，类型为 [`ModalCloseReason[]`](#modalclosereason-type)

<script setup>
import { modalCloseReasons } from 'wink-ui';
import ModalUse1 from './use1.vue';
import ModalUse2 from './use2.vue';
import ModalUse3 from './use3.vue';
import ModalUse4 from './use4.vue';
import ModalUse5 from './use5.vue';
import ModalUse6 from './use6.vue';
import ModalUse7 from './use7.vue';
</script>
