#!/usr/bin/env bash
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

## Preliminary
## =============================================================================

## Update repo
## -----------------------------------------------------------------------------
function sync {
	mkdir -p "$USER"
	cd "$USER"

	## See if an update is needed
	## If the "$REPO" folder exists and was last modified less than a week ago, desist.
	[[ -d "$REPO" ]] &&\
		[[ 604800 -gt $(expr $(date +'%s') - $(stat -c %Y "$REPO")) ]] &&\
			echo -e "\e[34;1m::\e[0;1m $REPO is already up-to-date.\e[0m" &&\
			cd .. &&\
			return 0

	## Clone latest
	echo -e "\e[34;1m::\e[0;1m Cloning latest $REPO...\e[0m"
	rm -rf "$REPO" 2>&1 > /dev/null
	git clone "https://github.com/$USER/$REPO.git"
	cd ..
}

## Main
## =============================================================================
cd ../..
NOD_MOD="$(pwd)/node_modules"
cd $NOD_MOD

USER=h5bp
REPO=html5-boilerplate
sync
cd "$USER/$REPO"
	## Files to extract
	cp -rfv '.gitattributes' ../../..
cd ../..

USER=TheodiaGov
REPO=Fonts
sync
cd "$USER/$REPO"
git checkout origin/bin > /dev/null 2>&1
	## Files to extract
	cp -rfv 'Theodic_Sans.ttf' '../../../bin/_res/TheodicSans.ttf'
git checkout master > /dev/null 2>&1
cd ../..

## Cleanup
## -----------------------------------------------------------------------------
cd ../..
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
exit 0
