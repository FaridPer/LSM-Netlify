import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react()],
  site: 'https://faridper.github.io',
  base: '/LSM/',
  adapter: netlify(),
});