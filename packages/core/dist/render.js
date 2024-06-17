"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var vdom_1 = require("./vdom");
function render(vnode, container) {
    var domElement = (0, vdom_1.createDomElement)(vnode);
    container.appendChild(domElement);
}
exports.render = render;
