import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jasonknashville.com',
  output: 'static',
  integrations: [sitemap({
    customPages: ['https://jasonknashville.com/2343-fairchild-cir-102/'],
    filter: (page) => !page.includes('/tools/social-photo-prep/'),
  })],
});
