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
    if (!node || !node.properties || !node.properties.className) return
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedChars(node) {
    if (!node || !node.properties || !node.properties.className) return
    node.properties.className = ['word']
  },
}

export const rehypePrettyCodePlugin = rehypePrettyCode
