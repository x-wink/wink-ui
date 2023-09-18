import { withInstall } from '@wink-ui/utils';
import Button from './button.vue';
export const XButton = withInstall(Button);
export default XButton;

export type ButtonInstance = InstanceType<typeof Button>;
export * from './types';
