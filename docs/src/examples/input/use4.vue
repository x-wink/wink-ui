<template>
    <XInput v-model="value" clearable placeholder="请输入文本" />
</template>
<script setup lang="ts">
    import { XInput } from 'wink-ui';
    import { ref } from 'vue';
    const value = ref('');
</script>
