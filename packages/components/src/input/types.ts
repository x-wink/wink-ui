export const inputTypes = ['text', 'password', 'number'] as const;
export type InputType = typeof inputTypes[number];

export interface InputProps {
    clearable?: boolean;
    prefix?: string;
    suffix?: string;
    showPassword?: boolean;
    showControls?: boolean;
    stepStrictly?: boolean;
    precision?: number | string;
}
