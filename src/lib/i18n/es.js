/*
 * Spanish copy (Spain). Same keys as en.js; a missing key falls back to
 * English.
 *
 * Written as Spanish, not translated word for word. Where it fits, the
 * wording comes straight from the ergo-frontier/.github profile README,
 * which is the original Spanish text: the motto ("Cruza la frontera.
 * Entra en la libertad."), "Pagos Web2. Lógica Web3. Sin fricción.",
 * "Aquí entra TLS-Quorum", "prueba de sacrificio", "la blockchain se
 * vuelve invisible". Same honesty rules as en.js: no invented metrics,
 * partners, dates or "launched" claims.
 */

export default {
	meta: {
		title: 'Ergo Frontier: pagos Web2, lógica Web3, sin fricción',
		description:
			'Ergo Frontier convierte hechos verificables de la Web2, como un pago en Revolut, en condiciones de gasto en Ergo. Pruebas TLS verificadas por un quórum de jueces con reputación on-chain auditable. Fase inicial: todavía no está en mainnet.',
		ogImageAlt: 'Logotipo de Ergo Frontier junto al lema: Cruza la frontera. Entra en la libertad.'
	},

	lang: {
		switchTo: 'View this page in English'
	},

	theme: {
		toLight: 'Cambiar al tema claro',
		toDark: 'Cambiar al tema oscuro',
		toggle: 'Cambiar tema'
	},

	nav: {
		label: 'Principal',
		home: 'Inicio de Ergo Frontier',
		links: [
			{ href: '#how', label: 'Cómo funciona' },
			{ href: '#projects', label: 'Proyectos' },
			{ href: '#roadmap', label: 'Hoja de ruta' },
			{ href: '#links', label: 'Enlaces' }
		],
		github: 'Ergo Frontier en GitHub',
		skip: 'Saltar al contenido'
	},

	hero: {
		logoAlt:
			'Logotipo de Ergo Frontier: un bisonte bajo el sol del atardecer, junto a un cactus y una montaña, sobre el nombre ERGO-FRONTIER',
		eyebrow: 'Pagos Web2. Lógica Web3. Sin fricción.',
		title: 'Cruza la frontera. Entra en la libertad.',
		lead: 'Ergo Frontier convierte hechos verificables de la Web2, como un <strong>pago en Revolut</strong>, en condiciones de gasto en <strong>Ergo</strong>. Un quórum de jueces independientes verifica una prueba TLS de lo que ha pasado y el contrato libera los fondos. Sin custodios ni autoridades centrales.',
		status: 'Fase inicial. Solo investigación y pruebas: todavía no hay nada en mainnet.',
		ctaPrimary: 'Cómo funciona',
		ctaSecondary: 'GitHub'
	},

	how: {
		eyebrow: 'TLS-Quorum',
		title: 'Cómo funciona',
		intro: 'La web funciona sobre HTTPS, y HTTPS sobre TLS. <a href="https://github.com/tlsnotary/tlsn">TLSNotary</a> permite generar una prueba criptográfica de que una página mostró un contenido concreto, por ejemplo un pago completado, sin revelar contraseñas ni datos privados. Pero los contratos de Ergo no pueden verificar esa prueba directamente. Aquí entra TLS-Quorum.',
		steps: [
			{
				title: 'Depósito',
				text: 'Alguien bloquea ERG en un contrato escrow, con una lista de jueces designados y cuántos de ellos tienen que estar de acuerdo. En el ejemplo del concepto: 100 ERG y 20 jueces.'
			},
			{
				title: 'Prueba',
				text: 'El usuario hace la acción fuera de la blockchain, por ejemplo una transferencia en Revolut, y obtiene una prueba TLSNotary del contenido y de la sesión TLS.'
			},
			{
				title: 'Veredicto',
				text: 'Cada juez designado verifica la prueba por su cuenta y emite un veredicto público: válida o no válida.'
			},
			{
				title: 'Liberación',
				text: 'Cuando aprueban suficientes jueces, el contrato se puede gastar y los fondos van al beneficiario. La información de fuera de la blockchain se valida antes de que se muevan los fondos on-chain.'
			}
		],
		audit: {
			title: 'Cualquiera puede auditarlo',
			text: 'Cada juez mantiene un historial público de las pruebas que ha aceptado y rechazado. Cualquiera puede volver a comprobarlas sin contactar con la fuente original (Revolut). Un juez no puede mentir sin dejar evidencia, y los errores quedan expuestos para siempre.'
		},
		why: {
			title: '¿Por qué jueces y no el propio contrato?',
			text: 'Una prueba TLS no se puede expresar como un protocolo Sigma de Ergo, y ErgoScript no verifica zk-SNARKs de forma nativa. Por eso la prueba la verifica un quórum fuera de la blockchain, y lo que el contrato comprueba on-chain es la aprobación de ese quórum, con primitivas estándar de Ergo.'
		}
	},

	trust: {
		eyebrow: 'Modelo de confianza',
		title: 'Confianza mínima y explícita',
		intro: 'Ergo Frontier no elimina la confianza: la hace explícita y mínima. El usuario solo confía en:',
		items: [
			{ title: 'Ergo', text: 'La seguridad de la blockchain de Ergo y de sus contratos.' },
			{ title: 'Criptografía TLS', text: 'La misma criptografía que ya protege la web.' },
			{
				title: 'Un quórum transparente',
				text: 'Jueces con identidades costosas: cada uno bloquea ERG para siempre como <strong>prueba de sacrificio</strong>. No se puede retirar ni genera beneficios. No es staking ni gobernanza: sirve para que crear identidades falsas salga caro.'
			}
		],
		none: 'Sin custodios. Sin arbitraje humano. Sin decisiones opacas.'
	},

	invisible: {
		eyebrow: 'Más allá de los intercambios',
		title: 'La blockchain se vuelve invisible',
		text: 'El mismo mecanismo puede activar cualquier acción on-chain, no solo un pago a una billetera. Imagina una aplicación de Ergo como <strong>Game of Prompts</strong>: el usuario pulsa «Participar», paga con Revolut y ya está dentro. Por debajo, una caja financiada por la aplicación o por un proveedor de liquidez se gasta hacia el contrato del juego en cuanto se demuestra el pago. El usuario no necesita billetera, ni claves, ni ERG.',
		points: [
			'Para el usuario: pagar y seguir.',
			'Para el desarrollador: aceptar pagos Web2 sin custodiar fondos de nadie.',
			'Para Ergo: usuarios nuevos que nunca tocarían una blockchain.'
		]
	},

	projects: {
		eyebrow: 'Las piezas',
		title: 'Proyectos',
		intro: 'Ergo Frontier se construye con piezas abiertas. Algunos repositorios siguen siendo privados mientras se asienta el diseño.',
		statusLabel: 'Estado',
		private: 'Repositorio aún no público',
		items: [
			{
				name: 'TLS-Quorum',
				tag: 'Protocolo central',
				status: 'En desarrollo',
				statusKind: 'progress',
				text: 'Un quórum genérico de jueces que verifica pruebas TLSNotary y autoriza contratos de Ergo. La primera versión, ahora en revisión, incluye un contrato escrow, un verificador TLSNotary compilado a WebAssembly para que todos los jueces ejecuten el mismo código, una aplicación web para creadores, jueces y auditores, un servidor MCP y un paquete de servicio para Celaut. Solo se ha probado en una cadena simulada; no hay nada desplegado.',
				repo: 'reputation-systems/tls-quorum',
				href: null
			},
			{
				name: 'Exchange',
				tag: 'Primera aplicación',
				status: 'Prototipo',
				statusKind: 'prototype',
				text: 'Un exchange P2P de ERG por dinero fiat sobre TLS-Quorum. Quien vende bloquea ERG en escrow, quien compra paga con una app de pagos de las de siempre, y los fondos se liberan cuando se demuestra el pago.',
				repo: 'ergo-frontier/exchange',
				href: null
			},
			{
				name: 'Reputation System',
				tag: 'Identidad e historial de los jueces',
				status: 'Código abierto',
				statusKind: 'open',
				text: 'Los jueces son perfiles de reputation-system y sus veredictos son opiniones de reputation-proof. Por eso el historial de cada juez es público, permanente y fácil de auditar.',
				repo: 'reputation-systems/reputation-system',
				href: 'https://github.com/reputation-systems/reputation-system'
			},
			{
				name: 'Celaut',
				tag: 'Donde se ejecutan los jueces',
				status: 'Código abierto',
				statusKind: 'open',
				text: 'Una red P2P para ejecutar servicios sellados y verificables. La primera versión de TLS-Quorum incluye un paquete de servicio para Celaut, así que todos los jueces pueden ejecutar el mismo código de verificación.',
				repo: 'celaut-project',
				href: 'https://celaut-project.github.io/es'
			}
		]
	},

	roadmap: {
		eyebrow: 'Borrador',
		title: 'Hoja de ruta',
		intro: 'Dos pasos: primero TLS-Quorum y después, encima, las aplicaciones de Ergo Frontier (el exchange, servicios y lo que venga). Es un borrador de trabajo: va a cambiar y no tiene fechas.',
		phases: [
			{
				phase: 'Fase 1',
				title: 'Prueba de concepto',
				status: 'En curso',
				statusKind: 'progress',
				items: [
					'Verificador de pruebas TLSNotary',
					'Contrato escrow que se libera con los veredictos de los jueces',
					'Verificador empaquetado como servicio de Celaut',
					'Demo de principio a fin con una prueba de pago real, en testnet'
				]
			},
			{
				phase: 'Fase 2',
				title: 'Quórum de varios jueces',
				status: 'Previsto',
				statusKind: 'planned',
				items: [
					'k de n jueces ejecutándose en la red de Celaut',
					'Selección de jueces según su reputación on-chain',
					'Penalizaciones para los jueces que firmen veredictos falsos',
					'Intercambios en testnet con jueces independientes'
				]
			},
			{
				phase: 'Fase 3',
				title: 'Exchange en mainnet',
				status: 'Previsto',
				statusKind: 'planned',
				items: [
					'Auditoría de seguridad de los contratos',
					'Arranque de los primeros jueces, con prueba de sacrificio',
					'Más plataformas de pago',
					'Aplicación web con libro de órdenes, flujo de intercambio y perfiles de reputación',
					'Lanzamiento en mainnet con límites bajos'
				]
			},
			{
				phase: 'Fase 4',
				title: 'Oráculo general y módulos',
				status: 'En estudio',
				statusKind: 'exploring',
				items: [
					'Un módulo verificador por cada fuente de datos',
					'Otros usos: acciones dentro de aplicaciones, seguros, pruebas de disponibilidad de servicios',
					'Un SDK para desarrolladores externos'
				]
			}
		]
	},

	links: {
		eyebrow: 'Sigue el proyecto',
		title: 'Enlaces',
		items: [
			{
				label: 'Ergo Frontier en GitHub',
				href: 'https://github.com/ergo-frontier',
				text: 'La organización. Los repositorios se irán haciendo públicos cuando estén listos.'
			},
			{
				label: 'Reputation System',
				href: 'https://github.com/reputation-systems/reputation-system',
				text: 'Perfiles y opiniones on-chain, que usan los jueces.'
			},
			{
				label: 'Celaut',
				href: 'https://celaut-project.github.io/es',
				text: 'La red de servicios verificables donde se ejecutan los jueces.'
			},
			{
				label: 'TLSNotary',
				href: 'https://github.com/tlsnotary/tlsn',
				text: 'El sistema de pruebas TLS que verifica TLS-Quorum.'
			},
			{
				label: 'Ergo Platform',
				href: 'https://ergoplatform.org/',
				text: 'La blockchain sobre la que se liquida todo.'
			},
			{
				label: 'Documentación de Ergo',
				href: 'https://docs.ergoplatform.com/',
				text: 'ErgoScript, el modelo eUTXO y los protocolos Sigma.'
			}
		]
	},

	footer: {
		motto: 'Cruza la frontera. Entra en la libertad.',
		note: 'Ergo Frontier es un proyecto de investigación y desarrollo en fase inicial. Nada de lo que se describe aquí funciona todavía en mainnet. No es asesoramiento financiero.'
	}
};
