import { defineCollection, z } from 'astro:content';

const services = defineCollection({
    type: 'content',
    schema: z.object({
          title: z.string(),
          heroSubtitle: z.string(),
          metaDescription: z.string(),
          heroImage: z.string().optional(),
    }),
});

const cities = defineCollection({
    type: 'content',
    schema: z.object({
          name: z.string(),
          metaTitle: z.string(),
          metaDescription: z.string(),
          heroText: z.string(),
          districts: z.array(
                  z.object({
                            name: z.string(),
                            areas: z.string(),
                  })
                ),
          faq: z.array(
                  z.object({
                            q: z.string(),
                            a: z.string(),
                  })
                ),
    }),
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
          title: z.string(),
          metaDescription: z.string(),
          pubDate: z.date(),
    }),
});

export const collections = { services, cities, blog };
