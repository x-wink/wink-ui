export default /* ts */ `<template>
    <div class="x-@@name">
        <slot>@@title</slot>
    </div>
</template>

<script setup lang="ts">
    defineOptions({
        name: 'X@@code',
    });
</script>

<style lang="less">
    .x-@@name {
        //
    }
</style>
`;
