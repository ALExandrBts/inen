
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Aleksandr Snigirev",
    description: "Dossier & Claim of Right",

    head: [
        ['link', { rel: 'icon', href: '/assets/alexander.jpeg' }]
    ],

    locales: {
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                nav: [
                    { text: 'Letters', link: '/letters/mfa_iceland' },
                    { text: 'Portfolio', link: '/portfolio' }
                ],
                sidebar: [
                    {
                        text: 'Dossier',
                        items: [
                            { text: 'Story & Status', link: '/' },
                            { text: 'Engineering Portfolio', link: '/portfolio' }
                        ]
                    },
                    {
                        text: 'Official Letters',
                        items: [
                            { text: 'Iceland MFA', link: '/letters/mfa_iceland' }
                        ]
                    }
                ]
            }
        },
        uk: {
            label: 'Українська',
            lang: 'uk',
            themeConfig: {
                nav: [
                    { text: 'Листи', link: '/uk/letters/mfa_iceland' },
                    { text: 'Портфоліо', link: '/uk/portfolio' }
                ],
                sidebar: [
                    {
                        text: 'Досьє',
                        items: [
                            { text: 'Історія та Статус', link: '/uk/' },
                            { text: 'Інженерне Портфоліо', link: '/uk/portfolio' }
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
                ],
                outline: { label: 'Auf dieser Seite' },
                docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
                darkModeSwitchLabel: 'Erscheinungsbild',
                sidebarMenuLabel: 'Menü',
                returnToTopLabel: 'Zurück nach oben'
            }
        },
        is: {
            label: 'Íslenska',
            lang: 'is',
            themeConfig: {
                nav: [
                    { text: 'Bréf', link: '/letters/mfa_iceland' }, // Fallback to EN letter if not translated
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
