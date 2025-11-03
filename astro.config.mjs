// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import mdx from '@astrojs/mdx'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  integrations: [mdx()],
  adapter: vercel({}),
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  }
=======
  integrations: [mdx(), tailwind()],
  adapter: vercel(),
  output: 'server'
>>>>>>> cf921d32a6d6aa9506a0ecbba2c5bcb974808791
})
