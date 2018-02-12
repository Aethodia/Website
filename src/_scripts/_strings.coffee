#!/usr/bin/env coffee
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
