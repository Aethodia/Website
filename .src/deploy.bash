#!/usr/bin/env bash

## Functions
## =============================================================================
function deploy {
	echo -e "\e[34;1m::\e[0;1m Deploying $1...\e[0m"
	cd "$1"
	## Make directories
	for D in $(find -type d); do
		mkdir -p "../../$D"
	done
	## Transpile and minify files
	case "$1" in
		'pages')
			EXTIN='xml'
			EXTOUT='html'
			;;
		'scripts')
			EXTIN='coffee'
			EXTOUT='js'
			;;
		'styles')
			EXTIN='sass'
			EXTOUT='css'
			;;
	esac
	for F in $(find -type f | grep "$EXTIN"); do
		NEWPATH="../../$(echo $F | sed 's/^[.][/]//gm' | sed 's/[.]'$EXTIN'$/.'$EXTOUT'/gm')"
		echo "$NEWPATH" | sed 's/^[.][.][/][.][.]//gm'
		case "$1" in
			'pages')
				html-minifier -c "../mini-html.json" -o "$NEWPATH" "$F"
				;;
			'scripts')
				coffee -bo "$NEWPATH" -c "$F"
				uglifyjs --config-file "../mini-js.json" -o "$NEWPATH" "$NEWPATH"
				;;
			'styles')
				node-sass "$F" > "$NEWPATH"
				cleancss -O2 -o "$NEWPATH" "$NEWPATH"
				;;
		esac
		chmod 0664 "$NEWPATH"
	done
	cd ..
	echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
}

## Deployment
## =============================================================================
deploy 'scripts'
echo
deploy 'styles'
echo
deploy 'pages'
