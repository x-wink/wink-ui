<template>
    <div class="container x-flex">
        <div v-for="(item, index) in animations" :key="index" class="item x-flex col col-center">
            <XIcon :animation="item" size="24px">
                <Logo />
            </XIcon>
            <label>{{ item }}</label>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { Logo } from '@wink-ui/icons';
    import { XIcon, animations } from 'wink-ui';
</script>
<style scoped lang="less">
    .container {
        .item {
            .x-icon {
                color: var(--x-primary);
            }
            label {
                margin-top: var(--x-gap-mini);
            }
            + .item {
                margin-left: var(--x-gap);
            }
        }
    }
</style>
