import { createElement, VNode } from '../vdom';

describe('createElement', () => {
    it('should create a VNode', () => {
        const vnode: VNode = createElement('div', { id: 'test' }, 'Hello World');
        expect(vnode).toEqual({
            tag: 'div',
            props: { id: 'test' },
            children: ['Hello World']
        });
    });
});
