<script lang="ts">
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="prose prose-lg max-w-none">
	<!-- Breadcrumb Navigation -->
	<div class="not-prose mb-6">
		<div class="breadcrumbs text-sm">
			<ul>
				<li>
					<a href="{base}/" class="flex items-center gap-1">
						<Icon icon="mdi:home" />
						Home
					</a>
				</li>
				<li>
					<a href="{base}/docs" class="flex items-center gap-1">
						<Icon icon="mdi:file-document-multiple" />
						Docs
					</a>
				</li>
			</ul>
		</div>
	</div>

	<!-- Render the page content -->
	{@render children()}

	<!-- Back to docs link -->
	<div class="not-prose mt-8 pt-4 border-t border-base-300">
		<a href="{base}/docs" class="btn btn-ghost btn-sm gap-2">
			<Icon icon="mdi:arrow-left" />
			Back to Documentation
		</a>
	</div>
</div>

