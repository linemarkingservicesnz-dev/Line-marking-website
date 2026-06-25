#!/bin/bash
echo "Step 1: Checking token..."
if [ -z "$GITHUB_TOKEN" ]; then
  echo "ERROR: GITHUB_TOKEN is not set. Please add it in Replit Secrets."
  exit 1
fi
echo "Token found OK"

echo "Step 2: Setting up GitHub remote..."
git remote remove github 2>/dev/null
git remote add github https://$GITHUB_TOKEN@github.com/linemarkingservicesnz-dev/Line-marking-website.git

echo "Step 3: Pushing to GitHub..."
git push github main

echo ""
echo "ALL DONE! Check your GitHub repo now."
