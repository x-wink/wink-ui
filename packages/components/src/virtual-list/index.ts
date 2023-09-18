import { withInstall } from '@wink-ui/utils';
import VirtualList from './virtual-list.vue';
export const XVirtualList = withInstall(VirtualList);
export default XVirtualList;

export type VirtualListInstance = InstanceType<typeof VirtualList>;
export * from './types';
