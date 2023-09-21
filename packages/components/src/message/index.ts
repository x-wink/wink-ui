import { withInstall } from '@wink-ui/utils';
import Message from './message.vue';
export const XMessage = withInstall(Message);
export default XMessage;

export type MessageInstance = InstanceType<typeof Message>;
export * from './types';
