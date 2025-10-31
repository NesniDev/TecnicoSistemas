import { c as createComponent, e as createAstro, m as maybeRenderHead, h as addAttribute, g as renderComponent, d as renderTemplate, F as Fragment } from '../chunks/astro/server_DAp9YVW7.mjs';
import { $ as $$SearchInput } from '../chunks/SearchInput_q9PQKy8c.mjs';
import { $ as $$Footer } from '../chunks/Footer_kzEpUzMl.mjs';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_Dzgc_Jk4.mjs';
import { $ as $$ArrowNews } from '../chunks/ArrowNews_SqusTOds.mjs';
/* empty css                                    */
import { a as actions } from '../chunks/_astro_actions_CVQyIgkl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ArticleResources = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleResources;
  const { type, title, description, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute({
    "flex flex-col gap-2 bg-[#040d1c] text-white rounded-xl px-6 py-4 overflow-hidden hover:scale-105 transition duration-300 ": true,
    "flex flex-col gap-2 bg-red-800/5 text-white rounded-xl px-6 py-4": type === "pdf",
    "flex flex-col gap-2 bg-blue-800/5 text-white rounded-xl px-6 py-4": type === "word",
    "flex flex-col gap-2 bg-green-800/5 text-white rounded-xl px-6 py-4": type === "excel",
    "flex flex-col gap-2 bg-yellow-800/5 text-white rounded-xl px-6 py-4": type === "web",
    "flex flex-col gap-2 bg-purple-800/5 text-white rounded-xl px-6 py-4": type === "libro",
    "flex flex-col gap-2 bg-pink-800/5 text-white rounded-xl px-6 py-4": type === "access"
  }, "class:list")} data-astro-cid-d4djmsly> <div class="flex justify-start items-start" data-astro-cid-d4djmsly> <span${addAttribute({
    "bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300": type === "pdf",
    "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300": type === "word",
    "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300": type === "excel",
    "bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300": type === "web",
    "bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300": type === "libro",
    "bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300": type === "access"
  }, "class:list")} data-astro-cid-d4djmsly>${type}</span> </div> <h2 class="text-xl font-bold" data-astro-cid-d4djmsly>${title}</h2> <p class="text-sm flex-1 text-gray-400" data-astro-cid-d4djmsly>${description}</p> <a${addAttribute(url, "href")}${addAttribute({
    "flex items-center gap-2 text-xs ": true,
    "text-red-800": type === "pdf",
    "text-blue-800": type === "word",
    "text-green-800": type === "excel",
    "text-yellow-800": type === "web",
    "text-purple-800": type === "libro",
    "text-pink-800": type === "access"
  }, "class:list")} data-astro-cid-d4djmsly>Descargar <span data-astro-cid-d4djmsly>${renderComponent($$result, "ArrowNews", $$ArrowNews, { "class": "size-5", "data-astro-cid-d4djmsly": true })}</span></a> </article> `;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/resources/ArticleResources.astro", void 0);

const $$Astro$1 = createAstro();
const $$PaginationResources = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PaginationResources;
  const { totalPages, searchResource } = Astro2.props;
  const url = Astro2.url;
  const page = Number(url.searchParams.get("page") ?? 1);
  const currentPage = Math.max(page > totalPages ? totalPages : page, 1);
  const searchParam = searchResource ? `&search=${searchResource}` : "";
  console.log(searchParam);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center justify-center my-10 gap-3"> ${totalPages !== 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(`${url.pathname}?page=${Math.max(currentPage - 1, 1)}${searchParam}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-[#7e7e7e] pointer-events-none" : "bg-[#009dff]"}`, "class")}>
Anterior
</a> <span> ${" "}
Página ${currentPage} de ${totalPages}${" "} </span> <a${addAttribute(`${url.pathname}?page=${Math.min(currentPage + 1, totalPages)}${searchParam}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-[#7e7e7e] pointer-events-none" : "bg-[#009dff]"}`, "class")}>
Siguiente
</a> ` })}` : renderTemplate`<p> No existen Recursos</p>`} </div>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/resources/PaginationResources.astro", void 0);

const $$Astro = createAstro();
const $$Recursos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Recursos;
  const searchParams = Astro2.url.searchParams;
  const page = Number(searchParams.get("page") ?? 1);
  const search = searchParams.get("search") ?? void 0;
  const { data, error } = await Astro2.callAction(actions.getResourceByPage, {
    page,
    search
  });
  if (error) {
    return Astro2.redirect("/");
  }
  const { resourcesByPage, totalPages } = data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recursos", "data-astro-cid-gtzka36m": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-gtzka36m": true })} ${maybeRenderHead()}<div class="animate-fade-in-up max-w-5xl w-full mx-auto" data-astro-cid-gtzka36m> <h1 class="text-4xl text-center sm:text-left text-white mt-5 mb-2" data-astro-cid-gtzka36m>
Recursos Educativos
</h1> <p class="text-center sm:text-left text-white my-5 mx-10 md:mx-0 text-base" data-astro-cid-gtzka36m>
En esta sección encontrarás una variedad de recursos educativos para
      ayudarte a aprender y mejorar tus habilidades técnicas.
</p> <section class="mx-2 md:mx-0" data-astro-cid-gtzka36m> <form method="GET" action="/recursos" role="search" data-astro-cid-gtzka36m> <div class="flex flex-col sm:flex-row" data-astro-cid-gtzka36m> ${renderComponent($$result2, "SearchInput", $$SearchInput, { "class": "hidden md:block ml-1", "data-astro-cid-gtzka36m": true })} <input type="text" id="buscador" name="search"${addAttribute(search, "value")} placeholder="Busca cursos por título..." autocomplete="off" data-astro-cid-gtzka36m> <button type="submit" id="resources" data-astro-cid-gtzka36m>Buscar</button> </div> </form> </section> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-10 md:mx-0" data-astro-cid-gtzka36m> ${resourcesByPage.map((item) => renderTemplate`${renderComponent($$result2, "ArticleResources", $$ArticleResources, { ...item, "data-astro-cid-gtzka36m": true })}`)} </section> ${renderComponent($$result2, "PaginationResources", $$PaginationResources, { "totalPages": totalPages, "search": search, "data-astro-cid-gtzka36m": true })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-gtzka36m": true })} ` })} `;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/recursos.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/recursos.astro";
const $$url = "/recursos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Recursos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
