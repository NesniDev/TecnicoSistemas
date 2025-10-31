import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_O2U-7q2n.mjs';
import { manifest } from './manifest_DoL28P9m.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/get-news.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/courses/_slug_.astro.mjs');
const _page6 = () => import('./pages/iniciosesion.astro.mjs');
const _page7 = () => import('./pages/loginestudiante.astro.mjs');
const _page8 = () => import('./pages/post/blogtecnicosistemas.astro.mjs');
const _page9 = () => import('./pages/privacidad.astro.mjs');
const _page10 = () => import('./pages/recursos.astro.mjs');
const _page11 = () => import('./pages/registro.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.5_@types+node@24_ec5ace4d22dda66068ad7e9d83f91cca/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.14.5_@types+node@24_ec5ace4d22dda66068ad7e9d83f91cca/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/api/get-news.ts", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/courses/[slug].astro", _page5],
    ["src/pages/inicioSesion.astro", _page6],
    ["src/pages/loginEstudiante.astro", _page7],
    ["src/pages/post/blogTecnicoSistemas.astro", _page8],
    ["src/pages/privacidad.astro", _page9],
    ["src/pages/recursos.astro", _page10],
    ["src/pages/registro.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "578b143b-6f8e-4cb1-9144-befaeff4017b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
