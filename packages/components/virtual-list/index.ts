import { withInstall } from '../../utils';
import VirtualList from './virtual-list.vue';
export const XVirtualList = withInstall(VirtualList);
export default XVirtualList;

export type VirtualListInstance = InstanceType<typeof VirtualList>;
export * from './types';
