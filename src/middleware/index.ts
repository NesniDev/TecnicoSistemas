import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";
import { firebase } from "../firebase/config";

const privateRoutes = ['/loginEstudiante', '/courses', '/recursos']
const notAuthenticatedRoutes = ['/inicioSesion', '/registro']

export const onRequest = defineMiddleware((context, next) => {

    const user = firebase.auth.currentUser
    const isLoggedIn = !!user
    const name = user?.displayName ?? ''
    const photoURL = user?.photoURL ?? ''

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
