import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main', // El branch en tu repo de GitHub
  clientId: null,  // Si no usas Tina Cloud, deja esto en null
  token: null,     // Si no usas Tina Cloud, deja esto en null
  build: {
    outputFolder: "admin",  // Dónde genera los archivos TinaCMS
    publicFolder: "public", // Ruta de los archivos estáticos
  },
  media: {
    tina: {
      mediaRoot: "",  // Ruta para los archivos subidos (imágenes, etc.)
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "datetime",
            name: "posted",
            label: "Date Posted",
            required: true,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Imagen Principal",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
