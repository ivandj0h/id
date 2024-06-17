import { createElement, render, Component } from 'project-id-core/src';

interface AppProps {
    name: string;
}

class App extends Component<AppProps> {
    render() {
        // Menambahkan pemeriksaan untuk null pada this.props
        return createElement('div', {}, `Hello, ${this.props?.name}!`);
    }
}

const element = createElement(App, { name: 'World' });

// Menambahkan pemeriksaan null untuk document.getElementById('root')
const rootElement = document.getElementById('root');
if (rootElement) {
    render(element, rootElement);
} else {
    console.error('Root element not found');
}
