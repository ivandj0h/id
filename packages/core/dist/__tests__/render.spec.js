"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vdom_1 = require("../vdom");
var render_1 = require("../render");
describe('render', function () {
    it('should render a simple element', function () {
        var vnode = (0, vdom_1.createElement)('div', { id: 'test' }, 'Hello World');
        var container = document.createElement('div');
        (0, render_1.render)(vnode, container);
        expect(container.innerHTML).toBe('<div id="test">Hello World</div>');
    });
});
