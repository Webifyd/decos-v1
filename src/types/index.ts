export interface Product {
  id: string;
  sku?: string;
  name: string;
  shortName?: string;
  categoryId?: string;
  subcategory?: string;
  brand?: string;
  description?: string;
  shortDescription?: string;
  keyFeatures?: string[];
  benefits?: string[];
  specifications?: Record<string, any>;
  applications?: string[];
  industries?: string[];
  useCases?: string[];
  hasVariants?: boolean;
  images?: {
    main?: string;
    gallery?: string[];
    technical?: string[];
  };
  pricing?: {
    base?: number;
    currency?: string;
    unit?: string;
  };
  availability?: {
    inStock?: boolean;
    leadTime?: string;
    minOrder?: number;
  };
  warranty?: {
    duration?: string;
    coverage?: string;
  };
  featured?: boolean;
  bestSeller?: boolean;
  inStock?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  productCount?: number;
  featured?: boolean;
  subcategories?: string[];
  displayOrder?: number;
  isActive?: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface Quote {
  id: string;
  leadId?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectDetails?: string;
  products?: Array<{
    productId: string;
    quantity: number;
    specifications?: Record<string, any>;
  }>;
  quantity?: number;
  deadline?: string;
  status: 'pending' | 'sent' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  source?: string;
}

export interface QuoteRequest extends ContactForm {
  projectDetails: string;
  products: Array<{
    productId: string;
    quantity: number;
    specifications?: Record<string, any>;
  }>;
  deadline?: string;
}