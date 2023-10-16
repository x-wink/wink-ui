export type HTMLElementTagName = keyof HTMLElementTagNameMap;

export const themeColors = ['default', 'primary', 'second', 'info', 'success', 'warn', 'error'] as const;
export type ThemeColor = typeof themeColors[number];
