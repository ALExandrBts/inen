import { defineConfig } from 'vitepress'
export default defineConfig({ title: "Олександр Снігірьов", locales: {
    root: {
      label: 'Українська',
      lang: 'uk',
      title: 'Олександр Снігірьов',
      
      themeConfig: {
        docFooter: { prev: 'Попередня', next: 'Наступна' },
        returnToTopLabel: 'Нагору',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Листи', link: '/letters/mfa_iceland' },
            { text: 'Портфоліо', link: '/portfolio' }
        ],
        sidebar: [
            { text: 'Досьє', items: [
                { text: 'Історія', link: '/history' },
                { text: 'Портфоліо', link: '/portfolio' }
            ]},
            { text: 'Листи', items: [{ text: 'МЗС Ісландії', link: '/letters/mfa_iceland' }] }
        ]
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
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/en/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/en/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/en/history' },
                { text: 'Portfolio', link: '/en/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/en/letters/mfa_iceland' }] }
        ]
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      title: 'Aleksandr Snigirev',
      link: '/de/',
      themeConfig: {
        docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
        returnToTopLabel: 'Nach oben',
        sidebarMenuLabel: 'Menü',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/de/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/de/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/de/history' },
                { text: 'Portfolio', link: '/de/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/de/letters/mfa_iceland' }] }
        ]
      }
    },
    is: {
      label: 'Íslenska',
      lang: 'is',
      title: 'Aleksandr Snigirev',
      link: '/is/',
      themeConfig: {
        docFooter: { prev: 'Fyrri síða', next: 'Næsta síða' },
        returnToTopLabel: 'Efst á síðu',
        sidebarMenuLabel: 'Valmynd',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/is/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/is/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/is/history' },
                { text: 'Portfolio', link: '/is/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/is/letters/mfa_iceland' }] }
        ]
      }
    },
    no: {
      label: 'Norsk',
      lang: 'no',
      title: 'Aleksandr Snigirev',
      link: '/no/',
      themeConfig: {
        docFooter: { prev: 'Forrige side', next: 'Neste side' },
        returnToTopLabel: 'Til toppen',
        sidebarMenuLabel: 'Meny',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/no/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/no/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/no/history' },
                { text: 'Portfolio', link: '/no/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/no/letters/mfa_iceland' }] }
        ]
      }
    },
    sv: {
      label: 'Svenska',
      lang: 'sv',
      title: 'Aleksandr Snigirev',
      link: '/sv/',
      themeConfig: {
        docFooter: { prev: 'Föregående sida', next: 'Nästa sida' },
        returnToTopLabel: 'Till toppen',
        sidebarMenuLabel: 'Meny',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/sv/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/sv/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/sv/history' },
                { text: 'Portfolio', link: '/sv/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/sv/letters/mfa_iceland' }] }
        ]
      }
    },
    fi: {
      label: 'Suomi',
      lang: 'fi',
      title: 'Aleksandr Snigirev',
      link: '/fi/',
      themeConfig: {
        docFooter: { prev: 'Edellinen sivu', next: 'Seuraava sivu' },
        returnToTopLabel: 'Alkuun',
        sidebarMenuLabel: 'Valikko',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/fi/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/fi/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/fi/history' },
                { text: 'Portfolio', link: '/fi/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/fi/letters/mfa_iceland' }] }
        ]
      }
    },
    da: {
      label: 'Dansk',
      lang: 'da',
      title: 'Aleksandr Snigirev',
      link: '/da/',
      themeConfig: {
        docFooter: { prev: 'Forrige side', next: 'Næste side' },
        returnToTopLabel: 'Til toppen',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/da/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/da/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/da/history' },
                { text: 'Portfolio', link: '/da/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/da/letters/mfa_iceland' }] }
        ]
      }
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      title: 'Aleksandr Snigirev',
      link: '/nl/',
      themeConfig: {
        docFooter: { prev: 'Vorige pagina', next: 'Volgende pagina' },
        returnToTopLabel: 'Naar boven',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance', // Keeping this default or localizing if needed
        nav: [
            { text: 'Letters', link: '/nl/letters/mfa_iceland' },
            { text: 'Portfolio', link: '/nl/portfolio' }
        ],
        sidebar: [
            { text: 'Dossier', items: [
                { text: 'Story', link: '/nl/history' },
                { text: 'Portfolio', link: '/nl/portfolio' }
            ]},
            { text: 'Letters', items: [{ text: 'Iceland MFA', link: '/nl/letters/mfa_iceland' }] }
        ]
      }
    }}, themeConfig: { socialLinks: [{ icon: 'github', link: 'https://github.com/ALExandrBts/inen' }] } })