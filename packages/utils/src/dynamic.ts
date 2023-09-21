import { createVNode, render, type Component, type VNode, type DefineComponent } from 'vue';
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

export const showModal = (props: {
    title?: string;
    content: string;
    showCancel?: boolean;
    cancelText?: string;
    confirmText?: string;
}) => {
    return new Promise<void>((resolve, reject) => {
        let instance: DynamicComponentInstance;
        createDynamicComponent(() => import('../../components/src/modal/modal.vue'), {
            ...props,
            modelValue: true,
            onClose(action: 'cancel' | 'confirm') {
                instance?.destroy();
                if (action === 'confirm') {
                    resolve();
                } else {
                    reject();
                }
            },
        }).then((res) => {
            instance = res;
        });
    });
};
export const showAlert = (content: string, title?: string, confirmText = '知道了') =>
    showModal({ title, content, confirmText });
export const showComfirm = (content: string, title?: string) => showModal({ title, content, showCancel: true });
