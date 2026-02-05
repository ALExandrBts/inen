import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Олександр Снігірьов",
	srcExclude: ['**/test-*.md'],
	locales: {
		root: {
			label: 'Українська',
			lang: 'uk',
			title: 'Олександр Снігірьов',
			themeConfig: {
				docFooter: { prev: 'Попередня', next: 'Наступна' },
				returnToTopLabel: 'Нагору',
				sidebarMenuLabel: 'Меню',
				darkModeSwitchLabel: 'Appearance',
				nav: [
					{ text: 'Листи', link: '/letters/mfa_iceland' },
					{ text: 'Портфоліо', link: '/portfolio' }
				],
				sidebar: {
					'/test-index': [
						{
							text: '🎨 Component Playground',
							items: [
								{ text: '🏠 Home', link: '/test-index' },
								{ text: '⏰ Timeline', link: '/test-timeline' },
								{ text: '🚀 Projects', link: '/test-projects' },
								{ text: '📞 Contacts', link: '/test-contacts' }
							]
						}
					],
					'/test-timeline': [
						{
							text: '🎨 Component Playground',
							items: [
								{ text: '🏠 Home', link: '/test-index' },
								{ text: '⏰ Timeline', link: '/test-timeline' },
								{ text: '🚀 Projects', link: '/test-projects' },
								{ text: '📞 Contacts', link: '/test-contacts' }
							]
						}
					],
					'/test-projects': [
						{
							text: '🎨 Component Playground',
							items: [
								{ text: '🏠 Home', link: '/test-index' },
								{ text: '⏰ Timeline', link: '/test-timeline' },
								{ text: '🚀 Projects', link: '/test-projects' },
								{ text: '📞 Contacts', link: '/test-contacts' }
							]
						}
					],
					'/test-contacts': [
						{
							text: '🎨 Component Playground',
							items: [
								{ text: '🏠 Home', link: '/test-index' },
								{ text: '⏰ Timeline', link: '/test-timeline' },
								{ text: '🚀 Projects', link: '/test-projects' },
								{ text: '📞 Contacts', link: '/test-contacts' }
							]
						}
					],
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
