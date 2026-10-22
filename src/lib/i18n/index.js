/*
 * i18n layer: 'en' | 'es'. Same shape as celaut-project.github.io, cut
 * down to what a one-page site needs.
 *
 *   • One copy of every component. Language is data, never a second
 *     template: every user-facing string lives in ./en.js and ./es.js
 *     under the same key, and components read it through `$t`.
 *   • Lazy dictionaries. Only English is bundled eagerly, as the
 *     fallback; Spanish is its own chunk, fetched only when needed.
 *   • Optional locale-prefixed routes, like Celaut. English stays
 *     unprefixed (`/`); Spanish is also prerendered at `/es` so it can be
 *     shared and crawled. The unprefixed route is client-detected from
 *     localStorage / navigator.languages, with no URL change.
 *   • Never blank. A key missing from the active locale falls back to
 *     English rather than rendering nothing.
 *   • Adding a language: write ./xx.js with the same keys, add a loader
 *     to `LOADERS`, one entry to `LOCALES`, and the code to the two
 *     `supported` lists in app.html and hooks.server.js.
 *
 * Resolution order for the unprefixed route's initial locale:
 *   1. explicit saved choice in localStorage ('ergo-frontier-lang')
 *   2. the browser's preferred languages (navigator.languages)
 *   3. 'en'
 * A prefixed route (`/es`) is authoritative for its own page load.
 */

import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import en from './en.js';

/** Everything the language switcher needs to render itself. */
export const LOCALES = [
	{ code: 'en', label: 'English', short: 'EN', og: 'en_US' },
	{ code: 'es', label: 'Español', short: 'ES', og: 'es_ES' }
];

export const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'ergo-frontier-lang';

const SUPPORTED = new Set(LOCALES.map((l) => l.code));

/**
 * One dynamic-import loader per non-default locale, so each dictionary
 * becomes its own chunk.
 * @type {Record<string, () => Promise<{ default: any }>>}
 */
const LOADERS = {
	es: () => import('./es.js')
};

/** @type {Record<string, any>} code -> dictionary, once loaded. */
const cache = { en };

/** @param {unknown} code */
export function isSupported(code) {
	return typeof code === 'string' && SUPPORTED.has(code);
}

/**
 * Fetch and cache a locale's dictionary. Always resolves; an unknown
 * code or a failed fetch falls back to English.
 * @param {string} code
 * @returns {Promise<any>}
 */
export async function loadDictionary(code) {
	if (!isSupported(code)) code = DEFAULT_LOCALE;
	if (cache[code]) return cache[code];
	try {
		cache[code] = (await LOADERS[code]()).default;
	} catch (e) {
		if (browser) console.warn(`[i18n] failed to load "${code}", falling back to English`, e);
		cache[code] = en;
	}
	return cache[code];
}

/**
 * What the unprefixed route should bootstrap to: a saved choice, else
 * the browser's languages, else English.
 * @returns {string}
 */
export function detectLocale() {
	if (!browser) return DEFAULT_LOCALE;
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (isSupported(saved)) return /** @type {string} */ (saved);
	} catch (e) {
		/* localStorage may be unavailable (private mode): fall through */
	}
	for (const tag of [navigator.language, ...(navigator.languages || [])]) {
		// 'es-ES' and 'es' both resolve to the 'es' dictionary.
		const base = String(tag || '')
			.toLowerCase()
			.split('-')[0];
		if (isSupported(base)) return base;
	}
	return DEFAULT_LOCALE;
}

export const locale = writable(DEFAULT_LOCALE);

/**
 * Mirror the active locale onto <html lang>. Client-side only: the
 * prerendered page already carries it from hooks.server.js.
 * @param {string} value
 */
export function applyLocale(value) {
	if (!browser) return;
	document.documentElement.setAttribute('lang', value);
}

/**
 * Remember a locale for the next visit to the unprefixed route.
 * @param {string} code
 */
export function persistLocale(code) {
	if (!browser) return;
	try {
		localStorage.setItem(STORAGE_KEY, code);
	} catch (e) {
		/* ignore persistence failure */
	}
}

/**
 * Persist + activate a locale whose dictionary is already cached (the
 * route's `load()` awaits it first). The only place `locale.set` runs.
 * @param {string} code
 */
export function commitLocale(code) {
	if (!isSupported(code) || !cache[code]) code = DEFAULT_LOCALE;
	persistLocale(code);
	locale.set(code);
}

/**
 * Load a locale's dictionary if needed, then activate it.
 * @param {string} code
 */
export async function setLocale(code) {
	if (!isSupported(code)) code = DEFAULT_LOCALE;
	await loadDictionary(code);
	commitLocale(code);
}

/**
 * Walk a dotted key path. Returns undefined rather than throwing.
 * @param {any} dict
 * @param {string[]} path
 * @returns {any}
 */
function resolve(dict, path) {
	let node = dict;
	for (const part of path) {
		if (node === null || typeof node !== 'object') return undefined;
		node = node[part];
	}
	return node;
}

/**
 * Build the lookup function for a locale. A value may be a string, an
 * array or an object: card lists live in the dictionary as arrays.
 * @param {string} code
 */
export function translator(code) {
	const primary = cache[code] || cache[DEFAULT_LOCALE];
	const fallback = cache[DEFAULT_LOCALE];

	/**
	 * @param {string} key dotted path into the dictionary
	 * @returns {any}
	 */
	return function t(key) {
		const path = String(key).split('.');
		let value = resolve(primary, path);
		if (value === undefined) value = resolve(fallback, path);
		if (value === undefined) {
			if (browser) console.warn(`[i18n] missing key: ${key}`);
			return key;
		}
		return value;
	};
}

/** The store components use: `$t('some.key')`. */
export const t = derived(locale, translator);

/**
 * Prefix a root-relative path with a locale: `withLocale('/', 'es')` →
 * `/es`. No trailing slash, as in Celaut: with the default
 * `trailingSlash: 'never'` the Spanish home is the flat file `es.html`,
 * which GitHub Pages serves at `/es`.
 * @param {string} path
 * @param {string} code
 */
export function withLocale(path, code) {
	if (typeof path !== 'string' || !path.startsWith('/')) return path;
	if (!code || code === DEFAULT_LOCALE) return path;
	return path === '/' ? `/${code}` : `/${code}${path}`;
}
