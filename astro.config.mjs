// @ts-check
import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { DEFAULT_LOCALE, LOCALES } from './src/lib/i18n'

export default defineConfig({
  integrations: [preact({ include: ['**/preact/*'], compat: true })],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: { enabled: false },
  outDir: 'dist',
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: 'static',
})
