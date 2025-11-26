<script lang="ts">
	import { marked } from 'marked';
	// Import the markdown file as raw text - bypasses Svelte processing
	import content from '$lib/content/test.md?raw';

	// Parse markdown to HTML
	const html = marked(content);
</script>

<svelte:head>
	<title>Shell Commands Guide</title>
</svelte:head>

<!-- Render the markdown as HTML -->
{@html html}