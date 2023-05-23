import rehypePrettyCode from 'rehype-pretty-code'
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'

export const rehypePrettyCodeOptions: Partial<RehypePrettyCodeOptions> = {
	theme: {
		dark: 'vitesse-dark',
		light: 'vitesse-light',
	},
	keepBackground: false,
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }]
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className.push('highlighted')
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ['word']
	},
}

export const rehypePrettyCodePlugin = rehypePrettyCode
