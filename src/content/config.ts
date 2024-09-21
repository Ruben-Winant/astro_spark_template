import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => {
      const [day, month, year] = str.split("/");
      return new Date(`${year}-${month}-${day}`).toLocaleDateString();
    }),
    lang: z.enum(["en", "nl", "fr"]),
  }),
});

export const collections = {
  blog: blogCollection,
};
