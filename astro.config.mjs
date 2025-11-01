// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  adapter: vercel(),
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  }
})
