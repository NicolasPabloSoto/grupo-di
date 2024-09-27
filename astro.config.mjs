// import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';

// import react from '@astrojs/react';

// // https://astro.build/config
// export default defineConfig({
//     site: 'https://example.com',
//     integrations: [mdx(), sitemap(), react()],
// });

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions'; // Agregamos el adaptador de Netlify

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    output: 'server', // Cambia el modo de salida a 'server'
    adapter: netlify(), // Usamos el adaptador de Netlify para funciones
    integrations: [mdx(), sitemap(), react()],
});
