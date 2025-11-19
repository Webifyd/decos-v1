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

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  source?: string;
}
