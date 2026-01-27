#!/bin/bash
cd /Users/anushkaganesh/tardle
git add play.html styles.css
git commit -m "Improve mobile keyboard: better key sizes and spacing"
git push origin main
firebase deploy --only hosting
