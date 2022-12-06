// eslint-disable-next-line unicorn/prefer-module
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@views/(.*)$': '<rootDir>/src/views/$1',
    '^.+\\.(svg)$': '<rootDir>/src/__mocks__/componentMock.js',
  },
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = createJestConfig(customJestConfig);
