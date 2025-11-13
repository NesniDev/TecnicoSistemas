import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { resources } from "@lib/resources";

export const getResourceByPage = defineAction({
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limitResources: z.number().optional().default(9),
        search: z.string().optional(),
        type: z.string().optional(),
        mode: z.string().optional(),
        category: z.string().optional(),
    }),
    handler: async ({ page, limitResources, search, category }) => {
        let resourcesFiltered = [...resources];

        const normalizeText = (text: string) =>
            text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        // Apply search filter
        if (search) {
            const searchTerm = normalizeText(search);
            resourcesFiltered = resourcesFiltered.filter((resource) =>
                normalizeText(resource.title).includes(searchTerm)
            );
        }

        // Apply category filter
        if (category) {
            resourcesFiltered = resourcesFiltered.filter(
                (resource) => resource.category?.toLowerCase() === category.toLowerCase()
            );
        }

        page <= 0 ? 1 : page
        const totalPages = Math.ceil(resourcesFiltered.length / limitResources)
        
        
        if( page > totalPages && totalPages > 0){
            page = totalPages
        }

        const resourcesByPage = resourcesFiltered.slice((page - 1 ) * limitResources, page * limitResources )

        return {
            resourcesByPage,
            totalPages,
                    }
    }
})