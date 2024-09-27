import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, c as createAstro, e as renderHead } from '../chunks/astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import { b as $$GrupoIsotipo, c as $$HeaderLink, $ as $$BaseHead, a as $$Footer } from '../chunks/Footer_CookHhA5.mjs';
/* empty css                                 */
import 'clsx';
import { g as getCollection, $ as $$FormattedDate } from '../chunks/FormattedDate_CMe1h6G6.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_DN_y46k3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime.js';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$HeaderHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-rignnswn> <nav data-astro-cid-rignnswn> <input type="checkbox" id="check" data-astro-cid-rignnswn> <label for="check" class="checkbtn" data-astro-cid-rignnswn> <i class="fas fa-bars" data-astro-cid-rignnswn> <svg class="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-astro-cid-rignnswn> <path stroke="currentColor" stroke-linecap="round" stroke-width="2.2" d="M5 7h14M5 12h14M5 17h14" data-astro-cid-rignnswn></path> </svg> </i> </label> <a href="/" class="logoHome" data-astro-cid-rignnswn> ${renderComponent($$result, "GrupoIsotipo", $$GrupoIsotipo, { "width": 100, "height": 32, "fill": "white", "className": "", "data-astro-cid-rignnswn": true })} </a> <ul class="menuCont" data-astro-cid-rignnswn> <li data-astro-cid-rignnswn>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkMenu", "href": "/", "data-astro-cid-rignnswn": true }, { "default": ($$result2) => renderTemplate`Home` })}</li> <div class="dropdown" data-astro-cid-rignnswn> <button class="dropbtn" data-astro-cid-rignnswn>Programas &#x25BE; </button> <div class="dropdown-content" data-astro-cid-rignnswn> <li data-astro-cid-rignnswn> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkSubMenu", "href": "/alaya", "data-astro-cid-rignnswn": true }, { "default": ($$result2) => renderTemplate`Alaya` })} </li> <li data-astro-cid-rignnswn> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkSubMenu", "href": "/Pitagoras", "data-astro-cid-rignnswn": true }, { "default": ($$result2) => renderTemplate`Pitágoras` })} </li> <li data-astro-cid-rignnswn> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkSubMenu", "href": "/gestion", "data-astro-cid-rignnswn": true }, { "default": ($$result2) => renderTemplate`Gestión` })} </li> </div> </div> <li data-astro-cid-rignnswn>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkMenu", "href": "/blog", "data-astro-cid-rignnswn": true }, { "default": ($$result2) => renderTemplate`Blog` })}</li> <li data-astro-cid-rignnswn> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "linkMenu", "href": "/equipo", "data-astro-cid-rignnswn": true }, { "default": ($$result2) => renderTemplate`Equipo` })} </li> <li data-astro-cid-rignnswn> <a href="/admin/index.html" target="_blank" class="linkMenu" style="display: inline-block;" data-astro-cid-rignnswn>Test</a> </li> </ul> <div class="social-links" data-astro-cid-rignnswn> <a class="btnCampus" href="#" target="_blank" data-astro-cid-rignnswn> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-rignnswn> <path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z" data-astro-cid-rignnswn></path> <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" data-astro-cid-rignnswn></path> </svg>
&nbsp;Campus DI
</a> <a class="btnContacto" href="#formulario" data-astro-cid-rignnswn>Contáctanos</a> </div> </nav> </header> `;
}, "C:/blog-template/src/components/HeaderHome.astro", void 0);

const $$VideoBg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bgHome" data-astro-cid-hlhwd52s> <div class="capaLuz" data-astro-cid-hlhwd52s></div> <div class="capaSombra" data-astro-cid-hlhwd52s></div> <div class="contVideo" data-astro-cid-hlhwd52s> <video class="videoHome" width="" height="" autoplay muted controls loop preload="none" data-astro-cid-hlhwd52s> <source src="/videos_test.mp4" type="video/mp4" data-astro-cid-hlhwd52s>
Your browser does not support the video tag.
</video> </div> </div> `;
}, "C:/blog-template/src/components/VideoBg.astro", void 0);

const $$Estadisticas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="datosEmpresa" data-astro-cid-e3r3a3my> <div class="contdatos" data-astro-cid-e3r3a3my> <div class="datosIcon" data-astro-cid-e3r3a3my> <div class="circuloIcon" data-astro-cid-e3r3a3my> <div class="iconosNumeros" data-astro-cid-e3r3a3my> <svg version="1.1" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" data-astro-cid-e3r3a3my> <style type="text/css">.st9{fill:#453FDC;}</style> <g data-astro-cid-e3r3a3my> <path class="st0" d="M169.3,208.8c1.5,14.2,3,28.5,4.6,43c-41.8,0-83.4,0-125.3,0c1.5-14.4,3.1-28.7,4.6-43.1
                                c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0.9-0.8,1.7-1.2,2.6c-2.6,6.7-5.3,13.4-7.7,20.2c-4,11.1-16.4,15.4-25.9,11.8
                                c-10.6-4-15.6-15.4-11.5-26.2c10.9-28.4,21.8-56.8,32.7-85.1c4.6-12,15.9-19.7,28.8-19.7c28.8,0,57.6,0,86.4,0
                                c12.7,0,24,7.7,28.6,19.6c4,10.3,8,20.7,12,31.1c0.3,0.9,0.7,1.7,1.2,2.9c0.8-0.9,1.3-1.5,1.8-2.1c7.3-9.4,15-18.5,21.9-28.2
                                c6.1-8.5,13.9-12,24-9.6c2.5,0.6,3.9-0.2,5.4-2c12-14,24.1-27.9,36.2-41.8c0.4-0.5,0.9-1.1,1.3-1.5c2.1-2.1,5.1-2.4,7.1-0.6
                                c2.1,1.8,2.4,4.7,0.5,7.1c-4.6,5.5-9.3,10.8-14,16.2c-8.1,9.4-16.2,18.8-24.4,28.1c-1.3,1.4-1.6,2.6-0.7,4.4
                                c4.3,8.7,2.7,16.3-3.3,23.8c-14.9,18.5-29.3,37.3-44.1,55.8c-2.9,3.7-6.5,7.1-10.4,9.7c-6.3,4.1-14.1,3.1-19.3-2.4
                                c-2.8-2.9-4.7-6.6-6.9-10.1c-0.7-1.1-1.2-2.4-1.7-3.6C169.7,208.7,169.5,208.7,169.3,208.8z" data-astro-cid-e3r3a3my></path> <path class="st0" d="M71.3,57.1c-0.1-22.1,17.9-40,40-40c22,0,39.9,17.7,40,39.7c0.1,22.1-17.7,40.1-39.8,40.2
                                C89.2,97.1,71.3,79.3,71.3,57.1z" data-astro-cid-e3r3a3my></path> <path class="st0" d="M111.3,262c27.2,0,54.5,0,81.7,0c7.3,0,8.2,0.9,8.2,8.3c0,2.1,0.1,4.3,0,6.4c-0.1,3.2-1.9,5-5.1,5.2
                                c-0.8,0.1-1.6,0-2.3,0c-54.9,0-109.9,0-164.8,0c-6.3,0-7.6-1.3-7.6-7.5c0-2.1,0-4.3,0-6.4c0.1-4.3,1.8-6,6.1-6c13,0,26,0,38.9,0
                                C81.3,262,96.3,262,111.3,262z" data-astro-cid-e3r3a3my></path> </g> </svg> </div> </div> </div> <div class="numDatos" data-astro-cid-e3r3a3my> <div class="odometro" data-astro-cid-e3r3a3my> <p class="numeroText" id="counterTres" data-astro-cid-e3r3a3my></p> <h4 data-astro-cid-e3r3a3my>&#43;</h4> </div> <p class="bajadaText" data-astro-cid-e3r3a3my>Profesores o Instructores</p> </div> </div> <div class="contdatos" data-astro-cid-e3r3a3my> <div class="datosIcon" data-astro-cid-e3r3a3my> <div class="circuloIcon" data-astro-cid-e3r3a3my> <div class="iconosNumerosDos" data-astro-cid-e3r3a3my> <svg x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" data-astro-cid-e3r3a3my> <style type="text/css">.st9{fill:#453FDC;}</style> <g data-astro-cid-e3r3a3my> <path class="st0" d="M188.1,214.9c-7.7-0.8-14.3,1.3-20.5,5.3c-11.7,7.5-23.6,7.5-35.3-0.1c-6.1-3.9-12.5-5.8-19.7-5.4
                                c-14.4,0.8-24.8-5.5-31.2-18.3c-3-6.1-7.7-10.6-13.7-13.6c-13.1-6.7-19.1-17.4-18.2-32.1c0.4-6.4-1.1-12.3-4.7-17.6
                                c-8.4-12.5-8.4-25-0.1-37.5c3.8-5.7,5.1-12,4.7-18.8c-0.8-13.6,4.8-23.9,16.8-30.3c7.1-3.8,12.3-8.9,16-16
                                c5.9-11.3,15.6-17.2,28.4-16.8c8.7,0.3,16.2-1.8,23.6-6.4c10.4-6.5,21.6-6.3,32,0.2c7.2,4.5,14.5,6.5,22.9,6.2
                                c12.9-0.5,22.7,5.4,28.7,16.9c3.7,7.1,8.9,12.2,16.1,16c12,6.4,17.5,16.8,16.7,30.3c-0.4,6.8,1,13.1,4.8,18.7
                                c8.2,12.4,8.3,24.8,0.1,37.2c-3.8,5.8-5.2,12.2-4.8,19.1c0.7,13.2-4.6,23.5-16.3,29.8c-7.5,4-12.8,9.3-16.8,16.8
                                C211.2,210.3,200.9,215.4,188.1,214.9z M150.1,186.1c39.6-0.1,71.7-32,71.8-71.6c0.1-39.8-32.3-72.1-72.2-72
                                c-39.5,0.1-71.6,32.3-71.6,71.9C78,153.9,110.3,186.1,150.1,186.1z" data-astro-cid-e3r3a3my></path> <path class="st0" d="M72.2,198.8c0.7,1.3,1.3,2.6,2.1,3.9c7.3,12.8,18.2,20.8,32.9,20.9c10.2,0.1,19.1,2.2,27.4,8.9
                                c-5.6,21-11.4,42.5-17.4,65c-8.7-13.7-17-26.8-25.4-40c-13.9,7.3-27.6,14.4-42,22c7.3-27.3,14.4-53.9,21.5-80.4
                                C71.6,199,71.9,198.9,72.2,198.8z" data-astro-cid-e3r3a3my></path> <path class="st0" d="M228.6,198.8c7.1,26.6,14.2,53.1,21.6,80.6c-14.4-7.5-28-14.6-42-21.9c-8.4,13.2-16.6,26.2-25.4,40
                                c-6-22.3-11.7-43.7-17.5-65.1c7.9-5.3,15.7-8.9,25.7-8.6c15.6,0.5,27.1-7.6,34.8-21.1c0.6-1.1,1.2-2.2,1.8-3.3
                                C227.7,199.1,228,199.1,228.6,198.8z" data-astro-cid-e3r3a3my></path> <path class="st0" d="M98,149c5.9-9.6,14.9-14.8,25.2-18.2c0.9-0.3,2.4,0.3,3.3,1c14.9,10.6,32.2,10.6,46.9,0.1c1-0.7,2.6-1.3,3.7-1
                                c9.3,3.1,17.5,7.8,23.5,15.8c1.2,1.6,1.4,2.8,0.1,4.7c-23.7,34.4-78.9,33.9-101.9-0.9C98.5,150,98.3,149.6,98,149z" data-astro-cid-e3r3a3my></path> <path class="st0" d="M150.2,130.5c-16.5,0.1-29.8-13.1-29.8-29.5c0-16.4,13.2-29.7,29.6-29.7c16.2,0,29.5,13.1,29.6,29.4
                                C179.7,117.1,166.6,130.5,150.2,130.5z" data-astro-cid-e3r3a3my></path> </g> </svg> </div> </div> </div> <div class="numDatos" data-astro-cid-e3r3a3my> <div class="odometro" data-astro-cid-e3r3a3my> <p class="numeroText" id="counterDos" data-astro-cid-e3r3a3my></p> <h4 data-astro-cid-e3r3a3my>&#43;</h4> </div> <p class="bajadaText" data-astro-cid-e3r3a3my>Empresas Capacitadas</p> </div> </div> <div class="contdatos" data-astro-cid-e3r3a3my> <div class="datosIcon" data-astro-cid-e3r3a3my> <div class="circuloIcon" data-astro-cid-e3r3a3my> <div class="iconosNumerosDos" data-astro-cid-e3r3a3my> <svg version="1.1" x="0px" y="0px" viewBox="0 0 300 300" class="st9" data-astro-cid-e3r3a3my> <g data-astro-cid-e3r3a3my> <path class="st0" d="M2,182.4c1.1-4.7,1.8-9.5,3.3-14c4.9-14.8,14.3-26.2,27.7-34.3c0.6-0.3,1.2-0.7,1.7-1.1
                                c0.2-0.1,0.3-0.3,0.6-0.6c-9.7-10.1-14.1-22.2-12.1-36.2c1.5-11,6.8-20,15.4-26.9c16.8-13.4,41-11.9,56.1,3.2
                                c15.2,15.3,17.4,41.7-0.2,59.7c5.2,3.9,10.4,7.8,15.3,11.6c-5-19.3-0.3-36.1,16.6-47.9c14.1-9.8,29.7-10.5,44.4-1.7
                                c18.7,11.1,24.4,28.3,19.6,49.2c5-3.7,10-7.4,15.2-11.2c-10.2-10.7-14.4-23.6-11.6-38.4c1.9-10.2,7.2-18.6,15.5-24.9
                                c17.1-13.1,41-11.3,55.8,3.8c15.1,15.5,17,41.7-0.4,59.5c4.1,3.1,8.5,5.9,12.3,9.4c13.3,12,20.1,27.2,20.7,45.1c0.2,5,0.1,10,0,15
                                c-0.1,5.5-3.9,9.5-9.1,9.6c-5.4,0.1-9.3-3.7-9.6-9.4c-0.3-7.4,0.1-14.9-1.1-22.2c-3.6-21.6-23.5-35.9-42.6-35.6
                                c-18.6,0.3-31.8,8.9-40.3,25.1c-0.9,1.8-0.9,3,0.6,4.6c11.4,12.3,16.8,26.9,16.9,43.6c0,4,0.1,8.1,0,12.1
                                c-0.1,6.2-3.9,10.2-9.4,10.2c-5.5,0-9.1-4.2-9.4-10.3c-0.3-7.7,0.2-15.5-1.3-23c-3.8-18.4-19.2-31.9-37.9-33.8
                                c-27.7-2.7-47.9,18.6-48.6,42.1c-0.2,5.2,0,10.4-0.1,15.6c-0.2,5.4-4,9.2-9.1,9.4c-5.1,0.2-9.3-3.4-9.5-8.8
                                c-0.5-12.6-0.7-25.2,4.2-37.3c3-7.4,7.1-14.1,12.6-19.9c1.1-1.2,1.4-2.2,0.7-3.8c-6.7-15.3-23-25.4-39.6-25.9
                                c-20.8-0.7-44.7,16.5-44.6,45.1c0,3.9,0,7.9,0,11.8c-0.1,5.5-2.8,9.2-7.2,10.2c-4.9,1-8.7-1.2-11.1-6.5c-0.1-0.2-0.3-0.3-0.4-0.4
                                C2,197,2,189.7,2,182.4z M64.8,125.3c12.1,0.9,23.4-10,23.3-23.1c0-12.8-10.7-23.3-23.4-23.3c-12.8,0-23.5,10.7-23.3,23.4
                                C41.5,115.9,53.1,126.2,64.8,125.3z M235.2,125.3c11.7,0.9,23.3-9.4,23.4-23c0.1-12.7-10.6-23.4-23.4-23.4
                                c-12.8,0-23.4,10.5-23.4,23.3C211.8,115.2,223,126.2,235.2,125.3z M149.9,153.7c12.3,0.7,23.4-9.9,23.4-23
                                c0-12.8-10.5-23.4-23.3-23.4c-12.8-0.1-23.3,10.5-23.4,23.3C126.6,143.8,137.7,154.4,149.9,153.7z" data-astro-cid-e3r3a3my></path> </g> </svg> </div> </div> </div> <div class="numDatos" data-astro-cid-e3r3a3my> <div class="odometro" data-astro-cid-e3r3a3my> <p class="numeroText" id="counter" data-astro-cid-e3r3a3my></p> <h4 data-astro-cid-e3r3a3my>&#43;</h4> </div> <p class="bajadaText" data-astro-cid-e3r3a3my>Personas Capacitadas</p> </div> </div> </div>  `;
}, "C:/blog-template/src/components/estadisticas.astro", void 0);

const $$Programas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="metodos" data-astro-cid-3p7w5624> <div class="programasCont" data-astro-cid-3p7w5624> <div class="programaBase programaUno" data-astro-cid-3p7w5624> <div class="baseMargen" data-astro-cid-3p7w5624> <div class="infoTop" data-astro-cid-3p7w5624> <div class="infoTopIzq" style="flex: 8;" data-astro-cid-3p7w5624> <p class="etiqueta" data-astro-cid-3p7w5624>Evaluación</p> <p class="titulo" data-astro-cid-3p7w5624>Alaya</p> </div> <div class="infoTopDer" style="flex: 2;" data-astro-cid-3p7w5624> <div class="iconPrograma" data-astro-cid-3p7w5624> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" data-astro-cid-3p7w5624> <style type="text/css">
                                    .st0 {
                                        fill: #ffffff;
                                    }
                                </style> <g data-astro-cid-3p7w5624> <path class="st0" d="M151,52.4c-18.6,0-33.8,15-33.8,33.3c0,18.4,15.2,33.3,33.8,33.3c18.6,0,33.8-15,33.8-33.3
		C184.8,67.4,169.7,52.4,151,52.4z M151,110c-13.6,0-24.6-10.8-24.6-24.2c0-13.4,11-24.2,24.6-24.2c13.6,0,24.6,10.9,24.6,24.2
		S164.6,110,151,110z" data-astro-cid-3p7w5624></path> <path class="st0" d="M150,2C68.3,2,2,68.3,2,150s66.3,148,148,148s148-66.3,148-148S231.7,2,150,2z M110.9,285.5
		c16.9-2.2,33.7-5.4,50.2-9.4c1.7-0.4,3.1-1.8,3.4-3.6c13.4,3.1,27.3,5.9,39.5,7.8C174.5,292.5,141.7,294.3,110.9,285.5z
		 M218.8,273.1c-27-2.7-76.9-14.9-110.8-24.4c-2.4-0.7-5,0.7-5.7,3.1c0,0,0,0,0,0c-0.7,2.4,0.8,4.9,3.2,5.6
		c4.5,1.3,23.2,6.5,45.3,11.8c-15.5,3.5-40,8.1-59.5,9c-13.9-6.4-26.6-15-37.7-25.4c0.7-8.1,4.8-15.2,10.6-17.5
		c4.7-1.8,9.6-2.6,14.6-2.5c17.8,0,37.2,8.3,37.4,8.5c1.4,0.6,3.1,0.5,4.4-0.3c1.3-0.8,2.1-2.3,2.1-3.8v-47c0,0,0,0,0,0
		c0-1.3-1-2.3-2.3-2.3c-4.2,0-8.2,2-10.7,5.3c-3.8,4.9-9.8,11.6-17,16.5c-11.9,7.9-30.2,13.8-36.4,13.5c2.3-3.6,11.2-10.5,17.2-15.3
		c4.9-3.8,10-7.8,14.6-11.8c9.5-8.4,18.4-26.1,25.3-40.7l9.2-18.5l0.4-0.6c1.7-1.6,8.6-4.8,23.6-5.3c19.4-0.7,31.6,3.6,32.4,5.9
		l9.2,17.1c7,14.8,16.1,33.5,26,42.1c4.6,4.1,9.7,8,14.6,11.8c6.2,4.8,15.3,11.8,17.4,15.2c-6,0.3-24.6-5.6-36.5-13.5
		c-7.2-4.8-13.2-11.5-17-16.5c-2.6-3.3-6.5-5.3-10.7-5.3h-0.7c0,0,0,0,0,0c-1.3,0-2.3,1-2.3,2.3v47c0,1.6,0.8,3,2.2,3.8
		c1.3,0.8,3,0.9,4.4,0.3c9.1-4.2,35.7-13.9,49.3-8.4c6.7,2.7,11.3,10.7,11.7,20C238.2,260.6,228.8,267.5,218.8,273.1z M84.9,224
		c4.4-2,8.6-4.3,12.7-6.9c5.8-4,11.1-8.8,15.6-14.2v27.5C106.8,228.1,96.1,224.9,84.9,224z M214.8,222.9
		c-10.3,1.5-20.3,4.9-26.6,7.4v-28.1c4.7,5.7,10.2,10.8,16.4,15C207.8,219.3,211.3,221.2,214.8,222.9z M254.6,244.5
		c-1.2-4.6-3.3-8.9-6.2-12.6c0.9-0.1,1.7-0.3,2.5-0.6c2.3-0.8,4.1-2.7,4.7-5.1c1.9-7.7-7.8-15.2-21.1-25.5
		c-4.8-3.7-9.8-7.6-14.2-11.4c-9.1-8.1-18.8-28.7-25.2-42.4c-3.9-8.4-6.3-13.2-8.1-15.7c-0.5-0.6-1.2-1.1-1.9-1.4
		c-7.8-7.3-27.5-8-34.5-8c-7.8,0-31.2,0.9-36.3,10.9c-1.7,2.7-3.9,7.3-7.1,14.2c-6.4,13.6-16.1,34.3-25.2,42.3
		c-4.4,3.9-9.3,7.7-14.2,11.4c-13.4,10.3-23,17.8-21.1,25.5c0.6,2.4,2.4,4.3,4.7,5.1c0.6,0.2,1.2,0.4,1.8,0.5
		c-3.6,3.6-6.2,8.1-7.5,13C22,218.9,9,185.1,9,150C9,72.1,72.2,9,150,9s141,63.1,141,141C291,184.9,278,218.6,254.6,244.5z" data-astro-cid-3p7w5624></path> </g> </svg> </div> </div> </div> <div class="infoMidle" data-astro-cid-3p7w5624> <p class="textMidle" data-astro-cid-3p7w5624>
Programa de acompañamiento que impulsa espacios de aprendizaje, que permitan tanto a las personas, organizaciones y agrupaciones, desarrollar transformaciones positivas con la práctica de las habilidades socioemocionales, ancladas a la filosofía del Mindfulness, asegurando el bienestar integral de las personas desde una mirada más empática e innovadora.
</p> </div> <div class="infoAcordeon" data-astro-cid-3p7w5624> <details name="info" data-astro-cid-3p7w5624> <summary data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Objetivos</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> <details name="info" data-astro-cid-3p7w5624> <summary data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Resultados</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> <details name="info" data-astro-cid-3p7w5624> <summary class="sumLines" data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Horas Electivas</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> </div> <div class="infoBotones alaya" data-astro-cid-3p7w5624> <a href="/alaya" class="botonPrograma" data-astro-cid-3p7w5624> <div class="verprogramaCont" data-astro-cid-3p7w5624> <p class="verprogramaText" data-astro-cid-3p7w5624> &#x2B9E; Ver Programa</p> </div> </a> </div> </div> </div> <div class="programaBase programaUno" data-astro-cid-3p7w5624> <div class="baseMargen" data-astro-cid-3p7w5624> <div class="infoTop" style="background-color: var(--color-pitagoras);" data-astro-cid-3p7w5624> <div class="infoTopIzq" style="flex: 8;" data-astro-cid-3p7w5624> <p class="etiqueta" data-astro-cid-3p7w5624>Tecnología</p> <p class="titulo" data-astro-cid-3p7w5624>Pitagoras</p> </div> <div class="infoTopDer" style="flex: 2;" data-astro-cid-3p7w5624> <div class="iconPrograma" data-astro-cid-3p7w5624> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve" data-astro-cid-3p7w5624> <style type="text/css">
                                    .st0{fill:#FFFFFF;}
                                </style> <g data-astro-cid-3p7w5624> <path class="st0" d="M209.1,191.4c-2.5,0-4.7-1.3-6-3.4l-7.4-12.7c2.7-3.1,3.7-7.4,2.7-11.4l-5.2-20.9c-1.7-6.8-8.6-11-15.5-9.3
                                        c-1.7,0.4-3.4,1.2-4.8,2.3l-29.8-51.4c11.2-4.7,19.9-7.7,24.1-9c1.8-0.6,3.4-1.5,4.8-2.7L231,174.4c7.3-15.5,11.1-32.4,11-49.5
                                        c0-61.2-47.2-111.4-107.1-116.2l11.7,20.1c-24,11.7-45.7,24.6-64.7,38.6L116,8.7C56,13.5,8.9,63.6,8.9,124.8c0,17.1,3.7,34,11,49.5
                                        l21.2-36.6c2.4,3.2,6.2,5.1,10.2,5.2c3.4,0,6.7-1.4,9.1-3.9l1-1l-1.4,28.7L47.7,188c-1.2,2.1-3.5,3.4-6,3.4h-12
                                        c36.8,52.8,109.4,65.8,162.3,29.1c11.3-7.9,21.2-17.7,29.1-29.1L209.1,191.4z M190.4,173.1c-17.5,12.4-33,18.8-46.1,18.8
                                        c-9,0-16.8-3.1-22.7-8.9c-4.9-4.9-8.2-11.2-9.5-18c-2.6-12.8-0.5-48.2,1.4-71.8c-7.4,4.1-14.5,8.4-21.2,12.9l-3.1,81.8
                                        c-0.1,4-3.4,7.1-7.4,7.1l-10,0c-4.1,0-7.4-3.3-7.4-7.4c0-0.1,0-0.2,0-0.4l3.2-62.2c-3.8,3.4-7.4,6.8-10.9,10.3
                                        c-2.9,2.9-7.6,3-10.5,0.1c-0.8-0.8-1.4-1.7-1.8-2.8L39.8,120c-0.9-2.4-0.5-5.1,1.1-7.1c3.5-4.5,13.6-16.7,32.7-32.2
                                        c23.8-19.4,52.7-36.9,86-52.1c3.7-1.7,8.1-0.1,9.8,3.7c0.4,0.9,0.6,1.9,0.7,2.9l0.9,28.2c0.1,3.3-2,6.3-5.2,7.3
                                        c-9.4,3-18.7,6.5-27.7,10.5c-3.7,28.9-6.1,59.2,2.2,68.6c2.1,2.3,4.7,3.4,8.5,3.4c11.6,0,22-7.8,27.1-12.5c3-2.8,7.7-2.5,10.5,0.5
                                        c0.8,0.9,1.4,2,1.7,3.2l5.2,21C194.1,168.2,192.9,171.4,190.4,173.1L190.4,173.1z" data-astro-cid-3p7w5624></path> </g> </svg> </div> </div> </div> <div class="infoMidle" data-astro-cid-3p7w5624> <p class="textMidle" data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas claves para el análisis de datos (Excel, Power BI, SQL, y Python), en donde los participantes adquieren habilidades analíticas básicas a avanzadas que mejoran la toma de decisiones basadas en datos, incrementando su empleabilidad y potenciando la eficiencia organizacional.
</p> </div> <div class="infoAcordeon" data-astro-cid-3p7w5624> <details name="info" data-astro-cid-3p7w5624> <summary data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Objetivos</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> <details name="info" data-astro-cid-3p7w5624> <summary data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Resultados</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> <details name="info" data-astro-cid-3p7w5624> <summary class="sumLines" data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Horas Electivas</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> </div> <div class="infoBotones pitagoras" data-astro-cid-3p7w5624> <a href="/Pitagoras" class="botonPrograma" data-astro-cid-3p7w5624> <div class="verprogramaCont" data-astro-cid-3p7w5624> <p class="verprogramaText" data-astro-cid-3p7w5624> &#x2B9E; Ver Programa</p> </div> </a> </div> </div> </div> <div class="programaBase programaUno" data-astro-cid-3p7w5624> <div class="proximamente" data-astro-cid-3p7w5624><h4 class="textProximamente" data-astro-cid-3p7w5624>Próximamente</h4></div> <div class="baseMargen" style="filter: blur(2px)" data-astro-cid-3p7w5624> <div class="infoTop" style="background-color: var(--color-gestion);" data-astro-cid-3p7w5624> <div class="infoTopIzq" style="flex: 8;" data-astro-cid-3p7w5624> <p class="etiqueta" data-astro-cid-3p7w5624>Gestión</p> <p class="titulo" data-astro-cid-3p7w5624>Emprende</p> </div> <div class="infoTopDer" style="flex: 2;" data-astro-cid-3p7w5624> <div class="iconPrograma" data-astro-cid-3p7w5624> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" data-astro-cid-3p7w5624> <style type="text/css">
                                    .st0 {
                                        fill: #ffffff;
                                    }
                                </style> <g data-astro-cid-3p7w5624> <path class="st0" d="M151,52.4c-18.6,0-33.8,15-33.8,33.3c0,18.4,15.2,33.3,33.8,33.3c18.6,0,33.8-15,33.8-33.3
		C184.8,67.4,169.7,52.4,151,52.4z M151,110c-13.6,0-24.6-10.8-24.6-24.2c0-13.4,11-24.2,24.6-24.2c13.6,0,24.6,10.9,24.6,24.2
		S164.6,110,151,110z" data-astro-cid-3p7w5624></path> <path class="st0" d="M150,2C68.3,2,2,68.3,2,150s66.3,148,148,148s148-66.3,148-148S231.7,2,150,2z M110.9,285.5
		c16.9-2.2,33.7-5.4,50.2-9.4c1.7-0.4,3.1-1.8,3.4-3.6c13.4,3.1,27.3,5.9,39.5,7.8C174.5,292.5,141.7,294.3,110.9,285.5z
		 M218.8,273.1c-27-2.7-76.9-14.9-110.8-24.4c-2.4-0.7-5,0.7-5.7,3.1c0,0,0,0,0,0c-0.7,2.4,0.8,4.9,3.2,5.6
		c4.5,1.3,23.2,6.5,45.3,11.8c-15.5,3.5-40,8.1-59.5,9c-13.9-6.4-26.6-15-37.7-25.4c0.7-8.1,4.8-15.2,10.6-17.5
		c4.7-1.8,9.6-2.6,14.6-2.5c17.8,0,37.2,8.3,37.4,8.5c1.4,0.6,3.1,0.5,4.4-0.3c1.3-0.8,2.1-2.3,2.1-3.8v-47c0,0,0,0,0,0
		c0-1.3-1-2.3-2.3-2.3c-4.2,0-8.2,2-10.7,5.3c-3.8,4.9-9.8,11.6-17,16.5c-11.9,7.9-30.2,13.8-36.4,13.5c2.3-3.6,11.2-10.5,17.2-15.3
		c4.9-3.8,10-7.8,14.6-11.8c9.5-8.4,18.4-26.1,25.3-40.7l9.2-18.5l0.4-0.6c1.7-1.6,8.6-4.8,23.6-5.3c19.4-0.7,31.6,3.6,32.4,5.9
		l9.2,17.1c7,14.8,16.1,33.5,26,42.1c4.6,4.1,9.7,8,14.6,11.8c6.2,4.8,15.3,11.8,17.4,15.2c-6,0.3-24.6-5.6-36.5-13.5
		c-7.2-4.8-13.2-11.5-17-16.5c-2.6-3.3-6.5-5.3-10.7-5.3h-0.7c0,0,0,0,0,0c-1.3,0-2.3,1-2.3,2.3v47c0,1.6,0.8,3,2.2,3.8
		c1.3,0.8,3,0.9,4.4,0.3c9.1-4.2,35.7-13.9,49.3-8.4c6.7,2.7,11.3,10.7,11.7,20C238.2,260.6,228.8,267.5,218.8,273.1z M84.9,224
		c4.4-2,8.6-4.3,12.7-6.9c5.8-4,11.1-8.8,15.6-14.2v27.5C106.8,228.1,96.1,224.9,84.9,224z M214.8,222.9
		c-10.3,1.5-20.3,4.9-26.6,7.4v-28.1c4.7,5.7,10.2,10.8,16.4,15C207.8,219.3,211.3,221.2,214.8,222.9z M254.6,244.5
		c-1.2-4.6-3.3-8.9-6.2-12.6c0.9-0.1,1.7-0.3,2.5-0.6c2.3-0.8,4.1-2.7,4.7-5.1c1.9-7.7-7.8-15.2-21.1-25.5
		c-4.8-3.7-9.8-7.6-14.2-11.4c-9.1-8.1-18.8-28.7-25.2-42.4c-3.9-8.4-6.3-13.2-8.1-15.7c-0.5-0.6-1.2-1.1-1.9-1.4
		c-7.8-7.3-27.5-8-34.5-8c-7.8,0-31.2,0.9-36.3,10.9c-1.7,2.7-3.9,7.3-7.1,14.2c-6.4,13.6-16.1,34.3-25.2,42.3
		c-4.4,3.9-9.3,7.7-14.2,11.4c-13.4,10.3-23,17.8-21.1,25.5c0.6,2.4,2.4,4.3,4.7,5.1c0.6,0.2,1.2,0.4,1.8,0.5
		c-3.6,3.6-6.2,8.1-7.5,13C22,218.9,9,185.1,9,150C9,72.1,72.2,9,150,9s141,63.1,141,141C291,184.9,278,218.6,254.6,244.5z" data-astro-cid-3p7w5624></path> </g> </svg> </div> </div> </div> <div class="infoMidle" data-astro-cid-3p7w5624> <p class="textMidle" data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas claves para el análisis de datos (Excel, Power BI, SQL, y Python), en donde los participantes adquieren habilidades analíticas básicas a avanzadas que mejoran la toma de decisiones basadas en datos, incrementando su empleabilidad y potenciando la eficiencia organizacional.
</p> </div> <div class="infoAcordeon" data-astro-cid-3p7w5624> <details name="info" data-astro-cid-3p7w5624> <summary data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Objetivos</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> <details name="info" data-astro-cid-3p7w5624> <summary data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Resultados</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> <details name="info" data-astro-cid-3p7w5624> <summary class="sumLines" data-astro-cid-3p7w5624>&nbsp;<b data-astro-cid-3p7w5624>·</b>&nbsp;Horas Electivas</summary> <div data-astro-cid-3p7w5624>
Programa integral de capacitación en herramientas
                            claves para el análisis de datos (Excel, Power BI,
                            SQL, y Python), en donde los participantes adquieren
                            habilidades.
</div> </details> </div> <div class="infoBotones" style="background-color: var(--color-gestion);" data-astro-cid-3p7w5624> <a href="#" class="botonPrograma" data-astro-cid-3p7w5624> <div class="verprogramaCont" data-astro-cid-3p7w5624> <p class="verprogramaText" data-astro-cid-3p7w5624> &#x2B9E; Ver Programa</p> </div> </a> </div> </div> </div> </div> </div> `;
}, "C:/blog-template/src/components/Programas.astro", void 0);

const $$Enlaceblog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => {
    const dateA = a.data.posted || a.data.pubDate;
    const dateB = b.data.posted || b.data.pubDate;
    return (dateB?.valueOf() || 0) - (dateA?.valueOf() || 0);
  }).slice(0, 2);
  const truncateContent = (content, maxLength) => {
    return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
  };
  return renderTemplate`${maybeRenderHead()}<div class="containerBlog" data-astro-cid-m2wu5zvt> <div class="marginBlog" data-astro-cid-m2wu5zvt> <div class="noticiasBlog" data-astro-cid-m2wu5zvt> ${posts.map((post) => renderTemplate`<div class="blogEntrada" data-astro-cid-m2wu5zvt> <div class="dataText" data-astro-cid-m2wu5zvt> <p class="fecha" data-astro-cid-m2wu5zvt> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.posted || post.data.pubDate, "data-astro-cid-m2wu5zvt": true })} </p> <p class="titulo" data-astro-cid-m2wu5zvt>${post.data.title}</p> <p class="contenido" data-astro-cid-m2wu5zvt> ${truncateContent(post.body, 200)} </p> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-m2wu5zvt> <p data-astro-cid-m2wu5zvt>Seguir Leyendo</p> </a> </div> <div class="imgContainer" data-astro-cid-m2wu5zvt> <div class="dataImg" data-astro-cid-m2wu5zvt> <img class="imgBlog"${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-m2wu5zvt> </div> </div> </div>`)} </div> </div> </div> `;
}, "C:/blog-template/src/components/Enlaceblog.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$GrupoLogotipo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GrupoLogotipo;
  const {
    width = 50,
    height = 50,
    fill = "currentColor"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(fill, "fill")} class="iconoEmpresa" aria-hidden="true"> <g> <path d="M66.8,283.7c-8.7-19.8-17.4-39.6-26.2-59.4c-2.1-4.7-1.4-9.2,1.1-13.2c7-11.1,14.2-22.1,21.4-33.1
		c8.6-13.1,17.9-25.9,25.7-39.5c3.4-5.9,4.2-13.5,5.4-20.5c0.4-2.3-1.2-6.1-3.1-7.5c-6.8-5.1-13.8-10-21.4-13.9
		c-10.9-5.6-22.4-10.1-33.6-15.2c-2-0.9-3.9-2.1-5.8-3.3C12,66.4,8,53.3,19.1,30.6c5.1-10.5,16.8-14.1,31.4-11.3
		c13,2.5,24.5,8.3,35.4,15.6c26.5,17.8,48.6,39.8,64.6,67.7c2.3,4,4.1,8.3,5.7,12.6c3.6,9.5,3.3,18.8-2.4,27.5
		c-13.4,20.6-26.8,41.3-40.4,61.8c-15.4,23.2-31,46.3-42.8,71.7c-1.1,2.4-1.8,5.1-2.7,7.6C67.5,283.7,67.2,283.7,66.8,283.7z"></path> <path d="M2.2,125.6C4,118,6.3,110.7,12.3,105C23,94.8,39.4,92.9,52,100.7c12.8,7.9,18.2,23,13.4,37
		c-4.6,13.5-18.6,22.4-32.9,21c-15.8-1.5-27.3-12.1-29.5-27.3c-0.1-1-0.6-1.9-0.9-2.8C2.2,127.7,2.2,126.6,2.2,125.6z"></path> <path d="M239.8,15.8c5.5,10.2,11,19.4,15.5,29.1c4.4,9.4,7.8,19.3,11.7,28.9c2.4,5.9,1.7,11.5-1.7,16.6
		c-7.4,11.1-14.8,22.1-22.4,33.1c-7.9,11.6-16.6,22.7-23.6,34.7c-3.7,6.2-5,14-6.7,21.2c-1.4,6,1.4,10.9,6.5,13.9
		c7.7,4.4,15.5,8.6,23.5,12.3c12.2,5.7,24.7,10.9,37,16.3c7.6,3.3,12.2,9.2,12.4,17.4c0.2,7.9,0.1,16.2-2,23.8
		c-4.1,14.7-19.3,21.8-36,18.1c-12.8-2.9-23.9-9.1-34.3-16.7c-21.8-16-41-34.7-56.8-56.6c-4.9-6.9-8.8-14.7-12.1-22.5
		c-4-9.4-3.5-19.2,2.2-28c9.6-15,19.6-29.7,29.1-44.7c16.3-25.7,32.4-51.5,48.3-77.4C234,29.5,236.3,23.1,239.8,15.8z"></path> <path d="M297,166.4c0,17.6-14.3,31.7-32.2,31.6c-17.7-0.1-32-14-32.1-31.3c-0.1-17.5,14.3-31.8,32.1-31.9
		C282.6,134.8,297,148.9,297,166.4z"></path> </g> </svg>`;
}, "C:/blog-template/public/GrupoLogotipo.astro", void 0);

const FormSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    empresa: ""
    // Campo agregado
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("../../.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error al enviar el formulario");
    }
  };
  return /* @__PURE__ */ jsxs("form", { id: "contact-form", onSubmit: handleSubmit, className: "formContenedor", children: [
    /* @__PURE__ */ jsx("p", { className: "textFormulario", children: "Nombre:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "name",
        value: formData.name,
        onChange: handleChange,
        className: "textArea",
        placeholder: "Martina Enrione",
        required: true
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "textFormulario", children: "Correo:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        className: "textArea",
        placeholder: "m.enrione@gmail.com",
        required: true
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "textFormulario", children: "Empresa:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "empresa",
        value: formData.empresa,
        onChange: handleChange,
        className: "textArea",
        placeholder: "Urbanica",
        required: true
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "textFormulario", children: "Asunto:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "subject",
        value: formData.subject,
        onChange: handleChange,
        className: "textArea"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "textFormulario esp", children: "Mensaje:" }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        name: "message",
        value: formData.message,
        onChange: handleChange,
        className: "textMensaje",
        cols: 30,
        rows: 10,
        required: true
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "submit",
        name: "submit",
        value: "ENVIAR",
        className: "subFormEnviar"
      }
    )
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "HeaderHome", $$HeaderHome, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <div class="sliderHome" data-astro-cid-j7pv25f6> ${renderComponent($$result, "VideoBg", $$VideoBg, { "data-astro-cid-j7pv25f6": true })} </div> <div class="contInfoHome" data-astro-cid-j7pv25f6> <div class="contInfoIzq" data-astro-cid-j7pv25f6> ${renderComponent($$result, "GrupoLogotipo", $$GrupoLogotipo, { "width": 60, "height": 60, "fill": "white", "class": "iconoEmpresa", "data-astro-cid-j7pv25f6": true })} <p class="bajadaHome" data-astro-cid-j7pv25f6>CONSULTORIA Y CAPACITACIÓN</p> <h1 class="sloganHome" data-astro-cid-j7pv25f6>
Capacitarse es Crecer, <br data-astro-cid-j7pv25f6>
te ayudamos hacia <br data-astro-cid-j7pv25f6>
nuevas fronteras. <br data-astro-cid-j7pv25f6> </h1> <p class="textHome" data-astro-cid-j7pv25f6>
Bienvenidos a Grupo DI, Potenciamos tu crecimiento con
						capacitación innovadora y metodologías adaptativas. <br data-astro-cid-j7pv25f6> <b data-astro-cid-j7pv25f6>¡Comencemos!</b> </p> <div class="botonesHome" data-astro-cid-j7pv25f6> <a class="botonEquipo" href="/equipo" data-astro-cid-j7pv25f6>
Conócenos</a> <a class="botonCursos" href="#metodos" data-astro-cid-j7pv25f6>Cursos</a> </div> </div> <div class="contInfoDer" style=" flex: 50%;" data-astro-cid-j7pv25f6></div> </div> <div class="datosNum" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Estadisticas", $$Estadisticas, { "data-astro-cid-j7pv25f6": true })} </div> <div class="boxScroll" data-astro-cid-j7pv25f6></div> <div class="titulosSect" id="titulos" data-astro-cid-j7pv25f6> <div class="titulosSectCont" data-astro-cid-j7pv25f6> <h3 class="titulosHome" data-astro-cid-j7pv25f6>
Explora lo que tus <b class="destacador" data-astro-cid-j7pv25f6>profesores</b> comparten
</h3> <p class="subtituloHome" data-astro-cid-j7pv25f6>
Conocé las ultimas noticias de nuestro campus además te
						invitamos a conversar los temas que nuestros profesores
						comparten
</p> </div> </div> <div class="blogEntradas" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Enlaceblog", $$Enlaceblog, { "data-astro-cid-j7pv25f6": true })} </div> <div class="boxScroll" id="metodos" data-astro-cid-j7pv25f6></div> <div class="titulosSect" data-astro-cid-j7pv25f6> <div class="titulosSectCont" data-astro-cid-j7pv25f6> <h3 class="titulosHome" data-astro-cid-j7pv25f6>
Conoce nuestras <b class="destacador" data-astro-cid-j7pv25f6>áreas</b> de desarrollo
</h3> <p class="subtituloHome" data-astro-cid-j7pv25f6>
Hemos desarrollado con nuestros mejores especialistas,
						diferetes programas que ayuden a tu organización a
						crecer y entregarles un valor a cada alumno
</p> </div> </div> <div class="metodos" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Programas", $$Programas, { "data-astro-cid-j7pv25f6": true })} </div> <div class="boxScroll" id="formulario" data-astro-cid-j7pv25f6></div> <div class="titulosSect" data-astro-cid-j7pv25f6> <div class="titulosSectCont" data-astro-cid-j7pv25f6> <h3 class="titulosHome" data-astro-cid-j7pv25f6>
Hola! ¿En que podemos <b class="destacador" data-astro-cid-j7pv25f6>Ayudarte</b>?
</h3> <p class="subtituloHome" data-astro-cid-j7pv25f6>
Si tienes dudas de como implementar los cursos en
						tu organización no dudes en preguntarnos, o si ya tienes
						pensado que quieres hacer escríbenos, te estamos
						esperando.
</p> </div> </div> <div class="ubicacion" data-astro-cid-j7pv25f6> <div class="ubicacionEsp" data-astro-cid-j7pv25f6> <div class="mailContacto" data-astro-cid-j7pv25f6> ${renderComponent($$result, "FormSubmit", FormSubmit, { "data-astro-cid-j7pv25f6": true })} </div> <div class="mapaContacto" data-astro-cid-j7pv25f6> <div class="mapaGoogle" data-astro-cid-j7pv25f6> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.234902271473!2d-70.64870854757903!3d-33.44318607960599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5cc6a1d8de1%3A0x41196cd1f2a5688d!2sEstado%2010!5e0!3m2!1ses-419!2scl!4v1726065327811!5m2!1ses-419!2scl" class="googleMap" width="" height="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-j7pv25f6></iframe> </div> </div> </div> </div> <div class="iconosUbicacion" data-astro-cid-j7pv25f6> <div class="iconosUbiEsp" data-astro-cid-j7pv25f6> <div class="botomRapido" data-astro-cid-j7pv25f6> <svg class="iconosContacto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> <p class="textoRapido" data-astro-cid-j7pv25f6>
Si necesitas ayuda comercial, escribenos un mail a
							la siguiente dirección y te brindaremos toda la
							información que necesites: <br data-astro-cid-j7pv25f6> <a href="mailto:contacto@grupodi.cl" class="correoLink" data-astro-cid-j7pv25f6>contacto@grupodi.cl</a> </p> </div> <div class="botomRapido" data-astro-cid-j7pv25f6> <svg class="iconosContacto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> <p class="textoRapido" data-astro-cid-j7pv25f6>
Si eres Alumno en nuestro campus y necesitas Ayuda,
							escribenos un mail a la siguiente dirección y te
							brindaremos el soporte que necesites: <br data-astro-cid-j7pv25f6> <a href="capacitacion@grupodi.cl" class="correoLink" data-astro-cid-j7pv25f6>capacitacion@grupodi.cl</a> </p> </div> <div class="botomRapido" data-astro-cid-j7pv25f6> <svg class="iconosContacto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> <p class="textoRapido" data-astro-cid-j7pv25f6>
Visítanos junto a tu empresa y vive una experiencia
							de aprendizaje a través de nuestros equipo de
							profesores en nuestro Campus <br data-astro-cid-j7pv25f6> <a href="https://maps.app.goo.gl/qdeeN4PbUgJYC6v88" target="_blank" class="correoLink" data-astro-cid-j7pv25f6>Estado 10, Oficina 1602, Santiago de Chile</a> </p> </div> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })}   </body></html>`;
}, "C:/blog-template/src/pages/index.astro", void 0);

const $$file = "C:/blog-template/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
