<script>
	import '../../app.css';
	import { theme, applyTheme } from '$lib/theme.js';
	import { commitLocale } from '$lib/i18n/index.js';

	/** @type {import('./$types').LayoutData} */
	export let data;

	// `data.lang` comes from +layout.ts's load(), which already awaited
	// this locale's dictionary.
	$: commitLocale(data.lang);

	// Keep <html data-theme> in sync with the store across every route.
	$: applyTheme($theme);
</script>

<svelte:head>
	<!-- The Exchange's fonts: Bebas Neue (display), Inter (body), JetBrains Mono (labels). -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
