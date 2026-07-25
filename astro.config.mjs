// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://infobyte.neider.dev',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://infobyte.neider.dev'
    })
  ],
  adapter: vercel(),
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  imageService: true
})
