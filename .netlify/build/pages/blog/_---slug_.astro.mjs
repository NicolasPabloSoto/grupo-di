import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute, f as renderSlot } from '../../chunks/astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate, g as getCollection } from '../../chunks/FormattedDate_z5oedv_n.mjs';
import { $ as $$BaseHead, a as $$Footer } from '../../chunks/Footer_CookHhA5.mjs';
import { $ as $$Header } from '../../chunks/Header_D9yedW5O.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title = "Default Title", description = "Default Description", posted, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article class="contNoticias" data-astro-cid-bvzihdzo> <div class="backBotom" data-astro-cid-bvzihdzo><a href="/blog" class="botomVolver" data-astro-cid-bvzihdzo>&#xab; Volver a la Sección</a></div> <div class="cabecera" data-astro-cid-bvzihdzo> <div class="contInfoBLog" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": posted, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> </div> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> </div> <br data-astro-cid-bvzihdzo> <hr data-astro-cid-bvzihdzo> <div class="textoLargo" data-astro-cid-bvzihdzo> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/blog-template/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/blog-template/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/blog-template/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
