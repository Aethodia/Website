#!/usr/bin/env bash
echo -e "\e[34;1m::\e[0;1m Deploying server configuration...\e[0m"
cd ../../etc
## Have to use $(ls -A) in order to copy hidden files.
for F in $($(which ls) -A); do
	cp -afrv "$F" /etc/ | sed 's/^.*[-][>] .//gm' | sed 's/.$//gm'
done
echo -e "\e[34;1m::\e[0;1m Done.\e[0m"
exit 0
