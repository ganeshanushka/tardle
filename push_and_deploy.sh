#!/bin/bash
cd /Users/anushkaganesh/tardle

echo "=== Git Status ==="
git status

echo ""
echo "=== Adding files ==="
git add play.html styles.css

echo ""
echo "=== Committing ==="
git commit -m "Fix mobile keyboard: prevent keys disappearing off sides - reduce width to calc(100vw - 70px) and key sizes to 25-30px"

echo ""
echo "=== Pushing to GitHub ==="
git push origin main

echo ""
echo "=== Deploying to Firebase ==="
firebase deploy --only hosting

echo ""
echo "=== Done ==="
