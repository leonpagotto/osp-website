# Image Assets - Manual Upload Required

## Files to Add

I've prepared the component structure to use these images, but you'll need to manually save them:

### 1. Logo/Favicon (Pen Nib Icon)
**File**: The blue circle with white fountain pen nib
**Save to**: `client/public/images/brand/logo-icon.png` or `.svg`
**Note**: The LogoIcon component is now using an SVG version that I created, but you can replace it with your actual image if needed.

### 2. OSP Building Background
**File**: The photograph of the OSP building/signage
**Save to**: `client/public/images/backgrounds/osp-building.jpg`
**Recommended size**: 1920x1080px
**Usage**: Will be used as hero background on Home page with dark overlay

## How to Add Images

1. **Save the images** from your attachments to the paths above
2. **Optimize them** before adding:
   ```bash
   # The images will be automatically optimized during build
   # But you can pre-optimize them using:
   npm run build
   ```

3. **Update the Home page** to use the background (already done):
   ```tsx
   <HeroSection
     backgroundImage="/images/backgrounds/osp-building.jpg"
     overlayOpacity={0.8}
     // ... other props
   />
   ```

## What's Already Done

✅ Created `LogoIcon` component with SVG fountain pen nib
✅ Updated `Header` to show logo icon next to "OSP" text
✅ Updated `HeroSection` component to support background images with overlay
✅ Logo icon color set to match OSP blue (#0066CC / blue-500)

## Next Steps

1. Save the two image files to the locations above
2. The logo is already displayed in the header (using SVG)
3. Uncomment the background image line in Home.tsx (I'll do this now)

---

**Current Status**: Logo component created and integrated. Background support added. Images need to be manually saved to the specified paths.
