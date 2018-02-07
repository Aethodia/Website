#!/usr/bin/env bash
## Find all ``deploy.bash`` files in this directory's subdirectories, cd to
## them, and execute them.

## Functions
## =============================================================================
function deploy {
	echo
	cd "$1"
	if [[ $2 ]]; then
		sudo ./deploy.*sh &
	else
		./deploy.*sh &
	fi
	wait
	cd ..
}

## Deployment
## =============================================================================
deploy etc true
deploy src false
