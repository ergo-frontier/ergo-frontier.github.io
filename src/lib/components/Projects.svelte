<script>
	/*
	 * Projects. Repository links only where the repo is public; private
	 * repos are named but not linked (see `href: null` in en.js), so the
	 * page never sends a visitor to a GitHub 404.
	 */
	import { t } from '$lib/i18n/index.js';
	import { reveal } from '$lib/reveal.js';
</script>

<section id="projects" class="band" aria-labelledby="projects-title">
	<div class="ground">
		<div use:reveal>
			<p class="eyebrow">{$t('projects.eyebrow')}</p>
			<h2 id="projects-title">{$t('projects.title')}</h2>
			<p class="intro">{$t('projects.intro')}</p>
		</div>

		<ul class="grid-pair list" use:reveal>
			{#each $t('projects.items') as p}
				<li class="card project">
					<div class="head">
						<div>
							<p class="tag">{p.tag}</p>
							<h3>{p.name}</h3>
						</div>
						<span class="badge badge-{p.statusKind}">
							<span class="sr-only">{$t('projects.statusLabel')}:</span>
							{p.status}
						</span>
					</div>
					<p>{p.text}</p>
					<div class="foot">
						{#if p.href}
							<a href={p.href}>{p.repo} <span aria-hidden="true">→</span></a>
						{:else}
							<span class="private">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<rect x="5" y="11" width="14" height="10" rx="2" />
									<path d="M8 11V8a4 4 0 0 1 8 0v3" />
								</svg>
								{$t('projects.private')}
							</span>
						{/if}
					</div>
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
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 12px;
	}

	.head h3 {
		font-size: 2.1rem;
		margin: 0;
	}

	.tag {
		margin: 0 0 4px;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--on-surface-subtle);
	}

	.foot {
		margin-top: auto;
		padding-top: 18px;
		font-family: var(--font-mono);
		font-size: 0.85rem;
	}

	.foot a {
		font-weight: 500;
		text-decoration: none;
	}

	.foot a:hover {
		text-decoration: underline;
	}

	.private {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--on-surface-subtle);
	}

	.private svg {
		width: 15px;
		height: 15px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
	}
</style>
