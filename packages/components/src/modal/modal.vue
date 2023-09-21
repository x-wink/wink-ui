<template>
    <XPopup v-model="visible" class="x-modal" :class="{ '--input': props.showInput }" :static="props.static">
        <div class="x-modal__mask" :class="{ '--active': !props.static && props.modal }">
            <XBox class="x-modal__container" :style="containerStyle">
                <div v-if="props.title" class="x-modal__header">{{ props.title }}</div>
                <IconButton v-if="props.showClose" class="x-modal__close" rotate @click="handleClose('close')" />
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
    import type { ModalInputValue, ModalCloseReason, ModalProps } from './types';
    import IconButton from '../common/icon-button.vue';
    import { XPopup, XBox, XButton, XInput } from '@wink-ui/components';
    import { completeCssNumeric } from '@wink-ui/utils';
    defineOptions({
        name: 'XModal',
    });
    const props = withDefaults(defineProps<ModalProps>(), {
        showConfirm: true,
        cancelText: '取消',
        confirmText: '确定',
        defaultValue: '',
        modal: true,
        width: 'fit-content',
        height: 'fit-content',
    });
    const emits = defineEmits<{
        close: [reason: ModalCloseReason, value: ModalInputValue];
    }>();
    const containerStyle = computed(() => {
        return {
            '--width': completeCssNumeric(props.width),
            '--height': completeCssNumeric(props.height),
        };
    });
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
        min-width: var(--x-width-large);
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
            }
        }
        &__container.x-box {
            background-color: var(--x-primary);
        }
        &__header {
            padding: var(--x-gap-mini) var(--x-gap-small);
            border-bottom: 1px solid var(--x-border);
            font-size: 1rem;
        }
        &__close {
            position: absolute;
            right: var(--x-gap-mini);
            top: var(--x-gap-mini);
        }
        &__body {
            padding: var(--x-gap-small);
            .x-modal__content {
                text-align: center;
            }
            .x-modal__input {
                .x-input {
                    width: 100%;
                }
                margin-top: var(--x-gap-mini);
            }
        }
        &__footer {
            .x-flex();
            border-top: 1px solid var(--x-border);
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
            min-width: var(--x-width-super);
            .x-modal__body {
                .x-modal__content {
                    text-align: left;
                }
            }
        }
    }
</style>
../main
