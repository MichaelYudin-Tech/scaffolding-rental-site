import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://your-scaffolding-site.netlify.app', // Update this later
  build: {
    assets: 'assets',
    // Exclude instruction files from build
    exclude: ['**/SANITY_INSTRUCTIONS.md', '**/CLAUDE.md']
  }
});