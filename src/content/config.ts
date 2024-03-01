import { defineCollection, z } from "astro:content";

export let collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      published: z.boolean(),
      created_at: z.date(),
      images: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string().optional(),
          }),
        )
        .optional(),
    }),
  }),
};
