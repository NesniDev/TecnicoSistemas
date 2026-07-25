import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { courses } from '@lib/courses'

export const getCourseSuggestions = defineAction({
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

    const matches = courses
      .filter((course) =>
        normalizeText(course.title).includes(searchTerm)
      )
      .slice(0, 5)
      .map((course) => ({
        title: course.title,
        slug: course.slug,
        category: course.category,
      }))

    return { suggestions: matches }
  },
})
