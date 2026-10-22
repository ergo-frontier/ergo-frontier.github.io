/*
 * i18n layer. Same shape as celaut-project.github.io, cut down to what
 * a one-page site needs.
 *
 *   • One copy of every component. Language is data, never a second
 *     template: every user-facing string lives in ./en.js and components
 *     read it through `$t`.
 *   • Only English ships today. Adding a language is additive: write
 *     ./xx.js with the same keys, add a loader to `LOADERS`, one entry to
 *     `LOCALES`, and the code to `SUPPORTED` in hooks.server.js. The
 *     optional `[[lang]]` route then prerenders `/xx` automatically.
 *   • Never blank. A key missing from the active locale falls back to
 *     English rather than rendering nothing.
 */

import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import en from './en.js';

/** Everything a language switcher needs to render itself. */
export const LOCALES = [{ code: 'en', label: 'English', short: 'EN' }];

export const DEFAULT_LOCALE = 'en';

const SUPPORTED = new Set(LOCALES.map((l) => l.code));

/**
 * One dynamic-import loader per non-default locale, so each dictionary
 * becomes its own chunk. Empty until a second language exists, e.g.
 *   es: () => import('./es.js')
 * @type {Record<string, () => Promise<{ default: any }>>}
 */
const LOADERS = {};

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

export const locale = writable(DEFAULT_LOCALE);

/**
 * Activate a locale whose dictionary is already cached (the route's
 * `load()` awaits it first).
 * @param {string} code
 */
export function commitLocale(code) {
	if (!isSupported(code) || !cache[code]) code = DEFAULT_LOCALE;
	locale.set(code);
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
