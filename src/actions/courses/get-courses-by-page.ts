import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { courses } from '@lib/courses'

export const getCourseByPage = defineAction({
  accept: 'json',
  input: z.object({
    page: z.number().optional().default(1),
    limit: z.number().optional().default(4), 
    search: z.string().optional(),
  }),
  handler: async ({ page, limit, search }) => {
    let filteredCourses = courses

    if (search) {
      const normalizeText = (text: string) =>
        text
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();

      const searchTerm = normalizeText(search);
      filteredCourses = courses.filter((course) =>
        normalizeText(course.title).includes(searchTerm)
      );
    }

    page = page <= 0 ? 1 : page
    const totalPage = Math.ceil(filteredCourses.length / limit)

    if (page > totalPage && totalPage > 0) {
      page = totalPage
    }

    const coursesByPage = filteredCourses.slice(
      (page - 1) * limit,
      page * limit
    )

    return {
      courses: coursesByPage,
      totalPage,
    }
  },
})