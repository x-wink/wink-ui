<template>
    <component :is="props.tag" class="x-icon" :class="iconClass" :style="iconStyle">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
    import { completeCssNumeric } from '@wink-ui/utils';
    import type { IconProps } from './types';
    defineOptions({
        name: 'XIcon',
    });
    const props = withDefaults(defineProps<IconProps>(), {
        tag: 'span',
        size: '1em',
        color: 'inherit',
    });
    const iconClass = computed(() => {
        return {
            [`x-animation-${props.animation}`]: !!props.animation,
        };
    });
    const iconStyle = computed(() => {
        return { '--size': completeCssNumeric(props.size), '--color': props.color };
    });
</script>

<style lang="less">
    .x-icon {
        font-size: var(--size);
        width: fit-content;
        height: fit-content;
        display: inline-block;
        color: var(--color);
        line-height: 0;
        text-align: center;
        vertical-align: -0.125em;

        svg {
            display: inline-block;
            overflow: hidden;
            line-height: 1;
        }
    }
</style>
