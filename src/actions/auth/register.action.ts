import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, type AuthError } from "firebase/auth";
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
    handler: async ({name, email, password}, context) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                firebase.auth,
                email,
                password,
            )

            const user = userCredential.user;

            await updateProfile(user, { displayName: name })

            try {
                await sendEmailVerification(user, {
                    url: `${import.meta.env.WEBSITE_URL}/loginEstudiante`
                })
            } catch (e) {
                console.error('Error sending verification email:', e)
            }

            context.cookies.set('session', JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: name,
                photoURL: user.photoURL,
            }), {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
            })

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
    }
})