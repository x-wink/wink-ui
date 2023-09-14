<template>
    <div class="x-select__suffix">
        <XButton
            v-if="props.clearable && !props.empty && props.hover"
            circle
            class="x-select__clear"
            icon="Close"
            text
            theme="error"
            @click.stop="handleClear"
        />
        <template v-else>
            <XIcon v-if="props.loading" animation="spin" name="Loading" />
            <XIcon v-else name="ArrowDown" :style="arrowStyle" />
        </template>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { XButton, XIcon } from '../';
    const props = defineProps<{
        clearable?: boolean;
        empty: boolean;
        hover: boolean;
        loading: boolean;
        visible: boolean;
    }>();
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

<style scoped lang="less">
    .x-select {
        &__clear {
            min-width: unset !important;
            min-height: unset !important;
            padding: 2px !important;
        }
    }
</style>
