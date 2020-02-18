'use strict';
module.exports = {
    extends: ['../shared/.eslintrc.js'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'esnext',
    },
    env: {
        'browser': false,
        'es6': false,
    },
    globals: {},
};
