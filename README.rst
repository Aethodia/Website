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
| With the exceptions of ``src`` and ``res``, non-hidden subdirectories and
  symlinks are to be subdomains.

Licenses
================================================================================
- Code is licensed under the Third Lesser GNU Public License (LGPL3) license.
- Non-code is licensed under Creative Commons Attribution-ShareAlike 4.0 (CC
  BY-SA 4).

Technologies
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Meta
================================================================================
- Organize by feature

Webstack
================================================================================
- nginx (webserver)
- Node.js (appserver)
- Ignite (database)
- CDN (for static content and libraries)
- SSH (remote access)

Development
================================================================================
- XHTML5 (polyglot)
- Sass
- Coffeescript

Documentation
================================================================================
- Codo (used in Coffeescript)
- ngDoc (used in Sass)
- reStructuredText (used for standalone documentation files, and for comments in other languages)

Deployment
================================================================================
- HTML5 (minified) (from XHTML)
- CSS3 (minified) (from Sass)
- JavaScript (minified) (from Coffeescript)
- PDF (from raw documentation)

Security
================================================================================
- Content Security Policy
- Let's Encrypt SSL
- SSH port-knocking
