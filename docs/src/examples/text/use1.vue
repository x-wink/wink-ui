<template>
    <div class="container">
        <XText v-for="(item, index) in themeColors" :key="index" :theme="item">{{ item }}</XText>
    </div>
</template>
<script setup lang="ts">
    import { XText, themeColors } from 'wink-ui';
</script>
<style scoped lang="less">
    .container {
        .x-text {
            + .x-text {
                margin-left: var(--x-gap);
            }
        }
    }
</style>
