import type { HTMLElementTagName } from '@wink-ui/components';

export const animations = ['spin', 'pulse', 'heart', 'shake', 'breathe'] as const;
export type XAnimation = typeof animations[number];

export interface IconProps {
    tag?: HTMLElementTagName;
    size?: string;
    color?: string;
    animation?: XAnimation;
}
