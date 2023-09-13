export const dividerTextPlacements = ['left', 'center', 'right'] as const;
export type DividerTextPlacement = typeof dividerTextPlacements[number];

export const dividerBorderStyles = ['solid', 'dashed', 'dotted', 'hidden'] as const;
export type DividerBorderStyle = typeof dividerBorderStyles[number];
