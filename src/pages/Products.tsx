import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductSearch } from '../components/products/ProductSearch';
import { Product } from '../types';

export const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { products: allProducts, loading: allProductsLoading, error } = useProducts();
  const { categories } = useCategories();
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  // Find PVC products category ID
  const pvcProductsCategory = categories.find(cat => 
    cat.name.toLowerCase().includes('pvc') && cat.name.toLowerCase().includes('product')
  );

  // Get subcategories for the selected category
  const subcategoriesForSelectedCategory = selectedCategory !== 'all' 
    ? categories.find(cat => cat.id === selectedCategory)?.subcategories || []
    : [];

  // Initialize filters from URL params or default to PVC products
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else if (pvcProductsCategory) {
      // Default to PVC products category if no category specified
      setSelectedCategory(pvcProductsCategory.id);
    }
    
    if (searchParam) setSearchQuery(searchParam);
  }, [searchParams, pvcProductsCategory]);

  // Filter products when products or filters change
  useEffect(() => {
    if (allProductsLoading) return;
    
    let filtered = [...allProducts];
    
    // Filter by brand (only Decos products)
    filtered = filtered.filter(product => product.brand === 'Decos');
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryId === selectedCategory);
    }
    
    // Apply subcategory filter
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query)) ||
        (product.shortDescription && product.shortDescription.toLowerCase().includes(query)) ||
        (product.keyFeatures && product.keyFeatures.some(feature => 
          feature.toLowerCase().includes(query)
        )) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(query))
      );
    }
    
    setFilteredProducts(filtered);
  }, [allProducts, allProductsLoading, selectedCategory, selectedSubcategory, searchQuery]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setLoading(true);
    
    try {
      if (query.trim()) {
        const searchResults = await productService.searchProducts(query);
        // Filter search results by brand and category
        let filtered = searchResults.filter(product => product.brand === 'Decos');
        
        if (selectedCategory !== 'all') {
          filtered = filtered.filter(product => product.categoryId === selectedCategory);
        }
        
        if (selectedSubcategory !== 'all') {
          filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
        }
        
        setFilteredProducts(filtered);
      } else {
        // Reset to category and subcategory filter only
        let filtered = allProducts.filter(product => product.brand === 'Decos');
        
        if (selectedCategory !== 'all') {
          filtered = filtered.filter(product => product.categoryId === selectedCategory);
        }
        
        if (selectedSubcategory !== 'all') {
          filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
        }
        
        setFilteredProducts(filtered);
      }
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryFilter = async (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('all'); // Reset subcategory when category changes
    setLoading(true);
    
    try {
      if (categoryId === 'all') {
        const filtered = allProducts.filter(product => product.brand === 'Decos');
        setFilteredProducts(filtered);
      } else {
        const categoryProducts = await productService.getProductsByCategory(categoryId);
        const filtered = categoryProducts.filter(product => product.brand === 'Decos');
        setFilteredProducts(filtered);
      }
    } catch (err) {
      console.error('Category filter failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubcategoryFilter = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const isLoading = allProductsLoading || loading;

  // Get the selected category name for display
  const selectedCategoryName = selectedCategory === 'all' 
    ? 'All Categories' 
    : categories.find(cat => cat.id === selectedCategory)?.name || 'Unknown Category';

  return (
    <div className="min-h-screen bg-decos-clean py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
            Decos PVC Products
          </h1>
          <p className="text-lg text-decos-gray">
            Discover our complete range of professional-grade PVC pipes, fittings, and accessories.
          </p>
        </div>

        {/* Search and Filters */}
        <ProductSearch
          onSearch={handleSearch}
          onCategoryFilter={handleCategoryFilter}
          onSubcategoryFilter={handleSubcategoryFilter}
          categories={categories.map(cat => ({ id: cat.id, name: cat.name }))}
          subcategories={subcategoriesForSelectedCategory}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          className="mb-8"
        />

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-decos-gray">
            {isLoading ? 'Loading...' : `Showing ${filteredProducts.length} Decos products`}
            {selectedCategory !== 'all' && (
              <span> in {selectedCategoryName}</span>
            )}
            {selectedSubcategory !== 'all' && (
              <span> - {selectedSubcategory}</span>
            )}
            {searchQuery && <span> for "{searchQuery}"</span>}
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          loading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};