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
    import Bar from './bar.vue';
    import type { ScrollbarProps, BoundingDirection } from './types';

    defineOptions({
        name: 'XScrollbar',
    });
    const props = withDefaults(defineProps<ScrollbarProps>(), {
        tag: 'div',
        width: '100%',
        height: '100%',
        hitBoundingThreshold: 0,
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
        hitBounding: [direction: BoundingDirection];
    }>();
    let lastLeft = 0,
        lastTop = 0;
    const handleScroll = () => {
        if (refsContainer.value) {
            const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = refsContainer.value;
            if (!props.native) {
                internalUpdate(true);
            }
            emits('scroll', [scrollLeft, scrollTop], [scrollLeft - lastLeft, scrollTop - lastTop]);
            if (scrollWidth > clientWidth) {
                if (scrollLeft <= props.hitBoundingThreshold) {
                    emits('hitBounding', 'left');
                } else if (scrollWidth - clientWidth - scrollLeft <= props.hitBoundingThreshold) {
                    emits('hitBounding', 'right');
                }
            }
            if (scrollHeight > clientHeight) {
                if (scrollTop <= props.hitBoundingThreshold) {
                    emits('hitBounding', 'top');
                } else if (scrollHeight - clientHeight - scrollTop <= props.hitBoundingThreshold) {
                    emits('hitBounding', 'bottom');
                }
            }
            lastLeft = scrollLeft;
            lastTop = scrollTop;
        }
    };

    const internalUpdate = (onlyPosition = false) => {
        const { offsetWidth, offsetHeight, scrollWidth, scrollHeight, scrollLeft, scrollTop } = refsContainer.value!;
        if (!onlyPosition) {
            horizontalBar.exists = offsetWidth < scrollWidth;
            horizontalBar.size = Math.max(0.1, offsetWidth / scrollWidth);
            verticalBar.exists = offsetHeight < scrollHeight;
            verticalBar.size = Math.max(0.1, offsetHeight / scrollHeight);
        }

        horizontalBar.position =
            ((scrollLeft / (scrollWidth - offsetWidth)) * (1 - horizontalBar.size)) / horizontalBar.size;
        verticalBar.position =
            ((scrollTop / (scrollHeight - offsetHeight)) * (1 - verticalBar.size)) / verticalBar.size;
    };
    const update = () => {
        internalUpdate();
    };
    if (!props.noresize && !props.native) {
        let ro: ResizeObserver;
        onMounted(() => {
            update();
            ro = new ResizeObserver(update);
            ro.observe(refsContainer.value!);
            ro.observe(refsWrapper.value!);
        });
        onUnmounted(() => {
            ro.disconnect();
        });
    }

    const api = {
        update,
        scrollBy,
        scrollTo,
        scrollX,
        scrollY,
        refsContainer,
    };
    defineExpose(api);
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
                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
        &__wrapper {
            min-width: 100%;
            min-height: 100%;
            width: fit-content;
            height: fit-content;
        }
    }
</style>
../main
