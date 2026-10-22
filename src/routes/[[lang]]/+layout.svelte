<script>
	import '../../app.css';
	import { browser } from '$app/environment';
	import { theme, applyTheme } from '$lib/theme.js';
	import { locale, applyLocale, commitLocale, detectLocale, setLocale } from '$lib/i18n/index.js';

	/** @type {import('./$types').LayoutData} */
	export let data;

	// Same rule as Celaut. A prefixed route (/es) is authoritative: the
	// URL the visitor followed wins, and its dictionary was already
	// awaited in +layout.ts. The unprefixed route has no locale of its
	// own, so it uses the saved choice, else the browser's languages,
	// else English. The language switcher saves the choice before it
	// navigates, so going back to `/` from `/es` lands in English. While
	// prerendering, every page renders in its own URL's language.
	$: if (data.isPrefixed || !browser) commitLocale(data.lang);
	else setLocale(detectLocale());

	// Keep <html data-theme> and <html lang> in sync with their stores.
	$: applyTheme($theme);
	$: applyLocale($locale);
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
