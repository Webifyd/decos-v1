// Company Information Constants
export const COMPANY_INFO = {
  name: 'Decos',
  fullName: 'Decos PVC Solutions',
  description: 'Leading supplier of high-quality plumbing products in Abu Dhabi, UAE. Providing reliable solutions for residential and commercial projects.',

  // Contact Information
  phone: '+971 542069171',
  email: 'info@decos.ae',

  // Address
  location: 'MW5, Mussafah, Abu Dhabi, United Arab Emirates',
  address: {
    street: 'MW5',
    area: 'Mussafah',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
  },

  // Social Media (to be added if needed)
  social: {
    // facebook: '',
    // linkedin: '',
    // instagram: '',
  },
} as const;

// SEO Constants
export const SEO = {
  defaultTitle: 'Decos PVC Solutions',
  titleTemplate: '%s - Decos PVC Solutions',
  defaultDescription: 'Leading supplier of high-quality plumbing products in Abu Dhabi, UAE. Providing reliable solutions for residential and commercial projects.',
} as const;
