import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export function ensureDirectoryExistence(filePath: string) {
    const dirName = join(filePath, '..');
    if (existsSync(dirName)) {
        return;
    }
    mkdirSync(dirName, { recursive: true });
}

export function createFile(filePath: string, content: string) {
    ensureDirectoryExistence(filePath);
    writeFileSync(filePath, content, 'utf8');
}

export function validateAppName(appName: string): boolean {
    const validNameRegex = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
    return validNameRegex.test(appName);
}
