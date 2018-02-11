#!/usr/bin/env coffee

###
# Common
This class contains functions and variables which are dependencies of other
scripts.
###
class Common
	@setField: (id, html) ->
		document.getElementById(id)?.innerHTML = html
		0

###
## main
This function runs when this script is included.
###
0
