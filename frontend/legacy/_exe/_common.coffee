#!/usr/bin/env coffee
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

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
		document.getElementById(id).innerHTML = html
		0
