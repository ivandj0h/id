export type VNode = {
    tag: string | Function;
    props: { [key: string]: any };
    children: (VNode | string)[];
};

type ComponentClass<P> = {
    new (props: P): {
        render(): VNode;
    };
};

export function createElement<P extends { [key: string]: any }>(tag: string | ComponentClass<P>, props: P = {} as P, ...children: (VNode | string)[]): VNode {
    if (typeof tag === 'function') {
        const componentInstance = new (tag as ComponentClass<P>)(props);
        return componentInstance.render();
    }
    return { tag, props, children };
}

export function createDomElement(vnode: VNode | string): HTMLElement | Text {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    if (typeof vnode.tag === 'function') {
        const componentInstance = new (vnode.tag as ComponentClass<any>)(vnode.props);
        const componentVNode = componentInstance.render();
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
