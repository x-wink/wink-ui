<template>
    <XButton circle class="x-button-close" :icon="Close" text theme="error" />
</template>

<script setup lang="ts">
    import { Close } from '@wink-ui/icons';
    import { XButton } from '@wink-ui/components';
    defineOptions({
        name: 'XClose',
    });
</script>

<style lang="less">
    .x-button.x-button-close {
        padding: 3px;
        min-width: fit-content;
        min-height: fit-content;
        &:hover {
            transform: rotate(90deg);
        }
    }
</style>
