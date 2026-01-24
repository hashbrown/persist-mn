import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://persist-mn.pages.dev',
  output: 'static',
  integrations: [tailwind()],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});