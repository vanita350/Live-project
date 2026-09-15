import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import { motion, AnimatePresence } from 'framer-motion';

const ProductSection = () => {
  const { activeCategory, activeSubcategory, setActiveSubcategory, filters } = useShop();
  const [activeTab, setActiveTab] = useState('featured'); // 'featured' | 'bestsellers' | 'new'

  const tabs = [
    { id: 'featured', label: 'FEATURED EDIT' },
    { id: 'bestsellers', label: 'BEST SELLERS' },
    { id: 'new', label: 'NEW ARRIVALS' }
  ];

  const womenSubcategories = [
    { id: 'all', label: 'All' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'kurtas', label: 'Kurtas' },
    { id: 'leggings', label: 'Leggings' },
    { id: 'jeans', label: 'Jeans' }
  ];

  const getFilteredProducts = () => {
    let filtered = products;
    
    // Category filter
    if (activeCategory && activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (activeCategory === 'women' && activeSubcategory && activeSubcategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === activeSubcategory);
    }

    // Tab filter
    switch (activeTab) {
      case 'bestsellers':
        filtered = filtered.filter(p => p.badge === 'Best Seller' || p.badge === 'Popular' || p.rating >= 4.8);
        break;
      case 'new':
        filtered = filtered.filter(p => p.badge === 'New' || p.badge === 'Trending' || p.price > 200);
        break;
      case 'featured':
      default:
        filtered = filtered.filter(p => p.badge === 'Premium' || p.badge === 'Luxury' || p.badge === 'Trending' || p.badge === 'Best Seller');
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

    // Rating filter
    if (filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating >= filters.minRating);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'newest':
      default:
        // Keep default order
        break;
    }

    return filtered;
  };

  const filtered = getFilteredProducts();

  return (
    <section id="shop-section" className="py-0 bg-beige-50 border-t border-charcoal-100/30">
      {/* Filter Bar */}
      <FilterBar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">OUR BOUTIQUE</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-normal uppercase tracking-wide">The Season Edit</h2>
          <div className="w-12 h-[1px] bg-gold-primary mx-auto mt-4"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-6 md:gap-10 border-b border-charcoal-100 pb-4 mb-12 max-w-xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium transition-all relative pb-4 cursor-pointer ${
                activeTab === tab.id 
                  ? 'text-charcoal-950 font-bold' 
                  : 'text-gray-400 hover:text-charcoal-950'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div  
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-charcoal-950"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {activeCategory === 'women' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {womenSubcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                type="button"
                onClick={() => setActiveSubcategory(subcategory.id)}
                className={`text-[10px] md:text-xs uppercase tracking-[0.25em] px-4 py-2 border transition-colors cursor-pointer ${
                  activeSubcategory === subcategory.id
                    ? 'border-charcoal-950 bg-charcoal-950 text-beige-50'
                    : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-charcoal-950'
                }`}
              >
                {subcategory.label}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-charcoal-600 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    // Reset filters
                  }}
                  className="text-gold-primary font-semibold text-sm mt-4 hover:underline"
                >
                  Try adjusting your filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSection;
