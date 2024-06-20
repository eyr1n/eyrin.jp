import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import behead from 'remark-behead';

// https://astro.build/config
export default defineConfig({
  site: 'https://eyrin.jp',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    remarkPlugins: [[behead, { minDepth: 2 }]],
  },
});
