import { c as createComponent, g as renderComponent, i as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAp9YVW7.mjs';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CVguXvvG.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Registro = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Registrarse", "page": "Registro", "data-astro-cid-ohowjl3i": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<form class="w-sm" data-astro-cid-ohowjl3i> <label for="text" class="flex flex-col" data-astro-cid-ohowjl3i> <small data-astro-cid-ohowjl3i>Nombre</small> <input type="text" name="name" placeholder="Carlos Rodríguez" autocomplete="off" data-astro-cid-ohowjl3i> </label> <label for="email" class="flex flex-col" data-astro-cid-ohowjl3i> <small data-astro-cid-ohowjl3i>Correo electrónico</small> <input type="email" name="email" placeholder="example@gmail.com" autocomplete="off" data-astro-cid-ohowjl3i> </label> <label for="Contraseña" class="flex flex-col" data-astro-cid-ohowjl3i> <small data-astro-cid-ohowjl3i>Contraseña</small> <input type="password" name="password" placeholder="***************" data-astro-cid-ohowjl3i> </label> <button type="submit" class="w-full px-4 cursor-pointer py-3 bg-[#1073D4] transition hover:bg-[#1073D4]/90 mb-3 text-white rounded-lg active:scale-[0.97]" data-astro-cid-ohowjl3i>Iniciar sesión</button> <!-- <div class="text-center flex justify-center gap-1 text-base mb-2">
      <input type="checkbox" name="remember_me" id="remember_me" />
      <label for="remember_me" class="text-xs">Recordarme</label>
    </div> --> <div class="text-center mb-5" data-astro-cid-ohowjl3i> <small data-astro-cid-ohowjl3i><a href="/inicioSesion" class="underline" data-astro-cid-ohowjl3i>¿Ya tienes cuenta?
</a></small> </div> </form> ` })}  ${renderScript($$result, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/registro.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/registro.astro", void 0);

const $$file = "C:/Users/Neider/Documents/Github/PaginasWeb/WebSiteSystems/src/pages/registro.astro";
const $$url = "/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
