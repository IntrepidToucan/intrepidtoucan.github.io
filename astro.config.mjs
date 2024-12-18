// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://makingmythology.com',
  integrations: [mdx()],
  trailingSlash: 'always'
});