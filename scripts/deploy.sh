# deploy.sh
#! /bin/bash

rm -rf build
npm run build

cd build
git init
git add .
git commit -m 'build and deploy'
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/wlnter/weather-app.git" master:gh-pages
