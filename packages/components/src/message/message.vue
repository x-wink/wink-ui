<template>
    <XPopup v-model="visible" class="x-message" :class="messageClass">
        <XBox class="x-message__container" :theme="props.theme">
            <XIcon v-if="props.icon" class="x-message__icon">
                <component :is="props.icon" />
            </XIcon>
            <XText class="x-message__content" ellipsis :theme="props.theme">
                <slot>{{ props.content }}</slot>
            </XText>
            <IconButton v-if="props.closeable" class="x-message__close" rotate @click="handleClose('close')" />
        </XBox>
    </XPopup>
</template>

<script setup lang="ts">
    import type { MessageProps } from './types';
    import type { MessageCloseReason } from '@wink-ui/components';
    import { XBox, XIcon, XPopup, XText } from '@wink-ui/components';
    import IconButton from '../common/icon-button.vue';
    defineOptions({
        name: 'XMessage',
    });
    const props = withDefaults(defineProps<MessageProps>(), {
        duration: 0,
        theme: 'default',
    });
    const visible = defineModel<boolean>({ required: false, default: true, local: true });
    const messageClass = computed(() => {
        return {
            [`--${props.theme}`]: true,
        };
    });
    const emits = defineEmits<{
        close: [reason: MessageCloseReason];
    }>();
    const handleClose = (reason: MessageCloseReason = 'timeout') => {
        visible.value = false;
        emits('close', reason);
    };

    let clearId: NodeJS.Timeout;
    watch(
        [visible, () => props.duration],
        ([visible, duration]) => {
            if (visible) {
                if (duration) {
                    clearTimeout(clearId);
                    clearId = setTimeout(handleClose, duration);
                }
            } else {
                clearTimeout(clearId);
            }
        },
        { immediate: true }
    );
</script>

<style lang="less">
    .x-message {
        padding: 0;
        background-color: var(--x-fade-white);
        width: fit-content;
        max-width: 50vw;
        &__container {
            .x-flex();
            .col-center();
            padding: var(--x-gap-mini) var(--x-gap);
            background-color: #0000 !important;
        }
        &__icon {
            margin-right: var(--x-gap-mini);
        }
        &__close {
            margin-left: var(--x-gap-mini);
        }
        each(@themes, {
            &.--@{value} {
                border-color: .x-themes(@index)[@color];
                .x-message__icon{
                    color: .x-themes(@index)[@color];
                }
            }
        });
    }
</style>
