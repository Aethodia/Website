ReadMe
################################################################################

About
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Description
================================================================================

This repository comprises the current official website of the Technocratic Republic of Theodia.

The completed front-end consists of everything under ``/frontend/dist``.
The contents of this directory are stored in the ``gh-pages`` branch, are are continuously deployed at TheodiaGov.GitHub.com/Website.

The completed back-end consists of everything under ``/backend/dist``.

Copyright
================================================================================
| (See ``/LICENSE.TXT`` for more info.)
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

**Server**

- Node.js
- Nginx (reverse proxy)

**Database**

- Ignite

Code
================================================================================

**Source**

- TypeScript
- Sass
- `XHTML5 (polyglot)`_

  - With limitations: Angular doesn't support XHTML, so we have to leave out XML-specific tags, and use HTML mimetypes and extensions.  Apart from this, we are following the rules of Polyglot XHTML5.

.. _`XHTML5 (polyglot)`: https://dev.w3.org/html5/html-polyglot/html-polyglot.html

**Compiled**

- JavaScript (ES6), minified, from TypeScript
- CSS v3, minified, from Sass
- HTML v5, minified, from XHTML

Documentation
================================================================================

**Source**

- reStructuredText (used for standalone documentation files, and for comments in other languages)
- ngDoc (used in TypeScript, *etc*)

**Compiled**

- PDF
