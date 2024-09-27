import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute } from '../chunks/astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$FormattedDate } from '../chunks/FormattedDate_D2lKaG2f.mjs';
import { $ as $$BaseHead, a as $$Footer } from '../chunks/Footer_CookHhA5.mjs';
import { $ as $$Header } from '../chunks/Header_D9yedW5O.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => {
      const dateA = a.data.posted?.valueOf() ?? (/* @__PURE__ */ new Date(0)).valueOf();
      const dateB = b.data.posted?.valueOf() ?? (/* @__PURE__ */ new Date(0)).valueOf();
      return dateB - dateA;
    }
  );
  const truncateContent = (content, maxLength) => {
    return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
  };
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Grupo DI Blog", "description": "Ultimos Blogs de nuestros Profesores", "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section class="contBlogs" data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <div class="contenidoTexto" data-astro-cid-5tznm7mj> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.posted || /* @__PURE__ */ new Date(), "data-astro-cid-5tznm7mj": true })} </p> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="contenido" data-astro-cid-5tznm7mj> ${truncateContent(post.data.description || "", 200)} </p> </div> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "C:/blog-template/src/pages/blog/index.astro", void 0);

const $$file = "C:/blog-template/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
