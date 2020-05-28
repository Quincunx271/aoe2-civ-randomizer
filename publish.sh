#!/usr/bin/env bash
set -e
git checkout gh-pages
rm -r *
git checkout master -- 'src/*'
mv src/* .
rmdir src

git push origin
git checkout master
