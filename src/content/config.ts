import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // Hacemos description opcional
    // Aceptamos tanto 'pubDate' como 'posted' para la fecha de publicación
    pubDate: z.coerce.date().optional(),
    posted: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }).refine(data => data.pubDate || data.posted, {
    message: "Either 'pubDate' or 'posted' must be defined",
    path: ['pubDate'],
  }),
});

export const collections = { blog };

