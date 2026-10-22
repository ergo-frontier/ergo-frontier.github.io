/*
 * Fills in the `%lang%`/`%dir%` placeholders in app.html from the URL's
 * locale prefix, so a prerendered `/xx/…` page carries the right
 * `<html lang>` from the very first byte. Same mechanism as
 * celaut-project.github.io.
 *
 * Keep `SUPPORTED`/`RTL` in step with `LOCALES` in `$lib/i18n/index.js`.
 * Only English exists today; adding a language means adding its code here.
 */

/** @type {string[]} */
const SUPPORTED = ['en'];
/** @type {Set<string>} */
const RTL = new Set();

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const [, first] = event.url.pathname.split('/');
	const lang = SUPPORTED.includes(first) ? first : 'en';
	const dir = RTL.has(lang) ? 'rtl' : 'ltr';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang).replace('%dir%', dir)
	});
}
