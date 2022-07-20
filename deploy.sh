#!/usr/bin/env sh
set -e 
# build project
npm run build

# 
cd dist

git init
git add -A 
git commit -m 'Deploy'

