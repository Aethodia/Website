'use strict';
module.exports = {
    extends: ['../shared/.eslintrc.js'],

    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: '.',
        project: './tsconfig.app.json',
        createDefaultProgram: true, //FIXME:  Workaround for parserOptions.project not working correctly (https://github.com/typescript-eslint/typescript-eslint/issues/864#issuecomment-523213273)
        ecmaVersion: '2020',
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
        },
    },

    env: {
        'browser': true,
        'es6': true,
        'node': true,
    },
    globals: {},

    overrides: [
        {   ////////////////////////////////////////////////////////////////////////////////
            files: ['*.ts'],
            plugins: [
                '@typescript-eslint',
                '@angular-eslint',
            ],
            rules: {},
        },
        {   ////////////////////////////////////////////////////////////////////////////////
            files: ['*.component.html'],
            plugins: ['@angular-eslint/template',],
            parser: '@angular-eslint/template-parser',
            rules: {},
        },
    ],
};
