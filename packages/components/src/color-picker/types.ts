import type { RGB, RGBA } from '@wink-ui/utils';

export type ColorPickerFormat = 'hex' | 'rgba' | ((val: RGBA) => string);

export interface ColorPickerProps {
    format?: ColorPickerFormat;
}
export interface ColorPickerBlockProps {
    color: string;
    width?: string;
    height?: string;
}
export interface ColorPickerOpacityProps {
    hue: RGB;
}
export interface ColorPickerPreviewProps {
    color: RGBA;
    height?: number;
}
export interface ColorPickerSaturationProps {
    modelValue: RGBA;
    hue: RGB;
    width?: number;
    height?: number;
    dot?: number;
}
export interface ColorPickerSliderProps {
    render: (cvs: HTMLCanvasElement) => void;
    width?: number;
    height?: number;
    slide?: number;
    precision?: number;
}
