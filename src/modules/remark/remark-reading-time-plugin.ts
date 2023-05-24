import type { RemarkPlugin } from '@astrojs/markdown-remark'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkReadingTime: RemarkPlugin = () => {
	return (tree, file) => {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const frontmatter: Record<string, any> = (file.data.astro as any).frontmatter
		frontmatter.minutesRead = readingTime
	}
}
