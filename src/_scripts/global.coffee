#!/usr/bin/env coffee
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
		Common.setField('header',  'HEADER' )
		Common.setField('sidebar', 'SIDEBAR')
		Common.setField('footer',  'FOOTER' )
		0

###
## main
Runs when this script is loaded.
###
window.onLoad = () ->
	window.onLoad()
	Global.activateTheme()
	0
