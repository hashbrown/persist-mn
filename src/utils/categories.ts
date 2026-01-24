export const CATEGORIES = [
  'Restaurant/Bar',
  'Retail',
  'Services',
  'Organization',
] as const;

export type Category = typeof CATEGORIES[number];

export function getCategorySlug(category: Category): string {
  return category.toLowerCase().replace(/\//g, '-');
}

export function getCategoryFromSlug(slug: string): Category | undefined {
  return CATEGORIES.find(cat => getCategorySlug(cat) === slug);
}
