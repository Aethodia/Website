#!/usr/bin/env bash
## Compile src
## ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

## Variables
## =============================================================================
PAGES='xhtml'
SCRIPTS='coffee'
STYLES='sass'

## Main
## =============================================================================
echo -e "\e[34;1m::\e[0;1m Compiling source code...\e[0m"
cd ../../src

## Make directories
## -----------------------------------------------------------------------------
for D in $(find -type d); do
	case "$D" in
		'.')
			;;
		*)
			mkdir -p "../bin/$D"
			;;
	esac
done

## Find files
## -----------------------------------------------------------------------------
for F in $(find -type f | grep "$EXTIN"); do
	case "$F" in
		*".$PAGES")
			EXTIN="$PAGES"
			EXTOUT='html'
			;;
		*".$SCRIPTS")
			EXTIN="$SCRIPTS"
			EXTOUT='js'
			;;
		*".$STYLES")
			EXTIN="$STYLES"
			EXTOUT='css'
			;;
	esac

	## Exclude include-only styles
	[[ "$F" == *".$STYLES" ]] && [[ "$(echo $F | sed 's/^.*[/]//gm')" == '_'* ]] && continue

	## Calculate the new path
	NEWPATH="../bin/$(echo $F | sed 's/^[.][/]//gm' | sed 's/[.]'$EXTIN'$/.'$EXTOUT'/gm')"
	echo "$NEWPATH" | sed 's/^[.][.][/]//gm'

	## Transpile and minify
	case "$F" in
		*".$PAGES")
			html-minifier -c "../build/conf/mini-html.json" -o "$NEWPATH" "$F"
			;;
		*".$SCRIPTS")
			coffee -bo "$NEWPATH" -c "$F"
			uglifyjs --config-file "../build/conf/mini-js.json" -o "$NEWPATH" "$NEWPATH"
			;;
		*".$STYLES")
			node-sass "$F" > "$NEWPATH"
			cleancss -O2 -o "$NEWPATH" "$NEWPATH"
			;;
	esac
	chmod 0664 "$NEWPATH"

## Cleanup
## -----------------------------------------------------------------------------
done
cd ../build/make.d
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
exit 0
