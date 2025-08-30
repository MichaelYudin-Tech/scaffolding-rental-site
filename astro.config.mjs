import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://pigumim.netlify.app'
  build: {
    assets: 'assets',
    // Exclude instruction files from build
    exclude: ['**/SANITY_INSTRUCTIONS.md', '**/CLAUDE.md']
  }
});