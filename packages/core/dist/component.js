"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const render_1 = require("./render");
class Component {
    constructor(props) {
        this.state = {};
        this.dom = null;
        this.props = props;
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.update();
    }
    update() {
        if (this.dom) {
            const newVNode = this.render();
            const newDom = (0, render_1.createDomElement)(newVNode);
            if (this.dom.parentNode) {
                this.dom.parentNode.replaceChild(newDom, this.dom);
            }
            this.dom = newDom;
        }
    }
}
exports.Component = Component;
