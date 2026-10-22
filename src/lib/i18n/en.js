/*
 * English copy. The source of truth for every user-facing string on the
 * site, and the fallback for any future locale.
 *
 * Where the words come from (keep it that way: no invented metrics,
 * partners, dates or "launched" claims):
 *   • ergo-frontier/.github profile README: the idea, the Game of
 *     Prompts example, proof of sacrifice, the trust model, the motto.
 *   • reputation-systems/tls-quorum README + PR #1: the four steps, why
 *     judges instead of on-chain verification, what v1 contains.
 *   • ergo-frontier/draft-idea: the roadmap and its phases.
 *   • ergo-frontier/exchange README: what the Exchange is.
 *
 * Values may be strings, arrays or objects. `html` values may contain
 * inline <strong>/<em>/<code> and are rendered with {@html}; nothing here
 * is user input. Hrefs live here too because they are content (which
 * repos are public changes over time).
 */

export default {
	meta: {
		title: 'Ergo Frontier: trustless swaps between Web2 payments and Ergo',
		description:
			'Ergo Frontier turns verifiable Web2 facts, like a Revolut payment, into spending conditions on Ergo. TLS proofs, checked by a quorum of judges with auditable on-chain reputation. Early stage, not on mainnet yet.'
	},

	theme: {
		toLight: 'Switch to light theme',
		toDark: 'Switch to dark theme',
		toggle: 'Toggle theme'
	},

	nav: {
		label: 'Main',
		home: 'Ergo Frontier home',
		links: [
			{ href: '#how', label: 'How it works' },
			{ href: '#projects', label: 'Projects' },
			{ href: '#roadmap', label: 'Roadmap' },
			{ href: '#links', label: 'Links' }
		],
		github: 'Ergo Frontier on GitHub',
		skip: 'Skip to content'
	},

	hero: {
		logoAlt: 'Ergo Frontier logo: a bison on a mesa under a setting sun, next to a cactus',
		eyebrow: 'Trustless swaps on Ergo',
		title: 'Cross the line. Enter freedom.',
		lead: 'Ergo Frontier turns verifiable Web2 facts, like a <strong>Revolut payment</strong>, into spending conditions on <strong>Ergo</strong>. A quorum of independent judges checks a TLS proof of what happened, and the contract releases the funds. No custodian, no central authority.',
		status: 'Early stage. Research and testing only, nothing on mainnet yet.',
		ctaPrimary: 'How it works',
		ctaSecondary: 'GitHub'
	},

	how: {
		eyebrow: 'TLS-Quorum',
		title: 'How it works',
		intro: 'The web runs on HTTPS, and HTTPS runs on TLS. <a href="https://github.com/tlsnotary/tlsn">TLSNotary</a> can produce a cryptographic proof that a page showed a specific content, for example a completed payment, without revealing passwords or private data. Ergo contracts cannot check that proof directly. TLS-Quorum is the bridge.',
		steps: [
			{
				title: 'Deposit',
				text: 'Someone locks ERG in an escrow contract together with a list of nominated judges and how many of them must agree. Example from the concept: 100 ERG and 20 judges.'
			},
			{
				title: 'Prove',
				text: 'The user does the off-chain action, for example a Revolut transfer, and gets a TLSNotary proof of the content and the TLS session.'
			},
			{
				title: 'Judge',
				text: 'Each nominated judge verifies the proof independently and gives a public verdict: valid or invalid.'
			},
			{
				title: 'Release',
				text: 'When enough of the judges approve, the contract can be spent and the funds go to the beneficiary. Off-chain information is validated before on-chain funds move.'
			}
		],
		audit: {
			title: 'Anyone can audit it',
			text: 'Every judge keeps a public history of the proofs they accepted and rejected. Anyone can re-check those proofs, without contacting the original source (Revolut). A judge cannot lie without leaving evidence, and mistakes stay visible forever.'
		},
		why: {
			title: 'Why judges, and not the contract itself?',
			text: 'A TLS proof cannot be expressed as an Ergo Sigma protocol, and ErgoScript has no native zk-SNARK verification. So the proof is verified off-chain by a quorum, and the quorum’s approval is what the contract checks on-chain, with standard Ergo primitives.'
		}
	},

	trust: {
		eyebrow: 'Trust model',
		title: 'Minimal, explicit trust',
		intro: 'Ergo Frontier does not remove trust. It makes it explicit and minimal. A user only relies on:',
		items: [
			{ title: 'Ergo', text: 'The security of the Ergo blockchain and its contracts.' },
			{ title: 'TLS cryptography', text: 'The same cryptography that already secures the web.' },
			{
				title: 'A transparent quorum',
				text: 'Judges with costly identities: each one locks ERG forever as a <strong>proof of sacrifice</strong>. It can’t be withdrawn and earns nothing. Not staking, not governance: it makes fake identities expensive.'
			}
		],
		none: 'No custodians. No human arbitration. No opaque decisions.'
	},

	invisible: {
		eyebrow: 'Beyond swaps',
		title: 'The blockchain becomes invisible',
		text: 'The same mechanism can trigger any on-chain action, not only a payout to a wallet. Imagine an Ergo app like <strong>Game of Prompts</strong>: the user clicks “Join”, pays with Revolut, and they are in. Behind the scenes a box funded by the app or a liquidity provider is spent into the game’s contract once the payment is proven. The user needs no wallet, no keys and no ERG.',
		points: [
			'For users: pay and continue.',
			'For developers: accept Web2 payments without holding anyone’s funds.',
			'For Ergo: new users who would never touch a blockchain.'
		]
	},

	projects: {
		eyebrow: 'Building blocks',
		title: 'Projects',
		intro: 'Ergo Frontier is built from open pieces. Some repositories are still private while the design settles.',
		statusLabel: 'Status',
		private: 'Repository not public yet',
		items: [
			{
				name: 'TLS-Quorum',
				tag: 'Core protocol',
				status: 'In development',
				statusKind: 'progress',
				text: 'A generic quorum of judges that verifies TLSNotary proofs and authorizes Ergo contracts. The first version, now under review, has an escrow contract, a TLSNotary verifier compiled to WebAssembly so every judge runs the same code, a web app for creators, judges and auditors, an MCP server, and a Celaut service package. Tested on a mock chain only, nothing deployed.',
				repo: 'reputation-systems/tls-quorum',
				href: null
			},
			{
				name: 'Exchange',
				tag: 'First application',
				status: 'Prototype',
				statusKind: 'prototype',
				text: 'A peer-to-peer ERG/fiat exchange on top of TLS-Quorum. Sellers lock ERG in escrow, buyers pay with a regular payment app, and the funds are released when the payment is proven.',
				repo: 'ergo-frontier/exchange',
				href: null
			},
			{
				name: 'Reputation System',
				tag: 'Judges’ identity and history',
				status: 'Open source',
				statusKind: 'open',
				text: 'Judges are reputation-system profiles and their verdicts are reputation-proof opinions. That is what makes every judge’s history public, permanent and easy to audit.',
				repo: 'reputation-systems/reputation-system',
				href: 'https://github.com/reputation-systems/reputation-system'
			},
			{
				name: 'Celaut',
				tag: 'Where judges run',
				status: 'Open source',
				statusKind: 'open',
				text: 'A peer-to-peer network to run sealed, verifiable services. The first TLS-Quorum version includes a Celaut service package, so every judge can run the same verifier code.',
				repo: 'celaut-project',
				href: 'https://celaut-project.github.io/'
			}
		]
	},

	roadmap: {
		eyebrow: 'Draft roadmap',
		title: 'Roadmap',
		intro: 'Two steps: first TLS-Quorum, then the Ergo Frontier applications on top of it (the exchange, services, and more). This is a working draft, it will change, and there are no dates.',
		phases: [
			{
				phase: 'Phase 1',
				title: 'Proof of concept',
				status: 'In progress',
				statusKind: 'progress',
				items: [
					'TLSNotary proof verifier',
					'Escrow contract released by judges’ verdicts',
					'Verifier packaged as a Celaut service',
					'End-to-end demo with a real payment proof, on testnet'
				]
			},
			{
				phase: 'Phase 2',
				title: 'Multi-judge quorum',
				status: 'Planned',
				statusKind: 'planned',
				items: [
					'k-of-n judges running on the Celaut network',
					'Judge selection based on on-chain reputation',
					'Penalties for judges who sign bad verdicts',
					'Testnet trading with independent judges'
				]
			},
			{
				phase: 'Phase 3',
				title: 'Mainnet exchange',
				status: 'Planned',
				statusKind: 'planned',
				items: [
					'Security audit of the contracts',
					'Bootstrapping the first judges, with proof of sacrifice',
					'More payment platforms',
					'Web app with order book, trade flow and reputation profiles',
					'Mainnet launch with low limits'
				]
			},
			{
				phase: 'Phase 4',
				title: 'General oracle and modules',
				status: 'Exploring',
				statusKind: 'exploring',
				items: [
					'One verifier module per data source',
					'Other uses: in-app actions, insurance, service uptime proofs',
					'An SDK for third-party developers'
				]
			}
		]
	},

	links: {
		eyebrow: 'Follow along',
		title: 'Links',
		items: [
			{
				label: 'Ergo Frontier on GitHub',
				href: 'https://github.com/ergo-frontier',
				text: 'The organization. Repositories go public as they are ready.'
			},
			{
				label: 'Reputation System',
				href: 'https://github.com/reputation-systems/reputation-system',
				text: 'On-chain profiles and opinions, used for the judges.'
			},
			{
				label: 'Celaut',
				href: 'https://celaut-project.github.io/',
				text: 'The verifiable services network where judges run.'
			},
			{
				label: 'TLSNotary',
				href: 'https://github.com/tlsnotary/tlsn',
				text: 'The TLS proof system TLS-Quorum verifies.'
			},
			{
				label: 'Ergo Platform',
				href: 'https://ergoplatform.org/',
				text: 'The blockchain everything settles on.'
			},
			{
				label: 'Ergo docs',
				href: 'https://docs.ergoplatform.com/',
				text: 'ErgoScript, the eUTXO model and the Sigma protocols.'
			}
		]
	},

	footer: {
		motto: 'Cross the line. Enter freedom.',
		note: 'Ergo Frontier is early-stage research and development. Nothing described here is live on mainnet. Not financial advice.'
	}
};
