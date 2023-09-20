import type { InputType } from '@wink-ui/components';
import type { CSSNumeric } from '@wink-ui/utils';

export type ModalInputValue = undefined | string | number;
export const modalCloseReasons = ['close', 'cancel', 'confirm'] as const;
export type ModalCloseReason = typeof modalCloseReasons[number];

export interface ModalProps {
    title?: string;
    content: string;
    showCancel?: boolean;
    showConfirm?: boolean;
    showClose?: boolean;
    showInput?: boolean;
    cancelText?: string;
    confirmText?: string;
    cancelAttrs?: Record<string, unknown>;
    comfirmAttrs?: Record<string, unknown>;
    placeholder?: string;
    inputType?: InputType;
    inputAttrs?: Record<string, unknown>;
    defaultValue?: ModalInputValue;
    static?: boolean;
    modal?: boolean;
    width?: CSSNumeric;
    height?: CSSNumeric;
}
