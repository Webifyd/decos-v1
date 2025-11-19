// Static category metadata with image links and display names
export interface CategoryMetadata {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export const categoryMetadata: Record<string, CategoryMetadata> = {
  'ppr-fittings': {
    id: 'ppr-fittings',
    name: 'PPR Fittings',
    slug: 'ppr-fittings',
    image: '/images/categories/ppr-fittings.jpg', // Image path to be provided
  },
  'ppr-pipes': {
    id: 'ppr-pipes',
    name: 'PPR Pipes',
    slug: 'ppr-pipes',
    image: '/images/categories/ppr-pipes.jpg', // Image path to be provided
  },
  'upvc-pipes': {
    id: 'upvc-pipes',
    name: 'UPVC Pipes',
    slug: 'upvc-pipes',
    image: '/images/categories/upvc-pipes.jpg', // Image path to be provided
  },
  'upvc-fittings': {
    id: 'upvc-fittings',
    name: 'UPVC Fittings',
    slug: 'upvc-fittings',
    image: '/images/categories/upvc-fittings.jpg', // Image path to be provided
  },
  'upvc-pressure-pipes': {
    id: 'upvc-pressure-pipes',
    name: 'UPVC Pressure Pipes',
    slug: 'upvc-pressure-pipes',
    image: '/images/categories/upvc-pressure-pipes.jpg', // Image path to be provided
  },
};

// Helper function to get category name from ID
export function getCategoryName(id: string): string {
  return categoryMetadata[id]?.name || id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Helper function to get category image
export function getCategoryImage(id: string): string {
  return categoryMetadata[id]?.image || '/images/categories/placeholder.jpg';
}

// Get all category IDs
export function getAllCategoryIds(): string[] {
  return Object.keys(categoryMetadata);
}

// Get all category metadata as array
export function getAllCategories(): CategoryMetadata[] {
  return Object.values(categoryMetadata);
}
