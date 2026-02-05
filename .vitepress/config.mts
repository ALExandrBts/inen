
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Aleksandr Snigirev",
    description: "Dossier & Claim of Right",

    head: [
        ['link', { rel: 'icon', href: '/assets/alexander.jpeg' }]
    ],

    locales: {
        root: { label: 'English', lang: 'en' },
        uk: {
            label: 'Українська',
            lang: 'uk',
            themeConfig: {
                nav: [
                    { text: 'Листи', link: '/uk/letters/mfa_iceland' },
                    { text: 'Портфоліо', link: '/portfolio' } // Assuming shared portfolio for now
                ]
            }
        },
        de: {
            label: 'Deutsch',
            lang: 'de',
            themeConfig: {
                nav: [
                    { text: 'Briefe', link: '/de/letters/germany_appeal' },
                    { text: 'Portfolio', link: '/portfolio' }
                ]
            }
        },
        is: { label: 'Íslenska', lang: 'is' },
        no: { label: 'Norsk', lang: 'no' },
        sv: { label: 'Svenska', lang: 'sv' },
        fi: { label: 'Suomi', lang: 'fi' },
        da: { label: 'Dansk', lang: 'da' },
        nl: { label: 'Nederlands', lang: 'nl' }
    },

    themeConfig: {
        // Default English Nav
        nav: [
            { text: 'Letters', link: '/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/portfolio' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ALExandrBts/inen' }
        ],
        footer: {
            message: 'Released under Natural Law.',
            copyright: 'Copyright © 2026 Aleksandr Snigirev'
        }
    }
})
