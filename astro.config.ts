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

dotenv.config()

const { PUBLIC_CANONICAL_ORIGIN } = process.env

export default defineConfig({
	site: PUBLIC_CANONICAL_ORIGIN,
	integrations: [
		partytown({}),
		UnoCSS({
			presets: [presetIcons()],
		}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		mdx(),
		sitemap(),
		compress(),
		critters(),
	],
})
