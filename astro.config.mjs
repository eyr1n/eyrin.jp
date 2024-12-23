import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import behead from 'remark-behead';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://eyrin.jp',
  build: { format: 'file' },
  integrations: [sitemap(), tailwind(), react()],
  markdown: {
    remarkPlugins: [[behead, { minDepth: 2 }], remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
