<script>
	/*
	 * Hero: the motto from the org profile ("Cross the line. Enter
	 * freedom."), one paragraph on what Ergo Frontier is, an honest status
	 * line, and the org logo framed like a poster on the frontier.
	 *
	 * The horizon at the bottom (sun, far ridge, mesa, cactus) is a small
	 * inline SVG that echoes the logo; it is decorative only.
	 */
	import { base } from '$app/paths';
	import { t } from '$lib/i18n/index.js';
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="glow" aria-hidden="true"></div>

	<div class="inner">
		<div class="copy">
			<p class="eyebrow">{$t('hero.eyebrow')}</p>
			<h1 id="hero-title">{$t('hero.title')}</h1>
			<p class="lead">{@html $t('hero.lead')}</p>

			<p class="status">
				<span class="dot" aria-hidden="true"></span>
				{$t('hero.status')}
			</p>

			<div class="ctas">
				<a class="btn btn-primary" href="#how">
					{$t('hero.ctaPrimary')}
					<span aria-hidden="true">→</span>
				</a>
				<a class="btn btn-ghost" href="https://github.com/ergo-frontier">{$t('hero.ctaSecondary')}</a>
			</div>
		</div>

		<figure class="poster">
			<img
				src="{base}/logo.webp"
				alt={$t('hero.logoAlt')}
				width="460"
				height="460"
				fetchpriority="high"
			/>
		</figure>
	</div>

	<svg class="horizon" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
		<circle cx="1080" cy="150" r="120" fill="var(--sun)" opacity="0.18" />
		<path
			d="M0 150 L120 132 L260 140 L380 118 L520 128 L640 108 L760 124 L900 112 L1040 126 L1180 104 L1320 120 L1440 112 L1440 220 L0 220 Z"
			fill="var(--horizon-far)"
		/>
		<path
			d="M0 186 L210 182 L250 150 L470 146 L500 170 L760 176 L1000 172 L1030 136 L1270 132 L1300 166 L1440 168 L1440 220 L0 220 Z"
			fill="var(--horizon)"
		/>
		<!-- cactus -->
		<path
			d="M1352 168 v-46 a7 7 0 0 1 14 0 v46 z M1352 146 h-10 a6 6 0 0 1 -6 -6 v-14 a5 5 0 0 1 10 0 v10 h6 z M1366 140 h10 v-12 a5 5 0 0 1 10 0 v16 a6 6 0 0 1 -6 6 h-14 z"
			fill="var(--horizon)"
		/>
		<rect x="0" y="210" width="1440" height="10" fill="var(--surface)" />
	</svg>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		margin-top: calc(-1 * var(--header-h)); /* slide under the transparent sticky header */
		padding-top: var(--header-h);
		background-color: var(--surface-deep);
	}

	.glow {
		position: absolute;
		inset: 0;
		background: var(--hero-glow);
		pointer-events: none;
	}

	.inner {
		position: relative;
		max-width: 1120px;
		margin: 0 auto;
		padding: clamp(48px, 9vw, 112px) clamp(20px, 5vw, 32px) clamp(120px, 14vw, 190px);
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
		gap: clamp(32px, 6vw, 72px);
		align-items: center;
	}

	h1 {
		font-size: clamp(3.4rem, 9vw, 6.6rem);
		line-height: 0.92;
		margin: 0 0 24px;
		letter-spacing: 0.01em;
	}

	.lead {
		font-size: clamp(1.05rem, 1.6vw, 1.2rem);
		color: var(--on-surface-muted);
		max-width: 620px;
		margin: 0 0 24px;
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin: 0 0 32px;
		padding: 8px 14px;
		border-radius: 10px;
		border: 1px dashed var(--border-strong);
		background: rgba(var(--surface-rgb), 0.55);
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--on-surface-muted);
	}

	.dot {
		flex: none;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 0 4px var(--accent-soft);
	}

	.ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.poster {
		margin: 0;
		justify-self: center;
		width: min(100%, 380px);
		transform: rotate(2deg);
		border-radius: 18px;
		padding: 10px;
		background: linear-gradient(135deg, var(--accent), var(--copper));
		box-shadow: var(--shadow-md), var(--glow);
		transition: transform 0.4s ease;
	}

	.poster:hover {
		transform: rotate(0deg) scale(1.01);
	}

	.poster img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 12px;
	}

	.horizon {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: clamp(90px, 12vw, 200px);
	}

	@media (max-width: 820px) {
		.inner {
			grid-template-columns: 1fr;
			padding-top: 28px;
		}

		.poster {
			order: -1;
			justify-self: start;
			width: 104px;
			padding: 6px;
			border-radius: 14px;
		}

		.poster img {
			border-radius: 9px;
		}
	}
</style>
