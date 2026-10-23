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
	 * Every string lives in $lib/i18n/en.js and es.js.
	 */
	import { LOCALES, DEFAULT_LOCALE, locale, t, withLocale } from '$lib/i18n/index.js';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import TrustModel from '$lib/components/TrustModel.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Links from '$lib/components/Links.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	const SITE = 'https://ergo-frontier.github.io';

	$: url = SITE + withLocale('/', $locale);
	$: ogImage = `${SITE}/${$locale === DEFAULT_LOCALE ? 'og-image' : `og-image-${$locale}`}.jpg`;
	$: current = LOCALES.find((l) => l.code === $locale) || LOCALES[0];
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
	<link rel="canonical" href={url} />
	{#each LOCALES as l}
		<link rel="alternate" hreflang={l.code} href={SITE + withLocale('/', l.code)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE}/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ergo Frontier" />
	<meta property="og:title" content={$t('meta.title')} />
	<meta property="og:description" content={$t('meta.description')} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content={current.og} />
	{#each LOCALES.filter((l) => l.code !== current.code) as l}
		<meta property="og:locale:alternate" content={l.og} />
	{/each}
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={$t('meta.ogImageAlt')} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t('meta.title')} />
	<meta name="twitter:description" content={$t('meta.description')} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={$t('meta.ogImageAlt')} />
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
