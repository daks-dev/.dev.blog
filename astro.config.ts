import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'astro/config';

import 'dotenv/config';

import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://astro.daks.dev',

  trailingSlash: 'never',

  outDir: 'build',

  // redirects: { '/old': '/new', '/old/[...slug]': '/new/[...slug]' }

  prefetch: {
    defaultStrategy: 'viewport'
  },

  vite: {
    logLevel: 'info',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        $lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
        $app: fileURLToPath(new URL('./src/lib/app', import.meta.url))
      }
    },
    ssr: {
      noExternal: ['@daks.dev/astro.sdk']
    },
    optimizeDeps: {
      exclude: ['@daks.dev/astro.sdk']
    },
    // server: { fs: { strict: false } }
    // plugins: []
    define: { 'process.env': process.env }
  },

  integrations: [
    react({
      include: ['**/react/**']
    }),
    svelte({
      include: ['**/svelte/**']
    }),
    mdx(),
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    compress({
      Logger: 1
    })
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
