<template>
    <div class="x-select__suffix">
        <XButton
            v-if="props.clearable && !props.empty && props.hover"
            circle
            class="x-select__clear"
            :icon="Close"
            text
            theme="error"
            @click.stop="handleClear"
        />
        <template v-else>
            <XIcon v-if="props.loading" animation="spin">
                <Loading />
            </XIcon>
            <XIcon v-else :style="arrowStyle">
                <ArrowDown />
            </XIcon>
        </template>
    </div>
</template>

<script setup lang="ts">
    import type { SelectSuffixProps } from './types';
    import { Close, Loading, ArrowDown } from '@wink-ui/icons';
    import { XButton, XIcon } from '@wink-ui/components';
    defineOptions({
        name: 'XSelectSuffix',
    });
    const props = defineProps<SelectSuffixProps>();
    const arrowStyle = computed(() => {
        return {
            transform: props.visible ? 'scaleY(-1)' : '',
        };
    });
    const emits = defineEmits<{
        clear: [];
    }>();
    const handleClear = () => {
        emits('clear');
    };
</script>

<style lang="less">
    .x-select {
        &__clear {
            min-width: unset !important;
            min-height: unset !important;
            padding: 2px !important;
        }
    }
</style>
