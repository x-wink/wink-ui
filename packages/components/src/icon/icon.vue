<template>
    <i class="x-icon" :class="iconClass" :style="iconStyle">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import type { XAnimation } from './types';
    defineOptions({
        name: 'XIcon',
    });
    const props = withDefaults(
        defineProps<{
            size?: string;
            color?: string;
            animation?: XAnimation;
        }>(),
        {
            size: '1em',
            color: 'inherit',
        }
    );
    const iconClass = computed(() => {
        return {
            [`x-animation-${props.animation}`]: props.animation,
        };
    });
    const iconStyle = computed(() => {
        return { '--size': props.size, '--color': props.color };
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
