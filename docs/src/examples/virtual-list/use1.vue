<template>
    <XVirtualList :data="list" always>
        <template #default="{ item, index }">
            <div class="item">
                {{ index }}.{{ item.text }}
            </div>
        </template>
    </XVirtualList>
</template>
<script setup lang="ts">
import { XVirtualList } from 'wink-ui';
const list = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }))
</script>
<style scoped lang="less">
.x-virtual-list{
    background: var(--x-fade-white);
    .item{
        &:hover{
            background: var(--x-white);
            color: var(--x-black);
        }
    }
}
</style>
