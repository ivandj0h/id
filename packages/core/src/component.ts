export interface ComponentProps {
    [key: string]: any;
}

export abstract class Component<P = ComponentProps> {
    public props: P;
    public state: any = {};

    constructor(props: P) {
        this.props = props;
    }

    abstract render(): any;

    setState(newState: any) {
        this.state = { ...this.state, ...newState };
        // Logic to re-render component
    }
}
