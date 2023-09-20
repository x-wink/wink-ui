export type SelectValue = string | number | boolean;
export interface SelectOption extends Record<string, unknown> {
    label: string;
    value: SelectValue;
    title: string;
    content: string;
    disabled: boolean;
    active: boolean;
}

export const selectOptionFields = ['label', 'value', 'title', 'content', 'disabled', 'active'] as const;
export type SelectOptionConfig = Record<typeof selectOptionFields[number], string>;
export const selectOptionDefaultConfig = Object.fromEntries(
    selectOptionFields.map((item) => [item, item === 'content' ? 'label' : item])
) as SelectOptionConfig;

export interface SelectProps {
    options: Record<string, unknown>[];
    config?: Partial<SelectOptionConfig>;
    multipart?: boolean;
    tags?: boolean;
    maxTagCount?: number;
    clearable?: boolean;
    disabled?: boolean;
    placeholder?: string;
    searchable?: boolean;
}
export interface SelectPanelProps {
    options: SelectOption[];
}
export interface SelectSelectionProps {
    selection: string[];
    tags?: boolean;
    maxTagCount?: number;
}
export interface SelectSuffixProps {
    clearable?: boolean;
    empty: boolean;
    hover: boolean;
    loading: boolean;
    visible: boolean;
}
export interface SelectTagProps {
    removeable?: boolean;
}
