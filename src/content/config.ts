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
faq: z.array(
z.object({
q: z.string(),
a: z.string(),
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
introImage: z.string().optional(),
districtIntro: z.string().optional(),
districtImage: z.string().optional(),
districts: z.array(
z.union([
z.string(),
z.object({
name: z.string(),
areas: z.string(),
}),
])
),
fleetHeading: z.string().optional(),
fleetText: z.array(z.string()).optional(),
faq: z.array(
z.object({
q: z.string(),
a: z.string(),
})
),
geoLat: z.number().optional(),
geoLng: z.number().optional(),
}),
});

const blog = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
metaDescription: z.string(),
pubDate: z.date(),
heroImage: z.string().optional(),
}),
});

export const collections = { services, cities, blog };
