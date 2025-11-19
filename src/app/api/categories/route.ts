import { NextResponse } from 'next/server';
import categoriesData from '@/data/categories.json';

export async function GET() {
  try {
    // Convert the categories object to an array with proper structure
    const categories = Object.entries(categoriesData).map(([id, data]) => ({
      id,
      name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      ...data,
    }));

    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json(
      { error: 'Failed to load categories' },
      { status: 500 }
    );
  }
}
