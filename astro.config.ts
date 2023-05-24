import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { presetIcons } from 'unocss'
import dotenv from 'dotenv'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import critters from 'astro-critters'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/modules/remark/remark-reading-time-plugin'
import {
	rehypePrettyCodePlugin,
	rehypePrettyCodeOptions,
} from './src/modules/rehype/rehype-pretty-code-plugin'

dotenv.config()

const { PUBLIC_CANONICAL_ORIGIN } = process.env

export default defineConfig({
	site: PUBLIC_CANONICAL_ORIGIN,
	scopedStyleStrategy: 'class',
	integrations: [
		partytown({}),
		UnoCSS({
			presets: [presetIcons()],
		}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		mdx({
			extendMarkdownConfig: false,
			syntaxHighlight: false,
			remarkPlugins: [remarkReadingTime],
			rehypePlugins: [[rehypePrettyCodePlugin, rehypePrettyCodeOptions]],
		}),
		sitemap(),
		compress(),
		critters(),
	],
	experimental: {
		assets: true,
	},
})
