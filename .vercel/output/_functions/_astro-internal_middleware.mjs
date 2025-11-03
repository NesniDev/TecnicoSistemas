import { d as defineMiddleware, s as sequence } from './chunks/index_ChodLnCy.mjs';
import { f as firebase } from './chunks/config_kox2btI2.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_5196gqqh.mjs';
import 'kleur/colors';
import './chunks/astro/server_CRG_qOWb.mjs';
import 'clsx';
import 'cookie';

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
