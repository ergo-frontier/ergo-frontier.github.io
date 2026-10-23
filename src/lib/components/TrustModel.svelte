<script>
	/*
	 * Trust model + the "invisible blockchain" idea, both from the
	 * ergo-frontier/.github profile README. Two short blocks on one band,
	 * because each is a single idea.
	 */
	import { t } from '$lib/i18n/index.js';
	import { reveal } from '$lib/reveal.js';
</script>

<section id="trust" class="band band-alt" aria-labelledby="trust-title">
	<div class="ground">
		<div use:reveal>
			<p class="eyebrow">{$t('trust.eyebrow')}</p>
			<h2 id="trust-title">{$t('trust.title')}</h2>
			<p class="intro">{$t('trust.intro')}</p>
		</div>

		<ul class="grid trust" use:reveal>
			{#each $t('trust.items') as item}
				<li class="card">
					<h3>{item.title}</h3>
					<p>{@html item.text}</p>
				</li>
			{/each}
		</ul>

		<p class="none" use:reveal>{$t('trust.none')}</p>

		<div class="invisible" use:reveal>
			<div>
				<p class="eyebrow">{$t('invisible.eyebrow')}</p>
				<h2>{$t('invisible.title')}</h2>
			</div>
			<div>
				<p class="lead">{@html $t('invisible.text')}</p>
				<ul class="points">
					{#each $t('invisible.points') as point}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.trust {
		list-style: none;
		margin: 0;
		padding: 0;
		grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
	}

	.none {
		margin: 28px 0 0;
		font-family: var(--font-heading);
		font-size: clamp(1.5rem, 3vw, 2rem);
		letter-spacing: 0.03em;
		color: var(--accent-text);
	}

	.invisible {
		margin-top: clamp(56px, 8vw, 88px);
		padding-top: clamp(40px, 6vw, 56px);
		border-top: 1px solid var(--border);
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(20px, 5vw, 56px);
	}

	.lead {
		margin: 0 0 18px;
		color: var(--on-surface-muted);
		font-size: 1.05rem;
	}

	.points {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 10px;
	}

	.points li {
		position: relative;
		padding-left: 26px;
		color: var(--on-surface);
	}

	/* A small star, like the Exchange's badge mark. */
	.points li::before {
		content: '★';
		position: absolute;
		left: 0;
		color: var(--accent-text);
	}

	@media (max-width: 760px) {
		.invisible {
			grid-template-columns: 1fr;
		}
	}
</style>
