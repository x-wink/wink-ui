export interface RainProps {
    /**
     * 随机字符集
     */
    charset?: string;
    /**
     * 下落间隔时间（毫秒）
     */
    step?: number;
    /**
     * 密集程度，数字越小下落越密集
     */
    density?: number;
    /**
     * 是否作为背景
     */
    background?: boolean;
    /**
     * 雨滴长度
     */
    length?: number;
}
