import type { ThemeColor } from '@wink-ui/components';
import type { Component } from 'vue';

export interface ButtonProps {
    theme?: ThemeColor;
    icon?: Component;
    text?: boolean;
    link?: boolean;
    simple?: boolean;
    round?: boolean;
    circle?: boolean;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
