<template>
    <XPopup
        v-bind="attrs"
        v-model="visible"
        arrow
        class="x-popover"
        :close-on-click-outside="props.trigger === 'click'"
        :disabled="props.disabled"
        :target="refsTrigger"
        @mouseenter="handleEnterPopover"
        @mouseleave="handleLeavePopover"
    >
        <slot></slot>
    </XPopup>
    <div ref="refsTrigger" class="x-popover__trigger" :class="props.triggerClass" v-on="triggerEvent">
        <slot name="trigger"></slot>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, useAttrs } from 'vue';
    import { XPopup } from '../popup';
    import type { PopoverTrigger } from './types';
    import { debounce } from '../../utils';
    defineOptions({
        name: 'XPopover',
        inheritAttrs: false,
    });
    const attrs = useAttrs();
    const props = withDefaults(
        defineProps<{
            trigger?: PopoverTrigger;
            triggerClass?: string;
            dalay?: number;
            disabled?: boolean;
        }>(),
        {
            trigger: 'hover',
            dalay: 100,
        }
    );

    const visible = defineModel<boolean>({ required: false, default: false, local: true });

    const refsTrigger = ref<HTMLDivElement>();

    const active = ref(false);
    const triggerEvent = computed(() => {
        return props.trigger === 'click'
            ? {
                  click: handleActive,
              }
            : props.trigger === 'hover'
            ? {
                  mouseenter: handleActive,
                  mouseleave: handleClose,
              }
            : {};
    });
    const handleActive = () => {
        if (!props.disabled) {
            active.value = true;
            visible.value = true;
        }
    };
    const handleInactive = () => {
        active.value = false;
        if (!inPopover.value && !active.value) {
            visible.value = false;
        }
    };
    const handleClose = debounce(handleInactive, props.dalay);

    const inPopover = ref(false);
    const handleEnterPopover = () => {
        inPopover.value = true;
    };
    const handleLeavePopover = () => {
        inPopover.value = false;
        if (props.trigger === 'hover') {
            handleInactive();
        }
    };
</script>

<style lang="less">
    .x-popover {
        &__trigger {
            cursor: pointer;
            width: fit-content;
        }
    }
</style>
