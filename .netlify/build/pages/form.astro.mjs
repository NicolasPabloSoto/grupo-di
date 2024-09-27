import { a as createComponent, r as renderTemplate, e as renderHead, d as renderComponent } from '../chunks/astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import { $ as $$Formulario } from '../chunks/formulario_Dm3Fyruh.mjs';
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> ${renderComponent($$result, "Formulario", $$Formulario, {})} <formulario></formulario></body></html>`;
}, "C:/blog-template/src/pages/form.astro", void 0);

const $$file = "C:/blog-template/src/pages/form.astro";
const $$url = "/form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Form,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
