<template>
    <XVirtualList always :columns="3" :data="list" style="height: 300px">
        <template #default="{ item, index }">
            <div class="item">{{ index + 1 }}.{{ item.text }}</div>
        </template>
    </XVirtualList>
</template>
<script setup lang="ts">
    import { XVirtualList } from 'wink-ui';
    const list = Array.from({ length: 10000 }, (_, i) => ({ id: i, text: `Item ${i + 1}` }));
</script>
<style scoped lang="less">
    .x-virtual-list {
        background: var(--x-fade-white);
        .item {
            &:hover {
                background: var(--x-white);
                color: var(--x-black);
            }
        }
    }
</style>
