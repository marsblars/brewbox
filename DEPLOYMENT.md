# Deploying BrewBox to GitHub Pages

## Prerequisites

1. A GitHub account
2. Git installed on your computer

## Step-by-Step Deployment Guide

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository `brewbox-ecommerce` (or any name you prefer)
4. **Important**: If you use a different name, update `vite.config.js` to match:
   ```javascript
   base: '/your-repo-name/',
   ```
5. Make the repository **public** (GitHub Pages is free for public repos)
6. **Do NOT** initialize with README, .gitignore, or license (we'll push existing code)
7. Click "Create repository"

### Step 2: Initialize Git and Connect to GitHub

Open a terminal in your project folder (`c:\Users\marbles\Downloads\ecommerce\brewbox-app`) and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - BrewBox ecommerce website"

# Add your GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/brewbox-ecommerce.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

Once your code is on GitHub, deploy with this simple command:

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Deploy the `dist` folder to GitHub Pages

### Step 4: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

### Step 5: Access Your Website

Your website will be available at:
```
https://USERNAME.github.io/brewbox-ecommerce/
```

(Replace `USERNAME` with your GitHub username)

It may take a few minutes for the site to go live after deployment.

---

## Quick Reference Commands

```bash
# Deploy to GitHub Pages
npm run deploy

# Build locally to test
npm run build

# Preview production build locally
npm run preview

# Run development server
npm run dev
```

---

## Important Notes

### 1. Base Path Configuration

The `vite.config.js` file has been configured with:
```javascript
base: '/brewbox-ecommerce/',
```

**If your repository name is different**, you MUST update this to match your repo name:
```javascript
base: '/your-actual-repo-name/',
```

### 2. Custom Domain (Optional)

If you want to use a custom domain:
1. Create a file named `CNAME` in the `public` folder
2. Add your domain name to it (e.g., `brewbox.com`)
3. Configure DNS settings with your domain provider

### 3. Updating Your Site

Whenever you make changes:
```bash
git add .
git commit -m "Description of changes"
git push
npm run deploy
```

### 4. Troubleshooting

**Blank page after deployment?**
- Check that the `base` path in `vite.config.js` matches your repository name
- Make sure it starts and ends with `/`

**404 errors?**
- Verify GitHub Pages is enabled in repository settings
- Check that the `gh-pages` branch exists

**Images not loading?**
- All image URLs in the code use absolute Unsplash URLs, so they should work fine
- If you add local images, put them in the `public` folder

---

## Repository Structure for GitHub Pages

```
brewbox-app/
├── main branch (your source code)
└── gh-pages branch (auto-created, contains built files)
```

The `gh-pages` branch is automatically created and managed by the `gh-pages` package. Don't edit it manually!

---

## Example: Complete First-Time Setup

```bash
# 1. Initialize and connect to GitHub
git init
git add .
git commit -m "Initial commit - BrewBox ecommerce website"
git remote add origin https://github.com/YOUR-USERNAME/brewbox-ecommerce.git
git branch -M main
git push -u origin main

# 2. Deploy to GitHub Pages
npm run deploy

# Done! Visit: https://YOUR-USERNAME.github.io/brewbox-ecommerce/
```

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)
