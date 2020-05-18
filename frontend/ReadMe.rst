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
