import { d as defineMiddleware, s as sequence } from './chunks/index_BZv0wWh1.mjs';
import { f as firebase } from './chunks/config_kox2btI2.mjs';
import './chunks/astro-designed-error-pages_gczGvZ6D.mjs';
import './chunks/astro/server_CgC3iYY4.mjs';

const privateRoutes = ["/loginEstudiante", "/courses", "/recursos"];
const notAuthenticatedRoutes = ["/inicioSesion", "/registro"];
const onRequest$1 = defineMiddleware((context, next) => {
  const user = firebase.auth.currentUser;
  const isLoggedIn = !!user;
  const name = user?.displayName ?? "";
  const photoURL = user?.photoURL ?? "";
  context.locals.isLoggedIn = isLoggedIn;
  context.locals.displayName = name;
  context.locals.photoURL = photoURL;
  const isPrivate = privateRoutes.some(
    (route) => context.url.pathname.startsWith(route)
  );
  if (isPrivate && !isLoggedIn) {
    return context.redirect("/inicioSesion");
  }
  if (!isLoggedIn && privateRoutes.includes(context.url.pathname)) {
    return context.redirect("/inicioSesion");
  }
  if (isLoggedIn && notAuthenticatedRoutes.includes(context.url.pathname)) {
    return context.redirect("/");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
