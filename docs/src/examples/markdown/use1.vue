<template>
    {{ md }}
    <XMarkdown v-model="md" />
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { XMarkdown } from 'wink-ui';
    const md = ref(`### 这是富文本渲染`);
</script>
<style scoped lang="less"></style>
