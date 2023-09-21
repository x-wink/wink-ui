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
 * @param valueProvider 值提供者
 * @param defaultValue 默认值
 */
export function getValue<T>(valueProvider: ValueProvider<T>): T | undefined;
export function getValue<T>(valuePrivider: ValueProvider<T>, defaultValue: T): T;
export function getValue<T>(valuePrivider: ValueProvider<T>, defaultValue?: T) {
    return (valuePrivider instanceof Function ? valuePrivider() : valuePrivider) ?? defaultValue;
}

/**
 * 根据映射规则转换源数组为指定类型数组
 * @param source 源数据数组
 * @param mapRule 映射规则
 * @param defaultValue 默认值
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

/**
 * CSS数值类型属性值
 */
export type CSSNumeric = number | string;
/**
 * CSS数值类型属性值单位
 */
export type CSSNumericUnit = 'px' | 'deg' | 'rem' | 'em' | 'vw' | 'vh' | '%';
/**
 * 补全CSS数值类型属性值单位
 * @param value 属性值
 * @param unit 单位，默认px
 */
export const completeCssNumeric = (value: CSSNumeric, unit: CSSNumericUnit = 'px') =>
    Number.isNaN(Number(value)) ? (value as string) : `${value}${unit}`;

/**
 * 复制文本到粘贴板
 * @param content 文本内容
 */
export const copy = async (content: string) => {
    try {
        await navigator.clipboard.writeText(content);
    } catch (error) {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
};
