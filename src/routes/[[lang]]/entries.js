import { LOCALES, DEFAULT_LOCALE } from '$lib/i18n/index.js';

/*
 * `[[lang]]` is optional, so the unprefixed route (English) needs no
 * entry of its own. This supplies one prerendered `/xx` page per
 * non-default locale (`/es`).
 */
export function entries() {
	return LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => ({ lang: l.code }));
}
