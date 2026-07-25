import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    readingTime: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };
