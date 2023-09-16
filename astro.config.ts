import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { presetIcons } from 'unocss'
import * as dotenv from 'dotenv'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import { FontaineTransform } from 'fontaine'
import { remarkReadingTime } from './src/modules/remark/remark-reading-time-plugin'
import {
  rehypePrettyCodePlugin,
  rehypePrettyCodeOptions,
} from './src/modules/rehype/rehype-pretty-code-plugin'

dotenv.config()

const { PUBLIC_CANONICAL_ORIGIN } = process.env

export default defineConfig({
  site: PUBLIC_CANONICAL_ORIGIN,
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Segoe UI',
          'Arial',
          'Roboto',
          'Open Sans',
        ],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
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
      rehypePlugins: [[rehypePrettyCodePlugin, rehypePrettyCodeOptions]],
    }),
    sitemap(),
  ],
})
