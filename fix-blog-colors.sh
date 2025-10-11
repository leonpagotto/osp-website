#!/bin/bash

# Blog Color System Standardization Script
# This script replaces non-standard colors with design system compliant colors

echo "🎨 Starting blog color system standardization..."

# Directory containing blog posts
BLOG_DIR="client/src/pages/blog"

# Count total files
TOTAL_FILES=$(find "$BLOG_DIR" -name "*.tsx" | wc -l | tr -d ' ')
echo "📁 Found $TOTAL_FILES blog post files"

# Amber colors → Primary (warning)
echo "🔄 Replacing amber colors with primary-based warnings..."
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-amber-50\/50/bg-primary\/5/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-amber-50\/30/bg-primary\/5/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-amber-50/bg-primary\/10/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-amber-100/bg-primary\/15/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/border-amber-200/border-primary\/30/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/text-amber-700/text-primary/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/text-amber-800/text-foreground/g' {} \;

# Orange colors → Primary (warning)
echo "🔄 Replacing orange colors with primary-based warnings..."
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-orange-50\/30/bg-primary\/5/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-orange-50/bg-primary\/10/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/border-orange-200/border-primary\/30/g' {} \;

# Red colors → Destructive (urgent)
echo "🔄 Replacing red colors with destructive (urgent)..."
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-red-50\/30/bg-destructive\/5/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-red-50/bg-destructive\/10/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-red-100/bg-destructive\/15/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-red-200/bg-destructive\/20/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/border-red-200/border-destructive\/30/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/text-red-700/text-destructive/g' {} \;

# Green colors → Accent (success)
echo "🔄 Replacing green colors with accent (success)..."
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-green-50\/30/bg-accent\/80/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-green-50/bg-accent/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed -i '' 's/bg-green-200/bg-accent/g' {} \;
find "$BLOG_DIR" -name "*.tsx" -exec sed-i '' 's/border-green-200/border-primary\/40/g' {} \;

echo "✅ Color replacement complete!"
echo ""
echo "📊 Summary of changes:"
echo "  • Amber → Primary (warning/info)"
echo "  • Orange → Primary (warning)"
echo "  • Red → Destructive (urgent/error)"
echo "  • Green → Accent (success/positive)"
echo ""
echo "🔍 Review the changes with: git diff client/src/pages/blog/"
echo "📝 Commit with: git add client/src/pages/blog/ && git commit -m 'Standardize blog colors to design system palette'"
