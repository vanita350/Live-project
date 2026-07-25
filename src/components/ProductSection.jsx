import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProductSection = () => {
  const { activeCategory } = useShop();
  const [activeTab, setActiveTab] = useState('featured'); // 'featured' | 'bestsellers' | 'new'

  const tabs = [
    { id: 'featured', label: 'FEATURED EDIT' },
    { id: 'bestsellers', label: 'BEST SELLERS' },
    { id: 'new', label: 'NEW ARRIVALS' }
  ];

  const getFilteredProducts = () => {
    let filtered = products;
    if (activeCategory && activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    switch (activeTab) {
      case 'bestsellers':
        return filtered.filter(p => p.badge === 'Best Seller' || p.badge === 'Popular' || p.rating >= 4.8);
      case 'new':
        return filtered.filter(p => p.badge === 'New' || p.badge === 'Trending' || p.price > 200);
      case 'featured':
      default:
        return filtered.filter(p => p.badge === 'Premium' || p.badge === 'Luxury' || p.badge === 'Trending' || p.badge === 'Best Seller');
    }
  };

  const filtered = getFilteredProducts();

  return (
    <section id="shop-section" className="py-20 bg-beige-50 border-t border-charcoal-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
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

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
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
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSection;
