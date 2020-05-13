About the frontend
################################################################################

Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
- `dist`: the entire application, *post*-compilation.
- `src`: the entire application, *pre*-compilation.  All entrypoints should be at the root of this directory.
- `src/app/content`: the meat of the application.
- `src/app/framework`: reusable code that is *not* project-specific.
- `src/app/shared`: reusable code that *is* project-specific.
- `src/assets`: the files in this directory are deployed to the root URL.
- `src/data`: mocked-up backend responses.
- `src/env`: constant variables.
- `src/styles`: self-explanatory.
