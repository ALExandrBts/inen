
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
                    { text: 'Листи', link: '/letters/mfa_iceland' },
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
                            { text: 'МЗС Ісландії', link: '/letters/mfa_iceland' }
                        ]
                    }
                ],
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
                    { text: 'Bréf', link: '/is/letters/mfa_iceland' },
                    { text: 'Verkefni', link: '/is/portfolio' }
                ],
                sidebar: [
                    {
                        text: 'Skjöl',
                        items: [
                            { text: 'Saga og Staða', link: '/is/' },
                            { text: 'Verkefnasafn', link: '/is/portfolio' }
                        ]
                    },
                    {
                        text: 'Opinber Bréf',
                        items: [
                            { text: 'Mótmæli til Þýskalands', link: '/is/letters/germany_appeal' }
                        ]
                    }
                ]
            }
        },
        no: { label: 'Norsk', lang: 'no', themeConfig: { nav: [{ text: 'Portefølje', link: '/no/portfolio' }], sidebar: [{ text: 'Portefølje', link: '/no/portfolio' }] } },
        sv: { label: 'Svenska', lang: 'sv', themeConfig: { nav: [{ text: 'Portfölj', link: '/sv/portfolio' }], sidebar: [{ text: 'Portfölj', link: '/sv/portfolio' }] } },
        fi: { label: 'Suomi', lang: 'fi', themeConfig: { nav: [{ text: 'Portfolio', link: '/fi/portfolio' }], sidebar: [{ text: 'Portfolio', link: '/fi/portfolio' }] } },
        da: { label: 'Dansk', lang: 'da', themeConfig: { nav: [{ text: 'Portefølje', link: '/da/portfolio' }], sidebar: [{ text: 'Portefølje', link: '/da/portfolio' }] } },
        nl: { label: 'Nederlands', lang: 'nl', themeConfig: { nav: [{ text: 'Portfolio', link: '/nl/portfolio' }], sidebar: [{ text: 'Portfolio', link: '/nl/portfolio' }] } }
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ALExandrBts/inen' }
        ],
        footer: {
            message: 'Released under Natural Law.',
            copyright: 'Copyright © 2026 Aleksandr Snigirev'
        },
        outline: 'deep'
    }
})
