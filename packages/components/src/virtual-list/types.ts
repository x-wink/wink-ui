import type { ValueProvider } from '@wink-ui/utils';

export interface VirtualListItem<T> {
    item: T;
    index: number;
}

export interface VirtualListProps<T> {
    data: T[];
    rowHeight?: ValueProvider<number>;
    columns?: number;
    buffer?: number;
}
