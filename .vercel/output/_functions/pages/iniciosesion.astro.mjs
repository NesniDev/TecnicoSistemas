import { c as createComponent, b as createAstro, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate, d as renderComponent, f as renderScript } from '../chunks/astro/server_CRG_qOWb.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_DonB90RJ.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Google = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Google;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/assets/socials/Google.astro", void 0);

const $$Astro = createAstro();
const $$InicioSesion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InicioSesion;
  Astro2.cookies.get("email")?.value ?? "";
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Inicio de Sesi\xF3n", "page": "Inicio de Sesi\xF3n", "data-astro-cid-i2rde6c6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<button id="btn-google" class="active:scale-[0.97] cursor-pointer w-sm py-4 bg-[#1073D4] transition text-white rounded-lg text-center flex justify-center items-center gap-2" data-astro-cid-i2rde6c6> ${renderComponent($$result2, "Google", $$Google, { "class": "size-6", "data-astro-cid-i2rde6c6": true })} Iniciar sesión con Google</button>  ` })}  ${renderScript($$result, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/pages/inicioSesion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/pages/inicioSesion.astro", void 0);

const $$file = "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/pages/inicioSesion.astro";
const $$url = "/inicioSesion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InicioSesion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
