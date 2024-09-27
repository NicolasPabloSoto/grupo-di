import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>La inclusión educativa es uno de los mayores retos que enfrenta el sistema escolar actual. Su objetivo es garantizar que todos los estudiantes, sin importar sus habilidades o necesidades, reciban una educación de calidad y participen activamente en el entorno escolar. Sin embargo, aunque se ha avanzado en esta área, aún existen barreras que dificultan la integración plena.</p>\n<p>Uno de los mayores desafíos es la falta de recursos adecuados, como profesores especializados y tecnología adaptativa, que permitan que los estudiantes con discapacidades físicas o cognitivas tengan las mismas oportunidades que sus compañeros. Además, la falta de capacitación para los docentes es un problema recurrente; muchos maestros no están preparados para atender las necesidades diversas de sus estudiantes.</p>\n<p>Por otro lado, el entorno social dentro de las aulas también juega un papel crucial. La inclusión no solo depende de la infraestructura educativa, sino también de la actitud y la aceptación de los compañeros y profesores. Promover una cultura de respeto y empatía es esencial para crear un ambiente donde todos los estudiantes se sientan valorados.</p>";

				const frontmatter = {"title":"Inclusión en las Aulas: Un Reto Mundial","description":"El desafío de integrar a estudiantes de todas las capacidades en el sistema educativo moderno.","posted":"2024-09-12T03:00:00.000Z","heroImage":"/pexels-rdne-5756661.jpg"};
				const file = "C:/blog-template/src/content/blog/Inclusin-en-las-Aulas-Un-Reto-Global.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLa inclusión educativa es uno de los mayores retos que enfrenta el sistema escolar actual. Su objetivo es garantizar que todos los estudiantes, sin importar sus habilidades o necesidades, reciban una educación de calidad y participen activamente en el entorno escolar. Sin embargo, aunque se ha avanzado en esta área, aún existen barreras que dificultan la integración plena.\r\n\r\nUno de los mayores desafíos es la falta de recursos adecuados, como profesores especializados y tecnología adaptativa, que permitan que los estudiantes con discapacidades físicas o cognitivas tengan las mismas oportunidades que sus compañeros. Además, la falta de capacitación para los docentes es un problema recurrente; muchos maestros no están preparados para atender las necesidades diversas de sus estudiantes.\r\n\r\nPor otro lado, el entorno social dentro de las aulas también juega un papel crucial. La inclusión no solo depende de la infraestructura educativa, sino también de la actitud y la aceptación de los compañeros y profesores. Promover una cultura de respeto y empatía es esencial para crear un ambiente donde todos los estudiantes se sientan valorados.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
