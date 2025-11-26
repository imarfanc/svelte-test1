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

1. Create a file `.github/workflows/deploy.yml` with the following content:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build
           env:
             NODE_ENV: production

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./build

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. Go to your repository's **Settings** → **Pages**.

3. Under "Build and deployment", select **GitHub Actions** as the source.

4. Push your changes to the `main` branch to trigger the deployment.

### Important Notes

- Update the `base` path in `svelte.config.js` to match your repository name:
  ```js
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
  ```

- Your site will be available at: `https://<username>.github.io/<repository-name>/`
