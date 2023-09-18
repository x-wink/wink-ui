<template>
    <div class="x-select__tag">
        <span><slot></slot></span>
        <XButton
            v-if="props.removeable"
            circle
            class="x-select__remove"
            :icon="Close"
            text
            theme="error"
            @click.stop="handleRemove"
        />
    </div>
</template>

<script setup lang="ts">
    import { Close } from '@wink-ui/icons';
    import { XButton } from '@wink-ui/components';
    const props = defineProps<{
        removeable?: boolean;
    }>();
    const emits = defineEmits<{
        remove: [];
    }>();
    const handleRemove = () => {
        emits('remove');
    };
</script>

<style lang="less">
    .x-select {
        &__tag {
            .x-flex();
            .col-center();
            background-color: var(--x-fade-white);
            margin: 2px;
            padding: 2px var(--x-gap-mini);
            border-radius: var(--x-border-radius);
        }
        &__remove {
            min-width: unset !important;
            min-height: unset !important;
            padding: 2px !important;
            margin-left: var(--x-gap-mini);
            font-size: var(--x-size-mini);
        }
    }
</style>
