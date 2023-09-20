export interface VirtualListItem<T> {
    item: T;
    index: number;
}

export interface VirtualListProps {
    data: Record<string, unknown>[];
    id?: string;
    height?: number;
    rowHeight?: number;
}
