import { createElement, createDomElement, Component, VNode } from 'project-id-core/src';

type AppProps = {
    message: string;
};

class App extends Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props, {});
    }

    render(): VNode {
        return createElement('div', {}, this.props.message);
    }
}

const appVNode = createElement(App, { message: 'Hello World' });
const container = document.getElementById('root');
if (container) {
    container.appendChild(createDomElement(appVNode));
} else {
    console.error('Root element not found');
}
