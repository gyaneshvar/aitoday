# Deployment Guide

## GitHub Pages Setup

### Option 1: Using GitHub Actions (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as source

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment:**
   - The workflow will automatically deploy on push to main
   - View your site at: `https://[username].github.io/ai-today/`

### Option 2: Manual Deployment

1. **Install gh-pages (if not already installed):**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to Settings > Pages
   - Select "gh-pages" branch as source
   - Save

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Daily News Updates

To update daily news:

1. Create a new JSON file in `public/news/` with format: `YYYY-MM-DD.json`
2. Follow this structure:
   ```json
   [
     {
       "id": 1,
       "title": "Article Title",
       "description": "Brief description",
       "url": "https://example.com",
       "category": "AI Models",
       "date": "2026-01-12"
     }
   ]
   ```
3. Commit and push - the site will automatically update

## Updating Power Sites/Tools

Edit these files:
- `public/power-sites.json` - Free AI websites
- `public/power-tools.json` - Open source tools

## Configuration

- **Base URL:** Update in [vite.config.ts](vite.config.ts) if your repo name changes
- **Styling:** Modify [src/App.css](src/App.css) and [src/index.css](src/index.css)
