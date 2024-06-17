// component.ts
import { createElement, createDomElement, VNode } from './vdom';

export class Component<P, S> {
    props: P;
    state: S;
    dom: HTMLElement | null = null;

    constructor(props: P, initialState: S) {
        this.props = props;
        this.state = initialState;
    }

    setState(newState: Partial<S>) {
        this.state = { ...this.state, ...newState };
        const newVNode = this.render();
        const newDom = createDomElement(newVNode) as HTMLElement;
        this.dom!.replaceWith(newDom);
        this.dom = newDom;
    }

    render(): VNode {
        throw new Error('Component subclass must implement render method');
    }
}
