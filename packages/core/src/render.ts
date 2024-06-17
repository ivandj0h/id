import { VNode } from './vdom';
import { Component } from './component';

export function createDomElement(vnode: VNode): HTMLElement | Text {
    if (typeof vnode.tag === 'function') {
        const componentClass = vnode.tag as { new (props: any): Component<any> };
        const instance = new componentClass(vnode.props);
        const childVNode = instance.render();
        const domElement = createDomElement(childVNode);
        if (domElement instanceof HTMLElement) {
            instance.dom = domElement;
        }
        return domElement;
    }

    const element = document.createElement(vnode.tag as string);

    Object.keys(vnode.props).forEach(key => {
        element.setAttribute(key, vnode.props[key]);
    });

    vnode.children.forEach(child => {
        const childElement = typeof child === 'string'
            ? document.createTextNode(child)
            : createDomElement(child);
        element.appendChild(childElement);
    });

    return element;
}

export function render(vnode: VNode, container: HTMLElement) {
    container.appendChild(createDomElement(vnode));
}
