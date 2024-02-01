<template>
    <XScrollbar ref="refsScrollbar" class="x-virtual-list" :wrapper-style="wrapperStyle" @scroll="update">
        <div class="list">
            <div
                v-for="(item, index) in internalData"
                :key="startIndex + index"
                class="x-virtual-list__item"
                :style="itemStyle"
            >
                <slot :index="index + startIndex" :item="item"></slot>
            </div>
        </div>
    </XScrollbar>
</template>

<script setup lang="ts" generic="T">
    import type { VirtualListProps } from './types';
    import type { ScrollbarInstance } from '@wink-ui/components';
    import { XScrollbar } from '@wink-ui/components';
    import { getValue } from '@wink-ui/utils';
    defineOptions({
        name: 'XVirtualList',
    });
    const props = withDefaults(defineProps<VirtualListProps<T>>(), {
        rowHeight: 30,
        columns: 1,
        buffer: 1,
    });

    const containerHeight = computed(() => refsScrollbar.value?.refsContainer?.getBoundingClientRect().height ?? 0);
    const rows = computed(() => Math.ceil(props.data.length / props.columns));
    const visibleRows = computed(() => Math.ceil(containerHeight.value / rowHeight.value));
    const rowHeight = computed(() => getValue(props.rowHeight)!);

    const wrapperStyle = computed(() => {
        return {
            height: `${rows.value * rowHeight.value}px`,
            '--cols': props.columns,
        };
    });
    const itemStyle = computed(() => {
        return {
            transform: `translateY(${startRowIndex.value * rowHeight.value}px)`,
            height: `${rowHeight.value}px`,
        };
    });

    const startIndex = ref(0),
        endIndex = ref(0),
        startRowIndex = computed(() => Math.floor(startIndex.value / props.columns));
    const internalData = computed(() => {
        return props.data.slice(startIndex.value, endIndex.value);
    });

    const emits = defineEmits<{
        scroll: [];
    }>();

    const refsScrollbar = ref<ScrollbarInstance>();
    const update = () => {
        const scrollTop = refsScrollbar.value?.refsContainer?.scrollTop ?? 0;
        const count = visibleRows.value * props.columns + props.buffer * props.columns;
        const rowIndex = Math.floor(scrollTop / rowHeight.value);
        startIndex.value = Math.max(0, rowIndex * props.columns);
        endIndex.value = Math.min(startIndex.value + count, props.data.length);
        emits('scroll');
    };
    watch(containerHeight, update, { immediate: true });
</script>

<style lang="less">
    .x-virtual-list {
        width: 100%;

        &__item {
            width: 100%;
            transition: none;
        }
        .list {
            display: grid;
            grid-template-columns: repeat(var(--cols), 1fr);
            grid-template-rows: max-content;
        }
    }
</style>
