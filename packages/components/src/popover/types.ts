export const popoverTriggers = ['click', 'hover', 'manual'] as const;
export type PopoverTrigger = typeof popoverTriggers[number];

export interface PopoverProps {
    trigger?: PopoverTrigger;
    triggerClass?: string;
    dalay?: number;
    disabled?: boolean;
}
