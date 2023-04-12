import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { presetIcons } from 'unocss'
import dotenv from 'dotenv'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import critters from 'astro-critters'

dotenv.config()

const { PUBLIC_CANONICAL_ORIGIN } = process.env

export default defineConfig({
	site: PUBLIC_CANONICAL_ORIGIN,
	integrations: [
		UnoCSS({
			presets: [presetIcons()],
		}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		critters(),
		compress(),
	],
})
