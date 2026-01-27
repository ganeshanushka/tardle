#!/bin/bash
cd /Users/anushkaganesh/tardle
echo "Adding files..."
git add play.html styles.css
echo "Committing..."
git commit -m "Improve mobile keyboard: better key sizes 28-35px, better spacing, width calc(100vw - 50px)"
echo "Pushing to GitHub..."
git push origin main
echo "Done!"
