import { PostgrestClient } from '@supabase/postgrest-js';

// Neon Data API URL from environment variables
const neonDataApiUrl = process.env.NEXT_PUBLIC_NEON_DATA_API_URL || process.env.VITE_NEON_DATA_API_URL;
const neonAuthToken = process.env.NEXT_PUBLIC_NEON_AUTH_TOKEN || process.env.VITE_NEON_AUTH_TOKEN;

if (!neonDataApiUrl) {
  console.warn('NEXT_PUBLIC_NEON_DATA_API_URL environment variable is missing');
}

// Create PostgREST client for Neon Data API
// @ts-ignore - PostgrestClient constructor might expect a string but we handle the missing case with a warning or it might be fine with undefined in some versions, but better to cast or handle.
// Actually, if it's missing, we shouldn't initialize it or it will fail. 
// Let's initialize it with a dummy URL if missing to avoid crash during build, but it won't work at runtime.
export const neonClient = new PostgrestClient(neonDataApiUrl || 'https://example.com', {
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