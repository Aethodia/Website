About the frontend
################################################################################

Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
- `dist`: The entire application, *post*-compilation.
- `src`: The entire application, *pre*-compilation.  All entrypoints should be at the root of this directory.
- `src/app/core`: Reusable code that is *not* project-specific.  This is essentially a framework built on-top of Angular and our other dependencies.
- `src/app/shared`: Reusable code that *is* project-specific.
- `src/app/views`: The meat of the application.
- `src/assets`: The files in this directory are deployed to the root URL.
- `src/data`: Mocked-up backend responses.
- `src/env`: Constant variables.
- `src/styles`: Self-explanatory.

Features
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Internationalization
================================================================================
Unlike normal Angular, this application supports changing the language during runtime.
This is done surprisingly simply:  Each module has a `.i18n.ts` file, and each module injects theirs into `I18nPipe`.
Changing the language in `EnvironmentService` automatically updates all uses of `I18nPipe` throughout the app.
And since localizations are saved per-module, and since this app loads its modules dynamically;
each module's localizations are loaded only as-needed, and stored within that module's JS bundle.
Performant!
As well, since localizations are saved in `.ts` files, they provide static typing to all consumers.
And since they're also a part of the source tree, they get all the benefits of version control.
