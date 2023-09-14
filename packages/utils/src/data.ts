export const limitPrecision = (value: number | string, precision = 2) => +Number(value).toFixed(precision);
export const defaults = <T extends Record<string, unknown>>(target: Partial<T>, ...sources: [T, ...(Partial<T> | undefined)[]]) => {
    sources.forEach((source) => {
        Object.keys(source ?? {}).forEach((key) => {
            const value = (source as T)[key as keyof T];
            if (typeof value !== undefined) {
                target[key as keyof T] ??= value;
            }
        });
    });
    return target as T;
};
export type ValueProvider<T> = T | (() => T);
export const getValue = <T>(valueOrPrivider?: ValueProvider<T>, defaultValue?: T) =>
    (valueOrPrivider instanceof Function ? valueOrPrivider() : valueOrPrivider) ?? defaultValue;
