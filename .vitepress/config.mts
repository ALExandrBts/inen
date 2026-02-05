import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Aleksandr Snigirev",
    description: "Dossier & Claim of Right",

    locales: {
        root: { label: 'English', lang: 'en' },
        uk: { label: 'Українська', lang: 'uk' },
        de: { label: 'Deutsch', lang: 'de' },
        is: { label: 'Íslenska', lang: 'is' },
        no: { label: 'Norsk', lang: 'no' },
        sv: { label: 'Svenska', lang: 'sv' },
        fi: { label: 'Suomi', lang: 'fi' },
        da: { label: 'Dansk', lang: 'da' },
        nl: { label: 'Nederlands', lang: 'nl' }
    },

    themeConfig: {
        nav: [
            { text: 'Letters', link: '/letters/mfa_iceland' },
            { text: 'Portfolio', link: '#portfolio' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ALExandrBts/inen' }
        ]
    }
})
