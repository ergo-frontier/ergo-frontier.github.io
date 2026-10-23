<script>
	/*
	 * Language switcher. With two languages it is a single control, like
	 * Celaut's original two-language toggle: it shows the code of the
	 * OTHER language and switches to it. It is a plain link to that
	 * language's URL (`/` or `/es`), so it also works with JS off. With JS
	 * on it does what Celaut's `pick()` does: switch and save the locale
	 * first (so `/` stays in English after leaving `/es`, and the link
	 * also works on a `/` that auto-detected Spanish), then navigate to
	 * that language's URL without scrolling to the top.
	 */
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { locale, setLocale, LOCALES, t, withLocale } from '$lib/i18n/index.js';

	$: other = LOCALES.find((l) => l.code !== $locale) || LOCALES[0];

	async function pick(/** @type {MouseEvent} */ event) {
		// Let modified clicks (new tab, etc.) behave like a normal link.
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
		event.preventDefault();
		const code = other.code;
		await setLocale(code);
		await goto(base + withLocale('/', code), { noScroll: true });
	}
</script>

<a
	class="lang-toggle"
	href="{base}{withLocale('/', other.code)}"
	hreflang={other.code}
	lang={other.code}
	aria-label={$t('lang.switchTo')}
	title={other.label}
	on:click={pick}
>
	<span class="code">{other.short}</span>
</a>

<style>
	.lang-toggle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--accent-text);
		background: rgba(var(--surface-rgb), 0.82);
		border: 1px solid var(--border-strong);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		box-shadow: var(--shadow-sm);
		transition: background 0.25s ease, transform 0.2s ease, border-color 0.25s ease,
			color 0.25s ease;
	}

	.lang-toggle:hover {
		transform: scale(1.08);
		background: var(--surface);
		border-color: var(--accent);
	}

	.lang-toggle:focus-visible {
		outline: 2px solid var(--accent-text);
		outline-offset: 3px;
	}

	.code {
		font-family: var(--font-mono);
		font-weight: 500;
		font-size: 0.8rem;
		letter-spacing: 0.04em;
	}
</style>
