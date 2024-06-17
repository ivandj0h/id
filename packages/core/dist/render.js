"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.createDomElement = void 0;
function createDomElement(vnode) {
    if (typeof vnode.tag === 'function') {
        // Memastikan bahwa vnode.tag adalah komponen berbasis kelas yang konkret
        const componentClass = vnode.tag;
        const instance = new componentClass(vnode.props);
        const childVNode = instance.render();
        const domElement = createDomElement(childVNode);
        // Pastikan domElement adalah HTMLElement sebelum menetapkan ke instance.dom
        if (domElement instanceof HTMLElement) {
            instance.dom = domElement;
        }
        return domElement;
    }
    // Jika vnode.tag adalah string (nama tag HTML)
    const element = document.createElement(vnode.tag);
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
exports.createDomElement = createDomElement;
function render(vnode, container) {
    container.appendChild(createDomElement(vnode));
}
exports.render = render;
