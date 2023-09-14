<template>
    <div class="x-select__panel">
        <div v-for="(item, index) in props.options" :key="index" class="x-select__option" :class="optionClass(item)">
            <XIcon class="x-select__picked" name="Select" />
            <XButton
                block
                class="x-select__label"
                :disabled="item.disabled"
                theme="primary"
                :title="item.title"
                @click="handlePick(item.value)"
            >
                {{ item.content }}
            </XButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { XButton, XIcon } from '../';
    import type { SelectOption, SelectValue } from './types';
    import { computed } from 'vue';
    const props = defineProps<{
        options: SelectOption[];
    }>();
    const optionClass = computed(() => (item: SelectOption) => {
        return {
            '--active': item.active,
            '--disabled': item.disabled,
        };
    });
    const emits = defineEmits<{
        pick: [item: SelectValue];
    }>();
    const handlePick = (value: SelectValue) => {
        emits('pick', value);
    };
</script>

<style scoped lang="less">
    @import url('../../theme/src/styles/flex.less');
    .x-select {
        &__panel {
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
    }
</style>
