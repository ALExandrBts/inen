
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Олександр Снігірьов",
    description: "Досьє та Заява про Права",

    head: [
        ['link', { rel: 'icon', href: '/assets/alexander.jpeg' }]
    ],

    locales: {
        root: {
            label: 'Українська',
            lang: 'uk',
            themeConfig: {
                nav: [
                    { text: 'Листи', link: '/uk/letters/mfa_iceland' },
                    { text: 'Портфоліо', link: '/portfolio' }
                ],
                sidebar: [
                    {
                        text: 'Досьє',
                        items: [
                            { text: 'Історія та Статус', link: '/' },
                            { text: 'Інженерне Портфоліо', link: '/portfolio' }
                        ]
                    },
                    {
                        text: 'Офіційні Листи',
                        items: [
                            { text: 'МЗС Ісландії', link: '/uk/letters/mfa_iceland' }
                        ]
                    }
                ],
                outline: { label: 'На цій сторінці' },
                docFooter: { prev: 'Попередня сторінка', next: 'Наступна сторінка' },
                darkModeSwitchLabel: 'Тема',
                sidebarMenuLabel: 'Меню',
                returnToTopLabel: 'Нагору'
            }
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            themeConfig: {
                nav: [
                    { text: 'Letters', link: '/en/letters/mfa_iceland' },
                    { text: 'Portfolio', link: '/en/portfolio' }
                ],
                sidebar: [
                    {
                        text: 'Dossier',
                        items: [
                            { text: 'Story & Status', link: '/en/' },
                            { text: 'Engineering Portfolio', link: '/en/portfolio' }
                        ]
                    },
                    {
                        text: 'Official Letters',
                        items: [
                            { text: 'Iceland MFA', link: '/en/letters/mfa_iceland' }
                        ]
                    }
                ]
            }
        },
        de: {
            label: 'Deutsch',
            lang: 'de',
            themeConfig: {
                nav: [
                    { text: 'Briefe', link: '/de/letters/germany_appeal' },
                    { text: 'Portfolio', link: '/de/portfolio' }
                ],
                sidebar: [
                    {
                        text: 'Akte',
                        items: [
                            { text: 'Geschichte & Status', link: '/de/' },
                            { text: 'Ingenieur-Portfolio', link: '/de/portfolio' }
                        ]
                    },
                    {
                        text: 'Offizielle Briefe',
                        items: [
                            { text: 'Deutschland Appell', link: '/de/letters/germany_appeal' }
                        ]
                    }
                ]
            }
        },
        is: {
            label: 'Íslenska',
            lang: 'is',
            themeConfig: {
                nav: [
                    { text: 'Bréf', link: '/letters/mfa_iceland' },
                    { text: 'Verkefni', link: '/is/portfolio' }
                ]
            }
        },
        no: { label: 'Norsk', lang: 'no', themeConfig: { nav: [{ text: 'Portefølje', link: '/no/portfolio' }] } },
        sv: { label: 'Svenska', lang: 'sv', themeConfig: { nav: [{ text: 'Portfölj', link: '/sv/portfolio' }] } },
        fi: { label: 'Suomi', lang: 'fi', themeConfig: { nav: [{ text: 'Portfolio', link: '/fi/portfolio' }] } },
        da: { label: 'Dansk', lang: 'da', themeConfig: { nav: [{ text: 'Portefølje', link: '/da/portfolio' }] } },
        nl: { label: 'Nederlands', lang: 'nl', themeConfig: { nav: [{ text: 'Portfolio', link: '/nl/portfolio' }] } }
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ALExandrBts/inen' }
        ],
        footer: {
            message: 'Released under Natural Law.',
            copyright: 'Copyright © 2026 Aleksandr Snigirev'
        }
    }
})
