/* eslint-disable unicorn/prefer-module */
const path = require('node:path');

export const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@views': path.resolve(__dirname, '../src/views'),
      '@features': path.resolve(__dirname, '../src/features'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@third-party': path.resolve(__dirname, '../src/third-party'),
      '@mocks': path.resolve(__dirname, '../src/__mocks__'),
    },
  },
};
