import { c as createComponent, e as createAstro, h as addAttribute, i as renderScript, d as renderTemplate } from './astro/server_DAp9YVW7.mjs';
/* empty css                                */

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/node_modules/.pnpm/astro@5.14.5_@types+node@24_ec5ace4d22dda66068ad7e9d83f91cca/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/node_modules/.pnpm/astro@5.14.5_@types+node@24_ec5ace4d22dda66068ad7e9d83f91cca/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
