<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-base-200 min-h-screen">
	<!-- Navbar -->
	<div class="top-0 z-50 sticky bg-base-100 shadow-lg navbar">
		<div class="flex-1">
			<a href="{base}/" class="text-xl btn btn-ghost">
				<span class="text-primary">Svelte</span>Kit Demo
			</a>
		</div>
		<div class="flex-none gap-2">
			<a href="{base}/docs" class="btn btn-ghost">📄 Docs</a>
			<a href="{base}/about" class="btn btn-ghost">ℹ️ About</a>
			<!-- Theme Dropdown -->
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost">
					🎨 Theme
					<svg
						width="12px"
						height="12px"
						class="inline-block opacity-60 fill-current w-2 h-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 2048 2048"
					>
						<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
					</svg>
				</div>
				<ul
					tabindex="-1"
					class="z-50 bg-base-300 shadow-2xl mt-4 p-2 rounded-box w-52 dropdown-content"
				>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Default"
							value="default"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Light"
							value="light"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Dark"
							value="dark"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Retro"
							value="retro"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Cyberpunk"
							value="cyberpunk"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Valentine"
							value="valentine"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
							aria-label="Aqua"
							value="aqua"
						/>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<main class="mx-auto px-4 py-8 container">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-base-300 p-4 text-base-content footer footer-center">
		<aside>
			<p>Built with ❤️ using SvelteKit + DaisyUI</p>
		</aside>
	</footer>
</div>
