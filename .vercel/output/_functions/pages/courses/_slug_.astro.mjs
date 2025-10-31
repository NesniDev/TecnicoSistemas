import { c as createComponent, e as createAstro, m as maybeRenderHead, f as spreadAttributes, d as renderTemplate, g as renderComponent, i as renderScript, h as addAttribute, j as renderTransition } from '../../chunks/astro/server_CgC3iYY4.mjs';
import { $ as $$Check } from '../../chunks/Check_BqAQkBRc.mjs';
import { $ as $$Layout, b as $$Container, a as $$Header } from '../../chunks/Header_CaGUpBKa.mjs';
import { c as courses } from '../../chunks/courses_C6Ea-vG9.mjs';
/* empty css                                     */
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro();
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 9l6 6l6 -6"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/assets/icons/ChevronDown.astro", void 0);

const $$Astro$2 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-badge"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 17v-13l-5 3l-5 -3v13l5 3z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/assets/icons/Badge.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProfessionalImpact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProfessionalImpact;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-aperture"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M3.6 15h10.55"></path><path d="M6.551 4.938l3.26 10.034"></path><path d="M17.032 4.636l-8.535 6.201"></path><path d="M20.559 14.51l-8.535 -6.201"></path><path d="M12.257 20.916l3.261 -10.034"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/assets/icons/ProfessionalImpact.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const page = courses.find((item) => item.slug === slug);
  console.log(page);
  if (!page) {
    return Astro2.redirect("/404");
  }
  const {
    title,
    description,
    img,
    name,
    modules,
    learn,
    courseSyllabus,
    targetAudience,
    prerequisites,
    professional
  } = page;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Courses", "data-astro-cid-uh4mv4aq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-uh4mv4aq": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "data-astro-cid-uh4mv4aq": true })} ${maybeRenderHead()}<main class="mx-10 md:mx-auto" data-astro-cid-uh4mv4aq> <section data-astro-cid-uh4mv4aq> <section class="my-2" data-astro-cid-uh4mv4aq> <div class="flex flex-col md:flex-row h-auto md:h-96 justify-center items-center gap-10" data-astro-cid-uh4mv4aq> <div id="clippy" class="overflow-hidden" data-astro-cid-uh4mv4aq> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} class="md:size-72 size-56 object-cover" data-astro-cid-uh4mv4aq${addAttribute(renderTransition($$result3, "4sokjwe5", "", `image-${slug}`), "data-astro-transition-scope")}> </div> <div class="md:w-[50%]" data-astro-cid-uh4mv4aq> <h2 class="text-center md:text-left text-4xl md:text-5xl text-white my-3" data-astro-cid-uh4mv4aq> ${title} </h2> <p class="text-center md:text-left" data-astro-cid-uh4mv4aq>${description}</p> </div> </div> </section> <section data-astro-cid-uh4mv4aq> <div data-astro-cid-uh4mv4aq> <h2 class="text-white text-3xl" data-astro-cid-uh4mv4aq>Lo que aprenderás</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center mt-7" data-astro-cid-uh4mv4aq> ${learn.map((item) => {
    return renderTemplate`<p class="flex gap-2 " data-astro-cid-uh4mv4aq> <small data-astro-cid-uh4mv4aq> ${renderComponent($$result3, "Check", $$Check, { "class": "text-[#009dff]", "data-astro-cid-uh4mv4aq": true })} </small> <span class="text-[16px]" data-astro-cid-uh4mv4aq>${item}</span> </p>`;
  })} </div> </div> </section> </section> <section class="flex-col flex md:flex-row justify-between gap-7" data-astro-cid-uh4mv4aq> <section class="my-2" data-astro-cid-uh4mv4aq> <div data-astro-cid-uh4mv4aq> <h2 class="text-white text-3xl" data-astro-cid-uh4mv4aq>Temario del curso</h2> <div class="space-y-4 mt-6" data-astro-cid-uh4mv4aq> ${courseSyllabus.map((item, index) => {
    return renderTemplate`<details class="group rounded-lg bg-slate-900/80 p-4" data-astro-cid-uh4mv4aq> <summary class="cursor-pointer list-none font-bold text-white" data-astro-cid-uh4mv4aq> <div class="flex items-center justify-between" data-astro-cid-uh4mv4aq> <span data-astro-cid-uh4mv4aq>
Módulo ${index + 1}:${" "} <span class="font-light" data-astro-cid-uh4mv4aq>${item.title}</span> </span> <small data-astro-cid-uh4mv4aq> ${renderComponent($$result3, "ChevronDown", $$ChevronDown, { "data-astro-cid-uh4mv4aq": true })} </small> </div> </summary> <p class="mt-2" data-astro-cid-uh4mv4aq>${item.description}</p> </details>`;
  })} </div> </div> <section data-astro-cid-uh4mv4aq> <div class="flex flex-col gap-10 mt-5" data-astro-cid-uh4mv4aq> <h2 class="text-white text-3xl" data-astro-cid-uh4mv4aq>¿A quién está dirigido</h2> <div class="flex flex-col items-center justify-between gap-10 pb-5 md:flex-row" data-astro-cid-uh4mv4aq> <div data-astro-cid-uh4mv4aq> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} class="h-44 w-96 shadow-lg shadow-cyan-50 rounded-xl object-cover" data-astro-cid-uh4mv4aq> </div> <div class="flex flex-col justify-evenly items-center gap-2" data-astro-cid-uh4mv4aq> ${targetAudience.map((item) => {
    return renderTemplate`<p class="flex gap-2" data-astro-cid-uh4mv4aq> ${renderComponent($$result3, "Badge", $$Badge, { "class": "text-[#009dff] size-10", "data-astro-cid-uh4mv4aq": true })} ${item} </p>`;
  })} </div> </div> </div> </section> </section> <section class="my-2 flex flex-col gap-7 flex-1" data-astro-cid-uh4mv4aq> <div class="flex flex-col gap-4 justify-center items-center" data-astro-cid-uh4mv4aq> <h2 class="text-white text-3xl" data-astro-cid-uh4mv4aq>Docente&nbsp;Sistemas</h2> <div class="flex flex-col justify-center items-center" data-astro-cid-uh4mv4aq> <img src="/images/instructor.webp" alt="Instructor de sistemas" class="size-48 rounded-full object-cover border-4 border-[#009dff]" data-astro-cid-uh4mv4aq> <h3 class="text-white text-2xl mt-3" data-astro-cid-uh4mv4aq>Ing. ${name}</h3> <h4 class="text-[#009dff] text-lg" data-astro-cid-uh4mv4aq>Ingeniero de sistemas</h4> <p class="text-center text-base mt-3" data-astro-cid-uh4mv4aq>
El Ing. ${name} es un ingeniero de sistemas con experiencia en la
                instalación y configuración de sistemas informáticos, equipos y redes
                de telecomunicación. Además, ha trabajado en varias empresas de tecnología
                y ha sido elegido como el técnico de sistemas de la empresa.
</p> </div> </div> <section data-astro-cid-uh4mv4aq> <div data-astro-cid-uh4mv4aq> <h3 class="text-white text-3xl mb-4" data-astro-cid-uh4mv4aq>Prerequisitos</h3> <p data-astro-cid-uh4mv4aq>${prerequisites}</p> </div> </section> </section> </section> <section class="my-3" data-astro-cid-uh4mv4aq> <div data-astro-cid-uh4mv4aq> <h2 class="text-white text-3xl mb-6 text-center" data-astro-cid-uh4mv4aq>
Impacto Profesional y Beneficio Clave
</h2> <ul class="flex flex-col justify-between gap-3 max-w-2xl mx-auto w-full" data-astro-cid-uh4mv4aq> ${professional.map((item) => {
    return renderTemplate`<li class="flex  items-start gap-4 " data-astro-cid-uh4mv4aq> <div data-astro-cid-uh4mv4aq> ${renderComponent($$result3, "ProfessionalImpact", $$ProfessionalImpact, { "class": "text-[#009dff] size-5 mt-1", "data-astro-cid-uh4mv4aq": true })} </div> <div class="flex flex-col gap-2" data-astro-cid-uh4mv4aq> <h2 class=" text-white text-lg" data-astro-cid-uh4mv4aq>${item.title}</h2> <p data-astro-cid-uh4mv4aq>${item.description}</p> </div> </li>`;
  })} </ul> </div> </section> <!-- <div>
          <div class="flex items-center mb-2">
            <span class="text-xl mr-4 text-amber-300">★★★★★</span>
            <div class="w-full h-2 bg-gray-300 rounded-full mr-4">
              <div class="h-full bg-yellow-500 rounded-full" style="width: 85%">
              </div>
            </div>
            <span class="text-sm">65%</span>
          </div>

          <div class="flex items-center mb-2">
            <span class="text-xl mr-4">★★★★</span>
            <div class="w-full h-2 bg-gray-300 rounded-full mr-4">
              <div class="h-full bg-yellow-500 rounded-full" style="width: 10%">
              </div>
            </div>
            <span class="text-sm">10%</span>
          </div>

          <div class="flex items-center mb-2">
            <span class="text-xl mr-4">★★★</span>
            <div class="w-full h-2 bg-gray-300 rounded-full mr-4">
              <div class="h-full bg-yellow-500 rounded-full" style="width: 3%">
              </div>
            </div>
            <span class="text-sm">3%</span>
          </div>

          <div class="flex items-center mb-2">
            <span class="text-xl mr-4">★★</span>
            <div class="w-full h-2 bg-gray-300 rounded-full mr-4">
              <div class="h-full bg-yellow-500 rounded-full" style="width: 2%">
              </div>
            </div>
            <span class="text-sm">2%</span>
          </div>

        <div class="flex items-center mb-2">
          <span class="text-xl mr-4">★</span>
          <div class="w-full h-2 bg-gray-300 rounded-full mr-4">
            <div class="h-full bg-yellow-500 rounded-full" style="width: 0%">
            </div>
          </div>
          <span class="text-sm">0%</span>
        </div>
        <div class="text-center mt-6">
          <p class="text-2xl font-bold">
            4.8 <span class="text-sm">Basado en 125 opiniones</span>
          </p>
        </div>
      </section> --> </main> ` })} ` })}  ${renderScript($$result, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/courses/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/courses/[slug].astro", "self");

const $$file = "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/courses/[slug].astro";
const $$url = "/courses/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
