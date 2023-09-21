<template>
    <div class="container">
        <XMessage
            v-for="(item, index) in themeColors"
            :key="index"
            :content="`这是一个${item}主题的的消息框`"
            static
            :theme="item"
        />
    </div>
</template>
<script setup lang="ts">
    import { XMessage, themeColors } from 'wink-ui';
</script>
<style scoped lang="less">
    .container {
        .x-flex();
        .wrap();
        :deep(.x-message) {
            margin: var(--x-gap-mini);
        }
    }
</style>
