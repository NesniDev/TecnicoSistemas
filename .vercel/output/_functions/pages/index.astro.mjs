import { c as createComponent, e as createAstro, m as maybeRenderHead, h as addAttribute, g as renderComponent, d as renderTemplate } from '../chunks/astro/server_DAp9YVW7.mjs';
import { $ as $$Footer } from '../chunks/Footer_kzEpUzMl.mjs';
import { c as $$Button, b as $$Container, $ as $$Layout, a as $$Header } from '../chunks/Header_Dzgc_Jk4.mjs';
import { $ as $$ArrowNews } from '../chunks/ArrowNews_SqusTOds.mjs';
import '../chunks/index_CYyG6us9.mjs';
import { a as $$Image } from '../chunks/_astro_assets_DuHHOu88.mjs';
/* empty css                                 */
import { $ as $$Check } from '../chunks/Check_CNJjkqVJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ArticleMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleMain;
  const { url, image_url, title, description, published_at, snippet } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-s2kwfhxe> <a${addAttribute(url, "href")} target="_blank" class="flex flex-col justify-between" data-astro-cid-s2kwfhxe> <!-- <img
      src={image_url}
      alt={\`Imagen sobre: \${title}\`}
      class="rounded-lg object-cover h-full"
    /> --> ${renderComponent($$result, "Image", $$Image, { "src": image_url, "alt": `Imagen sobre: ${title}`, "inferSize": true, "class": "rounded-lg object-cover h-full", "data-astro-cid-s2kwfhxe": true })} </a> <div class="flex flex-col max-h-full" data-astro-cid-s2kwfhxe> <h4 class="text-white text-base font-bold" data-astro-cid-s2kwfhxe>${title}</h4> <div class="flex flex-1" data-astro-cid-s2kwfhxe> <p class="mt-2" data-astro-cid-s2kwfhxe>${description === "" ? snippet : description}</p> </div> <p class="flex justify-between items-center my-2" data-astro-cid-s2kwfhxe> <span class="button text-[8px]" data-astro-cid-s2kwfhxe> ${published_at.slice(0, 10)} </span> ${renderComponent($$result, "Button", $$Button, { "href": url, "openBlank": true, "className": "button px-2 py-1 text-[10px]", "data-astro-cid-s2kwfhxe": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArrowNews", $$ArrowNews, { "data-astro-cid-s2kwfhxe": true })} ` })} </p> </div> </article> `;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/Index/ArticleMain.astro", void 0);

const tips = [
  {
    title: "Perfecciona tus Fundamentos Técnicos",
    description: "Domina las bases del hardware, los sistemas operativos y las redes. Comprender cómo funcionan los componentes físicos y lógicos es esencial para ofrecer soluciones efectivas y confiables.",
    image: ""
  },
  {
    title: "Fortalece tu Red Profesional",
    description: "Participa en comunidades tecnológicas, foros y proyectos colaborativos. Interactuar con otros técnicos y profesionales del sector ampliará tus oportunidades y conocimientos.",
    image: ""
  },
  {
    title: "Piensa como un Técnico en Soluciones",
    description: "Más allá de reparar o configurar equipos, aprende a analizar problemas, optimizar procesos y aplicar pensamiento lógico. La resolución eficiente de incidencias es tu mejor carta de presentación.",
    image: ""
  }
];

const news = [
  {
    title: "GPT-5: El próximo salto en IA conversacional",
    description: "OpenAI anuncia el lanzamiento de GPT-5 con capacidades de razonamiento mejoradas y comprensión del contexto en conversaciones complejas.",
    url: "https://openai.com/blog/gpt-5",
    image_url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop",
    published_at: "2025-10-29T08:30:00Z",
    snippet: "La nueva generación de IA de OpenAI promete revolucionar la interacción humano-computadora."
  },
  {
    title: "Quantum Computing: IBM alcanza los 1000 qubits",
    description: "IBM ha presentado su nuevo procesador cuántico de 1000 qubits, marcando un hito en la carrera por la supremacía cuántica.",
    url: "https://www.ibm.com/quantum-computing/1000-qubit-processor",
    image_url: "https://images.unsplash.com/photo-1617839625591-e5a789593135?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    published_at: "2025-10-28T14:15:00Z",
    snippet: "El nuevo procesador cuántico de IBM podría resolver problemas complejos en minutos que tomarían años a las supercomputadoras actuales."
  },
  {
    title: "NVIDIA presenta la RTX 6090: Rendimiento sin precedentes",
    description: "La nueva tarjeta gráfica de NVIDIA promete un rendimiento 4 veces mayor que su predecesora, con tecnología de trazado de rayos mejorada y soporte para IA.",
    url: "https://www.nvidia.com/rtx6090",
    image_url: "https://images.unsplash.com/photo-1716967318503-05b7064afa41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    published_at: "2025-10-27T11:45:00Z",
    snippet: "La RTX 6090 establece un nuevo estándar en rendimiento gráfico para juegos y aplicaciones profesionales."
  },
  {
    title: "El auge de las redes neuronales neuromórficas",
    description: "Nuevos avances en computación neuromórfica permiten crear redes neuronales que imitan el funcionamiento del cerebro humano con mayor eficiencia energética.",
    url: "https://techcrunch.com/neuromorphic-computing-breakthrough",
    image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    published_at: "2025-10-26T16:20:00Z",
    snippet: "La computación neuromórfica podría ser la clave para la próxima generación de IA."
  },
  {
    title: "Seguridad informática: El futuro de la protección de datos",
    description: "Nuevas tecnologías de cifrado cuántico prometen hacer que las comunicaciones sean invulnerables a los ataques de los ordenadores cuánticos.",
    url: "https://www.wired.com/quantum-encryption-future",
    image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop",
    published_at: "2025-10-25T09:10:00Z",
    snippet: "La ciberseguridad da un salto cuántico con nuevas técnicas de encriptación."
  }
];

const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  let dataNews = [];
  try {
    const resNews = await fetch("https://tecnico-sistemas.vercel.app/api/get-news");
    if (resNews.ok) {
      dataNews = await resNews.json();
    } else {
      console.error("Failed to fetch news:", resNews.status, resNews.statusText);
      dataNews = news;
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    dataNews = news;
  }
  return renderTemplate`${maybeRenderHead()}<main class="flex items-center my-5 mx-5 lg:mx-auto animate-fade-in-up" data-astro-cid-re3h7ufa> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-re3h7ufa": true }, { "default": async ($$result2) => renderTemplate` <div class="flex flex-col gap-5" data-astro-cid-re3h7ufa> <section class="flex flex-col justify-between items-center gap-3 max-w-xl mx-auto my-16" data-astro-cid-re3h7ufa> <h3 class="text-xs text-[#64FFDB] font-bold" data-astro-cid-re3h7ufa>
TECNOLOGÍA EN EVOLUCIÓN
</h3> <h1 class="flex flex-col text-center justify-center items-center text-5xl font-extrabold" data-astro-cid-re3h7ufa> <span data-astro-cid-re3h7ufa>Innovación y Futuro en el </span> <span class="text-[#64FFDB]" data-astro-cid-re3h7ufa>Mundo de los Sistemas</span> </h1> <p class="text-center" data-astro-cid-re3h7ufa>
Un entorno creado para aprendices y expertos del área técnica en
          sistemas, donde podrás acceder a contenido actualizado sobre
          innovación tecnológica, soporte informático, hardware y programación.
          Encuentra artículos, noticias y recursos que impulsarán tu crecimiento
          profesional.
</p> <footer class="flex justify-center items-center gap-2" data-astro-cid-re3h7ufa> ${renderComponent($$result2, "Button", $$Button, { "href": "/recursos", "data-astro-cid-re3h7ufa": true }, { "default": async ($$result3) => renderTemplate`Explorar Recursos` })} <a href="#news-latest" class="outline-1 rounded-lg outline-[#02348556] bg-transparent hover:bg-gray-800/30 text-[#64FFDA] px-4 py-1.5 flex items-center gap-2" data-astro-cid-re3h7ufa>Ver Noticias <span data-astro-cid-re3h7ufa> ${renderComponent($$result2, "ArrowNews", $$ArrowNews, { "class": "size-5", "data-astro-cid-re3h7ufa": true })}</span></a> </footer> </section> <section class="mb-6" data-astro-cid-re3h7ufa> <h2 class="mt-7 text-center text-2xl text-white font-extrabold" data-astro-cid-re3h7ufa>
Consejos Prácticos para el Éxito en Sistemas e Informática
</h2> <p class="text-center my-5" data-astro-cid-re3h7ufa>
Pequeñas dosis de conocimiento para fortalecer tus habilidades
          técnicas y avanzar en tu formación profesional dentro del mundo de la
          tecnología.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-astro-cid-re3h7ufa> ${tips.map((item) => {
    return renderTemplate`<div class="flex flex-col gap-2 bg-[#040d1c] text-white rounded-xl px-6 py-4" data-astro-cid-re3h7ufa> <div class="flex justify-between items-center gap-2" data-astro-cid-re3h7ufa> ${renderComponent($$result2, "Check", $$Check, { "class": "size-8 text-[#00a2ff]", "data-astro-cid-re3h7ufa": true })} <h4 class="text-xl font-bold text-center flex-1" data-astro-cid-re3h7ufa> ${item.title} </h4> </div> <p class="text-center" data-astro-cid-re3h7ufa>${item.description}</p> </div>`;
  })} </div> </section> </div> ` })} </main> <section class="imagen-info mb-10" data-astro-cid-re3h7ufa> <div class="max-w-2xl text-center" data-astro-cid-re3h7ufa> <h2 data-astro-cid-re3h7ufa>Técnico en Sistemas e informática</h2> <p class="mb-7" data-astro-cid-re3h7ufa>
Es aquella persona encargada de la instalación, configuración y
      mantenimiento de los sistemas informático, equipo y redes de
      telecomunicación. Su función principal es asegurar la integración y el
      correcto funcionamiento de todos los sistemas tecnológicos en la empresa.
</p> ${renderComponent($$result, "Button", $$Button, { "href": "/post/blogTecnicoSistemas", "data-astro-cid-re3h7ufa": true }, { "default": async ($$result2) => renderTemplate`Leer más...` })} </div> </section> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-re3h7ufa": true }, { "default": async ($$result2) => renderTemplate` <h3 class="text-2xl my-7 text-center md:text-left text-white font-extrabold" id="news-latest" data-astro-cid-re3h7ufa>
Ultimas noticias
</h3> <section class="news mb-5" data-astro-cid-re3h7ufa> ${//@ts-ignore
  dataNews.data ? (
    //@ts-ignore
    dataNews.data.map((item) => {
      return renderTemplate`${renderComponent($$result2, "ArticleMain", $$ArticleMain, { ...item, "data-astro-cid-re3h7ufa": true })}`;
    })
  ) : news.slice(0, 3).map((item) => {
    return renderTemplate`${renderComponent($$result2, "ArticleMain", $$ArticleMain, { ...item, "data-astro-cid-re3h7ufa": true })}`;
  })} </section> ` })} `;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/Index/Main.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tecnico en Sistemas IFE" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/index.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
