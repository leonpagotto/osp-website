#!/bin/bash

# Phase 2 Week 1: Remove Unused Radix UI Components
# This removes 36 unused UI component files to reduce bundle size

echo "🧹 Removing unused Radix UI components..."
echo ""

cd "$(dirname "$0")/.."

REMOVED_COUNT=0
TOTAL_SIZE=0

# List of unused components to remove
UNUSED_COMPONENTS=(
  "accordion.tsx"
  "alert-dialog.tsx"
  "alert.tsx"
  "aspect-ratio.tsx"
  "avatar.tsx"
  "breadcrumb.tsx"
  "calendar.tsx"
  "carousel.tsx"
  "chart.tsx"
  "checkbox.tsx"
  "collapsible.tsx"
  "command.tsx"
  "context-menu.tsx"
  "dialog.tsx"
  "drawer.tsx"
  "dropdown-menu.tsx"
  "form.tsx"
  "gradient-icon.tsx"
  "hover-card.tsx"
  "input-otp.tsx"
  "menubar.tsx"
  "pagination.tsx"
  "popover.tsx"
  "progress.tsx"
  "radio-group.tsx"
  "resizable.tsx"
  "scroll-area.tsx"
  "select.tsx"
  "separator.tsx"
  "sheet.tsx"
  "sidebar.tsx"
  "skeleton.tsx"
  "slider.tsx"
  "switch.tsx"
  "table.tsx"
  "toggle-group.tsx"
  "toggle.tsx"
)

# Components that ARE used (keep these)
echo "✅ Keeping used components:"
echo "   - badge.tsx"
echo "   - button.tsx"
echo "   - card.tsx"
echo "   - input.tsx"
echo "   - label.tsx"
echo "   - navigation-menu.tsx"
echo "   - tabs.tsx"
echo "   - textarea.tsx"
echo "   - toast.tsx"
echo "   - toaster.tsx"
echo "   - tooltip.tsx"
echo ""

echo "🗑️  Removing unused components:"
for component in "${UNUSED_COMPONENTS[@]}"; do
  FILE_PATH="client/src/components/ui/$component"
  if [ -f "$FILE_PATH" ]; then
    SIZE=$(wc -c < "$FILE_PATH")
    TOTAL_SIZE=$((TOTAL_SIZE + SIZE))
    rm "$FILE_PATH"
    REMOVED_COUNT=$((REMOVED_COUNT + 1))
    echo "   ✓ Removed $component ($(numfmt --to=iec-i --suffix=B $SIZE))"
  else
    echo "   ⚠ Not found: $component"
  fi
done

echo ""
echo "📊 Summary:"
echo "   Components removed: $REMOVED_COUNT"
echo "   Total size freed: $(numfmt --to=iec-i --suffix=B $TOTAL_SIZE)"
echo "   Expected bundle reduction: ~20-30 KiB (gzipped)"
echo ""
echo "✅ Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run build' to verify no errors"
echo "2. Test locally with 'npm run dev'"
echo "3. Check bundle sizes in build output"
