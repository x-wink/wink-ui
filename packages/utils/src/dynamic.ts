import { createVNode, render, type Component, type VNode, type DefineComponent } from 'vue';
import type { ModalCloseReason, ModalProps } from '../../components/src/modal';
import type { MessageCloseReason, MessageProps } from '../../components/src/message';
import { CircleCheck, CircleClose, InfoFilled, WarningFilled } from '@wink-ui/icons';
import type { PopupProps } from '../../components/src/popup';
import type { ThemeColor } from '../../components/src/base';
export interface DynamicComponentInstance {
    vnode: VNode;
    destroy: () => void;
}
export const createDynamicComponent = async (
    importer: () => Promise<{ default: Component | DefineComponent }>,
    props: Record<string, unknown>,
    container?: HTMLElement,
    nativeProps?: Partial<Pick<HTMLElement, 'className' | 'id' | 'style'>>
): Promise<DynamicComponentInstance> => {
    if (!container) {
        if (nativeProps?.id) {
            document.getElementById(nativeProps.id)?.remove();
        }
        container = document.createElement('div');
        container.className = '__dynamic_component__container';
        Object.assign(container, nativeProps);
        document.body.appendChild(container);
    }
    const { default: component } = await importer();
    const vnode = createVNode(component, {
        ...props,
    });
    render(vnode, container);
    const destroy = () => {
        vnode.el?.remove();
        render(null, container!);
        container?.remove();
    };
    return { vnode, destroy };
};

const showModal = (props: ModalProps) => {
    return new Promise<void>((resolve, reject) => {
        let instance: DynamicComponentInstance;
        createDynamicComponent(() => import('../../components/src/modal/modal.vue'), {
            ...props,
            modelValue: true,
            onClose(reason: ModalCloseReason) {
                instance?.destroy();
                if (reason === 'confirm') {
                    resolve();
                } else {
                    reject(reason);
                }
            },
        }).then((res) => {
            instance = res;
        });
    });
};
const showAlert = (content: string, title?: string, confirmText = '知道了') =>
    showModal({ title, content, confirmText });
const showComfirm = (content: string, title?: string, props?: ModalProps) =>
    showModal({ ...props, title, content, showCancel: true });
export const modal = {
    show: showModal,
    alert: showAlert,
    confirm: showComfirm,
};

const showMessage = (props: MessageProps & PopupProps) => {
    return new Promise<MessageCloseReason>((resolve) => {
        let instance: DynamicComponentInstance;
        createDynamicComponent(() => import('../../components/src/message/message.vue'), {
            ...props,
            modelValue: true,
            onClose(action: MessageCloseReason) {
                instance?.destroy();
                resolve(action);
            },
        }).then((res) => {
            instance = res;
        });
    });
};
const showInternalMessage = (
    content: string,
    theme: ThemeColor,
    icon: Component,
    duration?: number,
    closeable?: boolean
) => showMessage({ content, duration, closeable, theme, icon, position: [20, 0, 'auto', 0] });
const showInfo = (content: string, duration = 2000, closeable = true) =>
    showInternalMessage(content, 'info', InfoFilled, duration, closeable);
const showSuccess = (content: string, duration = 2000, closeable = true) =>
    showInternalMessage(content, 'success', CircleCheck, duration, closeable);
const showWarn = (content: string, duration = 2000, closeable = true) =>
    showInternalMessage(content, 'warn', WarningFilled, duration, closeable);
const showError = (content: string, duration = 2000, closeable = true) =>
    showInternalMessage(content, 'error', CircleClose, duration, closeable);
export const message = {
    show: showMessage,
    info: showInfo,
    success: showSuccess,
    warn: showWarn,
    error: showError,
};
