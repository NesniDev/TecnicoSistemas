import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";
import { firebase } from "../../firebase/config";
import { AstroError } from "astro/errors";

export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6),
        // remember_me: z.boolean().optional()
    }),
    handler: async ({name, email, password}) => {
        //creacion de usuarios
        try {

            const userCredential = await createUserWithEmailAndPassword(
                firebase.auth,
                email,
                password,
                
                )

            //actuyalizar el nombre (displayname)


            //verficiar el email
            const user = userCredential.user;

            return {
              success: true,
              uid: user.uid,
              email: user.email,
              name
            };

        } catch (error){
            const firebaseError = error as AuthError 

            if(firebaseError.code === 'auth/email-already-in-use'){

                throw new AstroError('El usuario ya existe')
            }
            
            throw new AstroError('Error al registrar el usuario') 

        }
        
        // return {ok: true, msg: 'usuario registrado'}
    }
})