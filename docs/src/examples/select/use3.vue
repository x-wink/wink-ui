<template>
    <div class="container">
        <XSelect v-model="value" :options="opts" tags />
        <XSelect v-model="value" :max-tag-count="1" :options="opts" tags />
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { XSelect } from 'wink-ui';
    const value = ref(['a', 'b', 'c']);
    const opts = [
        {
            label: 'AAAAA',
            value: 'a',
        },
        {
            label: 'BBBBB',
            value: 'b',
        },
        {
            label: 'CCCCC',
            value: 'c',
        },
    ];
</script>
<style scoped lang="less">
    .container {
        .x-flex();
        .x-select {
            + .x-select {
                margin-left: var(--x-gap);
            }
        }
    }
</style>
