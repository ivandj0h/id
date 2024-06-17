import { createElement, VNode } from '../vdom';
import { render } from '../render';

describe('render', () => {
    it('should render a simple element', () => {
        const vnode = createElement('div', { id: 'test' }, 'Hello World');
        const container = document.createElement('div');
        render(vnode, container);
        expect(container.innerHTML).toBe('<div id="test">Hello World</div>');
    });
});
