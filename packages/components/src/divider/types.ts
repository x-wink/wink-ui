import type { ThemeColor } from '@wink-ui/wink-ui';

export const dividerTextPlacements = ['left', 'center', 'right'] as const;
export type DividerTextPlacement = typeof dividerTextPlacements[number];

export const dividerBorderStyles = ['solid', 'dashed', 'dotted', 'hidden'] as const;
export type DividerBorderStyle = typeof dividerBorderStyles[number];

export interface DividerProps {
    text?: string;
    placement?: DividerTextPlacement;
    vertical?: boolean;
    borderStyle?: DividerBorderStyle;
    borderWidth?: number;
    borderColor?: string;
    theme?: ThemeColor;
}
