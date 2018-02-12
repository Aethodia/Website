#!/usr/bin/env coffee

###
# Common
Functions and variables which are dependencies of other scripts.
###
class Common

	###
	## setField
	Change the innerHTML of a tag.
	###
	@setField: (id, html) ->
		document.getElementById(id)?.innerHTML = html
		0
