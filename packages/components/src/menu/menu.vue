<template>
    <div class="x-menu" :class="{ row: !props.vertical, col: props.vertical }">
        <div
            v-for="(item, index) in props.menus"
            :key="index"
            class="x-menu-item"
            :class="{ active: props.active === index }"
            :title="item.title"
        >
            <XButton :icon="item.icon" text :title="item.title" @click="handleClick(item, index)">
                <span v-if="!item.link && item.title">
                    {{ item.title }}
                </span>
            </XButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { MenuOption, MenuProps } from './types';
    import type { Router } from 'vue-router';
    defineOptions({
        name: 'XMenu',
    });
    const props = defineProps<MenuProps>();
    const instance = getCurrentInstance()!;
    const router = instance.appContext.config.globalProperties.$router as Router;
    const emits = defineEmits<{
        'update:active': [value: number];
    }>();
    const handleClick = (menu: MenuOption, index: number): void => {
        if (menu.route) {
            if (menu.link) {
                window.open(menu.route, '_blank');
            } else {
                router?.push(menu.route);
            }
        }
        emits('update:active', index);
    };
</script>

<style lang="less">
    .x-menu {
        .x-flex();
        .col-center();
        &.row {
            .x-menu-item {
                margin: 0 var(--x-gap-mini);
            }
        }
        &.col {
            .x-menu-item {
                + .x-menu-item {
                    margin-top: 10px;
                }
                transform-origin: left center;
            }
            padding: 0 10px;
        }
        .x-menu-item {
            .x-button {
                color: inherit;
            }
            &.active {
                color: var(--x-primary);
                transform: scale(1.2);
            }
        }
    }
</style>
../main
