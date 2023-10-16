/**
 * 创建内部可拖拽的容器，鼠标超出容器范围依然会触发拖拽
 * @param container 容器
 * @param cb 拖拽回调，参数为鼠标坐标xy，坐标值不会超出容器范围
 * @returns 注销可拖拽容器，取消监听事件
 */
export const createDragContainer = (container: HTMLElement, cb: (x: number, y: number) => void) => {
    let isDragging = false;
    const startDrag = (event: MouseEvent) => {
        if (container.contains(event.target as HTMLElement)) {
            event.preventDefault();
            isDragging = true;
            drag(event);
        }
    };
    const drag = (event: MouseEvent) => {
        if (isDragging) {
            const containerRect = container.getBoundingClientRect();
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;

            cb(Math.min(Math.max(x, 0), containerRect.width), Math.min(Math.max(y, 0), containerRect.height));
        }
    };
    const stopDrag = () => {
        isDragging = false;
    };
    window.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);
    return () => {
        window.removeEventListener('mousedown', startDrag);
        window.removeEventListener('mousemove', drag);
        window.removeEventListener('mouseup', stopDrag);
    };
};
export type Point = [number, number];
/**
 * 创建在可在容器范围内拖拽的元素，鼠标超出容器范围依然会触发拖拽
 * @param el 元素
 * @param container 容器
 * @param hooks start开始拖拽，end结束拖拽，move拖拽移动，参数offset表示相对上次回调的移动距离，distance表示相对首次回调的移动距离，relative表示鼠标坐标xy相对于容器宽高的值，相对值不会超出0~1范围
 * @returns 注销可拖拽元素，取消监听事件
 */
export const createDragableElement = (
    el: HTMLElement,
    container: HTMLElement,
    hooks: {
        start?: () => void;
        end?: () => void;
        move: (info: { distance: Point; offset: Point; relative: Point }) => void;
    }
) => {
    let start: Point | undefined;
    let last = [0, 0] as Point;
    const startDrag = (event: MouseEvent) => {
        event.preventDefault();
        const { clientX, clientY } = event;
        start = [clientX, clientY];
        last = [...start];
        hooks.start?.();
    };
    const drag = (event: MouseEvent) => {
        if (start) {
            const { clientX, clientY } = event;
            const { left, top, width, height } = container.getBoundingClientRect();
            hooks.move({
                distance: [clientX - start[0], clientY - start[1]],
                offset: [clientX - last[0], clientY - last[1]],
                relative: [
                    Math.min(Math.max((clientX - left) / width, 0), 1),
                    Math.min(Math.max((clientY - top) / height, 0), 1),
                ],
            });
            last = [clientX, clientY];
        }
    };
    const stopDrag = () => {
        start = void 0;
        hooks.end?.();
    };
    el.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);
    return () => {
        el.removeEventListener('mousedown', startDrag);
        window.removeEventListener('mousemove', drag);
        window.removeEventListener('mouseup', stopDrag);
    };
};
