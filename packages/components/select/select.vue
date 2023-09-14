<template>
    <div class="x-select" :class="selectClass">
        <XPopover
            v-model="visible"
            close-on-click-outside
            :disabled="props.disabled || loading"
            style="width: var(--x-width); padding: var(--x-gap-mini) 0"
            :trigger="props.searchable ? 'manual' : 'click'"
        >
            <template #trigger>
                <!-- <XInput
                    v-if="props.searchable"
                    v-model="search"
                    class="x-select__search"
                    :placeholder="props.placeholder"
                    @focus="visible = true"
                >
                    <template #prefix>
                        <XIcon name="Search" />
                    </template>
                    <template #suffix>
                        <XSuffix
                            :clearable="props.clearable"
                            :empty="isEmpty"
                            :hover="isHover"
                            :loading="loading"
                            :visible="visible"
                            @clear="handleClear"
                        />
                    </template>
                </XInput> -->
                <XBox
                    class="x-select__container"
                    v-bind="attrs"
                    @click="visible = !visible"
                    @mouseenter="isHover = true"
                    @mouseleave="isHover = false"
                >
                    <div v-if="isEmpty && !props.searchable" class="x-select__placeholder">{{ props.placeholder }}</div>
                    <XSelection
                        v-else
                        :max-tag-count="props.maxTagCount"
                        :selection="selection"
                        :tags="props.tags"
                        @remove="handleRemove"
                    />
                    <XSuffix
                        :clearable="props.clearable"
                        :empty="isEmpty"
                        :hover="isHover"
                        :loading="loading"
                        :visible="visible"
                        @clear="handleClear"
                    />
                </XBox>
            </template>
            <XPanel :options="resolvedOptions" @pick="handlePick" />
        </XPopover>
    </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">
    import type { SelectOption, SelectOptionConfig, SelectValue } from '../';
    import { XBox, XPopover, selectOptionFields } from '../';
    import XSelection from './selection.vue';
    import XSuffix from './suffix.vue';
    import XPanel from './panel.vue';
    import { computed, ref, useAttrs } from 'vue';
    import type { ValueProvider } from '@wink-ui/utils';
    import { defaults, getValue } from '@wink-ui/utils';
    defineOptions({
        name: 'XSelect',
        inheritAttrs: false,
    });
    const attrs = useAttrs();
    const props = withDefaults(
        defineProps<{
            options: T[];
            config?: Partial<SelectOptionConfig>;
            multipart?: boolean;
            tags?: boolean;
            maxTagCount?: number;
            clearable?: boolean;
            disabled?: boolean;
            placeholder?: string;
            searchable?: boolean;
        }>(),
        {
            label: 'label',
            value: 'value',
            title: 'label',
            content: 'label',
            maxTagCount: 0,
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
    const isHover = ref(false);

    const outernalValue = defineModel<undefined | SelectValue | SelectValue[]>({ required: false });
    const internalValue = computed({
        get: () =>
            (isMultipart.value && Array.isArray(outernalValue.value)
                ? outernalValue.value
                : [outernalValue.value].filter(Boolean)) as SelectValue[],
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

    const handlePick = (value: SelectValue) => {
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
    const handleRemove = (index: number) => {
        internalValue.value.splice(index, 1);
    };
    const handleClear = () => {
        internalValue.value = [];
    };

    const resolvedConfig = computed(() => {
        return defaults(
            {},
            Object.fromEntries(
                selectOptionFields.map((item) => [item, item === 'content' ? 'label' : item])
            ) as SelectOptionConfig,
            props.config
        );
    });
    const calcItemLabel = (value: SelectValue) => {
        const item = props.options.find(
            (opt) => getValue<SelectValue>(opt[resolvedConfig.value.value] as ValueProvider<SelectValue>)! === value
        );
        return getValue<string>(item?.[resolvedConfig.value.label] as ValueProvider<string>, String(value))!;
    };
    const selection = computed(() => {
        return internalValue.value.map(calcItemLabel);
    });
    const resolvedOptions = computed<SelectOption[]>(() =>
        props.options.map((item) => {
            const value = getValue<SelectValue>(item[resolvedConfig.value.value] as ValueProvider<SelectValue>)!;
            return {
                value,
                label: calcItemLabel(value),
                title: getValue<string>(item[resolvedConfig.value.title] as ValueProvider<string>)!,
                content: getValue<string>(item[resolvedConfig.value.content] as ValueProvider<string>)!,
                disabled: getValue<boolean>(item[resolvedConfig.value.disabled] as ValueProvider<boolean>)!,
                active: internalValue.value.includes(value),
            };
        })
    );
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
