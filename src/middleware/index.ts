import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ['/loginEstudiante']

export const onRequest = defineMiddleware((context, next) => {

    return next();
})
