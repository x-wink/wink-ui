import * as all from './icons';

export * from './icons';
export const icons = Object.keys(all) as IconName[];
export type IconName = keyof typeof all;
