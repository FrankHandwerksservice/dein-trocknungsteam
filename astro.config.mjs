import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://dein-trocknungsteam.de',
    integrations: [
        sitemap({
            // Rechtsseiten haben keinen SEO-Wert und gehören nicht in die Sitemap
            filter: (page) => !page.includes('/impressum/') && !page.includes('/datenschutz/'),
            serialize: (item) => ({
                ...item,
                lastmod: new Date(),
            }),
        }),
    ],
});
