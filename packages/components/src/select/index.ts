import { withInstall } from '@wink-ui/utils';
import Select from './select.vue';
export const XSelect = withInstall(Select);
export default XSelect;

export type SelectInstance = InstanceType<typeof Select>;
export * from './types';
