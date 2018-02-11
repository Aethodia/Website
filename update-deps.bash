#!/usr/bin/env bash

## Clone latest
cd build
git clone https://github.com/h5bp/html5-boilerplate.git

## Copy files
cd html5-boilerplate
cp -rfv .gitattributes ../../

## Cleanup
cd ..
rm -rf html5-boilerplate
