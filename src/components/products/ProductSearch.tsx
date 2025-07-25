import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProductSearchProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (categoryId: string) => void;
  onSubcategoryFilter: (subcategory: string) => void;
  categories: Array<{ id: string; name: string }>;
  subcategories: string[];
  selectedCategory: string;
  selectedSubcategory: string;
  className?: string;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  onSearch,
  onCategoryFilter,
  onSubcategoryFilter,
  categories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  className = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [internalSelectedCategory, setInternalSelectedCategory] = useState(selectedCategory);
  const [internalSelectedSubcategory, setInternalSelectedSubcategory] = useState(selectedSubcategory);
  const [showFilters, setShowFilters] = useState(false);

  // Sync internal state with props
  useEffect(() => {
    setInternalSelectedCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setInternalSelectedSubcategory(selectedSubcategory);
  }, [selectedSubcategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategoryChange = (categoryId: string) => {
    setInternalSelectedCategory(categoryId);
    setInternalSelectedSubcategory('all'); // Reset subcategory when category changes
    onCategoryFilter(categoryId);
    onSubcategoryFilter('all');
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setInternalSelectedSubcategory(subcategory);
    onSubcategoryFilter(subcategory);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setInternalSelectedCategory('all');
    setInternalSelectedSubcategory('all');
    onSearch('');
    onCategoryFilter('all');
    onSubcategoryFilter('all');
  };

  const hasActiveFilters = searchQuery || internalSelectedCategory !== 'all' || internalSelectedSubcategory !== 'all';

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-decos-gray h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Decos PVC products..."
            className="w-full pl-10 pr-4 py-2 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent"
          />
        </div>
        <Button type="submit" variant="primary">
          Search
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </form>

      {/* Filters */}
      {showFilters && (
        <div className="border-t border-decos-clean pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-decos-charcoal mb-1">
                Category
              </label>
              <select
                value={internalSelectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full border border-decos-gray rounded-lg px-3 py-2 focus:ring-2 focus:ring-decos-gold focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Filter - Only show if category is selected and has subcategories */}
            {internalSelectedCategory !== 'all' && subcategories.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-decos-charcoal mb-1">
                  Subcategory
                </label>
                <select
                  value={internalSelectedSubcategory}
                  onChange={(e) => handleSubcategoryChange(e.target.value)}
                  className="w-full border border-decos-gray rounded-lg px-3 py-2 focus:ring-2 focus:ring-decos-gold focus:border-transparent"
                >
                  <option value="all">All Subcategories</option>
                  {subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div>
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-decos-red hover:bg-red-50"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-decos-clean">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-decos-gray">Active filters:</span>
                {internalSelectedCategory !== 'all' && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-decos-gold text-decos-charcoal">
                    {categories.find(cat => cat.id === internalSelectedCategory)?.name}
                  </span>
                )}
                {internalSelectedSubcategory !== 'all' && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-decos-blue text-white">
                    {internalSelectedSubcategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-decos-gray text-white">
                    "{searchQuery}"
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};