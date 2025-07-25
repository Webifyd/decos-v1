import { neonClient, handleNeonError } from '../lib/neonClient';
import { Category } from '../types';
import { CategoryRow } from '../types/database';

// Transform database row to frontend Category type
const transformCategory = (row: CategoryRow): Category => ({
  id: row.id,
  name: row.name,
  description: row.description || undefined,
  image: row.image || undefined,
  productCount: row.product_count || undefined,
  featured: row.featured || undefined,
  subcategories: row.subcategories || undefined,
  displayOrder: row.display_order || undefined,
  isActive: row.is_active || undefined,
});

export const categoryService = {
  // Get all active categories
  async getCategories(): Promise<Category[]> {
    try {
      const { data, error } = await neonClient
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order')
        .order('name');

      if (error) throw error;
      return (data || []).map(transformCategory);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Get featured categories
  async getFeaturedCategories(): Promise<Category[]> {
    try {
      const { data, error } = await neonClient
        .from('categories')
        .select('*')
        .eq('featured', true)
        .eq('is_active', true)
        .order('display_order')
        .limit(6);

      if (error) throw error;
      return (data || []).map(transformCategory);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Get category by ID
  async getCategoryById(id: string): Promise<Category | null> {
    try {
      const { data, error } = await neonClient
        .from('categories')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      return data ? transformCategory(data) : null;
    } catch (error) {
      handleNeonError(error);
      return null;
    }
  },
};