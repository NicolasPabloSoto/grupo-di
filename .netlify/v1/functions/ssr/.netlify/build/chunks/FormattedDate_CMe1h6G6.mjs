import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_HCeeQtoM.mjs';
import { a as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, b as addAttribute } from './astro/server_LTQd25l2.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import 'clsx';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato.md": () => import('./3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato_BUCPftJo.mjs'),"/src/content/blog/Big-Data-Transformando-la-Toma-de-Decisiones.md": () => import('./Big-Data-Transformando-la-Toma-de-Decisiones_B4VbCUhk.mjs'),"/src/content/blog/Educacin-en-la-Era-Digital-Innovacin-o-Caos.md": () => import('./Educacin-en-la-Era-Digital-Innovacin-o-Caos_BFoIs0em.mjs'),"/src/content/blog/Inclusin-en-las-Aulas-Un-Reto-Global.md": () => import('./Inclusin-en-las-Aulas-Un-Reto-Global_Cs095s3I.mjs'),"/src/content/blog/Machine-Learning-El-Futuro-del-Anlisis-de-Datos.md": () => import('./Machine-Learning-El-Futuro-del-Anlisis-de-Datos_BiDXlFAh.mjs'),"/src/content/blog/Referencias-y-Resmenes-Cmo-Destacar.md": () => import('./Referencias-y-Resmenes-Cmo-Destacar_CSWN6--u.mjs'),"/src/content/blog/cmo-no-dejar-que-los-libros-te-aplasten.md": () => import('./cmo-no-dejar-que-los-libros-te-aplasten_BnpX2W4K.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato":"/src/content/blog/3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato.md","big-data-transformando-la-toma-de-decisiones":"/src/content/blog/Big-Data-Transformando-la-Toma-de-Decisiones.md","cmo-no-dejar-que-los-libros-te-aplasten":"/src/content/blog/cmo-no-dejar-que-los-libros-te-aplasten.md","educacin-en-la-era-digital-innovacin-o-caos":"/src/content/blog/Educacin-en-la-Era-Digital-Innovacin-o-Caos.md","inclusin-en-las-aulas-un-reto-global":"/src/content/blog/Inclusin-en-las-Aulas-Un-Reto-Global.md","machine-learning-el-futuro-del-anlisis-de-datos":"/src/content/blog/Machine-Learning-El-Futuro-del-Anlisis-de-Datos.md","referencias-y-resmenes-cmo-destacar":"/src/content/blog/Referencias-y-Resmenes-Cmo-Destacar.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato.md": () => import('./3-consejos-para-afrontar-el-estrés-universitario-en-tu-año-novato_CU4wwt3I.mjs'),"/src/content/blog/Big-Data-Transformando-la-Toma-de-Decisiones.md": () => import('./Big-Data-Transformando-la-Toma-de-Decisiones_DG74YLLc.mjs'),"/src/content/blog/Educacin-en-la-Era-Digital-Innovacin-o-Caos.md": () => import('./Educacin-en-la-Era-Digital-Innovacin-o-Caos_B0PMdldq.mjs'),"/src/content/blog/Inclusin-en-las-Aulas-Un-Reto-Global.md": () => import('./Inclusin-en-las-Aulas-Un-Reto-Global_CkdyljlR.mjs'),"/src/content/blog/Machine-Learning-El-Futuro-del-Anlisis-de-Datos.md": () => import('./Machine-Learning-El-Futuro-del-Anlisis-de-Datos_eS1CU-jC.mjs'),"/src/content/blog/Referencias-y-Resmenes-Cmo-Destacar.md": () => import('./Referencias-y-Resmenes-Cmo-Destacar_JqoZFwGG.mjs'),"/src/content/blog/cmo-no-dejar-que-los-libros-te-aplasten.md": () => import('./cmo-no-dejar-que-los-libros-te-aplasten_C9ZAswRh.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  function formatDate(date2) {
    if (!date2) {
      return "No date";
    }
    const dateObject = date2 instanceof Date ? date2 : new Date(date2);
    if (isNaN(dateObject.getTime())) {
      return "Invalid date";
    }
    return dateObject.toLocaleDateString("es-CL", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  const formattedDate = formatDate(date);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date instanceof Date ? date.toISOString() : date, "datetime")}> ${formattedDate} </time> <!-- ---
interface Props {
	date: Date;
}

const { date } = Astro.props;
---

<time datetime={date.toISOString()}>
	{
		date.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}
</time> -->`;
}, "C:/blog-template/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $, getCollection as g };