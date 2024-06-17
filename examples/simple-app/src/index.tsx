import { createElement, render, Component } from 'project-id-core/src';

interface AppProps {
    name: string;
}

class App extends Component<AppProps> {
    render() {
        return createElement('div', {}, `Hello, ${this.props.name}!`);
    }
}

const element = createElement(App, { name: 'ivandjoh' });

const rootElement = document.getElementById('root');
if (rootElement) {
    render(element, rootElement);
} else {
    console.error('Root element not found');
}
