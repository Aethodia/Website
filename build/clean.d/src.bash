#!/usr/bin/env bash
## Clean src
## ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

## Functions
## =============================================================================

## Regex
## -----------------------------------------------------------------------------
function regex {
	read INPUT
	echo "$INPUT" | sed "s/[\']$//gm" | sed "s/^.*[\'][.][/]//gm"
}

## Main
## =============================================================================
echo -e "\e[34;1m::\e[0;1m Cleaning 'bin/'...\e[0m"
cd ../../bin

## Remove compiled code
## -----------------------------------------------------------------------------
echo -e "\e[34;1m::\e[0m Removing binaries..."
for F in $(find -type f | grep "$EXTIN"); do
	case "$F" in
		*.html)
			rm -fv "$F" | regex
			;;
		*.js)
			rm -fv "$F" | regex
			;;
		*.css)
			rm -fv "$F" | regex
			;;
	esac
done

## Remove empty directories
## -----------------------------------------------------------------------------
echo -e "\e[34;1m::\e[0m Removing empty directories..."
for D in $(find -type d); do
	[[ "$D" != '.' ]] && rmdir -v --ignore-fail-on-non-empty "$D" | regex
done

## Cleanup
## -----------------------------------------------------------------------------
cd ../build/clean.d
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
