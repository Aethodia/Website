'use strict';
module.exports = {

    overrides: [{
        files: ['*.ts'],

        // Parser
        parser: '@typescript-eslint/parser',
        parserOptions: {
            sourceType: 'module',
            ecmaVersion: 'esnext',
            project: './tsconfig.json',
        },

        // External
        plugins: [
            '@typescript-eslint',
            '@angular-eslint',
        ],
        extends: [],

        // Variables
        env: {
            'browser': true,
            'es6': true,
        },
        globals: {},

        // Rules
        rules: {}
    }, {
        files: ['*.component.html'],
        parser: '@angular-eslint/template-parser',
        plugins: [
            '@angular-eslint/template',
        ],
        rules: {
            '@angular-eslint/template/banana-in-a-box': 'error',
        },
    }],

};
