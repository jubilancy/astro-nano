#!/bin/bash

# 1. Check if we are in the astro-nano directory
if [[ "$PWD" != *"/astro-nano"* ]]; then
  echo "❌ Error: You aren't in the astro-nano directory!"
  exit 1
fi

echo "🚀 Starting deployment for eliana.lol..."

# 2. Add and Commit with a timestamp
git add .
read -p "Enter commit message (or press enter for default): " desc
if [ -z "$desc" ]; then
  desc="Digital Garden Update: $(date +'%Y-%m-%d %H:%M')"
fi

git commit -m "$desc"

# 3. Push to GitHub (This triggers Cloudflare)
echo "📦 Pushing to GitHub..."
git push origin main

echo "✨ Done! Cloudflare is now building your latest 'Pulses'."