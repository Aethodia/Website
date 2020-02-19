'use strict';
module.exports = {
    extends: ['../shared/.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: '2020',
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    plugins: ['@typescript-eslint'],
    env: {
        'es6': true,
        'node': true,
    },
    globals: {},
};
