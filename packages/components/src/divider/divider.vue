<template>
    <div class="x-divider" :class="dividerClass" :style="dividerStyle">
        <div class="x-divider__line"></div>
        <XText class="x-divider__text" :class="textClass" ellipsis :theme="props.theme" :vertical="props.vertical">
            <slot>{{ props.text }}</slot>
        </XText>
        <div class="x-divider__line"></div>
    </div>
</template>

<script setup lang="ts">
    import type { DividerProps } from './types';
    import { XText } from '@wink-ui/components';
    defineOptions({
        name: 'XDivider',
    });
    const props = withDefaults(defineProps<DividerProps>(), {
        placement: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'var(--x-fade-gray)',
    });
    const dividerClass = computed(() => {
        return {
            [`--vertical`]: props.vertical,
        };
    });
    const dividerStyle = computed(() => {
        return {
            [`--border-style`]: props.borderStyle,
            [`--border-width`]: `${props.borderWidth}px`,
            [`--border-color`]: props.borderColor,
        };
    });
    const textClass = computed(() => {
        return {
            [`--${props.placement}`]: true,
        };
    });
</script>

<style lang="less">
    .x-divider {
        .x-flex();
        .col-center();
        width: 100%;
        margin: var(--x-gap-small) 0;
        font-size: var(--x-size-mini);
        &__text {
            color: inherit;
            &:not(:empty) {
                margin: 0 var(--x-gap-small);
            }
        }
        &__line {
            width: 100%;
            height: 1px;
            flex: 1;
            border-top: var(--border-width) var(--border-style) var(--border-color);
            &:has(+ .--left),
            .--right + & {
                flex: 0.1;
            }
        }
        &.--vertical {
            .inline();
            .col();
            .row-center();
            max-width: fit-content;
            min-height: 1em;
            margin: 0 var(--x-gap-small);
            vertical-align: middle;
            .x-divider__text:not(:empty) {
                margin: var(--x-gap-small) 0;
            }
            .x-divider__line {
                width: 1px;
                height: 100%;
                border-top: none;
                border-left: var(--border-width) var(--border-style) var(--border-color);
            }
        }
    }
</style>
