import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Formulario = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<form id="form" onsubmit="event => event.preventDefault();return false"> <div class="columns"> <fieldset> <label for="name">Name<sup>*</sup></label> <input type="text" id="name" value=""> </fieldset> <fieldset> <label for="surname">Surname</label> <input type="text" id="surname" value=""> </fieldset> </div> <fieldset> <label for="email">Email<sup>*</sup></label> <input type="email" id="email" value=""> </fieldset> <fieldset> <label for="subject">Subject<sup>*</sup></label> <input type="text" id="subject" value=""> </fieldset> <fieldset> <label for="message">Message<sup>*</sup></label> <textarea id="message"></textarea> </fieldset> <fieldset> <label for="tel">Phone number</label> <input type="tel" id="tel" value=""> </fieldset> <button type="submit">Submit</button> </form> <script>
    const get = (id) => document.getElementById(id) || { value: '' }

        const submitForm = () => {
        saveInput()
        sendmail()
        }

        // save and retrieve generic formdata from localstorage
        const getFormData = () => {
        const store = Object.create(null)
        store.name = get('name')?.value
        store.surname = get('surname')?.value
        store.email = get('email')?.value
        store.tel = get('tel')?.value
        store.subject = get('subject')?.value
        store.message = get('message')?.value
        return store
        }

        const saveInput = () => {
        const { message, subject, ...rest } = getFormData()
        localStorage.setItem('contactinfo', JSON.stringify(rest))
        }

        const retrieveInfo = () => {
        const store = JSON.parse(localStorage.getItem('contactinfo') || '{}')
        get('name').value = store.name || ''
        get('surname').value = store.surname || ''
        get('email').value = store.email || ''
        get('tel').value = store.tel || ''
        }
        // end: localstorage

        // This kicks thing of, should really be on window.onload but...
        const submitBtn = document.querySelector('[type="submit"]')
        submitBtn?.addEventListener('click', submitForm)
        retrieveInfo()
        ;[...document.querySelectorAll('input')][0]?.focus()
        // window.onload = () => {} // don't know why this wont work

        const sendmail = async () => {
        const { name, surname, email, tel, message, subject } = getFormData()
        const data = await fetch('/api/sendmail.json', { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, tel, message, subject }),
        })
            .then((res) => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
            })
            .catch((err) => {
            console.log('Error', err)
            throw new Error('Network error.')
            })
        console.log(data) // Here is the response from backend
        }
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