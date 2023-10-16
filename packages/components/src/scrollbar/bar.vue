<template>
    <XTransition>
        <div
            v-show="horizontalVisible"
            class="x-scrollbar__bar"
            :class="props.vertical ? '--vertical' : '--horizontal'"
        >
            <div ref="refsThumb" class="x-scrollbar__thumb" :style="thumbStyle"></div>
        </div>
    </XTransition>
</template>

<script setup lang="ts">
    import type { ScrollbarBarProps } from './types';
    import XTransition from '../common/transition.vue';
    import { createDragableElement } from '@wink-ui/utils';
    const props = defineProps<ScrollbarBarProps>();
    const thumbStyle = computed(() => {
        return {
            [props.vertical ? 'height' : 'width']: `${props.size * 100}%`,
            transform: `translate${props.vertical ? 'Y' : 'X'}(${props.position * 100}%)`,
        };
    });
    const active = ref(false);
    let destroy: undefined | (() => void);
    const refsThumb = ref<HTMLElement>();
    watch(
        [() => props.container, refsThumb],
        ([container, el]) => {
            if (container && el) {
                destroy = createDragableElement(el, container, {
                    start: () => {
                        active.value = true;
                    },
                    end: () => {
                        active.value = false;
                    },
                    move: ({ relative: [x, y] }) => {
                        if (props.vertical) {
                            container.scrollTo(container.scrollLeft, y * container.scrollHeight);
                        } else {
                            container.scrollTo(x * container.scrollLeft, container.scrollTop);
                        }
                    },
                });
            } else {
                destroy?.();
                destroy = void 0;
            }
        },
        { immediate: true }
    );
    const horizontalVisible = computed(() => props.visible || active.value);
</script>

<style lang="less">
    .x-scrollbar {
        &__bar {
            position: absolute;
            z-index: 10;
            cursor: pointer;
            border-radius: var(--x-border-radius);
            &.--horizontal {
                width: 100%;
                height: var(--x-border-radius);
                bottom: var(--x-gap-mini);
                left: 0;
            }
            &.--vertical {
                width: var(--x-border-radius);
                height: 100%;
                right: var(--x-gap-mini);
                top: 0;
            }
        }
        &__thumb {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: var(--x-primary);
            cursor: pointer;
            opacity: 0.6;
            transition: opacity 0.3s;
            &:hover,
            &:active {
                opacity: 1;
            }
        }
    }
</style>
