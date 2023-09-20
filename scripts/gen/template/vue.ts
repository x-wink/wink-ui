export default /* ts */ `<template>
    <div class="x-@@name">
        <slot>@@title</slot>
    </div>
</template>

<script setup lang="ts">
    import type { @@codeProps } from './types';
    defineOptions({
        name: 'X@@code',
    });
    const props = defineProps<@@codeProps>();
</script>

<style lang="less">
    .x-@@name {
        //
    }
</style>
`;
