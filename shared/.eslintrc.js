'use strict';
module.exports = {
    extends: [],
    /**   0 == 'off'
     * && 1 == 'warn'
     * && 2 == 'error'
     * @tutorial https://eslint.org/docs/rules
     */
    rules: {

        // Configuration
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** require or disallow strict mode directives */
        'strict': ['warn', 'safe'],

        // Syntax errors
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** require or disallow semicolons instead of ASI */
        'semi': 2,

        // Bugs
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** enforce "for" loop update clause moving the counter in the right direction. */
        'for-direction': 2,
        /** disallow using an async function as a Promise executor */
        'no-async-promise-executor': 2,

        // Probable bugs
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** enforce `return` statements in getters */
        'getter-return': ['warn', {allowImplicit: true}],
        /** disallow comparing against -0 */
        'no-compare-neg-zero': 1,

        // Bad practices
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** disallow `await` inside of loops */
        'no-await-in-loop': 1,

        // Development-only
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** disallow the use of `console` */
        'no-console': 0,
        /** disallow constant expressions in conditions */
        'no-constant-condition': ['off', {checkLoops: false}],
        /** disallow the use of `debugger` */
        'no-debugger': 0,

        //TODO: Possible Errors
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** disallow assignment operators in conditional expressions */
        'no-cond-assign': 0,
        /** disallow control characters in regular expressions */
        'no-control-regex': 0,
        /** disallow duplicate arguments in `function` definitions */
        'no-dupe-args': 0,
        /** disallow duplicate conditions in if-else-if chains */
        'no-dupe-else-if': 0,
        /** disallow duplicate keys in object literals */
        'no-dupe-keys': 0,
        /** disallow duplicate case labels */
        'no-duplicate-case': 0,
        /** disallow empty block statements */
        'no-empty': 0,
        /** disallow empty character classes in regular expressions */
        'no-empty-character-class': 0,
        /** disallow reassigning exceptions in `catch` clauses */
        'no-ex-assign': 0,
        /** disallow unnecessary boolean casts */
        'no-extra-boolean-cast': 0,
        /** disallow unnecessary parentheses */
        'no-extra-parens': 0,
        /** disallow unnecessary semicolons */
        'no-extra-semi': 0,
        /** disallow reassigning `function` declarations */
        'no-func-assign': 0,
        /** disallow assigning to imported bindings */
        'no-import-assign': 0,
        /** disallow variable or `function` declarations in nested blocks */
        'no-inner-declarations': 0,
        /** disallow invalid regular expression strings in `RegExp` constructors */
        'no-invalid-regexp': 0,
        /** disallow irregular whitespace */
        'no-irregular-whitespace': 0,
        /** disallow characters which are made with multiple code points in character class syntax */
        'no-misleading-character-class': 0,
        /** disallow calling global object properties as functions */
        'no-obj-calls': 0,
        /** disallow calling some `Object.prototype` methods directly on objects */
        'no-prototype-builtins': 0,
        /** disallow multiple spaces in regular expressions */
        'no-regex-spaces': 0,
        /** disallow returning values from setters */
        'no-setter-return': 0,
        /** disallow sparse arrays */
        'no-sparse-arrays': 0,
        /** disallow template literal placeholder syntax in regular strings */
        'no-template-curly-in-string': 0,
        /** disallow confusing multiline expressions */
        'no-unexpected-multiline': 0,
        /** disallow unreachable code after `return`, `throw`, `continue`, and `break` statements */
        'no-unreachable': 0,
        /** disallow control flow statements in `finally` blocks */
        'no-unsafe-finally': 0,
        /** disallow negating the left operand of relational operators */
        'no-unsafe-negation': 0,
        /** disallow useless backreferences in regular expressions */
        'no-useless-backreference': 0,
        /** disallow assignments that can lead to race conditions due to usage of `await` or `yield` */
        'require-atomic-updates': 0,
        /** require calls to `isNaN()` when checking for `NaN` */
        'use-isnan': 0,
        /** enforce comparing `typeof` expressions against valid strings */
        'valid-typeof': 0,

        //TODO: Best Practices
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** enforce getter and setter pairs in objects and classes */
        'accessor-pairs': 0,
        /** enforce `return` statements in callbacks of array methods */
        'array-callback-return': 0,
        /** enforce the use of variables within the scope they are defined */
        'block-scoped-var': 0,
        /** enforce that class methods utilize `this` */
        'class-methods-use-this': 0,
        /** enforce a maximum cyclomatic complexity allowed in a program */
        'complexity': 0,
        /** require `return` statements to either always or never specify values */
        'consistent-return': 0,
        /** enforce consistent brace style for all control statements */
        'curly': 0,
        /** require `default` cases in `switch` statements */
        'default-case': 0,
        /** enforce default clauses in switch statements to be last */
        'default-case-last': 0,
        /** enforce default parameters to be last */
        'default-param-last': 0,
        /** enforce consistent newlines before and after dots */
        'dot-location': 0,
        /** enforce dot notation whenever possible */
        'dot-notation': 0,
        /** require the use of `===` and `!==` */
        'eqeqeq': 0,
        /** require grouped accessor pairs in object literals and classes */
        'grouped-accessor-pairs': 0,
        /** require `for-in` loops to include an `if` statement */
        'guard-for-in': 0,
        /** enforce a maximum number of classes per file */
        'max-classes-per-file': 0,
        /** disallow the use of `alert`, `confirm`, and `prompt` */
        'no-alert': 0,
        /** disallow the use of `arguments.caller` or `arguments.callee` */
        'no-caller': 0,
        /** disallow lexical declarations in case clauses */
        'no-case-declarations': 0,
        /** disallow returning value from constructor */
        'no-constructor-return': 0,
        /** disallow division operators explicitly at the beginning of regular expressions */
        'no-div-regex': 0,
        /** disallow `else` blocks after `return` statements in `if` statements */
        'no-else-return': 0,
        /** disallow empty functions */
        'no-empty-function': 0,
        /** disallow empty destructuring patterns */
        'no-empty-pattern': 0,
        /** disallow `0` comparisons without type-checking operators */
        'no-eq-0': 0,
        /** disallow the use of `eval()` */
        'no-eval': 0,
        /** disallow extending native types */
        'no-extend-native': 0,
        /** disallow unnecessary calls to `.bind()` */
        'no-extra-bind': 0,
        /** disallow unnecessary labels */
        'no-extra-label': 0,
        /** disallow fallthrough of `case` statements */
        'no-fallthrough': 0,
        /** disallow leading or trailing decimal points in numeric literals */
        'no-floating-decimal': 0,
        /** disallow assignments to native objects or read-only global variables */
        'no-global-assign': 0,
        /** disallow shorthand type conversions */
        'no-implicit-coercion': 0,
        /** disallow declarations in the global scope */
        'no-implicit-globals': 0,
        /** disallow the use of `eval()`-like methods */
        'no-implied-eval': 0,
        /** disallow `this` keywords outside of classes or class-like objects */
        'no-invalid-this': 0,
        /** disallow the use of the `__iterator__` property */
        'no-iterator': 0,
        /** disallow labeled statements */
        'no-labels': 0,
        /** disallow unnecessary nested blocks */
        'no-lone-blocks': 0,
        /** disallow function declarations that contain unsafe references inside loop statements */
        'no-loop-func': 0,
        /** disallow magic numbers */
        'no-magic-numbers': 0,
        /** disallow multiple spaces */
        'no-multi-spaces': 0,
        /** disallow multiline strings */
        'no-multi-str': 0,
        /** disallow `new` operators outside of assignments or comparisons */
        'no-new': 0,
        /** disallow `new` operators with the `Function` object */
        'no-new-func': 0,
        /** disallow `new` operators with the `String`, `Number`, and `Boolean` objects */
        'no-new-wrappers': 0,
        /** disallow octal literals */
        'no-octal': 0,
        /** disallow octal escape sequences in string literals */
        'no-octal-escape': 0,
        /** disallow reassigning `function` parameters */
        'no-param-reassign': 0,
        /** disallow the use of the `__proto__` property */
        'no-proto': 0,
        /** disallow variable redeclaration */
        'no-redeclare': 0,
        /** disallow certain properties on certain objects */
        'no-restricted-properties': 0,
        /** disallow assignment operators in `return` statements */
        'no-return-assign': 0,
        /** disallow unnecessary `return await` */
        'no-return-await': 0,
        /** disallow `javascript:` urls */
        'no-script-url': 0,
        /** disallow assignments where both sides are exactly the same */
        'no-self-assign': 0,
        /** disallow comparisons where both sides are exactly the same */
        'no-self-compare': 0,
        /** disallow comma operators */
        'no-sequences': 0,
        /** disallow throwing literals as exceptions */
        'no-throw-literal': 0,
        /** disallow unmodified loop conditions */
        'no-unmodified-loop-condition': 0,
        /** disallow unused expressions */
        'no-unused-expressions': 0,
        /** disallow unused labels */
        'no-unused-labels': 0,
        /** disallow unnecessary calls to `.call()` and `.apply()` */
        'no-useless-call': 0,
        /** disallow unnecessary `catch` clauses */
        'no-useless-catch': 0,
        /** disallow unnecessary concatenation of literals or template literals */
        'no-useless-concat': 0,
        /** disallow unnecessary escape characters */
        'no-useless-escape': 0,
        /** disallow redundant return statements */
        'no-useless-return': 0,
        /** disallow `void` operators */
        'no-void': 0,
        /** disallow specified warning terms in comments */
        'no-warning-comments': 0,
        /** disallow `with` statements */
        'no-with': 0,
        /** enforce using named capture group in regular expression */
        'prefer-named-capture-group': 0,
        /** require using Error objects as Promise rejection reasons */
        'prefer-promise-reject-errors': 0,
        /** disallow use of the `RegExp` constructor in favor of regular expression literals */
        'prefer-regex-literals': 0,
        /** enforce the consistent use of the radix argument when using `parseInt()` */
        'radix': 0,
        /** disallow async functions which have no `await` expression */
        'require-await': 0,
        /** enforce the use of `u` flag on RegExp */
        'require-unicode-regexp': 0,
        /** require `var` declarations be placed at the top of their containing scope */
        'vars-on-top': 0,
        /** require parentheses around immediate `function` invocations */
        'wrap-iife': 0,
        /** require or disallow "Yoda" conditions */
        'yoda': 0,

        //TODO: Variables
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** require or disallow initialization in variable declarations */
        'init-declarations': 0,
        /** disallow deleting variables */
        'no-delete-var': 0,
        /** disallow labels that share a name with a variable */
        'no-label-var': 0,
        /** disallow specified global variables */
        'no-restricted-globals': 0,
        /** disallow variable declarations from shadowing variables declared in the outer scope */
        'no-shadow': 0,
        /** disallow identifiers from shadowing restricted names */
        'no-shadow-restricted-names': 0,
        /** disallow the use of undeclared variables unless mentioned in `//global` comments */
        'no-undef': 0,
        /** disallow initializing variables to `0` */
        'no-undef-init': 0,
        /** disallow the use of `0` as an identifier */
        'no-0': 0,
        /** disallow unused variables */
        'no-unused-vars': 0,
        /** disallow the use of variables before they are defined */
        'no-use-before-define': 0,

        //TODO: Node.js and CommonJS
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** require `return` statements after callbacks */
        'callback-return': 0,
        /** require `require()` calls to be placed at top-level module scope */
        'global-require': 0,
        /** require error handling in callbacks */
        'handle-callback-err': 0,
        /** disallow use of the `Buffer()` constructor */
        'no-buffer-constructor': 0,
        /** disallow `require` calls to be mixed with regular variable declarations */
        'no-mixed-requires': 0,
        /** disallow `new` operators with calls to `require` */
        'no-new-require': 0,
        /** disallow string concatenation with `__dirname` and `__filename` */
        'no-path-concat': 0,
        /** disallow the use of `process.env` */
        'no-process-env': 0,
        /** disallow the use of `process.exit()` */
        'no-process-exit': 0,
        /** disallow specified modules when loaded by `require` */
        'no-restricted-modules': 0,
        /** disallow synchronous methods */
        'no-sync': 0,

        //TODO: Stylistic Issues
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** enforce linebreaks after opening and before closing array brackets */
        'array-bracket-newline': 0,
        /** enforce consistent spacing inside array brackets */
        'array-bracket-spacing': 0,
        /** enforce line breaks after each array element */
        'array-element-newline': 0,
        /** disallow or enforce spaces inside of blocks after opening block and before closing block */
        'block-spacing': 0,
        /** enforce consistent brace style for blocks */
        'brace-style': 0,
        /** enforce camelcase naming convention */
        'camelcase': 0,
        /** enforce or disallow capitalization of the first letter of a comment */
        'capitalized-comments': 0,
        /** require or disallow trailing commas */
        'comma-dangle': 0,
        /** enforce consistent spacing before and after commas */
        'comma-spacing': 0,
        /** enforce consistent comma style */
        'comma-style': 0,
        /** enforce consistent spacing inside computed property brackets */
        'computed-property-spacing': 0,
        /** enforce consistent naming when capturing the current execution context */
        'consistent-this': 0,
        /** require or disallow newline at the end of files */
        'eol-last': 0,
        /** require or disallow spacing between function identifiers and their invocations */
        'func-call-spacing': 0,
        /** require function names to match the name of the variable or property to which they are assigned */
        'func-name-matching': 0,
        /** require or disallow named `function` expressions */
        'func-names': 0,
        /** enforce the consistent use of either `function` declarations or expressions */
        'func-style': 0,
        /** enforce line breaks between arguments of a function call */
        'function-call-argument-newline': 0,
        /** enforce consistent line breaks inside function parentheses */
        'function-paren-newline': 0,
        /** disallow specified identifiers */
        'id-blacklist': 0,
        /** enforce minimum and maximum identifier lengths */
        'id-length': 0,
        /** require identifiers to match a specified regular expression */
        'id-match': 0,
        /** enforce the location of arrow function bodies */
        'implicit-arrow-linebreak': 0,
        /** enforce consistent indentation */
        'indent': 0,
        /** enforce the consistent use of either double or single quotes in JSX attributes */
        'jsx-quotes': 0,
        /** enforce consistent spacing between keys and values in object literal properties */
        'key-spacing': 0,
        /** enforce consistent spacing before and after keywords */
        'keyword-spacing': 0,
        /** enforce position of line comments */
        'line-comment-position': 0,
        /** enforce consistent linebreak style */
        'linebreak-style': 0,
        /** require empty lines around comments */
        'lines-around-comment': 0,
        /** require or disallow an empty line between class members */
        'lines-between-class-members': 0,
        /** enforce a maximum depth that blocks can be nested */
        'max-depth': 0,
        /** enforce a maximum line length */
        'max-len': 0,
        /** enforce a maximum number of lines per file */
        'max-lines': 0,
        /** enforce a maximum number of line of code in a function */
        'max-lines-per-function': 0,
        /** enforce a maximum depth that callbacks can be nested */
        'max-nested-callbacks': 0,
        /** enforce a maximum number of parameters in function definitions */
        'max-params': 0,
        /** enforce a maximum number of statements allowed in function blocks */
        'max-statements': 0,
        /** enforce a maximum number of statements allowed per line */
        'max-statements-per-line': 0,
        /** enforce a particular style for multiline comments */
        'multiline-comment-style': 0,
        /** enforce newlines between operands of ternary expressions */
        'multiline-ternary': 0,
        /** require constructor names to begin with a capital letter */
        'new-cap': 0,
        /** enforce or disallow parentheses when invoking a constructor with no arguments */
        'new-parens': 0,
        /** require a newline after each call in a method chain */
        'newline-per-chained-call': 0,
        /** disallow `Array` constructors */
        'no-array-constructor': 0,
        /** disallow bitwise operators */
        'no-bitwise': 0,
        /** disallow `continue` statements */
        'no-continue': 0,
        /** disallow inline comments after code */
        'no-inline-comments': 0,
        /** disallow `if` statements as the only statement in `else` blocks */
        'no-lonely-if': 0,
        /** disallow mixed binary operators */
        'no-mixed-operators': 0,
        /** disallow mixed spaces and tabs for indentation */
        'no-mixed-spaces-and-tabs': 0,
        /** disallow use of chained assignment expressions */
        'no-multi-assign': 0,
        /** disallow multiple empty lines */
        'no-multiple-empty-lines': 0,
        /** disallow negated conditions */
        'no-negated-condition': 0,
        /** disallow nested ternary expressions */
        'no-nested-ternary': 0,
        /** disallow `Object` constructors */
        'no-new-object': 0,
        /** disallow the unary operators `++` and `--` */
        'no-plusplus': 0,
        /** disallow specified syntax */
        'no-restricted-syntax': 0,
        /** disallow all tabs */
        'no-tabs': 0,
        /** disallow ternary operators */
        'no-ternary': 0,
        /** disallow trailing whitespace at the end of lines */
        'no-trailing-spaces': 0,
        /** disallow dangling underscores in identifiers */
        'no-underscore-dangle': 0,
        /** disallow ternary operators when simpler alternatives exist */
        'no-unneeded-ternary': 0,
        /** disallow whitespace before properties */
        'no-whitespace-before-property': 0,
        /** enforce the location of single-line statements */
        'nonblock-statement-body-position': 0,
        /** enforce consistent line breaks inside braces */
        'object-curly-newline': 0,
        /** enforce consistent spacing inside braces */
        'object-curly-spacing': 0,
        /** enforce placing object properties on separate lines */
        'object-property-newline': 0,
        /** enforce variables to be declared either together or separately in functions */
        'one-var': 0,
        /** require or disallow newlines around variable declarations */
        'one-var-declaration-per-line': 0,
        /** require or disallow assignment operator shorthand where possible */
        'operator-assignment': 0,
        /** enforce consistent linebreak style for operators */
        'operator-linebreak': 0,
        /** require or disallow padding within blocks */
        'padded-blocks': 0,
        /** require or disallow padding lines between statements */
        'padding-line-between-statements': 0,
        /** disallow the use of `Math.pow` in favor of the `**` operator */
        'prefer-exponentiation-operator': 0,
        /** disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. */
        'prefer-object-spread': 0,
        /** require quotes around object literal property names */
        'quote-props': 0,
        /** enforce the consistent use of either backticks, double, or single quotes */
        'quotes': 0,
        /** enforce consistent spacing before and after semicolons */
        'semi-spacing': 0,
        /** enforce location of semicolons */
        'semi-style': 0,
        /** require object keys to be sorted */
        'sort-keys': 0,
        /** require variables within the same declaration block to be sorted */
        'sort-vars': 0,
        /** enforce consistent spacing before blocks */
        'space-before-blocks': 0,
        /** enforce consistent spacing before `function` definition opening parenthesis */
        'space-before-function-paren': 0,
        /** enforce consistent spacing inside parentheses */
        'space-in-parens': 0,
        /** require spacing around infix operators */
        'space-infix-ops': 0,
        /** enforce consistent spacing before or after unary operators */
        'space-unary-ops': 0,
        /** enforce consistent spacing after the `//` or `/*` in a comment */
        'spaced-comment': 0,
        /** enforce spacing around colons of switch statements */
        'switch-colon-spacing': 0,
        /** require or disallow spacing between template tags and their literals */
        'template-tag-spacing': 0,
        /** require or disallow Unicode byte order mark (BOM) */
        'unicode-bom': 0,
        /** require parenthesis around regex literals */
        'wrap-regex': 0,

        //TODO: ECMAScript 6
        //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
        /** require braces around arrow function bodies */
        'arrow-body-style': 0,
        /** require parentheses around arrow function arguments */
        'arrow-parens': 0,
        /** enforce consistent spacing before and after the arrow in arrow functions */
        'arrow-spacing': 0,
        /** require `super()` calls in constructors */
        'constructor-super': 0,
        /** enforce consistent spacing around `*` operators in generator functions */
        'generator-star-spacing': 0,
        /** disallow reassigning class members */
        'no-class-assign': 0,
        /** disallow arrow functions where they could be confused with comparisons */
        'no-confusing-arrow': 0,
        /** disallow reassigning `const` variables */
        'no-const-assign': 0,
        /** disallow duplicate class members */
        'no-dupe-class-members': 0,
        /** disallow duplicate module imports */
        'no-duplicate-imports': 0,
        /** disallow `new` operators with the `Symbol` object */
        'no-new-symbol': 0,
        /** disallow specified names in exports */
        'no-restricted-exports': 0,
        /** disallow specified modules when loaded by `import` */
        'no-restricted-imports': 0,
        /** disallow `this`/`super` before calling `super()` in constructors */
        'no-this-before-super': 0,
        /** disallow unnecessary computed property keys in objects and classes */
        'no-useless-computed-key': 0,
        /** disallow unnecessary constructors */
        'no-useless-constructor': 0,
        /** disallow renaming import, export, and destructured assignments to the same name */
        'no-useless-rename': 0,
        /** require `let` or `const` instead of `var` */
        'no-var': 0,
        /** require or disallow method and property shorthand syntax for object literals */
        'object-shorthand': 0,
        /** require using arrow functions for callbacks */
        'prefer-arrow-callback': 0,
        /** require `const` declarations for variables that are never reassigned after declared */
        'prefer-const': 0,
        /** require destructuring from arrays and/or objects */
        'prefer-destructuring': 0,
        /** disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals */
        'prefer-numeric-literals': 0,
        /** require rest parameters instead of `arguments` */
        'prefer-rest-params': 0,
        /** require spread operators instead of `.apply()` */
        'prefer-spread': 0,
        /** require template literals instead of string concatenation */
        'prefer-template': 0,
        /** require generator functions to contain `yield` */
        'require-yield': 0,
        /** enforce spacing between rest and spread operators and their expressions */
        'rest-spread-spacing': 0,
        /** enforce sorted import declarations within modules */
        'sort-imports': 0,
        /** require symbol descriptions */
        'symbol-description': 0,
        /** require or disallow spacing around embedded expressions of template strings */
        'template-curly-spacing': 0,
        /** require or disallow spacing around the `*` in `yield*` expressions */
        'yield-star-spacing': 0,
    },
};
