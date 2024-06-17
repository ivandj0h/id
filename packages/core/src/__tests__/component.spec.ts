import { createElement, createDomElement } from '../vdom';
import { Component } from '../component';
import { VNode } from '../vdom';

class TestComponent extends Component<{ message: string }, {}> {
    constructor(props: { message: string }) {
        super(props, {});
    }

    render(): VNode {
        return createElement('div', {}, this.props.message);  // Ubah 'null' menjadi '{}'
    }
}

describe('Component', () => {
    it('should render a component with initial props', () => {
        const componentVNode = createElement(TestComponent, { message: 'Click me' });  // Pastikan props adalah objek valid
        const domElement = createDomElement(componentVNode) as HTMLElement;
        document.body.appendChild(domElement);

        expect(domElement.textContent).toBe('Click me');
    });

    // Tambahkan pengujian lainnya di sini jika diperlukan
});
