/*
 * `use:reveal`: fade a block in the first time it scrolls into view.
 *
 * A light stand-in for Celaut's GSAP/Lenis scenes: one
 * IntersectionObserver, no dependency. The hidden state is only added
 * here, by JS, so the page is fully readable without JavaScript, and
 * app.css turns it off under prefers-reduced-motion.
 */

/** @param {HTMLElement} node */
export function reveal(node) {
	if (typeof IntersectionObserver === 'undefined') return;
	node.classList.add('reveal');
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					io.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
