import type { ThemeColor } from '@wink-ui/components';
import type { Component } from 'vue';

export const messageCloseReasons = ['close', 'timeout'] as const;
export type MessageCloseReason = typeof messageCloseReasons[number];

export interface MessageProps {
    content: string;
    icon?: Component;
    theme?: ThemeColor;
    closeable?: boolean;
    duration?: number;
    offset?: [number, number];
}
