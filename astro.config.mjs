import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://academiaquest.app',
  output: 'static',
  build: {
    // El CSS de la landing va dentro del HTML: una petición menos que bloquea el primer pintado
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Página funcional (flujo de recuperación de Supabase), no contenido indexable
      filter: (page) => !page.includes('/docs/reset-password'),
    }),
  ],
});
