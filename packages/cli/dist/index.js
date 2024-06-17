"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const utils_1 = require("./utils");
const fs_1 = require("fs");
function createApp(appName) {
    if (!(0, utils_1.validateAppName)(appName)) {
        console.error('Invalid app name. App name must start with a letter and can only contain letters, numbers, underscores, and hyphens.');
        process.exit(1);
    }
    const appDir = (0, path_1.join)(process.cwd(), appName);
    if ((0, fs_1.existsSync)(appDir)) {
        console.error(`Directory ${appName} already exists.`);
        process.exit(1);
    }
    (0, fs_1.mkdirSync)(appDir);
    (0, fs_1.mkdirSync)((0, path_1.join)(appDir, 'src'));
    (0, utils_1.createFile)((0, path_1.join)(appDir, 'src/index.tsx'), `
    import { createElement, render, Component } from 'project-id-core';

    class App extends Component<{ name: string }> {
      render() {
        return createElement('div', null, 'Hello, ${appName}!');
      }
    }

    render(createElement(App, { name: 'World' }), document.getElementById('root'));
  `);
    (0, utils_1.createFile)((0, path_1.join)(appDir, 'index.html'), `
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
const [, , command, appName] = process.argv;
if (command === 'create') {
    createApp(appName);
}
else {
    console.error('Unknown command. Use "create <app-name>".');
    process.exit(1);
}
