#!/usr/bin/env bash
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.
NOD_MOD='../../node_modules'
REPO='html5-boilerplate'

## See if an update is needed
## -----------------------------------------------------------------------------
## If the "$REPO" folder exists and was last modified less than a week ago, desist.
[[ -d "$NOD_MOD/$REPO" ]] &&\
	[[ 604800 -gt $(expr $(date +'%s') - $(stat -c %Y "$NOD_MOD/$REPO")) ]] &&\
		exit 0

## Clone latest
## -----------------------------------------------------------------------------
echo -e "\e[34;1m::\e[0;1m Cloning latest html5-boilerplate...\e[0m"
cd "$NOD_MOD"
git clone https://github.com/h5bp/${REPO}.git

## Copy files
## -----------------------------------------------------------------------------
cd "$REPO"
cp -rfv .gitattributes ../../

## Cleanup
## -----------------------------------------------------------------------------
cd ../..
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
exit 0
