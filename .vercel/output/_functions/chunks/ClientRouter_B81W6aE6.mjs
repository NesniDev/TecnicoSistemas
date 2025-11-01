import { c as createComponent, b as createAstro, e as addAttribute, f as renderScript, a as renderTemplate } from './astro/server_CRG_qOWb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/neider_nieto/Documents/GitHub/DevWeb/TecnicoSistemas/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
