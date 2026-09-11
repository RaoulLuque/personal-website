// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://raoulluque.github.io',
  base: '/personal-website',
  vite: {
    plugins: [tailwindcss()],
  },
});
