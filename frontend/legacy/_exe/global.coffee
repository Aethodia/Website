#!/usr/bin/env coffee
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

#=require <_common.coffee>
#=require <_strings.coffee>

###
# Global
Contains functions and variables important to all pages.
###
class Global

	###
	## activateTheme
	Injects a header, sidebar, and footer into the page.
	###
	@activateTheme: () ->
		Common.setField("header",  "HEADER" )
		Common.setField("sidebar", "SIDEBAR")
		Common.setField("footer",  "FOOTER" )
		0

###
## main
Runs when this script is loaded.
###
document.addEventListener("DOMContentLoaded", Global.activateTheme)
