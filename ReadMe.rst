ReadMe
################################################################################

About
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Description
================================================================================
| This repository comprises the current official website of the Technocratic
  Republic of Theodia.
| The live website will consist of everything under ``/bin`` after building.

Copyright
================================================================================
| (See ``/Copyright.txt`` for more info)
- Code is licensed under the GNU Lesser Affero General Public License 3.0 (LAGPL 3).
- Non-code is licensed under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4) license.

Usage
================================================================================
- ``npm install``:  Install dependencies.
- ``npm run make``:  Build the website from sources.
- ``npm run clean``:  Clean the ``/bin`` directory for a fresh build.
- ``npm run update``:  Update dependencies, including non-npm deps.

Technologies
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Documentation
================================================================================
- reStructuredText (used for standalone documentation files, and for comments in
  other languages)
- ngDoc (used in Sass)
- Codo (used in Coffeescript)

Development
================================================================================
- XHTML5 (polyglot)
- Sass
- Coffeescript
- bash

Deployment
================================================================================
- HTML v5, minified (from XHTML)
- CSS v3, minified (from Sass)
- JavaScript vES6, minified (from Coffeescript)
- PDF (from raw documentation)

Webstack
================================================================================
- nginx (webserver)
- Node.js (appserver)
- Ignite (database)
- CDN (for static content and libraries)
- SSH (remote access)

ToDo
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
- Content Security Policy
- Let's Encrypt SSL
- SSH port-knocking
