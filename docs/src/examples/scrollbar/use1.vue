<template>
    <XScrollbar height="200px">
        <div class="content">
            <div v-for="(item, index) in 100" :key="index">这是很长的内容{{ index + 1 }}</div>
        </div>
    </XScrollbar>
</template>
<script setup lang="ts">
    import { XScrollbar } from 'wink-ui';
</script>
<style scoped lang="less">
    .content {
        background-color: #0003;
    }
</style>
