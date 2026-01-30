import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getCategorySlug } from '../utils/categories';

export type SearchIndexRecord = {
  id: string;
  slug: string;
  displayName: string;
  city?: string;
  state?: string;
  category: string;
  categorySlug: string;
  justification: string;
};

export const GET: APIRoute = async () => {
  const allBusinesses = await getCollection('businesses');

  const records: SearchIndexRecord[] = allBusinesses
    .slice()
    .sort((a, b) => a.data.displayName.localeCompare(b.data.displayName))
    .map((entry) => ({
      id: entry.id,
      slug: entry.slug,
      displayName: entry.data.displayName,
      city: entry.data.city,
      state: entry.data.state,
      category: entry.data.category,
      categorySlug: getCategorySlug(entry.data.category),
      justification: entry.data.justification,
    }));

  return new Response(JSON.stringify(records), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // Static asset; safe to cache aggressively.
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
};

