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
 * 值或值提供者
 */
export type ValueProvider<T> = T | (() => T);

/**
 * 获取值或返回默认值
 * @param valueOrPrivider 值或值提供者
 * @param defaultValue 默认值
 */
export const getValue = <T>(valueOrPrivider?: ValueProvider<T>, defaultValue?: T) =>
    (valueOrPrivider instanceof Function ? valueOrPrivider() : valueOrPrivider) ?? defaultValue;

/**
 * 解析配置
 * @param config 配置对象
 * @param defaultValue 默认配置
 */
export const resolveConfig = <Opt, Conf extends Record<keyof Opt, string> = Record<keyof Opt, string>>(
    config: Conf | undefined,
    defaultValue: Conf
) => defaults<Conf>({}, defaultValue, config);

/**
 * 根据配置解析选项数组为指定类型
 * @param options 选项数组
 * @param config 选项解析配置
 */
export const resolveOptions = <
    Opt = unknown,
    T extends Record<string, unknown> = Record<string, unknown>,
    Conf extends Record<keyof Opt, string> = Record<keyof Opt, string>
>(
    options: T[],
    config: Conf
): Opt[] =>
    options.map((item) => {
        return Object.fromEntries(
            Object.entries(config).map(([key]) => [
                key,
                getValue<unknown>(item[config[key as keyof Opt]] as ValueProvider<unknown>),
            ])
        ) as Opt;
    });
