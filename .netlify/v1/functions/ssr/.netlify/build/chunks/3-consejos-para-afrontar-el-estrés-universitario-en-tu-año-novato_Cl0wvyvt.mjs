import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"1-revisa-tu-sueño\"><strong>1 Revisa tu sueño</strong></h3>\n<p>En los estudios mencionados anteriormente, se encontró que <strong>el sueño es uno de los factores más afectados en jóvenes universitarios</strong>. Como debes saber, es ideal dormir entre <strong>7-8 horas cada noche</strong>. También es recomendable establecer un horario regular para acostarte y despertar, contar con una rutina predecible para las horas antes de dormir (por ejemplo, apagar los electrónicos y tomar una ducha), incorporar actividades relajantes durante la tarde/noche (lectura, escritura, ejercicios de relajación), y evitar la cafeína. Si necesitas dormir siesta, procura que sean cortas. Muchos jóvenes reportan que al entrar a la universidad es difícil alcanzar las horas de sueño recomendadas. <strong>Lo importante es que la calidad y cantidad de tu sueño te permita una sensación de bienestar y descanso.</strong></p>\n<h3 id=\"2-organiza-tu-horario\"><strong>2 Organiza tu horario</strong></h3>\n<p>Contar con un horario para tus actividades y responsabilidades le puede dar orden a tu vida y reducir tu ansiedad y estrés. Planifica cuántas horas necesitas dedicar a tus cursos, tareas y estudio. Intenta <strong>incluir tiempo para actividades placenteras</strong> que te permitan disfrutar. Incluye también <strong>actividades deportivas</strong>, ya sea ir al gimnasio o salir a caminar.</p>\n<h3 id=\"3-aprende-a-priorizar\"><strong>3 Aprende a priorizar</strong></h3>\n<p>En la universidad, te verás enfrentado a demandas múltiples. <strong>No siempre será posible cumplir con todas tus metas a la perfección</strong>. A veces será importante para ti perder un par de horas de sueño para terminar de estudiar para un examen. Otras veces, vas a preferir descansar, dejando de lado temporalmente tus responsabilidades académicas. Priorizar tu bienestar físico y emocional es tan importante como priorizar tus responsabilidades académicas.</p>";

				const frontmatter = {"title":"3 Ayudas para afrontar el estrés universitario en tu año novato","description":"En los últimos años, se ha observado un deterioro en la salud mental de los jóvenes universitarios. Depresión, ansiedad, estrés, e insomnio son algunas de las problemáticas que nos afectan como grupo, según lo reportado por tres estudios recientes realizados en nuestro país.","posted":"2024-09-24T14:23:15.764Z","heroImage":"https://res.cloudinary.com/dgwem7alo/image/upload/v1727186662/pexels-olly-3755761_wwf8eq.jpg"};
				const file = "C:/blog-template/src/content/blog/3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato.md";
				const url = undefined;
				function rawContent() {
					return "### **1 Revisa tu sueño**\r\n\r\nEn los estudios mencionados anteriormente, se encontró que **el sueño es uno de los factores más afectados en jóvenes universitarios**. Como debes saber, es ideal dormir entre **7-8 horas cada noche**. También es recomendable establecer un horario regular para acostarte y despertar, contar con una rutina predecible para las horas antes de dormir (por ejemplo, apagar los electrónicos y tomar una ducha), incorporar actividades relajantes durante la tarde/noche (lectura, escritura, ejercicios de relajación), y evitar la cafeína. Si necesitas dormir siesta, procura que sean cortas. Muchos jóvenes reportan que al entrar a la universidad es difícil alcanzar las horas de sueño recomendadas. **Lo importante es que la calidad y cantidad de tu sueño te permita una sensación de bienestar y descanso.**\r\n\r\n### **2 Organiza tu horario**\r\n\r\nContar con un horario para tus actividades y responsabilidades le puede dar orden a tu vida y reducir tu ansiedad y estrés. Planifica cuántas horas necesitas dedicar a tus cursos, tareas y estudio. Intenta **incluir tiempo para actividades placenteras** que te permitan disfrutar. Incluye también **actividades deportivas**, ya sea ir al gimnasio o salir a caminar.\r\n\r\n\r\n\r\n### **3 Aprende a priorizar**\r\n\r\nEn la universidad, te verás enfrentado a demandas múltiples. **No siempre será posible cumplir con todas tus metas a la perfección**. A veces será importante para ti perder un par de horas de sueño para terminar de estudiar para un examen. Otras veces, vas a preferir descansar, dejando de lado temporalmente tus responsabilidades académicas. Priorizar tu bienestar físico y emocional es tan importante como priorizar tus responsabilidades académicas.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"1-revisa-tu-sueño","text":"1 Revisa tu sueño"},{"depth":3,"slug":"2-organiza-tu-horario","text":"2 Organiza tu horario"},{"depth":3,"slug":"3-aprende-a-priorizar","text":"3 Aprende a priorizar"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
