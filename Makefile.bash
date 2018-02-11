#!/usr/bin/env bash

## Makefile
## ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

## Functions
## =============================================================================

## meta
## -----------------------------------------------------------------------------
function meta {
	echo
	PRE='build'
	if [[ -d "$PRE/$1" ]]; then
		cd "$PRE/$1"
		for F in $(echo *); do
			[[ -f "$F" ]] && ./"$F"
			echo
		done
		cd ../..
	else
		echo 'ERROR:  Missing \'build\\' directory!' >&2
		exit 2
	fi
}

## make
## -----------------------------------------------------------------------------
function make {
	meta 'make.d'
}

## clean
## -----------------------------------------------------------------------------
function clean {
	meta 'clean.d'
}

## main
## =============================================================================
if [[ $1 ]]; then
	INPUT="$1"
else
	echo "Type 'make' or 'clean':"
	read INPUT
fi
case "$INPUT" in
	'make')
		make
		;;
	'clean')
		clean
		;;
	*)
		echo 'ERROR:  Invalid command!' >&2
		exit 1
		;;
esac
exit 0
