"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vdom_1 = require("../vdom");
describe('createElement', function () {
    it('should create a VNode', function () {
        var vnode = (0, vdom_1.createElement)('div', { id: 'test' }, 'Hello World');
        expect(vnode).toEqual({
            tag: 'div',
            props: { id: 'test' },
            children: ['Hello World']
        });
    });
});
