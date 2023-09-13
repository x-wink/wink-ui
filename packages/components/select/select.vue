<template>
    <div class="x-select" :class="selectClass">
        <XPopover
            v-model="visible"
            :disabled="props.disabled || loading"
            style="width: var(--x-width); padding: var(--x-gap-mini) 0"
            trigger="click"
        >
            <template #trigger>
                <XBox class="x-select__container" v-bind="attrs">
                    <div v-if="isEmpty" class="x-select__placeholder">{{ props.placeholder }}</div>
                    <div v-else class="x-select__selection">
                        <template v-if="props.tags">
                            <div v-for="(item, index) in selection" :key="index" class="x-select__tag">
                                <span>{{ item }}</span>
                                <XButton
                                    circle
                                    class="x-select__remove"
                                    icon="Close"
                                    text
                                    theme="error"
                                    @click.stop="handleRemove(item)"
                                />
                            </div>
                        </template>
                        <XText v-else ellipsis>
                            {{ selection.join(',') }}
                        </XText>
                    </div>
                    <XIcon name="ArrowDown" :style="arrowStyle" />
                </XBox>
            </template>
            <div class="x-select__popover">
                <div
                    v-for="(item, index) in props.options"
                    :key="index"
                    class="x-select__option"
                    :class="{ '--active': internalValue.includes(getItemValue(item)) }"
                >
                    <XIcon class="x-select__picked" name="Select" />
                    <XButton
                        block
                        class="x-select__label"
                        theme="primary"
                        :title="getItemTitle(item)"
                        @click="handlePick(item)"
                    >
                        {{ getItemContent(item) }}
                    </XButton>
                </div>
            </div>
        </XPopover>
    </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">
    import type { SelectValue } from '../';
    import { XBox, XPopover, XIcon, XButton, XText } from '../';
    import { computed, ref, useAttrs } from 'vue';
    defineOptions({
        name: 'XSelect',
        inheritAttrs: false,
    });
    const attrs = useAttrs();
    const props = withDefaults(
        defineProps<{
            options: T[];
            label?: string;
            value?: string;
            title?: string;
            content?: string;
            multipart?: boolean;
            tags?: boolean;
            disabled?: boolean;
            placeholder?: string;
        }>(),
        {
            label: 'label',
            value: 'value',
            title: 'label',
            content: 'label',
            placeholder: '请选择',
        }
    );
    const selectClass = computed(() => {
        return {
            '--disabled': props.disabled,
            '--loading': loading.value,
        };
    });

    const isMultipart = computed(() => props.tags || props.multipart);
    const isEmpty = computed(() => internalValue.value.length === 0);

    const outernalValue = defineModel<undefined | SelectValue | SelectValue[]>({ required: false });
    const internalValue = computed({
        get: () =>
            (isMultipart.value && Array.isArray(outernalValue.value)
                ? outernalValue.value
                : [outernalValue.value]) as SelectValue[],
        set: (value) => {
            if (isMultipart.value) {
                outernalValue.value = value;
            } else {
                outernalValue.value = value[0];
            }
        },
    });

    const loading = defineModel<boolean>('loading', { required: false, default: false, local: true });
    const visible = ref(false);

    const arrowStyle = computed(() => {
        return {
            transform: visible.value ? 'scaleY(-1)' : '',
        };
    });

    const handlePick = (item: T) => {
        const value = getItemValue(item);
        const index = internalValue.value.indexOf(value);
        if (index !== -1) {
            internalValue.value.splice(index, 1);
        } else {
            if (isMultipart.value) {
                internalValue.value.push(value);
            } else {
                internalValue.value = [value];
            }
        }
        if (!isMultipart.value) {
            visible.value = false;
        }
    };
    const handleRemove = (value: SelectValue) => {
        internalValue.value.splice(internalValue.value.indexOf(value), 1);
    };

    const getItemValue = (item: T) => item[props.value] as SelectValue;
    const getItemContent = (item: T) => item[props.content] as string;
    const getItemTitle = (item: T) => item[props.title] as string;
    const calcItemLabel = (value: SelectValue) =>
        (props.options.find((opt) => getItemValue(opt) === value)?.[props.label] ?? value) as string;
    const selection = computed(() => {
        return internalValue.value.map(calcItemLabel);
    });
</script>

<style lang="less">
    @import url('../../theme/src/styles/flex.less');
    @import url('../../theme/src/styles/status.less');
    .x-select {
        &__container {
            .x-flex();
            .col-center();
            width: var(--x-width);
            min-height: var(--x-height);
            padding: 0 var(--x-gap-mini);
            color: fieldtext;
            background-color: field;
        }
        &__placeholder {
            .x-flex.fill();
            color: var(--x-gray);
        }
        &__selection {
            .x-flex.fill();
            .x-flex();
            .wrap();
            overflow: hidden;
        }
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
        &__popover {
            .x-flex();
            .col();
            width: 100%;
        }
        &__option {
            position: relative;
            &.--active {
                .x-select__picked {
                    opacity: 1;
                }
                .x-select__label {
                    background-color: var(--x-light-purple);
                    color: var(--x-primary);
                }
            }
        }
        &__picked {
            opacity: 0;
            position: absolute;
            z-index: 1;
            left: var(--x-gap);
            top: 0;
            bottom: 0;
            margin: auto;
            color: var(--x-primary);
        }
        &.--disabled {
            .x-select__container {
                .x-disabled();
            }
        }
        &.--loading {
            .x-select__container {
                .x-loading();
            }
        }
    }
</style>
