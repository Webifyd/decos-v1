import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  error = null,
  className = '',
}) => {
  if (loading) {
    return <LoadingSpinner size="lg" className="py-12" />;
  }

  if (error) {
    return <ErrorMessage message={error} className="py-12" />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-decos-gray">No products found.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};