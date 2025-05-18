import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react()],
  site: 'https://willowy-cat-c0a5b9.netlify.app/',
  base: '/',
  adapter: netlify(),
});