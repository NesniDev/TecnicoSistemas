import { c as createComponent, m as maybeRenderHead, g as renderComponent, d as renderTemplate } from './astro/server_DAp9YVW7.mjs';
import { b as $$Container } from './Header_Dzgc_Jk4.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col lg:flex-row justify-between py-3 items-center gap-2 text-sm"> <h3 class="actual">
@ ${(/* @__PURE__ */ new Date()).getFullYear()} | Tecnico en Sistemas IFE
</h3> <div class="flex gap-2"> <a href="https://www.facebook.com/InstitutoIFE" target="_blank">Facebook</a> <a href="https://www.ifecolombia.edu.co/">Web Oficial</a> </div> <div class="flex gap-2"> <a href="/contacto">Contacto</a> <a href="/privacidad">Política de Privacidad</a> </div> </div> ` })} </footer>`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/components/Shared/Footer.astro", void 0);

export { $$Footer as $ };
