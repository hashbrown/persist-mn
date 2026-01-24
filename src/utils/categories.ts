export const CATEGORIES = [
  'Food/Drink',
  'Grocery/Convenience',
  'Retail',
  'Services',
  'Organization',
  'Entertainment',
  'Other',
] as const;

export type Category = typeof CATEGORIES[number];

export function getCategorySlug(category: Category): string {
  return category.toLowerCase().replace(/\//g, '-');
}

export function getCategoryFromSlug(slug: string): Category | undefined {
  return CATEGORIES.find(cat => getCategorySlug(cat) === slug);
}
