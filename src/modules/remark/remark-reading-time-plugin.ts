import type { Root } from 'mdast'
import type { VFile } from 'vfile'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkReadingTime = () => {
  return (tree: Root, file: VFile) => {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)

    const frontmatter: Record<string, any> = (file.data.astro as any).frontmatter
    frontmatter.minutesRead = readingTime
  }
}
