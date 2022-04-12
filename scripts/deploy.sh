# deploy.sh
#! /bin/bash

rm -rf build
npm run build

cd dist
git init
git add .
git commit -m 'build and deploy'
git push --force --quiet "https://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@github.com/wlnter/weather-app.git" master:gh-pages
