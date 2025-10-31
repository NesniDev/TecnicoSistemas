import { c as createComponent, e as createAstro, g as renderComponent, r as renderHead, k as renderSlot, d as renderTemplate } from './astro/server_DAp9YVW7.mjs';
/* empty css                                */
import { $ as $$ClientRouter } from './ClientRouter_DVOqAX5F.mjs';
/* empty css                                */

const $$Astro = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const { title, page } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/systems.svg"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="mx-5 md:mx-0 animate-blurred-fade-in"> <section class="max-w-sm mx-auto flex flex-col justify-center items-center h-screen"> <h1 class="text-3xl text-white text-center">
Bienvenido al ${page} de Estudiantes
</h1> <p class="text-center mt-5 mb-10">
Inicia sesión para acceder a tu panel de estudiante personalizado,
        guardar tu progreso y conectarte con la comunidad estudiantil.
</p> ${renderSlot($$result, $$slots["default"])} <div class="text-center flex flex-col justify-between gap-3 mt-10"> <p>📊 Acceso instantáneo a tu panel de estudiante personalizado.</p> <p>🔐 Protege tus datos y privacidad.</p> <p>💻 Acceso a herramientas y recursos de aprendizaje.</p> </div> </section> </body></html>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
