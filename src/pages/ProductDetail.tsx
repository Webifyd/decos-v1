import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle, Package, Truck, Shield, Download } from 'lucide-react';
import { useProduct } from '../hooks/useProducts';
import { productService } from '../services/productService';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Button } from '../components/ui/Button';
import { ProductGrid } from '../components/products/ProductGrid';
import { Product } from '../types';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (product?.categoryId) {
      productService.getRelatedProducts(product.categoryId, product.id)
        .then(setRelatedProducts)
        .catch(console.error);
    }
  }, [product]);

  if (loading) {
    return <LoadingSpinner size="lg" className="py-20" />;
  }

  if (error || !product) {
    return <ErrorMessage message={error || 'Product not found'} className="py-20" />;
  }

  const defaultImage = 'https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&w=800';
  const productImages = product.images?.gallery || [product.images?.main || defaultImage];

  return (
    <div className="min-h-screen bg-decos-clean py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-decos-blue hover:text-decos-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={productImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImageIndex === index ? 'border-decos-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.sku && (
                <p className="text-sm text-decos-gray mb-2">SKU: {product.sku}</p>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
                {product.name}
              </h1>
              
              {product.shortDescription && (
                <p className="text-lg text-decos-gray">{String(product.shortDescription)}</p>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-decos-gold text-decos-charcoal">
                  <Star className="h-4 w-4 mr-1" />
                  Featured
                </span>
              )}
              {product.bestSeller && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-decos-red text-white">
                  Best Seller
                </span>
              )}
              {product.inStock && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-decos-green text-white">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  In Stock
                </span>
              )}
            </div>

            {/* Pricing */}
            {product.pricing?.base && (
              <div className="border-t pt-6">
                <div className="text-3xl font-bold text-decos-red">
                  ${product.pricing.base}
                  {product.pricing.unit && (
                    <span className="text-lg text-decos-gray">/{product.pricing.unit}</span>
                  )}
                </div>
                {product.pricing.currency && (
                  <p className="text-sm text-decos-gray">Prices in {product.pricing.currency}</p>
                )}
              </div>
            )}

            {/* Key Features */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-decos-charcoal mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-decos-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-decos-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/quote?product=${product.id}`} className="flex-1">
                  <Button variant="primary" size="lg" className="w-full">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <Package className="h-6 w-6 text-decos-blue mb-2" />
                  <span className="text-xs text-decos-gray">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <Truck className="h-6 w-6 text-decos-blue mb-2" />
                  <span className="text-xs text-decos-gray">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <Shield className="h-6 w-6 text-decos-blue mb-2" />
                  <span className="text-xs text-decos-gray">Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="space-y-8">
            {/* Description */}
            {product.description && (
              <div>
                <h3 className="text-2xl font-bold text-decos-charcoal mb-4">Description</h3>
                <div className="prose max-w-none text-decos-gray">
                  <p>{String(product.description)}</p>
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-decos-charcoal mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-decos-clean">
                      <span className="font-medium text-decos-charcoal">{key}:</span>
                      <span className="text-decos-gray">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-decos-charcoal mb-4">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-decos-green mr-2" />
                      <span className="text-decos-gray">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-decos-charcoal mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-decos-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-decos-gray">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-decos-charcoal mb-8">Related Products</h3>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};