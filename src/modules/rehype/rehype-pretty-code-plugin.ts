import rehypePrettyCode from 'rehype-pretty-code'
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'

export const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
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

export const rehypePrettyCodePlugin = () => {
  return rehypePrettyCode(rehypePrettyCodeOptions)
}
