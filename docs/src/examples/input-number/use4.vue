<template>
    <XInputNumber v-model="value" show-controls step="10" step-strictly />
</template>
<script setup lang="ts">
    import { XInputNumber } from 'wink-ui';
    import { ref } from 'vue';
    const value = ref(0);
</script>
<style scoped lang="less"></style>
