import { c as createComponent, b as createAstro, d as renderComponent, r as renderHead, h as renderSlot, a as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderScript, g as renderTransition } from './astro/server_CRG_qOWb.mjs';
import 'kleur/colors';
/* empty css                                */
import { $ as $$ClientRouter } from './ClientRouter_B81W6aE6.mjs';
/* empty css                            */
import 'clsx';
import './index_CYyG6us9.mjs';
import { $ as $$Picture } from './_astro_assets_CM88L5NH.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/systems.svg"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, className, openBlank } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(openBlank ? "_blank" : "_self", "target")}${addAttribute(`bg-[#64FFDA] active:scale-[0.95] rounded-lg hover:opacity-70 text-sm text-black font-semibold animate-bounce-fade-in transition ${className ? className : "px-3 py-2"}`, "class")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/components/Shared/Button.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-5xl w-full mx-auto"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/components/Shared/Container.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { isLoggedIn, displayName, photoURL } = Astro2.locals;
  const photoURL2 = photoURL && photoURL.trim() !== "" ? photoURL : "https://api.dicebear.com/7.x/adventurer/svg?seed=Neider";
  return renderTemplate`${maybeRenderHead()}<div class="border-b border-gray-500/30 animate-fade-in-up" data-astro-cid-m43rudtx> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-m43rudtx": true }, { "default": ($$result2) => renderTemplate` <header class="flex justify-between items-center py-4 px-8" data-astro-cid-m43rudtx> <div class="absolute inset-0 sm:relative sm:flex sm:justify-between sm:items-center sm:gap-5" data-astro-cid-m43rudtx> <img src="/systems.svg" alt="Logo Principal" class="size-10 hidden sm:block" data-astro-cid-m43rudtx> <nav data-astro-cid-m43rudtx> <ul class="hidden sm:flex-row sm:justify-between sm:items-center sm:gap-5" data-astro-cid-m43rudtx> <li data-astro-cid-m43rudtx> <a href="/" data-astro-cid-m43rudtx>Inicio</a> </li> <li data-astro-cid-m43rudtx> <a href="/post/blogTecnicoSistemas" data-astro-cid-m43rudtx>Blog</a> </li> <li data-astro-cid-m43rudtx> ${isLoggedIn && renderTemplate`<a href="/loginEstudiante" data-astro-cid-m43rudtx>Perfil</a>`} </li> <li data-astro-cid-m43rudtx> ${isLoggedIn && renderTemplate`<a href="/recursos" data-astro-cid-m43rudtx>Recursos</a>`} </li> </ul> </nav> </div> ${isLoggedIn ? renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "src": photoURL2, "alt": "Logo Principal", "class": "size-12 rounded-full", "inferSize": true, "data-astro-cid-m43rudtx": true, "data-astro-transition-scope": renderTransition($$result2, "vreigrdh", "", `image-${displayName}`) })}` : renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": "/inicioSesion", "data-astro-cid-m43rudtx": true }, { "default": ($$result3) => renderTemplate` Ingresar ` })}`} <div class="flex sm:hidden menu_toggle" data-astro-cid-m43rudtx> <span class="line" data-astro-cid-m43rudtx></span> <span class="line" data-astro-cid-m43rudtx></span> <span class="line" data-astro-cid-m43rudtx></span> </div> </header> ` })} </div>  ${renderScript($$result, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/components/Shared/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/components/Shared/Header.astro", "self");

export { $$Layout as $, $$Header as a, $$Container as b, $$Button as c };
