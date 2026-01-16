# Quick GitHub Pages Deployment

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or `kiranreddy2565.github.io` for custom URL)
3. Make it **Public**
4. **Don't** add README, .gitignore, or license
5. Click "Create repository"

## Step 2: Deploy Your Site

Open terminal in the `portfolio` folder and run these commands:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Wait 2-3 minutes

## Step 4: Access Your Site

Your portfolio will be live at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Example Commands (Replace with your info):

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/kiranreddy2565/portfolio.git
git branch -M main
git push -u origin main
```

## Update Your Site Later

Whenever you make changes:

```bash
git add .
git commit -m "Updated portfolio"
git push
```

The site will automatically rebuild!

## ✅ That's it! Your portfolio is now live on GitHub Pages!
