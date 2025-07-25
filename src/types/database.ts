export interface Database {
  public: {
    Tables: {
      products: {
        Row: ProductRow;
        Insert: ProductInsert;
        Update: ProductUpdate;
      };
      categories: {
        Row: CategoryRow;
        Insert: CategoryInsert;
        Update: CategoryUpdate;
      };
      leads: {
        Row: LeadRow;
        Insert: LeadInsert;
        Update: LeadUpdate;
      };
      quotes: {
        Row: QuoteRow;
        Insert: QuoteInsert;
        Update: QuoteUpdate;
      };
    };
  };
}

export interface ProductRow {
  id: string;
  sku: string | null;
  name: string;
  short_name: string | null;
  category_id: string | null;
  subcategory: string | null;
  brand: string | null;
  description: string | null;
  short_description: string | null;
  key_features: string[] | null;
  benefits: string[] | null;
  specifications: Record<string, any> | null;
  applications: string[] | null;
  industries: string[] | null;
  use_cases: string[] | null;
  has_variants: boolean | null;
  images: Record<string, any> | null;
  pricing: Record<string, any> | null;
  availability: Record<string, any> | null;
  warranty: Record<string, any> | null;
  seo: Record<string, any> | null;
  lifecycle: Record<string, any> | null;
  featured: boolean | null;
  best_seller: boolean | null;
  in_stock: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface ProductInsert {
  id?: string;
  sku?: string | null;
  name: string;
  short_name?: string | null;
  category_id?: string | null;
  subcategory?: string | null;
  brand?: string | null;
  description?: string | null;
  short_description?: string | null;
  key_features?: string[] | null;
  benefits?: string[] | null;
  specifications?: Record<string, any> | null;
  applications?: string[] | null;
  industries?: string[] | null;
  use_cases?: string[] | null;
  has_variants?: boolean | null;
  images?: Record<string, any> | null;
  pricing?: Record<string, any> | null;
  availability?: Record<string, any> | null;
  warranty?: Record<string, any> | null;
  seo?: Record<string, any> | null;
  lifecycle?: Record<string, any> | null;
  featured?: boolean | null;
  best_seller?: boolean | null;
  in_stock?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ProductUpdate {
  id?: string;
  sku?: string | null;
  name?: string;
  short_name?: string | null;
  category_id?: string | null;
  subcategory?: string | null;
  brand?: string | null;
  description?: string | null;
  short_description?: string | null;
  key_features?: string[] | null;
  benefits?: string[] | null;
  specifications?: Record<string, any> | null;
  applications?: string[] | null;
  industries?: string[] | null;
  use_cases?: string[] | null;
  has_variants?: boolean | null;
  images?: Record<string, any> | null;
  pricing?: Record<string, any> | null;
  availability?: Record<string, any> | null;
  warranty?: Record<string, any> | null;
  seo?: Record<string, any> | null;
  lifecycle?: Record<string, any> | null;
  featured?: boolean | null;
  best_seller?: boolean | null;
  in_stock?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface CategoryRow {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  product_count: number | null;
  featured: boolean | null;
  subcategories: string[] | null;
  seo: Record<string, any> | null;
  display_order: number | null;
  is_active: boolean | null;
}

export interface CategoryInsert {
  id?: string;
  name: string;
  description?: string | null;
  image?: string | null;
  product_count?: number | null;
  featured?: boolean | null;
  subcategories?: string[] | null;
  seo?: Record<string, any> | null;
  display_order?: number | null;
  is_active?: boolean | null;
}

export interface CategoryUpdate {
  id?: string;
  name?: string;
  description?: string | null;
  image?: string | null;
  product_count?: number | null;
  featured?: boolean | null;
  subcategories?: string[] | null;
  seo?: Record<string, any> | null;
  display_order?: number | null;
  is_active?: boolean | null;
}

export interface LeadRow {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string | null;
  source: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface LeadInsert {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message?: string | null;
  source?: string | null;
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface LeadUpdate {
  id?: string;
  name?: string;
  email?: string;
  phone?: string | null;
  company?: string | null;
  message?: string | null;
  source?: string | null;
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface QuoteRow {
  id: string;
  lead_id: string | null;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  project_details: string | null;
  products: Record<string, any>[] | null;
  quantity: number | null;
  deadline: string | null;
  status: 'pending' | 'sent' | 'accepted' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface QuoteInsert {
  id?: string;
  lead_id?: string | null;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  project_details?: string | null;
  products?: Record<string, any>[] | null;
  quantity?: number | null;
  deadline?: string | null;
  status?: 'pending' | 'sent' | 'accepted' | 'rejected';
  created_at?: string;
  updated_at?: string;
}

export interface QuoteUpdate {
  id?: string;
  lead_id?: string | null;
  name?: string;
  email?: string;
  phone?: string | null;
  company?: string | null;
  project_details?: string | null;
  products?: Record<string, any>[] | null;
  quantity?: number | null;
  deadline?: string | null;
  status?: 'pending' | 'sent' | 'accepted' | 'rejected';
  created_at?: string;
  updated_at?: string;
}