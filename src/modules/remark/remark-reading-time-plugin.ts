import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkReadingTime = () => {
  return (tree: any, file: any) => {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)

    const frontmatter: Record<string, any> = (file.data.astro as any).frontmatter
    frontmatter.minutesRead = readingTime
  }
}
