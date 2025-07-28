# Vercel Deployment Guide for SisuKai Marketing Site

## ✅ Issue Fixed: Vercel Configuration Added

The original error `Command "pnpm install" exited with 1` has been resolved by adding proper Vercel configuration files.

## 🔧 What Was Added:

### 1. `vercel.json` Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### 2. `.npmrc` File
```
package-manager=npm
```

## 🚀 Deployment Options:

### Option 1: GitHub + Vercel (Recommended)
1. **Upload to GitHub**:
   - Create repository named `sisukai-marketing-site`
   - Upload all files from the zip package
   - Commit and push

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub repository
   - Vercel will auto-detect the configuration
   - Deploy!

### Option 2: Direct Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# In your project directory
vercel

# Follow the prompts
```

### Option 3: Drag & Drop (Vercel Dashboard)
1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Drag the `dist` folder to deploy

## 🎯 Expected Result:
- ✅ **Build Command**: `npm run build` (not pnpm)
- ✅ **Install Command**: `npm install` (not pnpm)
- ✅ **Output Directory**: `dist`
- ✅ **Framework**: Auto-detected as Vite

## 🔍 If Issues Persist:

### Check Build Logs:
- Look for specific error messages in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Alternative Deployment:
If Vercel continues to have issues, try:
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Enable Pages in repository settings
- **Firebase Hosting**: Use Firebase CLI

## 📦 Files Included in This Package:
- ✅ `vercel.json` - Vercel configuration
- ✅ `.npmrc` - NPM configuration
- ✅ Fresh `package-lock.json` - Clean dependency lock
- ✅ All optimized source files
- ✅ WebP images for fast loading

## 🎉 Ready to Deploy!
Your SisuKai marketing site should now deploy successfully on Vercel with the proper configuration!

