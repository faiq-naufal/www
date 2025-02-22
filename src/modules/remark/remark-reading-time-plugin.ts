import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import type { RemarkPlugin } from "@astrojs/markdown-remark"

export const remarkReadingTime: RemarkPlugin = () => {
  return (tree, { data }) => {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)

    const frontmatter = data.astro!.frontmatter
    frontmatter!.minutesRead = readingTime
  }
}
