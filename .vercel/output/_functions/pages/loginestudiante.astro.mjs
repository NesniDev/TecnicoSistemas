import { c as createComponent, e as createAstro, m as maybeRenderHead, f as spreadAttributes, d as renderTemplate, h as addAttribute, g as renderComponent, j as renderTransition, F as Fragment, i as renderScript } from '../chunks/astro/server_DAp9YVW7.mjs';
import { $ as $$Layout, b as $$Container, a as $$Header } from '../chunks/Header_Dzgc_Jk4.mjs';
import { f as firebase } from '../chunks/config_kox2btI2.mjs';
/* empty css                                    */
import { $ as $$Footer } from '../chunks/Footer_kzEpUzMl.mjs';
import { $ as $$SearchInput } from '../chunks/SearchInput_q9PQKy8c.mjs';
import { a as actions } from '../chunks/_astro_actions_CVQyIgkl.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/assets/icons/User.astro", void 0);

const $$Astro$4 = createAstro();
const $$Modules = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Modules;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dual-screen"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4l8 3v15l-8 -3z"></path><path d="M13 19h6v-15h-14"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/assets/icons/Modules.astro", void 0);

const $$Astro$3 = createAstro();
const $$ArticleLogin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArticleLogin;
  const { img, title, description, name, modules, slug, learn } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col justify-start items-center rounded-lg bg-[#0f2b4f] overflow-hidden course-item"> <img${addAttribute(img, "src")} alt="Blog" class="object-cover h-[180px] w-full"${addAttribute(renderTransition($$result, "dczcp2qv", "", `image-${slug}`), "data-astro-transition-scope")}> <div class="flex flex-col justify-evenly items-start px-5 py-2 gap-2 flex-1"> <h4 class="text-white text-xl course-title">${title}</h4> <p class="text-xs"> ${description} </p> <div class="flex justify-between items-center gap-10 mx-auto text-white"> <div class="text-xs flex justify-between items-center gap-2"> <span>${renderComponent($$result, "User", $$User, { "class": "size-5" })}</span> <span>${name}</span> </div> <div class="text-xs flex justify-between items-center gap-2"> <span>${renderComponent($$result, "Modules", $$Modules, { "class": "size-5" })}</span> <span>${modules}</span> </div> </div> </div> <a${addAttribute(`/courses/${slug}`, "href")} class="bg-[#00a2ff] text-center block transition hover:bg-[#00a2ff]/90 text-white rounded-lg active:scale-[0.97] px-4 py-1 mb-3">Ir al Curso</a> </article>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/loginEstudiante/ArticleLogin.astro", "self");

const $$Astro$2 = createAstro();
const $$RecursesExplorer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RecursesExplorer;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-archive"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path><path d="M19 9c.513 0 .936 .463 .993 1.06l.007 .14v7.2c0 1.917 -1.249 3.484 -2.824 3.594l-.176 .006h-10c-1.598 0 -2.904 -1.499 -2.995 -3.388l-.005 -.212v-7.2c0 -.663 .448 -1.2 1 -1.2h14zm-5 2h-4l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h4l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"></path></svg>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/assets/icons/RecursesExplorer.astro", void 0);

const events = [
  {
    title: "Próximos webinars",
    description: "Webinars de tecnico en sistemas IFE sobre la IA",
    date: "20 de Oct de 2025"
  },
  {
    title: "Fecha limites de tareas",
    description: "Fecha limites de tareas para la asignatura de Sistemas de Información",
    date: "30 de Nov de 2025"
  },
  {
    title: "Anuncios de cursos",
    description: "Anuncios de cursos para la asignatura de Sistemas de Información",
    date: "15 de Agos de 2025"
  }
];

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { totalPages, search } = Astro2.props;
  const url = Astro2.url;
  const page = Number(url.searchParams.get("page") ?? 1);
  const currentPage = Math.max(page > totalPages ? totalPages : page, 1);
  const path = url.pathname;
  const searchParam = search ? `&search=${search}` : "";
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center my-10 gap-3"> ${totalPages !== 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(`px-4 py-2  text-white rounded-lg ${currentPage === 1 || currentPage === totalPages ? "bg-[#7e7e7e] pointer-events-none" : "bg-[#009dff]"}`, "class")}${addAttribute(`${path}?page=${Math.max(currentPage - 1, 1)}${searchParam}`, "href")}>
Anterior
</a> <span>
Página ${currentPage} de ${totalPages} </span> <a${addAttribute(`px-4 py-2  text-white rounded-lg ${currentPage === 3 || currentPage === totalPages ? "bg-[#7e7e7e] pointer-events-none" : "bg-[#009dff]"}`, "class")}${addAttribute(`${path}?page=${Math.min(currentPage + 1, totalPages)}${searchParam}`, "href")}>
Siguiente
</a> ` })}` : renderTemplate`<p></p>`} </div>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/Login/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$LoginEstudiante = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoginEstudiante;
  const firebaseUser = firebase.auth.currentUser;
  if (firebaseUser === null) {
    return Astro2.redirect("/inicioSesion");
  }
  await firebaseUser.reload();
  const { displayName } = firebaseUser;
  const name = displayName ?? "Anonimo";
  const searchParams = Astro2.url.searchParams;
  const page = Number(searchParams.get("page") ?? 1);
  const search = searchParams.get("search") ?? void 0;
  const { data, error } = await Astro2.callAction(actions.getCourseByPage, {
    page,
    search
  });
  if (error) {
    console.error(error);
    return Astro2.redirect("/");
  }
  const { courses: coursesData, totalPage } = data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login Estudiante", "data-astro-cid-eoxbbvy2": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-eoxbbvy2": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "data-astro-cid-eoxbbvy2": true })} ${maybeRenderHead()}<h1 class="text-4xl text-white mt-5 mb-2 mx-10 md:mx-0 animate-fade-in-up" data-astro-cid-eoxbbvy2>
¡Bienvenido, ${name.split(" ")[0]}!
</h1> <div class="flex justify-center items-center animate-fade-in-up" data-astro-cid-eoxbbvy2> <div class="flex justify-between items-center py-4" data-astro-cid-eoxbbvy2> <div class="flex justify-between items-center gap-5" data-astro-cid-eoxbbvy2> <form method="GET" action="/loginEstudiante" role="search" data-astro-cid-eoxbbvy2> <div class="flex" data-astro-cid-eoxbbvy2> ${renderComponent($$result3, "SearchInput", $$SearchInput, { "class": "ml-1", "data-astro-cid-eoxbbvy2": true })} <input type="text" id="buscador" name="search" placeholder="Busca cursos por título..."${addAttribute(search, "value")} autocomplete="off" data-astro-cid-eoxbbvy2> <button type="submit" data-astro-cid-eoxbbvy2>Buscar</button> </div> </form> </div> </div> </div> <main class="flex flex-col md:flex-row flex-1 justify-between gap-5 mb-6 animate-fade-in-up" data-astro-cid-eoxbbvy2> <div class="flex flex-col" data-astro-cid-eoxbbvy2> <h2 class="text-2xl text-white my-5 mx-10 md:mx-0" data-astro-cid-eoxbbvy2>Mis Cursos</h2> <section class="mx-10 md:mx-0" id="list-courses" data-astro-cid-eoxbbvy2> ${coursesData.length > 0 ? coursesData.map((item) => renderTemplate`${renderComponent($$result3, "ArticleLogin", $$ArticleLogin, { ...item, "data-astro-cid-eoxbbvy2": true })}`) : renderTemplate`<p class="text-white text-center my-5 mx-10 md:mx-0 text-xl" data-astro-cid-eoxbbvy2>
No se encontraron cursos.
</p>`} </section> ${renderComponent($$result3, "Pagination", $$Pagination, { "totalPages": totalPage, "search": search, "data-astro-cid-eoxbbvy2": true })} </div> <aside class="w-[400px] mx-auto" data-astro-cid-eoxbbvy2> <div class="flex flex-col" data-astro-cid-eoxbbvy2> <h2 class="text-2xl text-white my-5 mx-10 md:mx-0" data-astro-cid-eoxbbvy2>
Recursos Educativos
</h2> <div class="flex justify-center items-center gap-2 bg-[#040d1c] text-white rounded-xl px-6 py-4" data-astro-cid-eoxbbvy2> ${renderComponent($$result3, "ArchiveExplorer", $$RecursesExplorer, { "class": "size-10", "data-astro-cid-eoxbbvy2": true })} <a href="/recursos" class="text-white" data-astro-cid-eoxbbvy2> <span data-astro-cid-eoxbbvy2>Explorar todos los recursos</span> </a> </div> </div> <div class="flex flex-col" data-astro-cid-eoxbbvy2> <h2 class="text-2xl text-white my-5 mx-10 md:mx-0" data-astro-cid-eoxbbvy2>
Información Importante
</h2> <div class="flex flex-col gap-2 w-full" data-astro-cid-eoxbbvy2> ${events.map((item) => {
    return renderTemplate`<div class="flex justify-between items-center gap-2 bg-[#040d1c] text-white rounded-xl px-6 py-4" data-astro-cid-eoxbbvy2> <div data-astro-cid-eoxbbvy2></div> <div data-astro-cid-eoxbbvy2> <h2 class="mb-2 font-bold" data-astro-cid-eoxbbvy2>${item.title}</h2> <p class="text-xs text-[#cdd7f7]" data-astro-cid-eoxbbvy2> ${item.description} - <span data-astro-cid-eoxbbvy2>${item.date}</span> </p> </div> </div>`;
  })} </div> </div> <div class="flex flex-col" data-astro-cid-eoxbbvy2> <h2 class="text-2xl text-white my-5 mx-10 md:mx-0" data-astro-cid-eoxbbvy2>
Configuraciones
</h2> <div class="text-[15px] flex flex-col gap-5 justify-between bg-[#040d1c] text-white rounded-xl px-6 py-4" data-astro-cid-eoxbbvy2> <a href="/" data-astro-cid-eoxbbvy2>Preferencias de Notificaciones</a> <a href="/" data-astro-cid-eoxbbvy2> Configuraciones </a> <button type="button" id="logout" data-astro-cid-eoxbbvy2> Cerrar sesión </button> </div> </div> </aside> </main> ` })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-eoxbbvy2": true })} ` })}  ${renderScript($$result, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/loginEstudiante.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/loginEstudiante.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/loginEstudiante.astro";
const $$url = "/loginEstudiante";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LoginEstudiante,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
