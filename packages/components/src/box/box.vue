<template>
    <div class="x-box" :class="classList">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import type { BoxProps } from './types';

    defineOptions({
        name: 'XBox',
    });
    const props = withDefaults(defineProps<BoxProps>(), { theme: 'default' });
    const classList = computed(() => {
        return { [`--${props.theme}`]: true, '--animation': props.animation, '--shadow': props.shadow };
    });
</script>

<style lang="less">
    @keyframes xBoxBreathe {
        from {
            box-shadow: inset 0 0 15px var(--x-primary);
        }

        to {
            box-shadow: inset 0 0 0px #0000;
        }
    }

    .x-box {
        border: 2px solid var(--x-primary);
        border-radius: var(--x-border-radius);
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(1.2px);
        overflow: hidden;

        &.--shadow {
            box-shadow: inset 0 0 15px var(--x-primary);
        }

        &.--animation {
            animation: xBoxBreathe 1s ease-in-out 0s infinite alternate-reverse;
        }

        each(@themes, {
        &.--@{value} {
            border-color: .x-themes(@index)[@color];
        }
    });
    }
</style>
