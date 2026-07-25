import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";
import { firebase } from "../firebase/config";

const privateRoutes = ['/loginEstudiante', '/courses', '/recursos']
const notAuthenticatedRoutes = ['/inicioSesion', '/registro']

export const onRequest = defineMiddleware((context, next) => {

    const user = firebase.auth.currentUser
    let isLoggedIn = !!user
    let name = user?.displayName ?? ''
    let photoURL = user?.photoURL ?? ''

    if (!isLoggedIn) {
        const sessionCookie = context.cookies.get('session')?.value
        if (sessionCookie) {
            try {
                const session = JSON.parse(sessionCookie)
                if (session.uid) {
                    isLoggedIn = true
                    name = session.displayName ?? ''
                    photoURL = session.photoURL ?? ''
                }
            } catch {}
        }
    }

    context.locals.isLoggedIn = isLoggedIn
    context.locals.displayName = name
    context.locals.photoURL = photoURL

    const isPrivate = privateRoutes.some(route =>
        context.url.pathname.startsWith(route)
      );
    
    if(isPrivate && !isLoggedIn){
    return context.redirect('/inicioSesion')
    }
    if(!isLoggedIn && privateRoutes.includes(context.url.pathname)){
        return context.redirect('/inicioSesion')
    }

    if(isLoggedIn && notAuthenticatedRoutes.includes(context.url.pathname)){
        return context.redirect('/')
    }
    return next();
})
