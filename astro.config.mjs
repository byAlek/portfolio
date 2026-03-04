// @ts-check
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { defaultLocale, locales } from './src/lib/i18n'

export default defineConfig({
  integrations: [preact({ include: ['**/preact/*'], compat: true })],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: { enabled: false },
  outDir: 'dist',
  adapter: vercel(),
  i18n: {
    defaultLocale,
    locales,
    routing: 'manual',
  },
  output: 'server',
})
