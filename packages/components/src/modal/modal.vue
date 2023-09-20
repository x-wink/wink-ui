<template>
    <XPopup v-model="visible" class="x-modal" :class="{ '--input': props.showInput }" :static="props.static">
        <div class="x-modal__mask" :class="{ '--active': !props.static && props.modal }">
            <XBox class="x-modal__container">
                <div v-if="props.title" class="x-modal__header">{{ props.title }}</div>
                <div v-if="props.showClose" class="x-modal__close">
                    <XButton circle :icon="Close" text theme="error" @click="handleClose('close')" />
                </div>
                <div class="x-modal__body">
                    <div class="x-modal__content">
                        <slot>{{ props.content }}</slot>
                    </div>
                    <div v-if="props.showInput" class="x-modal__input">
                        <XInput
                            v-model="value"
                            :placeholder="props.placeholder"
                            :type="props.inputType"
                            v-bind="props.inputAttrs"
                        />
                    </div>
                </div>
                <div v-if="props.showCancel || props.showConfirm" class="x-modal__footer">
                    <XButton
                        v-if="props.showCancel"
                        class="x-modal__cancel"
                        text
                        theme="error"
                        v-bind="props.cancelAttrs"
                        @click="handleClose('cancel')"
                    >
                        {{ props.cancelText }}
                    </XButton>
                    <XButton
                        v-if="props.showConfirm"
                        class="x-modal__confirm"
                        text
                        theme="primary"
                        v-bind="props.comfirmAttrs"
                        @click="handleConfirm"
                    >
                        {{ props.confirmText }}
                    </XButton>
                </div>
            </XBox>
        </div>
    </XPopup>
</template>

<script setup lang="ts">
    import { Close } from '@wink-ui/icons';
    import type { ModalInputValue, ModalCloseReason, ModalProps } from './types';
    import { XPopup, XBox, XButton, XInput } from '@wink-ui/components';
    defineOptions({
        name: 'XModal',
    });
    const props = withDefaults(defineProps<ModalProps>(), {
        showConfirm: true,
        cancelText: '取消',
        confirmText: '确定',
        defaultValue: '',
        modal: true,
    });
    const emits = defineEmits<{
        close: [reason: ModalCloseReason, value: ModalInputValue];
    }>();
    const visible = defineModel<boolean>({ required: true });
    const handleClose = (reason: ModalCloseReason) => {
        visible.value = false;
        emits('close', reason, value.value);
    };
    const handleConfirm = () => {
        handleClose('confirm');
    };

    const value = ref(String(props.defaultValue));
</script>

<style lang="less">
    .x-modal {
        padding: 0;
        width: fit-content;
        min-width: var(--x-width);
        background-color: transparent;
        &__mask {
            &.--active {
                width: 100vw;
                height: 100vh;
                background: var(--x-fade-black);
                backdrop-filter: blur(2px);
                .x-flex();
                .row-center();
                .col-center();
                .x-modal__container {
                    width: fit-content;
                }
            }
        }
        &__container.x-box {
            width: 100%;
            background-color: var(--x-primary);
        }
        &__header {
            padding: var(--x-gap-mini) var(--x-gap-small);
            border-bottom: 1px solid var(--x-light-purple);
            font-size: 1rem;
        }
        &__close {
            position: absolute;
            right: var(--x-gap-mini);
            top: var(--x-gap-mini);
            .x-button {
                padding: 3px;
                min-width: fit-content;
                min-height: fit-content;
            }
        }
        &__body {
            padding: var(--x-gap-small);
            .x-modal__content {
                text-align: center;
            }
            .x-modal__input {
                margin-top: var(--x-gap-mini);
            }
        }
        &__footer {
            .x-flex();
            border-top: 1px solid var(--x-light-purple);
            > .x-button {
                flex: 1;
                margin: 0;
                padding: 10px 0;
                border: none;
                border-radius: 0;
                &.x-modal__confirm {
                    color: var(--x-white);
                }
            }
        }
        &.--input {
            min-width: var(--x-width-large);
            .x-modal__body {
                .x-modal__content {
                    text-align: left;
                }
            }
        }
    }
</style>
../main
