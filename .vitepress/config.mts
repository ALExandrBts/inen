import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Олександр Снігірьов",
	srcExclude: ['**/test-*.md', 'i18n/da/**', 'i18n/de/**', 'i18n/fi/**', 'i18n/is/**', 'i18n/nl/**', 'i18n/no/**', 'i18n/sv/**', 'i18n/uk/**'],
	head: [
		['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XNRXJRYZWG' }],
		['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XNRXJRYZWG');`]
	],
	rewrites: {
		'i18n/:lang/:path*': ':lang/:path*'
	},
	locales: {
		root: {
			label: 'Українська',
			lang: 'uk',
			title: 'Олександр Снігірьов',
			themeConfig: {
				docFooter: { prev: 'Попередня', next: 'Наступна' },
				returnToTopLabel: 'Нагору',
				sidebarMenuLabel: 'Меню',
				darkModeSwitchLabel: 'Вигляд',
				nav: [
					{ text: 'Листи', link: '/letters/mfa_iceland' },
					{ text: 'Портфоліо', link: '/portfolio' }
				],
				sidebar: {
					'/': [
						{
							text: 'Досьє', items: [
								{ text: 'Історія', link: '/history' },
								{ text: 'Портфоліо', link: '/portfolio' }
							]
						},
						{ text: 'Листи', items: [{ text: 'МЗС Ісландії', link: '/letters/mfa_iceland' }] }
					]
				}
			}
		},
		en: {
			label: 'English',
			lang: 'en',
			title: 'Aleksandr Snigirev',
			link: '/en/',
			themeConfig: {
				docFooter: { prev: 'Previous page', next: 'Next page' },
				returnToTopLabel: 'Return to top',
				sidebarMenuLabel: 'Menu',
				darkModeSwitchLabel: 'Appearance',
				nav: [
					{ text: 'Letters', link: '/en/letters/mfa_iceland' },
					{ text: 'Portfolio', link: '/en/portfolio' }
				],
				sidebar: [
					{
						text: 'Dossier', items: [
							{ text: 'Story', link: '/en/history' },
							{ text: 'Portfolio', link: '/en/portfolio' }
						]
					},
					{ text: 'Letters', items: [{ text: 'Iceland MFA', link: '/en/letters/mfa_iceland' }] }
				]
			}
		}
	},
	themeConfig: {
		socialLinks: [{ icon: 'github', link: 'https://github.com/ALExandrBts/inen' }]
	}
})
