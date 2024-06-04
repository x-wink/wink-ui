import type { HTMLElementTagName } from '@wink-ui/components';
import type { StyleValue } from 'vue';

export interface ScrollbarProps {
    tag?: HTMLElementTagName;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    always?: boolean;
    noresize?: boolean;
    native?: boolean;
    containerStyle?: StyleValue;
    wrapperStyle?: StyleValue;
    containerClass?: string;
    wrapperClass?: string;
    threshold?: number;
}

export interface ScrollbarBarProps {
    size: number;
    position: number;
    visible: boolean;
    container?: HTMLElement;
    vertical?: boolean;
}
