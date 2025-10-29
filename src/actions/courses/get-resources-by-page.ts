import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { resources } from "@lib/resources";

export const getResourceByPage = defineAction({
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limitResources: z.number().optional().default(9),
    }),
    handler: async ({ page, limitResources}) => {

        page <= 0 ? 1 : page
        const totalPages = Math.ceil(resources.length / limitResources)
        
        
        if( page > totalPages && totalPages > 0){
            page = totalPages
        }

        const resourcesByPage = resources.slice((page - 1 ) * limitResources, page * limitResources )

        return {
            resourcesByPage,
            totalPages
        }
    }
})