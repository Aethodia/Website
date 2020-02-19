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
        'browser': true,
        'es6': true,
        'node': true,
    },
    globals: {},

    overrides: [
        {   ////////////////////////////////////////////////////////////////////////////////
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: [
                '@typescript-eslint',
                '@angular-eslint',
            ],
            rules: {},
        },
        {   ////////////////////////////////////////////////////////////////////////////////
            files: ['*.component.html'],
            parser: '@angular-eslint/template-parser',
            plugins: [
                '@angular-eslint/template',
            ],
            rules: {},
        },
    ],
};
