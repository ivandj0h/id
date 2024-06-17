import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        'project-id-core': '<rootDir>/packages/core/src'
    }
};

export default config;
