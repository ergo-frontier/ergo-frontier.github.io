<script>
	/*
	 * Roadmap from ergo-frontier/draft-idea: the two-step order in its
	 * README, and the phases from larry-research/roadmap-phases.md. The
	 * month estimates in that draft are left out on purpose: no dates
	 * until there is something to date.
	 */
	import { t } from '$lib/i18n/index.js';
	import { reveal } from '$lib/reveal.js';
</script>

<section id="roadmap" class="band band-alt" aria-labelledby="roadmap-title">
	<div class="ground">
		<div use:reveal>
			<p class="eyebrow">{$t('roadmap.eyebrow')}</p>
			<h2 id="roadmap-title">{$t('roadmap.title')}</h2>
			<p class="intro">{$t('roadmap.intro')}</p>
		</div>

		<ol class="phases" use:reveal>
			{#each $t('roadmap.phases') as ph}
				<li class="phase" class:current={ph.statusKind === 'progress'}>
					<div class="marker" aria-hidden="true"></div>
					<div class="card">
						<div class="head">
							<p class="label">{ph.phase}</p>
							<span class="badge badge-{ph.statusKind}">{ph.status}</span>
						</div>
						<h3>{ph.title}</h3>
						<ul>
							{#each ph.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.phases {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 20px;
		position: relative;
	}

	/* The trail the markers sit on. */
	.phases::before {
		content: '';
		position: absolute;
		top: 9px;
		left: 0;
		right: 0;
		border-top: 2px dashed var(--border-strong);
	}

	.phase {
		position: relative;
		padding-top: 34px;
		display: flex;
	}

	.marker {
		position: absolute;
		top: 0;
		left: 22px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--surface-alt);
		border: 2px solid var(--border-strong);
		box-sizing: border-box;
	}

	.current .marker {
		background: var(--accent);
		border-color: var(--accent);
		box-shadow: 0 0 0 6px var(--accent-soft);
	}

	.phase .card {
		flex: 1;
		border-top-color: var(--border-strong);
	}

	.current .card {
		border-top-color: var(--accent);
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.label {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--on-surface-subtle);
	}

	.card h3 {
		font-size: 1.75rem;
		margin: 0 0 12px;
	}

	ul {
		margin: 0;
		padding-left: 18px;
		color: var(--on-surface-muted);
		font-size: 0.95rem;
		display: grid;
		gap: 6px;
	}

	ul li::marker {
		color: var(--accent-text);
	}

	@media (max-width: 1000px) {
		.phases {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.phases::before,
		.marker {
			display: none;
		}

		.phase {
			padding-top: 0;
		}
	}

	@media (max-width: 600px) {
		.phases {
			grid-template-columns: 1fr;
		}
	}
</style>
