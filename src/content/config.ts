import { defineCollection, z } from 'astro:content';
import { CATEGORIES } from '../utils/categories';

const businessCollection = defineCollection({
  type: 'content',
  schema: z.object({
    displayName: z.string(),
    category: z.enum(CATEGORIES),
    location: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }).optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
    summary: z.string().optional(),
    // Allow `justification:` (YAML null) and treat it as "missing"
    justification: z.preprocess(
      (v) => (v === null ? undefined : v),
      z.string().optional()
    ),
    websiteUrl: z.string().url().optional(),
    websiteImageUrl: z.string().url().optional(),
    googleMapsUrl: z.string().url().optional(),
    placesId: z.string().optional(),
    placesName: z.string().optional(),
    primaryType: z.string().optional(),
    types: z.array(z.string()).optional(),
  }).refine(
    (data) => data.websiteUrl || data.googleMapsUrl,
    {
      message: 'At least one of websiteUrl or googleMapsUrl must be provided',
    }
  ),
});

export const collections = {
  businesses: businessCollection,
};
