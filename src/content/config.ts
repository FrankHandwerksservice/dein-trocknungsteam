import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroSubtitle: z.string(),
    metaDescription: z.string(),
    heroImage: z.string().optional(),
    techniquesHeading: z.string().optional(),
    techniquesImage: z.string().optional(),
    techniques: z.array(
      z.object({
        label: z.string(),
        text: z.string(),
      })
    ).optional(),
  }),
});

const cities = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroText: z.string(),
    introParagraphs: z.array(z.string()).optional(),
    districtIntro: z.string().optional(),
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
    distanceKm: z.number().optional(),
    distanceMinutes: z.number().optional(),
    geoLat: z.number().optional(),
    geoLng: z.number().optional(),
    processSteps: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      })
    ).optional(),
    neighborCities: z.array(
      z.object({
        name: z.string(),
        slug: z.string(),
      })
    ).optional(),
    caseExampleTitle: z.string().optional(),
    caseExampleText: z.array(z.string()).optional(),
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
