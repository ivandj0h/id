export class VNode {
    public tag: string | Function;
    public props: { [key: string]: any };
    public children: VNode[];

    constructor(tag: string | Function, props: { [key: string]: any }, children: VNode[]) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
}

export function createElement(tag: string | Function, props: { [key: string]: any }, ...children: any[]): VNode {
    return new VNode(tag, props, children);
}
