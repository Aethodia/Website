'use strict';
module.exports = {
    extends: ['../shared/.eslintrc.js'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'esnext',
    },
    env: {
        'browser': true,
        'es6': true,
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
