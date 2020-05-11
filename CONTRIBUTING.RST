Contributing
################################################################################

Design choices
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

TypeScript/JavaScript
================================================================================

Types
--------------------------------------------------------------------------------

- Generics, generics, generics.

- When you need an `object` with untyped keys, use `table` instead of `any`.
  `table` is generic, and can be used to make a "keyring" of sorts, where all properties have the same type(s).
  `table`'s default type is `unknown`.

- When you explicitly need to support any type, try to use `unknown` before trying `any`, since `unknown` has more type-safety.

- `nil` is a shorthand for `null|undefined`.
  Use it.

- ONLY mark function parameters as optional when you explicitly *want* the user to be able to leave out the parameter.
  If you just want the parameter to support `null`/`undefined`, add `|nil` to its type.
  The same goes for default initializers:  if you don't want the parameter to be optional, then don't use them.

- `undefined` should basically never be assigned to a variable, since it means the variable has not been initialized.
  Instead, you should use `null`.

- `void` and `never` should only be used as `function` `return` types, never as variable types.

- Any `function` that explicitly `throw`s an unhandled exception should have `never` in its `return` types.
  Yes, I know this doesn't technically mean anything if there's already another `return` type.
  Strictly-speaking, however, it's correct, since it's possible for the `function` to never return.
  Additionally, it makes it easier to find some unhandled exceptions during refactors.

Other
--------------------------------------------------------------------------------

- `export`s should go right after `import`s, and all in one block.
  This makes it easy to see all of what a file is `export`ing at once, and also makes it easy to rename `export`s.

- Use `Reflect.ownKeys` instead of `Object.keys`, since `Reflect`'s method supports `symbol`s.

HTML
================================================================================

- Write XHTML, not HTML.  The stricter syntax helps to

Styles
================================================================================

- As is normal in Sass, all styles that do not stand on their own should have their names start with "_".

- We have a special way of organizing our style directories.
  Each directory in `styles` has a file named "_.scss", and this file imports all the files in that directory, as well as all "_.scss" files in directories immediately below it.
  This atomizes styles, and makes style dependencies far-easier to grok.

Documentation
================================================================================

- Where possible, try to put each new sentence on a new line in the file.
  This makes it easier to re-arrange sentences.
  Make sure to do this in such a way that the markup still generates a contiguous paragraph.

Meta
================================================================================

- The versions in `package.json` should be as minimal as possible.
  `npm shrinkwrap.json` should be left fully in-charge of the specific versions of dependencies.

- The `dependencies` field is *only* for dependencies that are needed in order to use the contents of `dist`.
  Everything else goes into `devDependencies`.

- Where possible, avoid making files into dotfiles.
  Dotfiles alphabetize differently and can unnecessarily obscure files from yourself and others.
  The only files that *should* be dotfiles are those that are highly meta to the project itself.
  `git`'s configuration files are a good example of good dotfiles.
