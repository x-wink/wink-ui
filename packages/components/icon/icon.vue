<template>
    <i class="x-icon" :class="iconClass">
        <component :is="iconComponent" />
    </i>
</template>

<script setup lang="ts">
    import type { IconName } from '@wink-ui/icons';
    import * as svgs from '@wink-ui/icons';
    import { computed } from 'vue';
    import type { XAnimation } from './types';
    defineOptions({
        name: 'XIcon',
    });
    const props = withDefaults(
        defineProps<{
            name: IconName;
            size?: string;
            animation?: XAnimation;
        }>(),
        {
            size: '1em',
        }
    );
    const iconClass = computed(() => {
        return {
            [`x-animation-${props.animation}`]: props.animation,
        };
    });
    const iconComponent = computed(() => svgs[props.name]);
</script>

<style lang="less">
    .x-icon {
        font-size: v-bind('props.size');
        display: inline-block;
        color: inherit;
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
