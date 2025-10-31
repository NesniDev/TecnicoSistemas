import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { saveForm } from "../../supabase/services";

export const getForm = defineAction({
    accept: 'json',
    input: z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string().optional().default(''),
    }),
    handler: async ({ name, email, message }) => {
        
        const { success, error, duplicate } = await saveForm(name, email, message)

        if (!success) {
            throw new ActionError({
                code: 'BAD_REQUEST',
                message: error ?? 'Hubo un error al guardar el formulario',
            })
        }
        
        if (duplicate) {
            throw new ActionError({
                code: 'BAD_REQUEST',
                message: 'El correo electronico ya existe',
            })
        }

        return {
            success: true,
            message: 'Formulario enviado correctamente',
        }
    }
})