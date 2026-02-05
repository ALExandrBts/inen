import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Aleksandr Snigirev",
    description: "Dossier & Claim of Right",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Letters', link: '/letters/mfa_iceland' },
            { text: 'Portfolio', link: '#portfolio' }
        ],
        sidebar: [
            {
                text: 'Dossier',
                items: [
                    { text: 'Story & Status', link: '/' },
                    { text: 'Legal Position', link: '/#8-юридична-та-світоглядна-позиція-legal-philosophical-position' }
                ]
            },
            {
                text: 'Official Letters',
                items: [
                    { text: 'Iceland MFA', link: '/letters/mfa_iceland' },
                    { text: 'Germany Appeal', link: '/letters/germany_appeal' },
                    { text: 'MFA Contacts', link: '/letters/mfa_contacts' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ALExandrBts/inen' }
        ]
    }
})
