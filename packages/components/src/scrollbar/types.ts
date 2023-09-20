import type { DynamicStyle, HTMLElementTagName } from '@wink-ui/components';

export interface ScrollbarProps {
    tag?: HTMLElementTagName;
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    always?: boolean;
    noresize?: boolean;
    native?: boolean;
    containerStyle?: DynamicStyle;
    wrapperStyle?: DynamicStyle;
}

export interface ScrollbarBarProps {
    size: number;
    position: number;
    visible: boolean;
    container?: HTMLElement;
    vertical?: boolean;
}
