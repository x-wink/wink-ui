<template>
    <XModal v-model="visible" content="静态展示弹窗" :modal="false" :show-confirm="false" static />
</template>
<script setup lang="ts">
    import { XModal } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(true);
</script>
