import { createElement, createDomElement, VNode } from './vdom';

export class Component<P, S> {
    props: P;
    state: S;
    dom: HTMLElement | null;

    constructor(props: P, initialState: S) {
        this.props = props;
        this.state = initialState;
        this.dom = null;
    }

    setState(newState: Partial<S>) {
        this.state = { ...this.state, ...newState };
        const newVNode = this.render();
        const newDom = createDomElement(newVNode) as HTMLElement;
        if (this.dom) {
            this.dom.replaceWith(newDom);
        }
        this.dom = newDom;
    }

    render(): VNode {
        throw new Error('Component subclass must implement render method');
    }
}
