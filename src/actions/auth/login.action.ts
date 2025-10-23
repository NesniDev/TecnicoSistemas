import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { signInWithEmailAndPassword, type AuthError } from "firebase/auth";
import { firebase } from "../../firebase/config";

export const loginUser = defineAction({
    accept: 'form',
    input: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        remember_me: z.boolean().optional()
    }),
    handler: async ({ email, password, remember_me}, context) => {
        //cookies
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

        try{

            const userCredential = await signInWithEmailAndPassword(firebase.auth, email, password)


           const user = userCredential.user;

            return {
              success: true,
              uid: user.uid,
              email: user.email,
            }
        }catch(error){
            const firebaseError = error as AuthError

            console.log(error)
            if(firebaseError.code === 'auth/invalid-credential'){
                throw new Error('Credenciales Incorrectas')
            }
            if(firebaseError.code === 'auth/user-not-found'){
                throw new Error('Usuario no encontrado')
            }
            if(firebaseError.code === 'auth/email-already-in-use'){
                throw new Error('El usuario ya existe')
            }
            throw new Error('Error al iniciar sesión')
        }

    }
})



