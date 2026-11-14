import { defineConfig } from 'astro/config';

// Include styles in each generated HTML page so Vercel does not depend on
// a separately cached CSS asset when a new deployment is published.
export default defineConfig({
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
