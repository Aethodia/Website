- HTML Imports for things in <body/>:

  - Example:  ``<head><link rel="html-import" href="./file.html"/></head>``
  - Headers and footers would only have to be downloaded once!
  - We can probably set this up with a simple ``<div data-html=""/>`` tag.
  - No external libraries required!
  - Imports inside of imports are processed also!

- SSI (Server-Side Includes) for things in <head/>:

  - Example:  ``<!--#include virtual="filename.html"-->``
  - We can use this to duplicate things in <head/> without messing up webcrawlers etc!

- Database for CMS.

  - We might be able to do the calls via JavaScript, and then have an HTML tag like '``<div data-cms=""/>``'.

- MediaWiki markup instead of XHTML.

  - It looks like we'd have to run a local MediaWiki server in order to be able to do this;  so while it would be cool, it's probably not realistic.
