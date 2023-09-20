import type { HTMLElementTagName } from '@wink-ui/components';
import type { CSSNumeric } from '@wink-ui/utils';

export const animations = ['spin', 'pulse', 'heart', 'shake', 'breathe'] as const;
export type XAnimation = typeof animations[number];

export interface IconProps {
    tag?: HTMLElementTagName;
    size?: CSSNumeric;
    color?: string;
    animation?: XAnimation;
}
