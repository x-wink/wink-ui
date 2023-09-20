<template>
    <div class="x-color-block" :style="blockStyle"></div>
</template>

<script setup lang="ts">
    import { completeCssNumeric } from '@wink-ui/utils';
    import type { ColorPickerBlockProps } from './types';
    defineOptions({
        name: 'XColorPickerBlock',
    });
    const props = withDefaults(defineProps<ColorPickerBlockProps>(), {
        width: '24px',
        height: '24px',
    });
    const blockStyle = computed(() => {
        return {
            background: props.color,
            width: completeCssNumeric(props.width),
            height: completeCssNumeric(props.height),
        };
    });
</script>
<style lang="less">
    .x-color-block {
        border-radius: var(--x-border-radius-small);
        border: 1px solid var(--x-gray);
        transition: background 0s;
    }
</style>
