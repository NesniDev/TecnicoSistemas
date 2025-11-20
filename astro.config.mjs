// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://tecnico-sistemas.vercel.app',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://tecnico-sistemas.vercel.app/'
    })
  ],
  adapter: vercel(),
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  imageService: true
})
