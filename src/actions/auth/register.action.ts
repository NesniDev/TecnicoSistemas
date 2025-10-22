import { defineAction } from "astro:actions";
import { z } from "astro:content";

export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
        // name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6),
        remember_me: z.boolean().optional()
    }),
    handler: async ({email, password, remember_me}, context) => {

        console.log(remember_me)
        if(remember_me){
            context.cookies.set('email', email, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                path: '/',
            })
        }else{
            context.cookies.delete('email', {
                path: '/'
            })
        }
        
        return {ok: true, msg: 'usuario registrado'}
    }
})