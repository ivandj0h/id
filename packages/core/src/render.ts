import { VNode } from './vdom';

export function render(vnode: VNode, container: HTMLElement) {
    const element = document.createElement(vnode.tag);

    Object.keys(vnode.props).forEach(key => {
        element.setAttribute(key, vnode.props[key]);
    });

    vnode.children.forEach(child => render(child, element));

    container.appendChild(element);
}
