"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomElement = exports.createElement = void 0;
function createElement(tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (typeof tag === 'function') {
        return tag(props);
    }
    return { tag: tag, props: props, children: children };
}
exports.createElement = createElement;
function createDomElement(vnode) {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    if (typeof vnode.tag === 'function') {
        var componentVNode = vnode.tag(vnode.props);
        return createDomElement(componentVNode);
    }
    var element = document.createElement(vnode.tag);
    for (var _i = 0, _a = Object.entries(vnode.props); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.slice(2).toLowerCase(), value);
        }
        else {
            element.setAttribute(key, value);
        }
    }
    vnode.children.forEach(function (child) {
        element.appendChild(createDomElement(child));
    });
    return element;
}
exports.createDomElement = createDomElement;
