<template>
    <div class="container">
        <XBox>空盒子</XBox>
        <XBox shadow>阴影盒子</XBox>
        <XBox animation>动画盒子</XBox>
    </div>
</template>
<script setup lang="ts">
    import { XBox } from 'wink-ui';
</script>
<style scoped lang="less">
    .container {
        .x-flex();
        .wrap();
        .x-box {
            width: var(--x-width);
            height: var(--x-width);
            line-height: var(--x-width);
            text-align: center;
            + .x-box {
                margin-left: var(--x-gap);
            }
        }
    }
</style>
