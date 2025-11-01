// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import mdx from '@astrojs/mdx'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  adapter: vercel(),
  output: 'server'
})
