import { neonClient, handleNeonError } from '../lib/neonClient';
import { Product } from '../types';
import { ProductRow } from '../types/database';

// Transform database row to frontend Product type
const transformProduct = (row: ProductRow): Product => ({
  id: row.id,
  sku: row.sku || undefined,
  name: row.name,
  shortName: row.short_name || undefined,
  categoryId: row.category_id || undefined,
  subcategory: row.subcategory || undefined,
  brand: row.brand || undefined,
  description: row.description || undefined,
  shortDescription: row.short_description || undefined,
  keyFeatures: row.key_features || undefined,
  benefits: row.benefits || undefined,
  specifications: row.specifications || undefined,
  applications: row.applications || undefined,
  industries: row.industries || undefined,
  useCases: row.use_cases || undefined,
  hasVariants: row.has_variants || undefined,
  images: row.images || undefined,
  pricing: row.pricing || undefined,
  availability: row.availability || undefined,
  warranty: row.warranty || undefined,
  featured: row.featured || undefined,
  bestSeller: row.best_seller || undefined,
  inStock: row.in_stock || undefined,
  createdAt: row.created_at || undefined,
  updatedAt: row.updated_at || undefined,
});

export const productService = {
  // Get all Decos products
  async getDecosProducts(): Promise<Product[]> {
    try {
      const { data, error } = await neonClient
        .from('products')
        .select('*')
        .eq('brand', 'Decos')
        .eq('in_stock', true)
        .order('featured', { ascending: false })
        .order('name');

      if (error) throw error;
      return (data || []).map(transformProduct);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Get featured Decos products
  async getFeaturedProducts(): Promise<Product[]> {
    try {
      const { data, error } = await neonClient
        .from('products')
        .select('*')
        .eq('brand', 'Decos')
        .eq('featured', true)
        .eq('in_stock', true)
        .order('name')
        .limit(8);

      if (error) throw error;
      return (data || []).map(transformProduct);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Get products by category
  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    try {
      const { data, error } = await neonClient
        .from('products')
        .select('*')
        .eq('brand', 'Decos')
        .eq('category_id', categoryId)
        .eq('in_stock', true)
        .order('name');

      if (error) throw error;
      return (data || []).map(transformProduct);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Search products
  async searchProducts(query: string): Promise<Product[]> {
    try {
      const { data, error } = await neonClient
        .from('products')
        .select('*')
        .eq('brand', 'Decos')
        .eq('in_stock', true)
        .or(`name.ilike.%${query}%,description.ilike.%${query}%,short_description.ilike.%${query}%`)
        .order('name');

      if (error) throw error;
      return (data || []).map(transformProduct);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },

  // Get product by ID
  async getProductById(id: string): Promise<Product | null> {
    try {
      const { data, error } = await neonClient
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('brand', 'Decos')
        .single();

      if (error) throw error;
      return data ? transformProduct(data) : null;
    } catch (error) {
      handleNeonError(error);
      return null;
    }
  },

  // Get related products
  async getRelatedProducts(categoryId: string, excludeId: string): Promise<Product[]> {
    try {
      const { data, error } = await neonClient
        .from('products')
        .select('*')
        .eq('brand', 'Decos')
        .eq('category_id', categoryId)
        .neq('id', excludeId)
        .eq('in_stock', true)
        .order('featured', { ascending: false })
        .limit(4);

      if (error) throw error;
      return (data || []).map(transformProduct);
    } catch (error) {
      handleNeonError(error);
      return [];
    }
  },
};