<script>
	import { base } from '$app/paths';
</script>

<!-- Hero Section -->
<div class="bg-gradient-to-br from-primary/10 to-secondary/10 mb-8 rounded-box hero">
	<div class="py-16 text-center hero-content">
		<div class="max-w-2xl">
			<h1 class="bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-transparent text-5xl">
				Welcome to SvelteKit
			</h1>
			<p class="py-6 text-base-content/70 text-lg">
				A beautiful demo showcasing DaisyUI components with SvelteKit.
				Try changing the theme using the dropdown in the navbar!
			</p>
			<div class="flex justify-center gap-4">
				<a href="{base}/docs" class="btn btn-primary">Read the Docs</a>
				<a href="https://svelte.dev/docs/kit" target="_blank" class="btn-outline btn">Learn SvelteKit</a>
			</div>
		</div>
	</div>
</div>

<!-- Alerts Section -->
<div class="mb-8">
	<h2 class="flex items-center gap-2 mb-4 font-bold text-2xl">
		<span class="badge badge-primary">Alerts</span>
		Notification Examples
	</h2>
	<div class="gap-3 grid">
		<div role="alert" class="alert alert-info alert-soft">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current w-6 h-6 shrink-0">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<span>12 unread messages. Tap to see.</span>
		</div>
		<div role="alert" class="alert alert-success alert-soft">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current w-6 h-6 shrink-0">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<span>Your purchase has been confirmed!</span>
		</div>
		<div role="alert" class="alert alert-warning alert-soft">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current w-6 h-6 shrink-0">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
			</svg>
			<span>Warning: Invalid email address!</span>
		</div>
		<div role="alert" class="alert alert-error alert-soft">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current w-6 h-6 shrink-0">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<span>Error! Task failed successfully.</span>
		</div>
	</div>
</div>

<!-- Cards Section -->
<div class="mb-8">
	<h2 class="flex items-center gap-2 mb-4 font-bold text-2xl">
		<span class="badge badge-secondary">Cards</span>
		Component Showcase
	</h2>
	<div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<!-- Feature Card 1 -->
		<div class="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow card">
			<div class="card-body">
				<div class="mb-2 text-4xl">⚡</div>
				<h2 class="text-primary card-title">Lightning Fast</h2>
				<p class="text-base-content/70">SvelteKit compiles your code to tiny, framework-less vanilla JS.</p>
				<div class="justify-end mt-4 card-actions">
					<button class="btn btn-primary btn-sm">Learn More</button>
				</div>
			</div>
		</div>

		<!-- Feature Card 2 -->
		<div class="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow card">
			<div class="card-body">
				<div class="mb-2 text-4xl">🎨</div>
				<h2 class="text-secondary card-title">Beautiful UI</h2>
				<p class="text-base-content/70">DaisyUI provides gorgeous, accessible components out of the box.</p>
				<div class="justify-end mt-4 card-actions">
					<button class="btn btn-secondary btn-sm">Explore</button>
				</div>
			</div>
		</div>

		<!-- Feature Card 3 -->
		<div class="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow card">
			<div class="card-body">
				<div class="mb-2 text-4xl">🚀</div>
				<h2 class="text-accent card-title">Easy Deploy</h2>
				<p class="text-base-content/70">Deploy anywhere - Vercel, Netlify, GitHub Pages, and more.</p>
				<div class="justify-end mt-4 card-actions">
					<button class="btn btn-accent btn-sm">Deploy Now</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Stats Section -->
<div class="bg-base-100 shadow mb-8 w-full stats stats-vertical lg:stats-horizontal">
	<div class="stat">
		<div class="text-primary stat-figure">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block stroke-current w-8 h-8">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
			</svg>
		</div>
		<div class="stat-title">Total Likes</div>
		<div class="text-primary stat-value">25.6K</div>
		<div class="stat-desc">21% more than last month</div>
	</div>

	<div class="stat">
		<div class="text-secondary stat-figure">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block stroke-current w-8 h-8">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
			</svg>
		</div>
		<div class="stat-title">Page Views</div>
		<div class="text-secondary stat-value">2.6M</div>
		<div class="stat-desc">14% more than last month</div>
	</div>

	<div class="stat">
		<div class="text-accent stat-figure">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block stroke-current w-8 h-8">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
			</svg>
		</div>
		<div class="stat-title">Active Users</div>
		<div class="text-accent stat-value">1,200</div>
		<div class="stat-desc">↗︎ 90 (14%)</div>
	</div>
</div>

<!-- Toast (fixed position) -->
<div class="toast toast-end">
	<div class="shadow-lg alert alert-info">
		<span>👋 New message arrived!</span>
	</div>
</div>
