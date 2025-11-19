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
    image: 'https://altawsa-trimg.netlify.app/catagory-images/ppr-fittings-1.webp'
  },
  'ppr-pipes': {
    id: 'ppr-pipes',
    name: 'PPR Pipes',
    slug: 'ppr-pipes',
    image: 'https://altawsa-trimg.netlify.app/ppr-products/ppr_pipes.webp'
  },
  'upvc-pipes': {
    id: 'upvc-pipes',
    name: 'UPVC Pipes',
    slug: 'upvc-pipes',
    image: 'https://altawsa-trimg.netlify.app/Catagory-images-sqr/under-ground-drainage-and-sewage-pipes-upvc.webp',
  },
  'upvc-fittings': {
    id: 'upvc-fittings',
    name: 'UPVC Fittings',
    slug: 'upvc-fittings',
    image: 'https://altawsa-trimg.netlify.app/Catagory-images-sqr/UPVC-fittings.webp',
  },
  'upvc-pressure-pipes': {
    id: 'upvc-pressure-pipes',
    name: 'UPVC Pressure Pipes',
    slug: 'upvc-pressure-pipes',
    image: 'https://altawsa-trimg.netlify.app/Catagory-images-sqr/UPVC-pressure-pipes.webp',
  },
};

// Helper function to get category name from ID
export function getCategoryName(id: string): string {
  return categoryMetadata[id]?.name || id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Helper function to get category image
export function getCategoryImage(id: string): string {
  return categoryMetadata[id]?.image || 'https://altawsa-trimg.netlify.app/Catagory-images-sqr/UPVC-pressure-pipes.webp';
}

// Get all category IDs
export function getAllCategoryIds(): string[] {
  return Object.keys(categoryMetadata);
}

// Get all category metadata as array
export function getAllCategories(): CategoryMetadata[] {
  return Object.values(categoryMetadata);
}
