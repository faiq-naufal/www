import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { presetIcons } from 'unocss'
import * as dotenv from 'dotenv'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/modules/remark/remark-reading-time-plugin'
import { rehypePrettyCodePlugin } from './src/modules/rehype/rehype-pretty-code-plugin'
import critters from 'astro-critters'

dotenv.config()
const { PUBLIC_CANONICAL_ORIGIN } = process.env

export default defineConfig({
  site: PUBLIC_CANONICAL_ORIGIN,
  prefetch: true,
  integrations: [
    partytown({}),
    UnoCSS({
      presets: [presetIcons()],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      extendMarkdownConfig: false,
      syntaxHighlight: false,
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [rehypePrettyCodePlugin],
    }),
    sitemap(),
    critters(),
  ],
})
