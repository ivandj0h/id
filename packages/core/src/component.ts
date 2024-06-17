import { VNode } from './vdom';
import {createDomElement} from "./render";

export interface ComponentProps {
    [key: string]: any;
}

export class Component<P = ComponentProps> {
    public props: P;
    public state: any = {};
    public dom: HTMLElement | null = null;

    constructor(props: P) {
        this.props = props;
    }

    render(): VNode {
        throw new Error('Render method should be implemented by subclass');
    }

    setState(newState: any) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    update() {
        if (this.dom) {
            const newVNode = this.render();
            const newDom = createDomElement(newVNode);
            if (this.dom.parentNode) {
                this.dom.parentNode.replaceChild(newDom, this.dom);
            }
            this.dom = newDom as HTMLElement;
        }
    }
}
