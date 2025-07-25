import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const defaultImage = `https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&w=400`;
  const productImage = product.images?.main || defaultImage;

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={productImage}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-decos-gold text-decos-charcoal px-2 py-1 rounded text-xs font-semibold">
            Featured
          </div>
        )}
        {product.bestSeller && (
          <div className="absolute top-2 right-2 bg-decos-red text-white px-2 py-1 rounded text-xs font-semibold">
            Best Seller
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-decos-charcoal line-clamp-2 group-hover:text-decos-gold transition-colors">
            {product.name}
          </h3>
          {product.sku && (
            <span className="text-xs text-decos-gray bg-decos-clean px-2 py-1 rounded ml-2">
              {product.sku}
            </span>
          )}
        </div>

        {product.shortDescription && (
          <p className="text-decos-gray text-sm mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        {/* Key Features */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <div className="mb-3">
            <ul className="text-xs text-decos-slate">
              {product.keyFeatures.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Star className="h-3 w-3 text-decos-gold mr-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        {product.pricing?.base && (
          <div className="mb-3">
            <span className="text-lg font-bold text-decos-red">
              ${product.pricing.base}
              {product.pricing.unit && (
                <span className="text-sm text-decos-gray">/{product.pricing.unit}</span>
              )}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2">
          <Link to={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full text-sm" size="sm">
              <Eye className="h-4 w-4 mr-1" />
              View Details
            </Button>
          </Link>
          <Link to={`/quote?product=${product.id}`}>
            <Button variant="primary" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};