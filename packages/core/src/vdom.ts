// vdom.ts
export type VNode = {
    tag: string | Function;
    props: { [key: string]: any };
    children: (VNode | string)[];
};

export function createElement(tag: string | Function, props: { [key: string]: any }, ...children: (VNode | string)[]): VNode {
    if (typeof tag === 'function') {
        return tag(props);
    }
    return { tag, props, children };
}

export function createDomElement(vnode: VNode | string): HTMLElement | Text {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    if (typeof vnode.tag === 'function') {
        const componentVNode = vnode.tag(vnode.props);
        return createDomElement(componentVNode);
    }
    const element = document.createElement(vnode.tag);
    for (const [key, value] of Object.entries(vnode.props)) {
        if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.slice(2).toLowerCase(), value);
        } else {
            element.setAttribute(key, value);
        }
    }
    vnode.children.forEach(child => {
        element.appendChild(createDomElement(child));
    });
    return element;
}
