import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";
import { firebase } from "../firebase/config";

const privateRoutes = ['/loginEstudiante']
const notAuthenticatedRoutes = ['/inicioSesion', '/registro']

export const onRequest = defineMiddleware((context, next) => {

    const user = firebase.auth.currentUser
    const isLoggedIn = !!user

    context.locals.isLoggedIn = isLoggedIn
    console.log(context.url.pathname)
    
    if(!isLoggedIn && privateRoutes.includes(context.url.pathname)){
        return context.redirect('/inicioSesion')
    }

    if(isLoggedIn && notAuthenticatedRoutes.includes(context.url.pathname)){
        return context.redirect('/')
    }
    return next();
})
