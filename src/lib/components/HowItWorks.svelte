<script>
	/*
	 * TLS-Quorum in four steps (from the reputation-systems/tls-quorum
	 * README), connected by a dashed trail, then two side notes: why it is
	 * auditable, and why judges instead of on-chain verification.
	 *
	 * The quorum figure is decorative (aria-hidden): seven nominated
	 * judges, five approve, the threshold is met, the box opens. The
	 * numbers are illustrative only and carry no claim.
	 */
	import { t } from '$lib/i18n/index.js';
	import { reveal } from '$lib/reveal.js';

	const judges = [
		{ x: 40, y: 92, ok: true },
		{ x: 70, y: 46, ok: true },
		{ x: 120, y: 22, ok: false },
		{ x: 180, y: 14, ok: true },
		{ x: 240, y: 22, ok: true },
		{ x: 290, y: 46, ok: false },
		{ x: 320, y: 92, ok: true }
	];
</script>

<section id="how" class="band" aria-labelledby="how-title">
	<div class="ground">
		<div use:reveal>
			<p class="eyebrow">{$t('how.eyebrow')}</p>
			<h2 id="how-title">{$t('how.title')}</h2>
			<p class="intro">{@html $t('how.intro')}</p>
		</div>

		<ol class="steps" use:reveal>
			{#each $t('how.steps') as step, i}
				<li class="step">
					<span class="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</li>
			{/each}
		</ol>

		<div class="notes" use:reveal>
			<div class="card quorum-card">
				<svg class="quorum" viewBox="0 0 360 190" aria-hidden="true">
					{#each judges as j}
						<line
							x1={j.x}
							y1={j.y}
							x2="180"
							y2="150"
							class:on={j.ok}
							stroke-dasharray={j.ok ? '0' : '4 5'}
						/>
					{/each}
					{#each judges as j}
						<circle cx={j.x} cy={j.y} r="13" class="judge" class:on={j.ok} />
						{#if j.ok}
							<path d="M{j.x - 5} {j.y} l3.5 4 l7 -8" class="tick" />
						{/if}
					{/each}
					<rect x="140" y="128" width="80" height="46" rx="8" class="box" />
					<path d="M160 151 h40 M188 141 l12 10 l-12 10" class="arrow" />
				</svg>
				<h3>{$t('how.audit.title')}</h3>
				<p>{$t('how.audit.text')}</p>
			</div>

			<div class="card">
				<h3>{$t('how.why.title')}</h3>
				<p>{$t('how.why.text')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.steps {
		list-style: none;
		margin: 0 0 28px;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 20px;
		position: relative;
	}

	/* The trail between the step numbers. */
	.steps::before {
		content: '';
		position: absolute;
		top: 30px;
		left: 40px;
		right: 40px;
		border-top: 2px dashed var(--border-strong);
	}

	.step {
		position: relative;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 0 22px 22px;
		box-shadow: var(--shadow-sm);
	}

	.num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		margin: -1px 0 14px;
		border-radius: 0 0 12px 12px;
		background: var(--accent);
		color: var(--on-accent);
		font-family: var(--font-heading);
		font-size: 2rem;
		letter-spacing: 0.04em;
		padding-top: 4px;
		box-sizing: border-box;
	}

	.step h3 {
		font-size: 1.9rem;
		margin: 0 0 8px;
	}

	.step p {
		margin: 0;
		color: var(--on-surface-muted);
		font-size: 0.97rem;
	}

	.notes {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		gap: 20px;
	}

	.quorum {
		width: 100%;
		max-width: 360px;
		height: auto;
		margin: 0 0 12px;
	}

	.quorum line {
		stroke: var(--border-strong);
		stroke-width: 1.5;
	}

	.quorum line.on {
		stroke: var(--accent);
		stroke-width: 2;
	}

	.judge {
		fill: var(--surface-alt);
		stroke: var(--border-strong);
		stroke-width: 1.5;
	}

	.judge.on {
		fill: var(--accent-soft);
		stroke: var(--accent);
		stroke-width: 2;
	}

	.tick,
	.arrow {
		fill: none;
		stroke: var(--accent-text);
		stroke-width: 2.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.box {
		fill: var(--accent);
		stroke: var(--copper);
		stroke-width: 2;
	}

	.box + .arrow {
		stroke: var(--on-accent);
	}

	@media (max-width: 960px) {
		.steps {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.steps::before {
			display: none;
		}
	}

	@media (max-width: 760px) {
		.notes {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 520px) {
		.steps {
			grid-template-columns: 1fr;
		}
	}
</style>
