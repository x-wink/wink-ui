/**
 * 限制数值精度
 * @param value 数值
 * @param precision 保留小数位
 */
export const limitPrecision = (value: number | string, precision = 2) => +Number(value).toFixed(precision);

/**
 * 合并默认值
 * @param target 目标对象
 * @param sources 可变长度默认值对象
 */
export const defaults = <T extends Record<string, unknown>>(
    target: Partial<T>,
    ...sources: [T, ...(Partial<T> | undefined)[]]
) => {
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

/**
 * 值提供者
 */
export type ValueProvider<T> = T | (() => T) | undefined;

/**
 * 获取值或返回默认值
 * @param valuePrivider 值提供者
 * @param defaultValue 默认值
 */
export function getValue<T>(valuePrivider: ValueProvider<T>): T | undefined;
export function getValue<T>(valuePrivider: ValueProvider<T>, defaultValue: T): T;
export function getValue<T>(valuePrivider: ValueProvider<T>, defaultValue?: T) {
    return (valuePrivider instanceof Function ? valuePrivider() : valuePrivider) ?? defaultValue;
}

/**
 * 根据映射规则转换源数组为指定类型数组
 * @param source 源数据数组
 * @param mapRule 映射规则
 */
export const mapConvert = <
    Target = unknown,
    Source extends Record<string, unknown> = Record<string, unknown>,
    MapRule extends Record<keyof Target, string> = Record<keyof Target, string>
>(
    source: Source[],
    mapRule: MapRule,
    defaultValue?: Partial<Target>
): Target[] =>
    source.map((obj) => {
        return Object.fromEntries(
            Object.entries(mapRule).map(([key]) => [
                key,
                getValue<unknown>(obj[mapRule[key as keyof Target]], defaultValue?.[key as keyof Target]),
            ])
        ) as Target;
    });
