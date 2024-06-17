// component.spec.ts
import { createElement, createDomElement, VNode } from '../vdom';
import { Component } from '../component';

class TestComponent extends Component<{ message: string }, { count: number }> {
    constructor(props: { message: string }) {
        super(props, { count: 0 });
    }

    render(): VNode {
        return createElement('div', {}, `${this.props.message} ${this.state.count}`);
    }
}

function createTestComponent(props: { message: string }): VNode {
    const component = new TestComponent(props);
    const vnode = component.render();
    component.dom = createDomElement(vnode) as HTMLElement;
    return vnode;
}

describe('Component', () => {
    it('should render a component with initial props', () => {
        const componentVNode = createElement(createTestComponent, { message: 'Click me' });
        const domElement = createDomElement(componentVNode) as HTMLElement;
        document.body.appendChild(domElement);
        expect(domElement.textContent).toBe('Click me 0');
    });
});
