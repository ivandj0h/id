"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// component.spec.ts
var vdom_1 = require("../vdom");
var component_1 = require("../component");
var TestComponent = /** @class */ (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent(props) {
        return _super.call(this, props, { count: 0 }) || this;
    }
    TestComponent.prototype.render = function () {
        return (0, vdom_1.createElement)('div', {}, "".concat(this.props.message, " ").concat(this.state.count));
    };
    return TestComponent;
}(component_1.Component));
function createTestComponent(props) {
    var component = new TestComponent(props);
    var vnode = component.render();
    component.dom = (0, vdom_1.createDomElement)(vnode);
    return vnode;
}
describe('Component', function () {
    it('should render a component with initial props', function () {
        var componentVNode = (0, vdom_1.createElement)(createTestComponent, { message: 'Click me' });
        var domElement = (0, vdom_1.createDomElement)(componentVNode);
        document.body.appendChild(domElement);
        expect(domElement.textContent).toBe('Click me 0');
    });
});
