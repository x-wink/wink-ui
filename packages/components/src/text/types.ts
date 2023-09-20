import type { HTMLElementTagName, ThemeColor } from '@wink-ui/components';

export interface TextProps {
    theme?: ThemeColor;
    tag?: HTMLElementTagName;
    ellipsis?: boolean;
    vertical?: boolean;
}
