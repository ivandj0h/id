"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = void 0;
function createElement(tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return {
        tag: tag,
        props: props || {},
        children: children
    };
}
exports.createElement = createElement;
