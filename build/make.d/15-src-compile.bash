#!/usr/bin/env bash
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

## Compile src
## ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

## Variables
## =============================================================================
PAGES='xhtml'
SCRIPTS='coffee'
STYLES='sass'

## Main
## =============================================================================
echo -e "\e[34;1m::\e[0;1m Compiling source code and copying blobs...\e[0m"
cd ../../src

## Find files
## -----------------------------------------------------------------------------
for F in $(find -type f); do

	## Exclude include-only files and directories
	[[ "$(echo $F |                      sed 's/^.*[/]//gm')" == '_'* ]] && continue
#	[[ "$(echo $F | sed 's/[/].*$//gm' | sed 's/^.*[/]//gm')" == '_'* ]] && continue

	## Exclude temporary files
	[[ "$(echo $F | sed 's/^.*[/]//gm')" == '.keep' ]] && continue

	case "$F" in
		*".$PAGES")
			TYPE='Page'
			EXTIN="$PAGES"
			EXTOUT='html'
			;;
		*".$SCRIPTS")
			TYPE='Script'
			EXTIN="$SCRIPTS"
			EXTOUT='js'
			;;
		*".$STYLES")
			TYPE='Style'
			EXTIN="$STYLES"
			EXTOUT='css'
			;;
		*)
			TYPE='Blob'
			EXTIN='res'
			EXTOUT='res'
			;;
	esac

	## Calculate the new path
	NEWPATH="../bin/$(echo $F | sed 's/^[.][/]//gm')"
	[[ $TYPE != 'Res' ]] && NEWPATH="$(echo $NEWPATH | sed 's/[.]'$EXTIN'$/.'$EXTOUT'/gm')"
	echo "${TYPE}:	$(echo $NEWPATH | sed 's/^[.][.][/]//gm')"

	## Transpile and minify source, and move blobs
	case "$F" in
		*".$PAGES")
			../node_modules/html-minifier/cli.js -c "../build/conf/mini-html.json" -o "$NEWPATH" "$F"
			;;
		*".$SCRIPTS")
			../node_modules/coffeescript-concat/coffeescript-concat $(for D in $(find -type d); do echo "-I $D"; done) -o "$NEWPATH" "$F"
			../node_modules/coffeescript/bin/coffee -bo "$NEWPATH" -c "$NEWPATH"
			../node_modules/uglify-es/bin/uglifyjs --config-file "../build/conf/mini-js.json" -o "$NEWPATH" "$NEWPATH"
			;;
		*".$STYLES")
			../node_modules/node-sass/bin/node-sass "$F" > "$NEWPATH"
			../node_modules/clean-css-cli/bin/cleancss -O2 -o "$NEWPATH" "$NEWPATH"
			;;
		*)
			cp "$F" "$NEWPATH"
			;;
	esac
	chmod 0664 "$NEWPATH"

## Cleanup
## -----------------------------------------------------------------------------
done
cd ../build/make.d
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
exit 0
