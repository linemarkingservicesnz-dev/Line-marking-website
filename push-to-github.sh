#!/bin/bash
git remote remove github 2>/dev/null
git remote add github https://$GITHUB_TOKEN@github.com/linemarkingservicesnz-dev/Line-marking-website.git
git push github main
echo "Done! Check your GitHub repo."
