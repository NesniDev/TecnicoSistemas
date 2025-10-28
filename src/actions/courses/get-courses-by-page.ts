import { actions, defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { courses } from '@lib/courses'

export const getCourseByPage = defineAction( {
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limit: z.number().optional().default(4),
    }),
    handler: async ({ page, limit }) => {
        
        page = page <= 0 ? 1 : page
        const totalPage = Math.ceil(courses.length / limit)

        if(page > totalPage) {
            return {
                courses: [],
                totalPage,
            }
        }

        const coursesByPage = courses.slice((page - 1) * limit, (page * limit ) )
        return {
            courses: coursesByPage,
            totalPage,
        }
    }
})