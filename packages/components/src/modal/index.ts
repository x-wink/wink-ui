import { withInstall } from '@wink-ui/utils';
import Modal from './modal.vue';
export const XModal = withInstall(Modal);
export default XModal;

export type ModalInstance = InstanceType<typeof Modal>;
export * from './types';
