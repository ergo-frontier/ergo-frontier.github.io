import { error } from '@sveltejs/kit';
import { DEFAULT_LOCALE, isSupported, loadDictionary } from '$lib/i18n/index.js';

export const prerender = true;

/**
 * Resolve which locale this page load is for and make sure its
 * dictionary is in memory before the page renders, so a prerendered
 * `/xx` page comes out in that language from the first byte.
 *
 * @type {import('./$types').LayoutLoad}
 */
export async function load({ params }) {
	const { lang } = params;
	if (lang && !isSupported(lang)) {
		throw error(404, 'Not found');
	}
	const code = lang || DEFAULT_LOCALE;
	await loadDictionary(code);
	return { lang: code };
}
