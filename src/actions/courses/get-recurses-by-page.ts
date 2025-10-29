import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { recurses } from "@lib/recurses";

export const getRecurseByPage = defineAction({
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limitRecurses: z.number().optional().default(9),
    }),
    handler: async ({ page, limitRecurses}) => {

        page <= 0 ? 1 : page
        const totalPages = Math.ceil(recurses.length / limitRecurses)
        
        
        if( page > totalPages && totalPages > 0){
            page = totalPages
        }

        const recursesByPage = recurses.slice((page - 1 ) * limitRecurses, page * limitRecurses )

        return {
            recursesByPage,
            totalPages
        }
    }
})