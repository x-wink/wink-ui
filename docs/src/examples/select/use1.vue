<template>
    <div class="container">
        <XSelect v-model="value" :options="opts" />
        <XSelect v-model="value" disabled :options="opts" />
        <XSelect v-model="value" loading :options="opts" />
        <XSelect v-model="value" clearable :options="opts" />
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { XSelect } from 'wink-ui';
    const value = ref('a');
    const opts = [
        {
            label: 'AAA',
            value: 'a',
        },
        {
            label: 'BBB',
            value: 'b',
        },
        {
            label: 'CCC',
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
