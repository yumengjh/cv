import process from 'node:process'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'zh',
			},
			link: [
				// "InterVariable", "Inter", "InterDisplay"
				{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css', media: 'print', onload: 'this.media="all"' },
			],
		},
		rootAttrs: {
			id: 'yumengjh-cv',
		},
	},

	css: [
		'~/assets/main.scss',
	],

	compatibilityDate: '2025-13-18',

	experimental: {
		typescriptPlugin: true,
	},

	features: {
		inlineStyles: false,
	},

	routeRules: {
		// 网站图标
		'/favicon.ico': { redirect: 'https://img.yumg.top/2025/12/06/69341bb617af7.webp' },
	},

	runtimeConfig: {
		public: {
			// 从 .env 文件中读取的变量
			name: process.env.NAME,
			phone: process.env.PHONE,
		},
	},

	vite: {
		server: {
			// 预先允许从其他域名访问开发环境，但 --host 才会在所有网络接口上启动监听
			allowedHosts: true,
		},
	},

	// @keep-sorted
	modules: [
		'@nuxt/icon',
		'@unocss/nuxt',
	],

	icon: {
		// 默认是 CSS Mask 模式，在低级 PDF 阅读器中可能无法正常显示
		mode: 'svg',
	},
})
