async function getMod() {
						return import('./Inclusin-en-las-Aulas-Un-Reto-Global_CECBeiIS.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
