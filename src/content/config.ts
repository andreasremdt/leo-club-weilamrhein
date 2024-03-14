import { defineCollection, z } from "astro:content";

export let collections = {
  posts: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        published: z.boolean(),
        created_at: z.date(),
        images: z
          .array(
            z.object({
              src: image(),
              alt: z.string().optional(),
            }),
          )
          .optional(),
      }),
  }),
};
