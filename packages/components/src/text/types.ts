import type { HTMLElementTagName } from '@wink-ui/components';

export const themeColors = ['default', 'primary', 'second', 'info', 'success', 'warn', 'error'] as const;
export type ThemeColor = typeof themeColors[number];

export interface TextProps {
    theme?: ThemeColor;
    tag?: HTMLElementTagName;
    ellipsis?: boolean;
    vertical?: boolean;
}
