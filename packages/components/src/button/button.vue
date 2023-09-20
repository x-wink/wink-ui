<template>
    <button class="x-button" :class="classList" :disabled="isDisabled" type="button">
        <span v-if="props.loading || props.icon || slots.icon" class="x-button__icon">
            <XIcon v-if="props.loading" animation="spin">
                <Loading />
            </XIcon>
            <slot v-else name="icon">
                <XIcon v-if="props.icon">
                    <component :is="props.icon" />
                </XIcon>
            </slot>
        </span>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
    import type { ButtonProps } from './types';
    import { XIcon } from '@wink-ui/components';
    import { Loading } from '@wink-ui/icons';

    defineOptions({
        name: 'XButton',
    });
    const props = withDefaults(defineProps<ButtonProps>(), {
        theme: 'default',
    });

    const slots = useSlots();
    const classList = computed(() => {
        return {
            [`--${props.theme}`]: true,
            '--link': props.link,
            '--text': props.text,
            '--simple': props.simple,
            '--round': props.round,
            '--circle': props.circle,
            '--block': props.block,
            '--loading': props.loading,
            '--disabled': isDisabled.value,
        };
    });

    const isDisabled = computed(() => props.disabled || props.loading);
</script>

<style lang="less">
    .x-button {
        .x-flex();
        .inline();
        .row-center();
        .col-center();
        appearance: none;
        white-space: nowrap;
        text-align: center;
        font-size: inherit;
        line-height: 0;
        outline: none !important;
        user-select: none;
        cursor: pointer;

        min-width: var(--x-width-mini);
        height: var(--x-height);
        padding: var(--x-gap-mini) var(--x-gap-small);
        border-radius: var(--x-border-radius);
        border: 1px solid var(--x-gray);

        each(@themes, {
            &.--@{value} {
                color: if(@value=default, var(--x-black), var(--x-white));
                background-color: .x-themes(@index)[@color];
                border-color: .x-themes(@index)[@color];

                &.--simple {
                    color: .x-themes(@index)[@color];
                    background-color: transparent;

                    &:hover:not(:disabled) {
                        background-color: .x-themes(@index)[@color];
                        color: if(@value=default, var(--x-black), var(--x-white));
                    }
                }

                &.--text, &.--link {
                    color: .x-themes(@index)[@color];
                    &:active:not(:disabled) {
                        box-shadow: none;
                    }
                }
                &.--text{
                    &:hover:not(:disabled) {
                        color: if(@value=default, var(--x-gray), var(--x-white));
                        background-color: .x-themes(@index)[@dark];
                    }
                }
                &.--link{
                    &::after {
                        border-bottom-color: .x-themes(@index)[@color];
                    }
                }

                &:active {
                    box-shadow: 0 0 5px .x-themes(@index)[@color];
                }
            }
        });

        &.--text,
        &.--link {
            background-color: transparent;
            border-color: transparent;
        }

        &.--text {
            &:disabled {
                text-decoration: line-through;
            }
        }

        &.--link {
            position: relative;
            &::after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                height: 0;
                width: 0;
                border-bottom: 2px dashed var(--x-white);
                transition: width 0.3s;
            }
            &:hover:not(:disabled) {
                &::after {
                    width: 70%;
                }
            }
            &:active:not(:disabled) {
                &::after {
                    border-bottom-style: solid;
                }
            }
            &:disabled {
                font-style: italic;
            }
        }

        &.--round {
            border-radius: 9999px;
        }

        &.--circle {
            border-radius: 50%;
            height: fit-content;
            padding: 10px;
            min-width: 30px;
            min-height: 30px;

            &::before {
                content: '';
                display: inline-block;
                vertical-align: middle;
                padding-top: 100%;
                height: 0;
            }
        }

        &.--block {
            width: 100%;
        }

        &:hover {
            .x-hover();
        }

        &:active {
            .x-active();
        }

        &:disabled {
            .x-disabled();
        }

        &.--loading {
            .x-loading();
        }

        &__icon {
            + span:not(:empty) {
                margin-left: var(--x-gap-mini);
            }
        }
        & + & {
            margin-left: var(--x-gap-small);
        }
    }
</style>
../main
