import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Formulario = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<form id="form" onsubmit="event => event.preventDefault(); return false;"> <div class="columns"> <fieldset> <label for="name">Name<sup>*</sup></label> <input type="text" id="name" value=""> </fieldset> <fieldset> <label for="surname">Surname</label> <input type="text" id="surname" value=""> </fieldset> </div> <fieldset> <label for="email">Email<sup>*</sup></label> <input type="email" id="email" value=""> </fieldset> <fieldset> <label for="subject">Subject<sup>*</sup></label> <input type="text" id="subject" value=""> </fieldset> <fieldset> <label for="message">Message<sup>*</sup></label> <textarea id="message"></textarea> </fieldset> <fieldset> <label for="tel">Phone number</label> <input type="tel" id="tel" value=""> </fieldset> <button type="submit">Submit</button> </form> <script>
  const get = (id) => document.getElementById(id) || { value: '' };

  const submitForm = () => {
    saveInput();
    sendmail();
  };

  const getFormData = () => {
    const store = Object.create(null);
    store.name = get('name').value;
    store.surname = get('surname').value;
    store.email = get('email').value;
    store.tel = get('tel').value;
    store.subject = get('subject').value;
    store.message = get('message').value;
    return store;
  };

  const saveInput = () => {
    const { message, subject, ...rest } = getFormData();
    localStorage.setItem('contactinfo', JSON.stringify(rest));
  };

  const retrieveInfo = () => {
    const store = JSON.parse(localStorage.getItem('contactinfo') || '{}');
    get('name').value = store.name || '';
    get('surname').value = store.surname || '';
    get('email').value = store.email || '';
    get('tel').value = store.tel || '';
  };

  const submitBtn = document.querySelector('[type="submit"]');
  submitBtn?.addEventListener('click', submitForm);
  retrieveInfo();

  const sendmail = async () => {
    try {
      const { name, surname, email, tel, message, subject } = getFormData();
      const response = await fetch('/.netlify/functions/send-email.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email, tel, message, subject }),
      });

      if (!response.ok) {
        throw new Error(\`Error: \${response.status}\`);
      }

      const data = await response.json();
      console.log(data); // Aqu\xED est\xE1 la respuesta del backend
    } catch (err) {
      console.error('Error', err);
    }
  };
<\/script>`], ["", `<form id="form" onsubmit="event => event.preventDefault(); return false;"> <div class="columns"> <fieldset> <label for="name">Name<sup>*</sup></label> <input type="text" id="name" value=""> </fieldset> <fieldset> <label for="surname">Surname</label> <input type="text" id="surname" value=""> </fieldset> </div> <fieldset> <label for="email">Email<sup>*</sup></label> <input type="email" id="email" value=""> </fieldset> <fieldset> <label for="subject">Subject<sup>*</sup></label> <input type="text" id="subject" value=""> </fieldset> <fieldset> <label for="message">Message<sup>*</sup></label> <textarea id="message"></textarea> </fieldset> <fieldset> <label for="tel">Phone number</label> <input type="tel" id="tel" value=""> </fieldset> <button type="submit">Submit</button> </form> <script>
  const get = (id) => document.getElementById(id) || { value: '' };

  const submitForm = () => {
    saveInput();
    sendmail();
  };

  const getFormData = () => {
    const store = Object.create(null);
    store.name = get('name').value;
    store.surname = get('surname').value;
    store.email = get('email').value;
    store.tel = get('tel').value;
    store.subject = get('subject').value;
    store.message = get('message').value;
    return store;
  };

  const saveInput = () => {
    const { message, subject, ...rest } = getFormData();
    localStorage.setItem('contactinfo', JSON.stringify(rest));
  };

  const retrieveInfo = () => {
    const store = JSON.parse(localStorage.getItem('contactinfo') || '{}');
    get('name').value = store.name || '';
    get('surname').value = store.surname || '';
    get('email').value = store.email || '';
    get('tel').value = store.tel || '';
  };

  const submitBtn = document.querySelector('[type="submit"]');
  submitBtn?.addEventListener('click', submitForm);
  retrieveInfo();

  const sendmail = async () => {
    try {
      const { name, surname, email, tel, message, subject } = getFormData();
      const response = await fetch('/.netlify/functions/send-email.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email, tel, message, subject }),
      });

      if (!response.ok) {
        throw new Error(\\\`Error: \\\${response.status}\\\`);
      }

      const data = await response.json();
      console.log(data); // Aqu\xED est\xE1 la respuesta del backend
    } catch (err) {
      console.error('Error', err);
    }
  };
<\/script>`])), maybeRenderHead());
}, "C:/blog-template/src/pages/formulario.astro", void 0);

const $$file = "C:/blog-template/src/pages/formulario.astro";
const $$url = "/formulario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Formulario,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
