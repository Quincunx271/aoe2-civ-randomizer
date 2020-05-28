#!/usr/bin/env bash
set -e
git checkout gh-pages
git reset --hard
rm -r *
git checkout master -- 'src/*'
mv src/* .
rmdir src

git add -A
git commit -m "$1"

git push origin
git checkout master
