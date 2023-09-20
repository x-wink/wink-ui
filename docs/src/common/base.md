---
title: 通用内容
---

# 通用内容

## 常量

### themeColors `const`

主题颜色枚举列表，类型为 [`ThemeColor[]`](#themecolor-type)

## 类型

### HTMLElementTagName `type`

原生 `HTML` 元素标签名

### ThemeColor `type`

主题颜色联合类型，可选值：

<ul>
    <li v-for="(item, index) in themeColors" :key="index">{{ item }}</li>
</ul>

<script setup>
import { themeColors } from 'wink-ui';
</script>
