import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { resources } from "@lib/resources";

export const getResourceByPage = defineAction({
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limitResources: z.number().optional().default(9),
        search: z.string().optional(),
    }),
    handler: async ({ page, limitResources, search}) => {

        let resourcesFiltered = resources

        if (search) {
              const normalizeText = (text: string) =>
                text
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase();
        
              const searchTerm = normalizeText(search);
              resourcesFiltered = resources.filter((resource) =>
                normalizeText(resource.title).includes(searchTerm)
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