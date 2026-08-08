import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nextstepdigital.in',
  integrations: [tailwind()],
  output: 'static',
});