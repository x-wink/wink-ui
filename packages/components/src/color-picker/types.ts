import type { RGBA } from '@wink-ui/utils';

export type ColorPickerFormat = 'hex' | 'rgba' | ((val: RGBA) => string);
