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
