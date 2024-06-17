"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAppName = exports.createFile = exports.ensureDirectoryExistence = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function ensureDirectoryExistence(filePath) {
    const dirName = (0, path_1.join)(filePath, '..');
    if ((0, fs_1.existsSync)(dirName)) {
        return;
    }
    (0, fs_1.mkdirSync)(dirName, { recursive: true });
}
exports.ensureDirectoryExistence = ensureDirectoryExistence;
function createFile(filePath, content) {
    ensureDirectoryExistence(filePath);
    (0, fs_1.writeFileSync)(filePath, content, 'utf8');
}
exports.createFile = createFile;
function validateAppName(appName) {
    const validNameRegex = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
    return validNameRegex.test(appName);
}
exports.validateAppName = validateAppName;
