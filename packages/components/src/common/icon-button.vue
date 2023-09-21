<template>
    <XTransition>
        <XButton circle class="x-button-close" :class="buttonClass" :icon="Close" text theme="error" v-bind="attrs" />
    </XTransition>
</template>

<script setup lang="ts">
    import { Close } from '@wink-ui/icons';
    import { XButton } from '@wink-ui/components';
    import XTransition from './transition.vue';
    defineOptions({
        name: 'XIconButton',
        inheritAttrs: false,
    });
    const props = defineProps<{
        rotate?: boolean;
    }>();
    const attrs = useAttrs();
    const buttonClass = computed(() => {
        return {
            '--rotate': props.rotate,
        };
    });
</script>

<style lang="less">
    .x-button.x-button-close {
        padding: 3px;
        min-width: fit-content;
        min-height: fit-content;
        &.--rotate:hover {
            transform: rotate(90deg);
        }
    }
</style>
