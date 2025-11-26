import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md']
		})
	],
	kit: {
		// Using static adapter for GitHub Pages deployment
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			// Set base path for GitHub Pages (repository name)
			// Update this to match your repository name
			base: process.env.NODE_ENV === 'production' ? '/svelte-test1' : ''
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
