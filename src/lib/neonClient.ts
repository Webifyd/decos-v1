import { PostgrestClient } from '@supabase/postgrest-js';

// Neon Data API URL from environment variables
const neonDataApiUrl = import.meta.env.VITE_NEON_DATA_API_URL;
const neonAuthToken = import.meta.env.VITE_NEON_AUTH_TOKEN;

if (!neonDataApiUrl) {
  throw new Error('VITE_NEON_DATA_API_URL environment variable is required');
}

// Create PostgREST client for Neon Data API
export const neonClient = new PostgrestClient(neonDataApiUrl, {
  headers: {
    'Content-Type': 'application/json',
    ...(neonAuthToken && { 'Authorization': `Bearer ${neonAuthToken}` }),
  },
});

// Helper function to handle Neon Data API errors
export const handleNeonError = (error: any) => {
  console.error('Neon Data API error:', error);
  
  if (error.message) {
    throw new Error(error.message);
  }
  
  if (error.details) {
    throw new Error(error.details);
  }
  
  throw new Error('Database operation failed');
};