import { defineCollection, z } from 'astro:content';
import { CATEGORIES } from '../utils/categories';

const businessCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    location: z.string(),
    address: z.string().optional(),
    phone: z.string().optional(),
    description: z.string(),
    image: z.string().url().optional(),
    website: z.string().url().optional(),
    googleMapsUrl: z.string().url().optional(),
  }).refine(
    (data) => data.website || data.googleMapsUrl,
    {
      message: 'At least one of website or googleMapsUrl must be provided',
    }
  ),
});

export const collections = {
  businesses: businessCollection,
};
