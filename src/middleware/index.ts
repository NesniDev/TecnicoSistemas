import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ['/loginEstudiante', '/courses', '/recursos']
const notAuthenticatedRoutes: string[] = []

export const onRequest = defineMiddleware((context, next) => {
    let isLoggedIn = false
    let name = ''
    let photoURL = ''

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

    context.locals.isLoggedIn = isLoggedIn
    context.locals.displayName = name
    context.locals.photoURL = photoURL

    const isPrivate = privateRoutes.some(route =>
        context.url.pathname.startsWith(route)
    );

    if(isPrivate && !isLoggedIn){
        return context.redirect('/')
    }

    if(isLoggedIn && notAuthenticatedRoutes.includes(context.url.pathname)){
        return context.redirect('/')
    }
    return next();
})
