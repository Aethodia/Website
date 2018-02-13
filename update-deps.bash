#!/usr/bin/env bash
## Copyright © from the date of the last git commit to this file in this git branch,
## by all persons with git blame to this file in this git branch, per the terms of
## the GNU AGPL 3.0 with the additional allowances of the GNU LGPL 3.0.

## Clone latest
cd build
git clone https://github.com/h5bp/html5-boilerplate.git

## Copy files
cd html5-boilerplate
cp -rfv .gitattributes ../../

## Cleanup
cd ..
rm -rf html5-boilerplate
