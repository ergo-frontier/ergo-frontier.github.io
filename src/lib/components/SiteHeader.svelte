<script>
	/*
	 * Sticky top bar: logo + wordmark (the Exchange's "ERGO FRONTIER" in
	 * Bebas Neue), in-page section links, GitHub, language and theme. The
	 * section links collapse on narrow screens; everything they point to
	 * is one scroll away anyway.
	 */
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { locale, t, withLocale } from '$lib/i18n/index.js';
	import LanguageToggle from './LanguageToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let scrolled = false;

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<a class="skip" href="#main">{$t('nav.skip')}</a>

<header class="topbar" class:scrolled>
	<div class="inner">
		<a class="brand" href="{base}{withLocale('/', $locale)}" aria-label={$t('nav.home')}>
			<img src="{base}/logo-128.png" alt="" width="36" height="36" />
			<span class="wordmark" aria-hidden="true">Ergo Frontier</span>
		</a>

		<nav aria-label={$t('nav.label')}>
			<ul>
				{#each $t('nav.links') as link}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div class="actions">
			<a
				class="icon-btn"
				href="https://github.com/ergo-frontier"
				aria-label={$t('nav.github')}
				title={$t('nav.github')}
			>
				<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
					<path
						d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
					/>
				</svg>
			</a>
			<LanguageToggle />
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.skip {
		position: absolute;
		left: 12px;
		top: -60px;
		z-index: 100;
		padding: 10px 16px;
		border-radius: 8px;
		background: var(--accent);
		color: var(--on-accent);
		font-weight: 600;
		text-decoration: none;
	}

	.skip:focus {
		top: 12px;
	}

	.topbar {
		position: sticky;
		top: 0;
		z-index: 50;
		border-bottom: 1px solid transparent;
		transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
	}

	.topbar.scrolled {
		background: rgba(var(--surface-rgb), 0.82);
		border-bottom-color: var(--border);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.inner {
		max-width: 1120px;
		margin: 0 auto;
		padding: 12px clamp(16px, 5vw, 32px);
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: var(--on-surface);
	}

	.brand img {
		border-radius: 10px;
		box-shadow: var(--shadow-sm);
	}

	.wordmark {
		font-family: var(--font-heading);
		font-size: 1.55rem;
		letter-spacing: 0.08em;
		line-height: 1;
		padding-top: 3px;
		text-transform: uppercase;
	}

	.brand:hover .wordmark {
		color: var(--accent-text);
	}

	nav {
		margin-left: auto;
	}

	nav ul {
		display: flex;
		gap: 4px;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: block;
		padding: 8px 12px;
		border-radius: 8px;
		color: var(--on-surface-muted);
		font-size: 0.95rem;
		font-weight: 500;
		text-decoration: none;
	}

	nav a:hover {
		color: var(--on-surface);
		background: var(--accent-soft);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.icon-btn {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--on-surface);
		border: 1px solid var(--border-strong);
		background: rgba(var(--surface-rgb), 0.82);
		transition: border-color 0.25s ease, transform 0.2s ease;
	}

	.icon-btn:hover {
		color: var(--on-surface);
		border-color: var(--accent);
		transform: scale(1.06);
	}

	.icon-btn svg {
		width: 20px;
		height: 20px;
	}

	/* Narrow screens: the section links drop to a second, scrollable row. */
	@media (max-width: 820px) {
		/* Two rows would eat too much of a phone screen; scroll it away. */
		.topbar {
			position: relative;
		}

		.inner {
			flex-wrap: wrap;
			row-gap: 6px;
			padding-bottom: 8px;
		}

		.actions {
			margin-left: auto;
		}

		nav {
			order: 3;
			flex-basis: 100%;
			margin: 0 -8px;
			overflow-x: auto;
			scrollbar-width: none;
		}

		nav a {
			padding: 6px 8px;
			font-size: 0.88rem;
			white-space: nowrap;
		}
	}

	/* Phones: keep logo + GitHub/language/theme on one row, and fit the
	   (longer) Spanish section links without scrolling at 390px. */
	@media (max-width: 480px) {
		.inner {
			column-gap: 12px;
		}

		.actions {
			gap: 6px;
		}

		.wordmark {
			font-size: 1.35rem;
		}

		nav a {
			padding: 6px 4px;
			font-size: 0.82rem;
		}
	}

	@media (max-width: 380px) {
		.wordmark {
			font-size: 1.2rem;
		}
	}
</style>
