'use strict';
module.exports = {
    extends: ['../shared/.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: '.',
        project: './tsconfig.build.json',
        createDefaultProgram: true, //FIXME:  Workaround for parserOptions.project not working correctly (https://github.com/typescript-eslint/typescript-eslint/issues/864#issuecomment-523213273)
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
