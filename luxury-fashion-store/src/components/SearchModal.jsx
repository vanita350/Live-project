import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { Search, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchModal = ({ isOpen, onClose }) => {
  const { setQuickViewProduct, addToCart, setCartOpen } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('aura_recent_searches');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.colors.some(c => c.name.toLowerCase().includes(query))
    );

    setFilteredProducts(results.slice(0, 12));
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() && !recentSearches.includes(query)) {
      const updated = [query, ...recentSearches.slice(0, 4)];
      setRecentSearches(updated);
      localStorage.setItem('aura_recent_searches', JSON.stringify(updated));
    }
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem('aura_recent_searches');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-2xl mx-auto mt-20 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-6 border-b border-charcoal-100">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search by product name, category, or color..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                  className="w-full pl-12 pr-4 py-3 text-lg focus:outline-none"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-charcoal-400 hover:text-charcoal-950"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[60vh] overflow-y-auto p-6">
              {searchQuery.trim() === '' ? (
                // Show recent searches or trending
                <div>
                  {recentSearches.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal-950">Recent Searches</h3>
                        <button
                          onClick={handleClearRecent}
                          className="text-xs text-gold-primary hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSearch(search)}
                            className="px-4 py-2 border border-charcoal-200 text-charcoal-950 rounded hover:bg-charcoal-50 text-sm transition"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Categories */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal-950 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Trending Now
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['Trench Coats', 'Luxury Handbags', 'Designer Shoes', 'Cashmere'].map((trend, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSearch(trend)}
                          className="p-3 border border-charcoal-100 rounded hover:bg-beige-50 text-sm text-charcoal-950 text-left transition"
                        >
                          {trend}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                // Show search results
                <div>
                  <p className="text-xs text-charcoal-600 mb-4">
                    Found <span className="font-semibold">{filteredProducts.length}</span> products
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-50 rounded mb-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                          />
                          <button
                            onClick={() => setQuickViewProduct(product)}
                            className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition opacity-0 group-hover:opacity-100"
                          >
                            <span className="bg-white text-charcoal-950 px-4 py-2 rounded font-semibold text-xs">
                              Quick View
                            </span>
                          </button>
                        </div>
                        <h4 className="text-xs font-semibold text-charcoal-950 line-clamp-2 mb-1">
                          {product.name}
                        </h4>
                        <p className="text-sm font-bold text-charcoal-950">
                          ${product.price}
                          {product.originalPrice > product.price && (
                            <span className="text-xs text-charcoal-400 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-charcoal-600">No products found for "{searchQuery}"</p>
                  <p className="text-xs text-charcoal-400 mt-2">Try searching for different keywords</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
