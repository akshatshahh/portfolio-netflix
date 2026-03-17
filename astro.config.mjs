import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: 'https://akshatshah-netflix.netlify.app',
  integrations: [tailwind()],
})
