"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
// component.ts
var vdom_1 = require("./vdom");
var Component = /** @class */ (function () {
    function Component(props, initialState) {
        this.dom = null;
        this.props = props;
        this.state = initialState;
    }
    Component.prototype.setState = function (newState) {
        this.state = __assign(__assign({}, this.state), newState);
        var newVNode = this.render();
        var newDom = (0, vdom_1.createDomElement)(newVNode);
        this.dom.replaceWith(newDom);
        this.dom = newDom;
    };
    Component.prototype.render = function () {
        throw new Error('Component subclass must implement render method');
    };
    return Component;
}());
exports.Component = Component;
