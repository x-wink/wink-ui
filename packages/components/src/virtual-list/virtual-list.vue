<template>
    <XScrollbar
        ref="refsScrollbar"
        class="x-virtual-list"
        :height="`${props.height}px`"
        :wrapper-style="wrapperStyle"
        @scroll="update"
    >
        <div
            v-for="(item, index) in internalData"
            :key="String(item[props.id])"
            class="x-virtual-list__item"
            :style="itemStyle"
        >
            <slot :index="index + startIndex" :item="item"></slot>
        </div>
    </XScrollbar>
</template>

<script setup lang="ts">
    import type { ScrollbarInstance } from '../';
    import { XScrollbar } from '../';
    defineOptions({
        name: 'XVirtualList',
    });
    const props = withDefaults(
        defineProps<{
            data: Record<string, unknown>[];
            id?: string;
            height?: number;
            rowHeight?: number;
        }>(),
        {
            id: 'id',
            height: 300,
            rowHeight: 30,
        }
    );
    const wrapperStyle = computed(() => {
        return {
            height: `${props.data.length * props.rowHeight}px`,
        };
    });
    const itemStyle = computed(() => {
        return {
            transform: `translateY(${startIndex.value * props.rowHeight}px)`,
            height: `${props.rowHeight}px`,
            lineHeight: `${props.rowHeight}px`,
        };
    });

    const startIndex = ref(0),
        endIndex = ref(0);
    const internalData = computed(() => {
        return props.data.slice(startIndex.value, endIndex.value + 1);
    });

    const emits = defineEmits<{
        scroll: [x: number, y: number];
    }>();

    const refsScrollbar = ref<ScrollbarInstance>();
    const update = (x: number, y: number) => {
        const scrollTop = refsScrollbar.value?.refsContainer?.scrollTop ?? 0;
        const count = Math.round(props.height / props.rowHeight);
        startIndex.value = Math.max(0, Math.floor(scrollTop / props.rowHeight));
        endIndex.value = Math.min(startIndex.value + count, props.data.length - 1);
        emits('scroll', x, y);
    };
    update(0, 0);
</script>

<style lang="less">
    .x-virtual-list {
        width: 100%;

        &__item {
            width: 100%;
            transition: none;
        }
    }
</style>
