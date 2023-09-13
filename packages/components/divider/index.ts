import { withInstall } from '../../utils';
import Divider from './divider.vue';
export const XDivider = withInstall(Divider);
export default XDivider;

export type DividerInstance = InstanceType<typeof Divider>;
export * from './types';
