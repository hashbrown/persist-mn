/**
 * Centralized content and text strings for the Persist-MN website
 * Edit this file to update site-wide text content
 */

export const CONTENT = {
  site: {
    name: 'Persist MN',
    tagline: 'Supporting Minnesota businesses that support humankind.',
    defaultDescription: 'Supporting Minnesota businesses that support humankind',
  },

  pages: {
    home: {
      title: 'Persist-MN - Supporting Minnesota Businesses',
      heading: 'All Businesses',
      descriptionTemplate: (count: number) => `${count} businesses supporting their community`,
    },
    pagination: {
      titleTemplate: (page: number) => `Persist-MN - Page ${page}`,
      descriptionTemplate: (count: number) => `${count} businesses supporting Minnesota values`,
    },
    category: {
      titleTemplate: (category: string) => `${category} - Persist-MN`,
      descriptionTemplate: (count: number, category: string) =>
        `${count} ${category.toLowerCase()} businesses supporting Minnesota values`,
    },
  },

  ui: {
    buttons: {
      allBusinesses: 'All Businesses',
      visitWebsite: 'Visit Website',
      viewOnMaps: 'View on Maps',
      previous: 'Previous',
      next: 'Next',
    },
    labels: {
      pagination: 'Pagination',
    },
  },

  footer: {
    copyrightTemplate: (year: number) =>
      `© ${year} Persist MN. Supporting Minnesota businesses that are actively helping their community.`,
  },
} as const;
