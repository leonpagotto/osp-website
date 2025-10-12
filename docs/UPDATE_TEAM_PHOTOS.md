# 📸 How to Update Team Photos on Firebase

## Current Status
The website is using placeholder SVG images (511 bytes each). You need to replace them with the actual team photos you have.

## Steps to Update

### 1. Locate Your Team Photos
You have 3 real photos that need to be uploaded:
- Photo of Gervásio de Souza (Founder & President)
- Photo of Jonas Marinho (CEO)  
- Photo of Guilherme Pagotto (Executive Director)

### 2. Copy Photos to the Correct Location

**Destination folder:**
```
/Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/
```

**Required filenames (EXACT names):**
- `gervasio-souza.jpg`
- `jonas-marinho.jpg`
- `guilherme-pagotto.jpg`

### 3. Using Finder (macOS)

1. Open **Finder**
2. Navigate to the folder where you saved the team photos
3. Select all 3 photos
4. **Rename them** to match the exact names above
5. **Copy** the files (Cmd+C)
6. Navigate to: `/Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/`
7. **Paste** the files (Cmd+V)
8. **Replace** the existing placeholder files when asked

### 4. Using Terminal (Alternative)

If you know where your photos are saved, use this command:

```bash
# Replace /path/to/your/photos with the actual location
cp /path/to/your/photos/gervasio-photo.jpg /Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/gervasio-souza.jpg

cp /path/to/your/photos/jonas-photo.jpg /Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/jonas-marinho.jpg

cp /path/to/your/photos/guilherme-photo.jpg /Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/guilherme-pagotto.jpg
```

### 5. Rebuild and Deploy

Once the photos are in place, run:

```bash
cd /Users/leo.de.souza1/OSPWebsite2026

# Build with new images
npm run build

# Deploy to Firebase
firebase deploy --only hosting

# Or deploy everything
firebase deploy
```

### 6. Verify on Live Site

Visit: https://osp-website-2026.web.app/sobre-nos

The photos should now show your actual team members!

---

## Image Specifications (Optional Optimization)

For best results, your photos should be:
- **Format:** JPG
- **Dimensions:** 400x400px (or any square size)
- **File Size:** Under 100KB per image
- **Style:** Professional headshot
- **Background:** Clean, preferably neutral

If your images are very large, you can optimize them first using:
- Online tool: https://tinyjpg.com/
- macOS Preview app (File → Export → adjust quality)

---

## Troubleshooting

### Photos not showing after deploy?

1. **Clear Firebase cache:**
```bash
firebase hosting:channel:deploy temp
```

2. **Hard refresh browser:**
- Chrome: Cmd+Shift+R (macOS) or Ctrl+Shift+R (Windows)
- Safari: Cmd+Option+R

3. **Check file names are EXACTLY correct:**
```bash
ls -la /Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/
```

Should show:
```
gervasio-souza.jpg
guilherme-pagotto.jpg
jonas-marinho.jpg
```

### Still seeing placeholders?

The current files are **SVG files disguised as JPG**. Make sure you:
1. **Completely replace** the files (don't rename SVGs to JPG)
2. Use real JPEG photos
3. Check file size is more than 5KB (placeholders are only 511 bytes)

---

## Quick Check Commands

```bash
# Check if files exist
ls -lh /Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/*.jpg

# Check file types
file /Users/leo.de.souza1/OSPWebsite2026/client/public/images/team/*.jpg

# Should show "JPEG image data" NOT "SVG"
```

---

## Need Help?

If you're having trouble finding or copying the files, let me know:
1. Where are your team photos currently saved?
2. What are their current filenames?
3. What size are they?

I can help create a specific command to copy them!
