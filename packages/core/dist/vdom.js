"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = exports.VNode = void 0;
class VNode {
    constructor(tag, props, children) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
}
exports.VNode = VNode;
function createElement(tag, props, ...children) {
    return new VNode(tag, props, children);
}
exports.createElement = createElement;
