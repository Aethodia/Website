'use strict';
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'esnext',
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
            '@typescript-eslint',
    ],
    extends: [],
    /** https://eslint.org/docs/rules */
    rules: {

        // Possible Errors
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** enforce "for" loop update clause moving the counter in the right direction. */
        'for-direction': [
            'off',
        ],

        /** enforce `return` statements in getters */
        'getter-return': [
            'off',
        ],

        /** disallow using an async function as a Promise executor */
        'no-async-promise-executor': [
            'off',
        ],

        /** disallow `await` inside of loops */
        'no-await-in-loop': [
            'off',
        ],

        /** disallow comparing against -0 */
        'no-compare-neg-zero': [
            'off',
        ],

        /** disallow assignment operators in conditional expressions */
        'no-cond-assign': [
            'off',
        ],

        /** disallow the use of `console` */
        'no-console': [
            'off',
        ],

        /** disallow constant expressions in conditions */
        'no-constant-condition': [
            'off',
        ],

        /** disallow control characters in regular expressions */
        'no-control-regex': [
            'off',
        ],

        /** disallow the use of `debugger` */
        'no-debugger': [
            'off',
        ],

        /** disallow duplicate arguments in `function` definitions */
        'no-dupe-args': [
            'off',
        ],

        /** disallow duplicate conditions in if-else-if chains */
        'no-dupe-else-if': [
            'off',
        ],

        /** disallow duplicate keys in object literals */
        'no-dupe-keys': [
            'off',
        ],

        /** disallow duplicate case labels */
        'no-duplicate-case': [
            'off',
        ],

        /** disallow empty block statements */
        'no-empty': [
            'off',
        ],

        /** disallow empty character classes in regular expressions */
        'no-empty-character-class': [
            'off',
        ],

        /** disallow reassigning exceptions in `catch` clauses */
        'no-ex-assign': [
            'off',
        ],

        /** disallow unnecessary boolean casts */
        'no-extra-boolean-cast': [
            'off',
        ],

        /** disallow unnecessary parentheses */
        'no-extra-parens': [
            'off',
        ],

        /** disallow unnecessary semicolons */
        'no-extra-semi': [
            'off',
        ],

        /** disallow reassigning `function` declarations */
        'no-func-assign': [
            'off',
        ],

        /** disallow assigning to imported bindings */
        'no-import-assign': [
            'off',
        ],

        /** disallow variable or `function` declarations in nested blocks */
        'no-inner-declarations': [
            'off',
        ],

        /** disallow invalid regular expression strings in `RegExp` constructors */
        'no-invalid-regexp': [
            'off',
        ],

        /** disallow irregular whitespace */
        'no-irregular-whitespace': [
            'off',
        ],

        /** disallow characters which are made with multiple code points in character class syntax */
        'no-misleading-character-class': [
            'off',
        ],

        /** disallow calling global object properties as functions */
        'no-obj-calls': [
            'off',
        ],

        /** disallow calling some `Object.prototype` methods directly on objects */
        'no-prototype-builtins': [
            'off',
        ],

        /** disallow multiple spaces in regular expressions */
        'no-regex-spaces': [
            'off',
        ],

        /** disallow returning values from setters */
        'no-setter-return': [
            'off',
        ],

        /** disallow sparse arrays */
        'no-sparse-arrays': [
            'off',
        ],

        /** disallow template literal placeholder syntax in regular strings */
        'no-template-curly-in-string': [
            'off',
        ],

        /** disallow confusing multiline expressions */
        'no-unexpected-multiline': [
            'off',
        ],

        /** disallow unreachable code after `return`, `throw`, `continue`, and `break` statements */
        'no-unreachable': [
            'off',
        ],

        /** disallow control flow statements in `finally` blocks */
        'no-unsafe-finally': [
            'off',
        ],

        /** disallow negating the left operand of relational operators */
        'no-unsafe-negation': [
            'off',
        ],

        /** disallow useless backreferences in regular expressions */
        'no-useless-backreference': [
            'off',
        ],

        /** disallow assignments that can lead to race conditions due to usage of `await` or `yield` */
        'require-atomic-updates': [
            'off',
        ],

        /** require calls to `isNaN()` when checking for `NaN` */
        'use-isnan': [
            'off',
        ],

        /** enforce comparing `typeof` expressions against valid strings */
        'valid-typeof': [
            'off',
        ],

        // Best Practices
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** enforce getter and setter pairs in objects and classes */
        'accessor-pairs': [
            'off',
        ],

        /** enforce `return` statements in callbacks of array methods */
        'array-callback-return': [
            'off',
        ],

        /** enforce the use of variables within the scope they are defined */
        'block-scoped-var': [
            'off',
        ],

        /** enforce that class methods utilize `this` */
        'class-methods-use-this': [
            'off',
        ],

        /** enforce a maximum cyclomatic complexity allowed in a program */
        'complexity': [
            'off',
        ],

        /** require `return` statements to either always or never specify values */
        'consistent-return': [
            'off',
        ],

        /** enforce consistent brace style for all control statements */
        'curly': [
            'off',
        ],

        /** require `default` cases in `switch` statements */
        'default-case': [
            'off',
        ],

        /** enforce default clauses in switch statements to be last */
        'default-case-last': [
            'off',
        ],

        /** enforce default parameters to be last */
        'default-param-last': [
            'off',
        ],

        /** enforce consistent newlines before and after dots */
        'dot-location': [
            'off',
        ],

        /** enforce dot notation whenever possible */
        'dot-notation': [
            'off',
        ],

        /** require the use of `===` and `!==` */
        'eqeqeq': [
            'off',
        ],

        /** require grouped accessor pairs in object literals and classes */
        'grouped-accessor-pairs': [
            'off',
        ],

        /** require `for-in` loops to include an `if` statement */
        'guard-for-in': [
            'off',
        ],

        /** enforce a maximum number of classes per file */
        'max-classes-per-file': [
            'off',
        ],

        /** disallow the use of `alert`, `confirm`, and `prompt` */
        'no-alert': [
            'off',
        ],

        /** disallow the use of `arguments.caller` or `arguments.callee` */
        'no-caller': [
            'off',
        ],

        /** disallow lexical declarations in case clauses */
        'no-case-declarations': [
            'off',
        ],

        /** disallow returning value from constructor */
        'no-constructor-return': [
            'off',
        ],

        /** disallow division operators explicitly at the beginning of regular expressions */
        'no-div-regex': [
            'off',
        ],

        /** disallow `else` blocks after `return` statements in `if` statements */
        'no-else-return': [
            'off',
        ],

        /** disallow empty functions */
        'no-empty-function': [
            'off',
        ],

        /** disallow empty destructuring patterns */
        'no-empty-pattern': [
            'off',
        ],

        /** disallow `0` comparisons without type-checking operators */
        'no-eq-0': [
            'off',
        ],

        /** disallow the use of `eval()` */
        'no-eval': [
            'off',
        ],

        /** disallow extending native types */
        'no-extend-native': [
            'off',
        ],

        /** disallow unnecessary calls to `.bind()` */
        'no-extra-bind': [
            'off',
        ],

        /** disallow unnecessary labels */
        'no-extra-label': [
            'off',
        ],

        /** disallow fallthrough of `case` statements */
        'no-fallthrough': [
            'off',
        ],

        /** disallow leading or trailing decimal points in numeric literals */
        'no-floating-decimal': [
            'off',
        ],

        /** disallow assignments to native objects or read-only global variables */
        'no-global-assign': [
            'off',
        ],

        /** disallow shorthand type conversions */
        'no-implicit-coercion': [
            'off',
        ],

        /** disallow declarations in the global scope */
        'no-implicit-globals': [
            'off',
        ],

        /** disallow the use of `eval()`-like methods */
        'no-implied-eval': [
            'off',
        ],

        /** disallow `this` keywords outside of classes or class-like objects */
        'no-invalid-this': [
            'off',
        ],

        /** disallow the use of the `__iterator__` property */
        'no-iterator': [
            'off',
        ],

        /** disallow labeled statements */
        'no-labels': [
            'off',
        ],

        /** disallow unnecessary nested blocks */
        'no-lone-blocks': [
            'off',
        ],

        /** disallow function declarations that contain unsafe references inside loop statements */
        'no-loop-func': [
            'off',
        ],

        /** disallow magic numbers */
        'no-magic-numbers': [
            'off',
        ],

        /** disallow multiple spaces */
        'no-multi-spaces': [
            'off',
        ],

        /** disallow multiline strings */
        'no-multi-str': [
            'off',
        ],

        /** disallow `new` operators outside of assignments or comparisons */
        'no-new': [
            'off',
        ],

        /** disallow `new` operators with the `Function` object */
        'no-new-func': [
            'off',
        ],

        /** disallow `new` operators with the `String`, `Number`, and `Boolean` objects */
        'no-new-wrappers': [
            'off',
        ],

        /** disallow octal literals */
        'no-octal': [
            'off',
        ],

        /** disallow octal escape sequences in string literals */
        'no-octal-escape': [
            'off',
        ],

        /** disallow reassigning `function` parameters */
        'no-param-reassign': [
            'off',
        ],

        /** disallow the use of the `__proto__` property */
        'no-proto': [
            'off',
        ],

        /** disallow variable redeclaration */
        'no-redeclare': [
            'off',
        ],

        /** disallow certain properties on certain objects */
        'no-restricted-properties': [
            'off',
        ],

        /** disallow assignment operators in `return` statements */
        'no-return-assign': [
            'off',
        ],

        /** disallow unnecessary `return await` */
        'no-return-await': [
            'off',
        ],

        /** disallow `javascript:` urls */
        'no-script-url': [
            'off',
        ],

        /** disallow assignments where both sides are exactly the same */
        'no-self-assign': [
            'off',
        ],

        /** disallow comparisons where both sides are exactly the same */
        'no-self-compare': [
            'off',
        ],

        /** disallow comma operators */
        'no-sequences': [
            'off',
        ],

        /** disallow throwing literals as exceptions */
        'no-throw-literal': [
            'off',
        ],

        /** disallow unmodified loop conditions */
        'no-unmodified-loop-condition': [
            'off',
        ],

        /** disallow unused expressions */
        'no-unused-expressions': [
            'off',
        ],

        /** disallow unused labels */
        'no-unused-labels': [
            'off',
        ],

        /** disallow unnecessary calls to `.call()` and `.apply()` */
        'no-useless-call': [
            'off',
        ],

        /** disallow unnecessary `catch` clauses */
        'no-useless-catch': [
            'off',
        ],

        /** disallow unnecessary concatenation of literals or template literals */
        'no-useless-concat': [
            'off',
        ],

        /** disallow unnecessary escape characters */
        'no-useless-escape': [
            'off',
        ],

        /** disallow redundant return statements */
        'no-useless-return': [
            'off',
        ],

        /** disallow `void` operators */
        'no-void': [
            'off',
        ],

        /** disallow specified warning terms in comments */
        'no-warning-comments': [
            'off',
        ],

        /** disallow `with` statements */
        'no-with': [
            'off',
        ],

        /** enforce using named capture group in regular expression */
        'prefer-named-capture-group': [
            'off',
        ],

        /** require using Error objects as Promise rejection reasons */
        'prefer-promise-reject-errors': [
            'off',
        ],

        /** disallow use of the `RegExp` constructor in favor of regular expression literals */
        'prefer-regex-literals': [
            'off',
        ],

        /** enforce the consistent use of the radix argument when using `parseInt()` */
        'radix': [
            'off',
        ],

        /** disallow async functions which have no `await` expression */
        'require-await': [
            'off',
        ],

        /** enforce the use of `u` flag on RegExp */
        'require-unicode-regexp': [
            'off',
        ],

        /** require `var` declarations be placed at the top of their containing scope */
        'vars-on-top': [
            'off',
        ],

        /** require parentheses around immediate `function` invocations */
        'wrap-iife': [
            'off',
        ],

        /** require or disallow "Yoda" conditions */
        'yoda': [
            'off',
        ],

        // Strict Mode
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** require or disallow strict mode directives */
        'strict': [
            'off',
        ],

        // Variables
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** require or disallow initialization in variable declarations */
        'init-declarations': [
            'off',
        ],

        /** disallow deleting variables */
        'no-delete-var': [
            'off',
        ],

        /** disallow labels that share a name with a variable */
        'no-label-var': [
            'off',
        ],

        /** disallow specified global variables */
        'no-restricted-globals': [
            'off',
        ],

        /** disallow variable declarations from shadowing variables declared in the outer scope */
        'no-shadow': [
            'off',
        ],

        /** disallow identifiers from shadowing restricted names */
        'no-shadow-restricted-names': [
            'off',
        ],

        /** disallow the use of undeclared variables unless mentioned in `//global` comments */
        'no-undef': [
            'off',
        ],

        /** disallow initializing variables to `0` */
        'no-undef-init': [
            'off',
        ],

        /** disallow the use of `0` as an identifier */
        'no-0': [
            'off',
        ],

        /** disallow unused variables */
        'no-unused-vars': [
            'off',
        ],

        /** disallow the use of variables before they are defined */
        'no-use-before-define': [
            'off',
        ],

        // Node.js and CommonJS
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** require `return` statements after callbacks */
        'callback-return': [
            'off',
        ],

        /** require `require()` calls to be placed at top-level module scope */
        'global-require': [
            'off',
        ],

        /** require error handling in callbacks */
        'handle-callback-err': [
            'off',
        ],

        /** disallow use of the `Buffer()` constructor */
        'no-buffer-constructor': [
            'off',
        ],

        /** disallow `require` calls to be mixed with regular variable declarations */
        'no-mixed-requires': [
            'off',
        ],

        /** disallow `new` operators with calls to `require` */
        'no-new-require': [
            'off',
        ],

        /** disallow string concatenation with `__dirname` and `__filename` */
        'no-path-concat': [
            'off',
        ],

        /** disallow the use of `process.env` */
        'no-process-env': [
            'off',
        ],

        /** disallow the use of `process.exit()` */
        'no-process-exit': [
            'off',
        ],

        /** disallow specified modules when loaded by `require` */
        'no-restricted-modules': [
            'off',
        ],

        /** disallow synchronous methods */
        'no-sync': [
            'off',
        ],

        // Stylistic Issues
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** enforce linebreaks after opening and before closing array brackets */
        'array-bracket-newline': [
            'off',
        ],

        /** enforce consistent spacing inside array brackets */
        'array-bracket-spacing': [
            'off',
        ],

        /** enforce line breaks after each array element */
        'array-element-newline': [
            'off',
        ],

        /** disallow or enforce spaces inside of blocks after opening block and before closing block */
        'block-spacing': [
            'off',
        ],

        /** enforce consistent brace style for blocks */
        'brace-style': [
            'off',
        ],

        /** enforce camelcase naming convention */
        'camelcase': [
            'off',
        ],

        /** enforce or disallow capitalization of the first letter of a comment */
        'capitalized-comments': [
            'off',
        ],

        /** require or disallow trailing commas */
        'comma-dangle': [
            'off',
        ],

        /** enforce consistent spacing before and after commas */
        'comma-spacing': [
            'off',
        ],

        /** enforce consistent comma style */
        'comma-style': [
            'off',
        ],

        /** enforce consistent spacing inside computed property brackets */
        'computed-property-spacing': [
            'off',
        ],

        /** enforce consistent naming when capturing the current execution context */
        'consistent-this': [
            'off',
        ],

        /** require or disallow newline at the end of files */
        'eol-last': [
            'off',
        ],

        /** require or disallow spacing between function identifiers and their invocations */
        'func-call-spacing': [
            'off',
        ],

        /** require function names to match the name of the variable or property to which they are assigned */
        'func-name-matching': [
            'off',
        ],

        /** require or disallow named `function` expressions */
        'func-names': [
            'off',
        ],

        /** enforce the consistent use of either `function` declarations or expressions */
        'func-style': [
            'off',
        ],

        /** enforce line breaks between arguments of a function call */
        'function-call-argument-newline': [
            'off',
        ],

        /** enforce consistent line breaks inside function parentheses */
        'function-paren-newline': [
            'off',
        ],

        /** disallow specified identifiers */
        'id-blacklist': [
            'off',
        ],

        /** enforce minimum and maximum identifier lengths */
        'id-length': [
            'off',
        ],

        /** require identifiers to match a specified regular expression */
        'id-match': [
            'off',
        ],

        /** enforce the location of arrow function bodies */
        'implicit-arrow-linebreak': [
            'off',
        ],

        /** enforce consistent indentation */
        'indent': [
            'off',
        ],

        /** enforce the consistent use of either double or single quotes in JSX attributes */
        'jsx-quotes': [
            'off',
        ],

        /** enforce consistent spacing between keys and values in object literal properties */
        'key-spacing': [
            'off',
        ],

        /** enforce consistent spacing before and after keywords */
        'keyword-spacing': [
            'off',
        ],

        /** enforce position of line comments */
        'line-comment-position': [
            'off',
        ],

        /** enforce consistent linebreak style */
        'linebreak-style': [
            'off',
        ],

        /** require empty lines around comments */
        'lines-around-comment': [
            'off',
        ],

        /** require or disallow an empty line between class members */
        'lines-between-class-members': [
            'off',
        ],

        /** enforce a maximum depth that blocks can be nested */
        'max-depth': [
            'off',
        ],

        /** enforce a maximum line length */
        'max-len': [
            'off',
        ],

        /** enforce a maximum number of lines per file */
        'max-lines': [
            'off',
        ],

        /** enforce a maximum number of line of code in a function */
        'max-lines-per-function': [
            'off',
        ],

        /** enforce a maximum depth that callbacks can be nested */
        'max-nested-callbacks': [
            'off',
        ],

        /** enforce a maximum number of parameters in function definitions */
        'max-params': [
            'off',
        ],

        /** enforce a maximum number of statements allowed in function blocks */
        'max-statements': [
            'off',
        ],

        /** enforce a maximum number of statements allowed per line */
        'max-statements-per-line': [
            'off',
        ],

        /** enforce a particular style for multiline comments */
        'multiline-comment-style': [
            'off',
        ],

        /** enforce newlines between operands of ternary expressions */
        'multiline-ternary': [
            'off',
        ],

        /** require constructor names to begin with a capital letter */
        'new-cap': [
            'off',
        ],

        /** enforce or disallow parentheses when invoking a constructor with no arguments */
        'new-parens': [
            'off',
        ],

        /** require a newline after each call in a method chain */
        'newline-per-chained-call': [
            'off',
        ],

        /** disallow `Array` constructors */
        'no-array-constructor': [
            'off',
        ],

        /** disallow bitwise operators */
        'no-bitwise': [
            'off',
        ],

        /** disallow `continue` statements */
        'no-continue': [
            'off',
        ],

        /** disallow inline comments after code */
        'no-inline-comments': [
            'off',
        ],

        /** disallow `if` statements as the only statement in `else` blocks */
        'no-lonely-if': [
            'off',
        ],

        /** disallow mixed binary operators */
        'no-mixed-operators': [
            'off',
        ],

        /** disallow mixed spaces and tabs for indentation */
        'no-mixed-spaces-and-tabs': [
            'off',
        ],

        /** disallow use of chained assignment expressions */
        'no-multi-assign': [
            'off',
        ],

        /** disallow multiple empty lines */
        'no-multiple-empty-lines': [
            'off',
        ],

        /** disallow negated conditions */
        'no-negated-condition': [
            'off',
        ],

        /** disallow nested ternary expressions */
        'no-nested-ternary': [
            'off',
        ],

        /** disallow `Object` constructors */
        'no-new-object': [
            'off',
        ],

        /** disallow the unary operators `++` and `--` */
        'no-plusplus': [
            'off',
        ],

        /** disallow specified syntax */
        'no-restricted-syntax': [
            'off',
        ],

        /** disallow all tabs */
        'no-tabs': [
            'off',
        ],

        /** disallow ternary operators */
        'no-ternary': [
            'off',
        ],

        /** disallow trailing whitespace at the end of lines */
        'no-trailing-spaces': [
            'off',
        ],

        /** disallow dangling underscores in identifiers */
        'no-underscore-dangle': [
            'off',
        ],

        /** disallow ternary operators when simpler alternatives exist */
        'no-unneeded-ternary': [
            'off',
        ],

        /** disallow whitespace before properties */
        'no-whitespace-before-property': [
            'off',
        ],

        /** enforce the location of single-line statements */
        'nonblock-statement-body-position': [
            'off',
        ],

        /** enforce consistent line breaks inside braces */
        'object-curly-newline': [
            'off',
        ],

        /** enforce consistent spacing inside braces */
        'object-curly-spacing': [
            'off',
        ],

        /** enforce placing object properties on separate lines */
        'object-property-newline': [
            'off',
        ],

        /** enforce variables to be declared either together or separately in functions */
        'one-var': [
            'off',
        ],

        /** require or disallow newlines around variable declarations */
        'one-var-declaration-per-line': [
            'off',
        ],

        /** require or disallow assignment operator shorthand where possible */
        'operator-assignment': [
            'off',
        ],

        /** enforce consistent linebreak style for operators */
        'operator-linebreak': [
            'off',
        ],

        /** require or disallow padding within blocks */
        'padded-blocks': [
            'off',
        ],

        /** require or disallow padding lines between statements */
        'padding-line-between-statements': [
            'off',
        ],

        /** disallow the use of `Math.pow` in favor of the `**` operator */
        'prefer-exponentiation-operator': [
            'off',
        ],

        /** disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. */
        'prefer-object-spread': [
            'off',
        ],

        /** require quotes around object literal property names */
        'quote-props': [
            'off',
        ],

        /** enforce the consistent use of either backticks, double, or single quotes */
        'quotes': [
            'off',
        ],

        /** require or disallow semicolons instead of ASI */
        'semi': [
            'off',
        ],

        /** enforce consistent spacing before and after semicolons */
        'semi-spacing': [
            'off',
        ],

        /** enforce location of semicolons */
        'semi-style': [
            'off',
        ],

        /** require object keys to be sorted */
        'sort-keys': [
            'off',
        ],

        /** require variables within the same declaration block to be sorted */
        'sort-vars': [
            'off',
        ],

        /** enforce consistent spacing before blocks */
        'space-before-blocks': [
            'off',
        ],

        /** enforce consistent spacing before `function` definition opening parenthesis */
        'space-before-function-paren': [
            'off',
        ],

        /** enforce consistent spacing inside parentheses */
        'space-in-parens': [
            'off',
        ],

        /** require spacing around infix operators */
        'space-infix-ops': [
            'off',
        ],

        /** enforce consistent spacing before or after unary operators */
        'space-unary-ops': [
            'off',
        ],

        /** enforce consistent spacing after the `//` or `/*` in a comment */
        'spaced-comment': [
            'off',
        ],

        /** enforce spacing around colons of switch statements */
        'switch-colon-spacing': [
            'off',
        ],

        /** require or disallow spacing between template tags and their literals */
        'template-tag-spacing': [
            'off',
        ],

        /** require or disallow Unicode byte order mark (BOM) */
        'unicode-bom': [
            'off',
        ],

        /** require parenthesis around regex literals */
        'wrap-regex': [
            'off',
        ],

        // ECMAScript 6
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

        /** require braces around arrow function bodies */
        'arrow-body-style': [
            'off',
        ],

        /** require parentheses around arrow function arguments */
        'arrow-parens': [
            'off',
        ],

        /** enforce consistent spacing before and after the arrow in arrow functions */
        'arrow-spacing': [
            'off',
        ],

        /** require `super()` calls in constructors */
        'constructor-super': [
            'off',
        ],

        /** enforce consistent spacing around `*` operators in generator functions */
        'generator-star-spacing': [
            'off',
        ],

        /** disallow reassigning class members */
        'no-class-assign': [
            'off',
        ],

        /** disallow arrow functions where they could be confused with comparisons */
        'no-confusing-arrow': [
            'off',
        ],

        /** disallow reassigning `const` variables */
        'no-const-assign': [
            'off',
        ],

        /** disallow duplicate class members */
        'no-dupe-class-members': [
            'off',
        ],

        /** disallow duplicate module imports */
        'no-duplicate-imports': [
            'off',
        ],

        /** disallow `new` operators with the `Symbol` object */
        'no-new-symbol': [
            'off',
        ],

        /** disallow specified names in exports */
        'no-restricted-exports': [
            'off',
        ],

        /** disallow specified modules when loaded by `import` */
        'no-restricted-imports': [
            'off',
        ],

        /** disallow `this`/`super` before calling `super()` in constructors */
        'no-this-before-super': [
            'off',
        ],

        /** disallow unnecessary computed property keys in objects and classes */
        'no-useless-computed-key': [
            'off',
        ],

        /** disallow unnecessary constructors */
        'no-useless-constructor': [
            'off',
        ],

        /** disallow renaming import, export, and destructured assignments to the same name */
        'no-useless-rename': [
            'off',
        ],

        /** require `let` or `const` instead of `var` */
        'no-var': [
            'off',
        ],

        /** require or disallow method and property shorthand syntax for object literals */
        'object-shorthand': [
            'off',
        ],

        /** require using arrow functions for callbacks */
        'prefer-arrow-callback': [
            'off',
        ],

        /** require `const` declarations for variables that are never reassigned after declared */
        'prefer-const': [
            'off',
        ],

        /** require destructuring from arrays and/or objects */
        'prefer-destructuring': [
            'off',
        ],

        /** disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals */
        'prefer-numeric-literals': [
            'off',
        ],

        /** require rest parameters instead of `arguments` */
        'prefer-rest-params': [
            'off',
        ],

        /** require spread operators instead of `.apply()` */
        'prefer-spread': [
            'off',
        ],

        /** require template literals instead of string concatenation */
        'prefer-template': [
            'off',
        ],

        /** require generator functions to contain `yield` */
        'require-yield': [
            'off',
        ],

        /** enforce spacing between rest and spread operators and their expressions */
        'rest-spread-spacing': [
            'off',
        ],

        /** enforce sorted import declarations within modules */
        'sort-imports': [
            'off',
        ],

        /** require symbol descriptions */
        'symbol-description': [
            'off',
        ],

        /** require or disallow spacing around embedded expressions of template strings */
        'template-curly-spacing': [
            'off',
        ],

        /** require or disallow spacing around the `*` in `yield*` expressions */
        'yield-star-spacing': [
            'off',
        ],
    },
};
