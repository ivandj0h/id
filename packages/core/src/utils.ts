export function createElement(tag: string | Function, props: { [key: string]: any }, ...children: any[]): VNode {
    return {
        tag,
        props: props || {},
        children
    };
}

export interface VNode {
    tag: string | Function;
    props: { [key: string]: any };
    children: any[];
}
