<script>
	/*
	 * Outbound links. Only public destinations (checked with
	 * `gh api repos/... --jq .private` when this was written).
	 */
	import { t } from '$lib/i18n/index.js';
	import { reveal } from '$lib/reveal.js';
</script>

<section id="links" class="band" aria-labelledby="links-title">
	<div class="ground">
		<div use:reveal>
			<p class="eyebrow">{$t('links.eyebrow')}</p>
			<h2 id="links-title">{$t('links.title')}</h2>
		</div>

		<ul class="grid list" use:reveal>
			{#each $t('links.items') as link}
				<li>
					<a class="link-card" href={link.href}>
						<span class="label">{link.label} <span aria-hidden="true">↗</span></span>
						<span class="text">{link.text}</span>
						<span class="url">{link.href.replace(/^https:\/\//, '').replace(/\/$/, '')}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.list {
		list-style: none;
		margin: 0;
		padding: 0;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (max-width: 900px) {
		.list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.list {
			grid-template-columns: 1fr;
		}
	}

	.link-card {
		display: flex;
		flex-direction: column;
		gap: 6px;
		height: 100%;
		box-sizing: border-box;
		padding: 20px 22px;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: var(--surface-raised);
		text-decoration: none;
		color: var(--on-surface);
		box-shadow: var(--shadow-sm);
		transition: transform 0.2s ease, border-color 0.3s ease, box-shadow 0.3s ease;
	}

	.link-card:hover {
		color: var(--on-surface);
		border-color: var(--accent);
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.label {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		letter-spacing: 0.03em;
		line-height: 1.1;
	}

	.label span {
		color: var(--accent-text);
		font-family: var(--font-body);
		font-size: 1rem;
	}

	.text {
		color: var(--on-surface-muted);
		font-size: 0.95rem;
	}

	.url {
		margin-top: auto;
		padding-top: 6px;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--accent-text);
		overflow-wrap: anywhere;
	}
</style>
