<template>
    {{ md }}
    <XMarkdown v-model="md" />
</template>
<script setup lang="ts">
    import { XMarkdown } from 'wink-ui';
    const md = `### 这是富文本渲染`;
</script>
<style scoped lang="less"></style>
