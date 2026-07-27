import React from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterBar = () => {
  const { filters, updateFilters, resetFilters } = useShop();
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="w-full bg-beige-50 border-b border-charcoal-100 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-charcoal-950 font-semibold text-sm"
          >
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={resetFilters}
            className="text-gold-primary text-xs font-semibold hover:underline"
          >
            Reset
          </button>
        </div>

        {/* Desktop & Mobile Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* Sort By */}
            <div>
              <label className="text-xs font-semibold text-charcoal-950 uppercase tracking-wide block mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilters({ sortBy: e.target.value })}
                className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm focus:outline-none focus:border-gold-primary transition"
              >
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-xs font-semibold text-charcoal-950 uppercase tracking-wide block mb-2">
                Price Range
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={filters.minPrice}
                  onChange={(e) => updateFilters({ minPrice: parseInt(e.target.value) })}
                  placeholder="Min"
                  className="w-1/2 px-2 py-2 border border-charcoal-200 rounded text-xs focus:outline-none focus:border-gold-primary"
                />
                <span className="text-charcoal-400">-</span>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={filters.maxPrice}
                  onChange={(e) => updateFilters({ maxPrice: parseInt(e.target.value) })}
                  placeholder="Max"
                  className="w-1/2 px-2 py-2 border border-charcoal-200 rounded text-xs focus:outline-none focus:border-gold-primary"
                />
              </div>
            </div>

            {/* Min Rating */}
            <div>
              <label className="text-xs font-semibold text-charcoal-950 uppercase tracking-wide block mb-2">
                Min Rating
              </label>
              <select
                value={filters.minRating}
                onChange={(e) => updateFilters({ minRating: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm focus:outline-none focus:border-gold-primary transition"
              >
                <option value="0">All Ratings</option>
                <option value="3">3+ Stars</option>
                <option value="3.5">3.5+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="hidden md:flex items-end">
              <button
                onClick={resetFilters}
                className="w-full px-4 py-2 border border-charcoal-200 text-charcoal-950 hover:bg-charcoal-50 font-semibold text-xs uppercase tracking-wide rounded transition"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
