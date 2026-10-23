import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// ergo-frontier.github.io is an organization site, so it is served from
// the domain root: no base path is needed (unlike a project site, which
// lives under /<repo-name>/).
export default defineConfig({
	plugins: [sveltekit()]
});
