ReadMe
################################################################################

About
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Description
================================================================================
| This repository comprises the current official website of the Technocratic
  Republic of Theodia.
| The live website will consist of everything under ``/bin`` after
  ``/deploy.bash`` has been run.

Licenses
================================================================================
- Code is licensed under the second Mozilla Public License (MPL2) license.
- Non-code is licensed under Creative Commons Attribution-ShareAlike 4.0 (CC
  BY-SA 4).

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

Deployment
================================================================================
- HTML5 (minified) (from XHTML)
- CSS3 (minified) (from Sass)
- JavaScript (minified) (from Coffeescript)
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
