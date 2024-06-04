<template>
    <XScrollbar always height="200px" :threshold="0.2" @load="length += 10">
        <div class="content">
            <div v-for="(item, index) in length" :key="index">这是很长的内容{{ index + 1 }}</div>
        </div>
    </XScrollbar>
</template>
<script setup lang="ts">
    import { XScrollbar } from 'wink-ui';
    import { ref } from 'vue';
    const length = ref(10);
</script>
<style scoped lang="less">
    .content {
        background-color: #0003;
    }
</style>
