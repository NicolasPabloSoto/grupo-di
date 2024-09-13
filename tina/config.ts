// import { defineConfig } from "tinacms";

// export default defineConfig({
//   branch: 'main',
//   build: {
//     outputFolder: 'admin',
//     publicFolder: 'public',
//   },
//   media: {
//     tina: {
//       mediaRoot: "uploads",
//       publicFolder: "public",
//     },
//   },

import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: "dummy-client-id", // Valor ficticio para evitar errores
  token: "dummy-token", // Valor ficticio para evitar errores
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
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
  // Se eliminó el bloque admin.auth para evitar errores
});