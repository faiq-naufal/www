import { z, defineCollection } from 'astro:content'

const writingCollection = defineCollection({
  schema: z.object({
    title: z.string().max(58),
    description: z.string().max(155),
    draft: z.boolean(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
})

const writingConfig = {
  postPerPage: 10,
}

export const collections = {
  writing: writingCollection,
}

export const config = {
  writing: writingConfig,
}
