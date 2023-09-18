import { withInstall } from '@wink-ui/utils';
import Menu from './menu.vue';
export const XMenu = withInstall(Menu);
export default XMenu;

export type MenuInstance = InstanceType<typeof Menu>;
export * from './types';
