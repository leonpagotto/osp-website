#!/bin/bash

# Update all blog post images from .jpg to .png
# OSP Website - Blog Image Extension Update

BLOG_DIR="client/src/pages/blog"

echo "🖼️  Updating blog image extensions from .jpg to .png..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Count files
FILE_COUNT=$(find "$BLOG_DIR" -name "*.tsx" | wc -l | tr -d ' ')
echo "📁 Found $FILE_COUNT blog post files"
echo ""

# Replace all .jpg extensions with .png in blog posts
echo "🔄 Replacing image extensions..."
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/\.jpg/\.png/g' {} \;

echo ""
echo "✅ Image extension update complete!"
echo ""
echo "📊 Summary:"
git diff --stat "$BLOG_DIR/"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ All blog images now reference .png files"
