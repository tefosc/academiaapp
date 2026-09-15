import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://academiaquest.app',
  output: 'static',
  integrations: [
    sitemap({
      // Página funcional (flujo de recuperación de Supabase), no contenido indexable
      filter: (page) => !page.includes('/docs/reset-password'),
    }),
  ],
});
