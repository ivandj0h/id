import { execSync } from 'child_process';
import { join } from 'path';
import { createFile, validateAppName } from './utils';
import {existsSync, mkdirSync} from "fs";

function createApp(appName: string) {
    if (!validateAppName(appName)) {
        console.error('Invalid app name. App name must start with a letter and can only contain letters, numbers, underscores, and hyphens.');
        process.exit(1);
    }

    const appDir = join(process.cwd(), appName);
    if (existsSync(appDir)) {
        console.error(`Directory ${appName} already exists.`);
        process.exit(1);
    }

    mkdirSync(appDir);
    mkdirSync(join(appDir, 'src'));

    createFile(join(appDir, 'src/index.tsx'), `
    import { createElement, render, Component } from 'project-id-core';

    class App extends Component<{ name: string }> {
      render() {
        return createElement('div', null, 'Hello, ${appName}!');
      }
    }

    render(createElement(App, { name: 'World' }), document.getElementById('root'));
  `);

    createFile(join(appDir, 'index.html'), `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${appName}</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="./src/index.tsx"></script>
    </body>
    </html>
  `);

    console.log(`App ${appName} created successfully!`);
}

const [,, command, appName] = process.argv;

if (command === 'create') {
    createApp(appName);
} else {
    console.error('Unknown command. Use "create <app-name>".');
    process.exit(1);
}
