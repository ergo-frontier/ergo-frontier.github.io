<script>
	import { base } from '$app/paths';
	import { t } from '$lib/i18n/index.js';
</script>

<footer class="footer">
	<div class="inner">
		<img src="{base}/logo-128.png" alt="" width="48" height="48" />
		<p class="motto">{$t('footer.motto')}</p>
		<p class="note">{$t('footer.note')}</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--surface-deep);
		border-top: 1px solid var(--border);
	}

	.inner {
		max-width: 1120px;
		margin: 0 auto;
		padding: 48px clamp(20px, 5vw, 32px) 56px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 12px;
	}

	img {
		border-radius: 12px;
	}

	.motto {
		margin: 0;
		font-family: var(--font-heading);
		font-size: clamp(1.8rem, 4vw, 2.4rem);
		letter-spacing: 0.04em;
		color: var(--accent-text);
	}

	.note {
		margin: 0;
		max-width: 620px;
		font-size: 0.88rem;
		color: var(--on-surface-subtle);
	}
</style>
