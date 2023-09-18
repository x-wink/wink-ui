import { withInstall } from '@wink-ui/utils';
import Box from './box.vue';
export const XBox = withInstall(Box);
export default XBox;

export type BoxInstance = InstanceType<typeof Box>;
export * from './types';
