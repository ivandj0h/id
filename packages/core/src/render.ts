import { VNode, createDomElement } from './vdom';

export function render(vnode: VNode, container: HTMLElement) {
    const domElement = createDomElement(vnode);
    container.appendChild(domElement);
}
