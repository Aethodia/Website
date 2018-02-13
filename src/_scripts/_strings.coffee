#!/usr/bin/env coffee
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

#=require <_common.coffee>

###
# Strings
Contains objects containing strings in various languages.
Also contains functions necessary for translation.
###
class Strings

	###
	## strings
	An object containing translations for many IDs.
	The first translation under each ID is the "default" for that ID.
	The other translations should come in alphabetical order per their ISO code.
	Translations may include HTML.
	###
	@strings:
		placeholderShort:
			la: "Lorem ipsum dolor sit amet."

	###
	## injectText
	Injects text into the page for IDed elements.
	###
	@injectText: () ->
		for id, texts of @strings
			if document.getElementById(id)?
				Common.setField id,
					do () ->
						userLang = (navigator.language || navigator.userLanguage).toLowerCase()
						## Check for substring matches
						for lang, text of texts
							if userLang.length >= lang.length
								switch userLang.substring(0, lang.length)
									when lang
										return text
						## Grab the first language available
						for lang, text of texts
							return text
