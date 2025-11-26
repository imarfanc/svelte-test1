# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying to GitHub Pages

This project is configured to deploy as a static site to GitHub Pages.

### Option 1: Manual Deployment

1. Build the project:
   ```sh
   npm run build
   ```

2. The static files will be generated in the `build` directory.

3. Push the `build` directory to the `gh-pages` branch:
   ```sh
   npx gh-pages -d build
   ```

### Option 2: GitHub Actions (Recommended)

The GitHub Actions workflow file (`.github/workflows/deploy.yml`) is already included in this project!

**Setup Steps:**

1. **Configure GitHub Pages:**
   - Go to your repository's **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source

2. **Update the base path** in `svelte.config.js` to match your repository name:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
   ```
   Replace `your-repo-name` with your actual GitHub repository name.

3. **Push to GitHub:**
   ```sh
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

4. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live!

The workflow automatically:
- ✅ Triggers on every push to `main` branch
- ✅ Builds your SvelteKit app
- ✅ Deploys to GitHub Pages
- ✅ Can be manually triggered from the Actions tab

### Important Notes

- Update the `base` path in `svelte.config.js` to match your repository name:
  ```js
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
  ```

- Your site will be available at: `https://<username>.github.io/<repository-name>/`
