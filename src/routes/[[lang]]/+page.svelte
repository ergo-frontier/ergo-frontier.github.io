<script>
	/*
	 * Landing page, in the order a newcomer asks the questions:
	 *
	 *   1. Hero          what is Ergo Frontier
	 *   2. How it works  TLS-Quorum in four steps; why it is auditable
	 *   3. Trust model   what you rely on, and the "invisible blockchain"
	 *   4. Projects      the pieces, with honest status
	 *   5. Roadmap       draft phases, no dates
	 *   6. Links         where to follow along
	 *
	 * Every string lives in $lib/i18n/en.js.
	 */
	import { t } from '$lib/i18n/index.js';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import TrustModel from '$lib/components/TrustModel.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Links from '$lib/components/Links.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	const SITE = 'https://ergo-frontier.github.io';
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
	<link rel="canonical" href="{SITE}/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ergo Frontier" />
	<meta property="og:title" content={$t('meta.title')} />
	<meta property="og:description" content={$t('meta.description')} />
	<meta property="og:url" content="{SITE}/" />
	<meta property="og:image" content="{SITE}/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ergo Frontier logo next to the motto: Cross the line. Enter freedom." />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t('meta.title')} />
	<meta name="twitter:description" content={$t('meta.description')} />
	<meta name="twitter:image" content="{SITE}/og-image.jpg" />
</svelte:head>

<SiteHeader />

<main id="main">
	<Hero />
	<HowItWorks />
	<TrustModel />
	<Projects />
	<Roadmap />
	<Links />
</main>

<SiteFooter />
