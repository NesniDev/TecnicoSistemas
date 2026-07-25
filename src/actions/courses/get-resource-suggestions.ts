import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { resources } from '@lib/resources'

export const getResourceSuggestions = defineAction({
  accept: 'json',
  input: z.object({
    query: z.string().min(1).max(50),
  }),
  handler: async ({ query }) => {
    const normalizeText = (text: string) =>
      text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

    const searchTerm = normalizeText(query)

    const matches = resources
      .filter((resource) =>
        normalizeText(resource.title).includes(searchTerm)
      )
      .slice(0, 5)
      .map((resource) => ({
        title: resource.title,
        type: resource.type,
        category: resource.category,
      }))

    return { suggestions: matches }
  },
})
