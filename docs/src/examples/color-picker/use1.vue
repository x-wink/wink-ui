<template>
    <XColorPicker v-model="color" />
</template>
<script setup lang="ts">
    import { XColorPicker } from 'wink-ui';
    import { ref } from 'vue';
    const color = ref('#ff000055');
</script>
<style scoped lang="less"></style>
