import type { Component } from 'vue';
export interface MenuOption {
    name?: string;
    title?: string;
    icon?: Component;
    route?: string;
    link?: boolean;
}
export interface MenuProps {
    menus: MenuOption[];
    active?: number;
    vertical?: boolean;
}
