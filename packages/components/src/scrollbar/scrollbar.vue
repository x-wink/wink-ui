<template>
    <div
        class="x-scrollbar"
        :style="scrollbarStyle"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousewheel="handleMouseWheel"
    >
        <div
            ref="refsContainer"
            class="x-scrollbar__container"
            :class="containerClass"
            :style="props.containerStyle"
            v-bind="attrs"
            @scroll="handleScroll"
        >
            <component
                :is="props.tag"
                ref="refsWrapper"
                class="x-scrollbar__wrapper"
                :class="wrapperClass"
                :style="props.wrapperStyle"
            >
                <slot></slot>
                <div ref="refsThresholdBox" class="threshold-box"></div>
            </component>
        </div>
        <template v-if="!props.native">
            <Bar
                :container="refsContainer"
                :position="horizontalBar.position"
                :size="horizontalBar.size"
                :visible="horizontalBar.exists && (props.always || mouseInContainer)"
            />
            <Bar
                :container="refsContainer"
                :position="verticalBar.position"
                :size="verticalBar.size"
                vertical
                :visible="verticalBar.exists && (props.always || mouseInContainer)"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, reactive, ref, computed, useAttrs } from 'vue';
    import Bar from './bar.vue';
    import type { ScrollbarProps } from './types';
    import { watch } from 'vue';

    defineOptions({
        name: 'XScrollbar',
        inheritAttrs: false,
    });
    const attrs = useAttrs();
    const props = withDefaults(defineProps<ScrollbarProps>(), {
        tag: 'div',
        width: '100%',
        height: '100%',
        threshold: 0,
    });
    const scrollbarStyle = computed(() => {
        return {
            width: props.width,
            height: props.height,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
        };
    });
    const containerClass = computed(() => {
        const res = [];
        props.native && res.push('--native');
        props.containerClass && res.push(props.containerClass);
        return res;
    });
    const wrapperClass = computed(() => {
        const res = [];
        props.wrapperClass && res.push(props.wrapperClass);
        return res;
    });

    const mouseInContainer = ref(false);
    const handleMouseEnter = () => {
        mouseInContainer.value = true;
        update();
    };
    const handleMouseLeave = () => {
        mouseInContainer.value = false;
    };

    const horizontalBar = reactive({
        exists: false,
        size: 0,
        position: 0,
    });
    const verticalBar = reactive({
        exists: false,
        size: 0,
        position: 0,
    });

    const scrollBy = (x: number, y: number) => {
        refsContainer.value?.scrollBy(x, y);
    };
    const scrollTo = (x: number, y: number) => {
        refsContainer.value?.scrollTo(x, y);
    };
    const scrollX = (x: number) => {
        refsContainer.value?.scrollTo(x, refsContainer.value.scrollTop);
    };
    const scrollY = (y: number) => {
        refsContainer.value?.scrollTo(refsContainer.value.scrollLeft, y);
    };

    const refsContainer = ref<HTMLElement>();
    const refsWrapper = ref<HTMLElement>();
    const handleMouseWheel = (e: WheelEvent) => {
        if (horizontalBar.exists || verticalBar.exists) {
            e.preventDefault();
            if (verticalBar.exists) {
                scrollBy(0, e.deltaY);
            } else if (horizontalBar.exists) {
                scrollBy(e.deltaY, 0);
            }
        }
    };

    const emits = defineEmits<{
        scroll: [position: [number, number], distance: [number, number]];
        load: [];
        resize: [width: number, height: number];
    }>();
    let lastLeft = 0,
        lastTop = 0;
    const handleScroll = () => {
        if (refsContainer.value) {
            const { scrollLeft, scrollTop } = refsContainer.value;
            if (!props.native) {
                update(true);
            }
            emits('scroll', [scrollLeft, scrollTop], [scrollLeft - lastLeft, scrollTop - lastTop]);
            lastLeft = scrollLeft;
            lastTop = scrollTop;
        }
    };

    // TODO 支持四个方向的触发
    const refsThresholdBox = ref<HTMLElement>();
    const io = new IntersectionObserver(
        () => {
            emits('load');
        },
        { threshold: props.threshold }
    );
    onMounted(() => {
        io.observe(refsThresholdBox.value!);
    });

    const containerWidth = ref(0);
    const containerHeight = ref(0);
    watch([containerWidth, containerHeight], ([width, height]) => {
        emits('resize', width, height);
    });
    const update = (onlyPosition = false) => {
        const { clientWidth, clientHeight, scrollWidth, scrollHeight, scrollLeft, scrollTop } = refsContainer.value!;
        containerWidth.value = clientWidth;
        containerHeight.value = clientHeight;
        // TODO 滚动条支持限制最大尺寸，做尺寸和滚动距离的映射
        if (!onlyPosition) {
            horizontalBar.exists = clientWidth < scrollWidth;
            horizontalBar.size = Math.max(0.1, clientWidth / scrollWidth);
            verticalBar.exists = clientHeight < scrollHeight;
            verticalBar.size = Math.max(0.1, clientHeight / scrollHeight);
        }
        horizontalBar.position =
            ((scrollLeft / (scrollWidth - clientWidth)) * (1 - horizontalBar.size)) / horizontalBar.size;
        verticalBar.position =
            ((scrollTop / (scrollHeight - clientHeight)) * (1 - verticalBar.size)) / verticalBar.size;
    };
    if (!props.noresize && !props.native) {
        let ro: ResizeObserver;
        onMounted(() => {
            ro = new ResizeObserver(() => {
                update();
            });
            ro.observe(refsContainer.value!);
            ro.observe(refsWrapper.value!);
        });
        onUnmounted(() => {
            ro.disconnect();
        });
    } else {
        onMounted(() => {
            update();
        });
    }

    defineExpose({
        update,
        scrollBy,
        scrollTo,
        scrollX,
        scrollY,
        refsContainer,
        containerWidth,
        containerHeight,
    });
</script>

<style lang="less">
    .x-scrollbar {
        position: relative;
        overflow: hidden;
        &__container {
            max-width: inherit;
            max-height: inherit;
            width: 100%;
            height: 100%;
            overflow: auto;
            &:not(.--native) {
                overflow: hidden;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
        &__wrapper {
            width: fit-content;
            height: fit-content;
            min-width: 100%;
            min-height: 100%;
        }
    }
</style>
