import { c as createComponent, b as createAstro, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate } from './astro/server_CRG_qOWb.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$SearchInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchInput;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/src/assets/icons/SearchInput.astro", void 0);

export { $$SearchInput as $ };
