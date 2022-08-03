ReadMe
################################################################################

About
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Description
================================================================================

This repository contains the current official website of the Technocratic Republic of Aethodia.

The compiled front-end consists of everything under ``/frontend/dist``.
The contents of this directory are stored in the ``gh-pages`` branch, are are continuously deployed at AethodiaGov.GitHub.com/Website.

The compiled back-end consists of everything under ``/backend/dist``.

Copyright
================================================================================
| (See ``/COPYRIGHT.TXT`` for more info.)
- Code is licensed under the GNU Lesser Affero General Public License 3.0 (LAGPL 3).
- Non-code is licensed under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4) license.

Contributors
================================================================================
| See ``/AUTHORS.TXT`` for more info.

Usage
================================================================================

TODO

Technologies
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Stack
================================================================================

**Front-end**

- Angular (framework)
- Angular Material (UI suite)

**Back-end**

- NestJS
- Fastify
- GraphQL

**Database**

- Ignite

**Server**

- Node.js
- Nginx (reverse proxy)

Code
================================================================================

**Source**

- TypeScript
- SCSS
- `XHTML5 (polyglot)`_

  - With limitations: Angular support for XHTML is currently broken, so we have to leave out XML-specific tags, and use HTML mimetypes and extensions.  Apart from this, we are following the rules of Polyglot XHTML5.

.. _`XHTML5 (polyglot)`: https://dev.w3.org/html5/html-polyglot/html-polyglot.html

**Compiled**

- JavaScript (ES6), minified, from TypeScript
- CSS v3, minified, from SCSS
- HTML v5, minified, from XHTML

Documentation
================================================================================

**Source**

- reStructuredText (used for standalone documentation files, and for comments in other languages)
- ngDoc (used in TypeScript, *etc*)

**Compiled**

- PDF
