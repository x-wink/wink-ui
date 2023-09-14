export type SelectValue = string | number | boolean;
export interface SelectOption {
    label: string;
    value: SelectValue;
    title: string;
    content: string;
    disabled: boolean;
    active: boolean;
}

export const selectOptionFields = ['label', 'value', 'title', 'content', 'disabled', 'active'] as const;
export type SelectOptionConfig = Record<typeof selectOptionFields[number], string>;
