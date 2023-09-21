<template>
    <Transition appear :name="name">
        <slot></slot>
    </Transition>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    defineOptions({
        name: 'XTransition',
    });
    const props = withDefaults(
        defineProps<{
            type?: 'fade' | 'slide' | 'scale';
        }>(),
        {
            type: 'fade',
        }
    );
    const name = computed(() => `x-transition-${props.type}`);
</script>

<style lang="less">
    .x-transition {
        &-fade {
            &-enter-active {
                transition: opacity 300ms ease-out !important;
            }

            &-leave-active {
                transition: opacity 150ms ease-out !important;
            }

            &-enter-from,
            &-leave-active {
                opacity: 0 !important;
            }
        }
        &-slide {
            &-enter-active {
                transition: transform 200ms ease-out !important;
            }

            &-leave-active {
                transition: transform 100ms ease-out !important;
            }

            &-enter-from,
            &-leave-active {
                transform: translateY(-100%) !important;
            }
        }
        &-scale {
            &-enter-active {
                transition: transform 200ms ease-out !important;
            }

            &-leave-active {
                transition: transform 100ms ease-out !important;
            }

            &-enter-from,
            &-leave-active {
                transform: scale(0) !important;
            }
        }
    }
</style>
