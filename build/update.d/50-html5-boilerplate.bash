#!/usr/bin/env bash
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

## Clone latest
## -----------------------------------------------------------------------------
echo -e "\e[34;1m::\e[0;1m Cloning latest html5-boilerplate...\e[0m"
cd ..
git clone https://github.com/h5bp/html5-boilerplate.git

## Copy files
## -----------------------------------------------------------------------------
cd html5-boilerplate
cp -rfv .gitattributes ../../

## Cleanup
## -----------------------------------------------------------------------------
cd ..
rm -rf html5-boilerplate
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
exit 0
