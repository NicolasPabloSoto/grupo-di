import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import { b as $$GrupoIsotipo, c as $$HeaderLink } from './Footer_CookHhA5.mjs';
/* empty css                          */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <input type="checkbox" id="check" data-astro-cid-3ef6ksr2> <label for="check" class="checkbtn" data-astro-cid-3ef6ksr2> <i class="fas fa-bars" data-astro-cid-3ef6ksr2> <svg class="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke="currentColor" stroke-linecap="round" stroke-width="2.2" d="M5 7h14M5 12h14M5 17h14" data-astro-cid-3ef6ksr2></path> </svg> </i> </label> <a href="/" class="logoHome" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "GrupoIsotipo", $$GrupoIsotipo, { "width": 100, "height": 32, "fill": "white", "className": "", "data-astro-cid-3ef6ksr2": true })} </a> <ul class="menuCont" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkMenu", "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })}</li> <div class="dropdown" data-astro-cid-3ef6ksr2> <button class="dropbtn" data-astro-cid-3ef6ksr2>Programas &#x25BE; </button> <div class="dropdown-content" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkSubMenu", "href": "/alaya", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Alaya` })} </li> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkSubMenu", "href": "/Pitagoras", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Pitágoras` })} </li> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkSubMenu", "href": "/gestion", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Gestión` })} </li> </div> </div> <li data-astro-cid-3ef6ksr2>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkMenu", "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })}</li> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkMenu", "href": "/equipo", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Equipo` })} </li> <li data-astro-cid-3ef6ksr2> <a href="/admin/index.html" target="_blank" class="linkMenu" style="display: inline-block;" data-astro-cid-3ef6ksr2>Test</a> </li> </ul> <div class="social-links" data-astro-cid-3ef6ksr2> <a class="btnCampus" href="#" target="_blank" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z" data-astro-cid-3ef6ksr2></path> <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" data-astro-cid-3ef6ksr2></path> </svg>
&nbsp;Campus DI
</a> <a class="btnContacto" href="#formulario" data-astro-cid-3ef6ksr2>Contáctanos</a> </div> </nav> </header> `;
}, "C:/blog-template/src/components/Header.astro", void 0);

export { $$Header as $ };