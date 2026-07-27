import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, Heart, ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewSection from './ReviewSection';

const QuickViewModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    setCartOpen
  } = useShop();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // 'details' or 'reviews'

  // Sync state with active product
  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes[0] || 'OS');
      setSelectedColor(quickViewProduct.colors ? quickViewProduct.colors[0].name : 'Default');
      setActiveImage(quickViewProduct.image);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.some(item => item.id === quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    setCartOpen(true);
    setQuickViewProduct(null); // Close modal
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } }}
          exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }}
          className="relative bg-beige-50 max-w-4xl w-full rounded shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10"
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 text-charcoal-950 hover:opacity-75 z-20 bg-beige-50/80 backdrop-blur-sm p-1.5 rounded-full shadow cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Product Images */}
          <div className="w-full md:w-1/2 flex flex-col p-4 md:p-6 bg-charcoal-50 justify-center">
            <div className="relative aspect-[3/4] w-full overflow-hidden mb-3.5 bg-white">
              <img
                src={activeImage}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {quickViewProduct.discount && (
                <span className="absolute top-4 left-4 bg-charcoal-950 text-beige-50 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                  {quickViewProduct.discount}% OFF
                </span>
              )}
            </div>
            
            {/* Thumbnail Selectors */}
            {quickViewProduct.hoverImage && (
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveImage(quickViewProduct.image)}
                  className={`w-14 h-18 border-2 overflow-hidden bg-white cursor-pointer ${
                    activeImage === quickViewProduct.image ? 'border-gold-primary' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={quickViewProduct.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(quickViewProduct.hoverImage)}
                  className={`w-14 h-18 border-2 overflow-hidden bg-white cursor-pointer ${
                    activeImage === quickViewProduct.hoverImage ? 'border-gold-primary' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={quickViewProduct.hoverImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto no-scrollbar flex flex-col justify-between">
            
            {/* Tabs */}
            <div className="flex gap-4 border-b border-charcoal-100 mb-6">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-3 px-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === 'details'
                    ? 'text-charcoal-950 border-b-2 border-gold-primary'
                    : 'text-charcoal-600 hover:text-charcoal-950'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 px-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === 'reviews'
                    ? 'text-charcoal-950 border-b-2 border-gold-primary'
                    : 'text-charcoal-600 hover:text-charcoal-950'
                }`}
              >
                Reviews
              </button>
            </div>

            {/* Details Tab */}
            {activeTab === 'details' && (
              <div className="font-sans flex flex-col justify-between h-full">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                  {quickViewProduct.category}
                </span>
                <div className="flex items-center gap-1">
                  <div className="flex text-gold-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(quickViewProduct.rating) ? 'fill-gold-primary' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium">({quickViewProduct.reviews} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <h2 className="font-serif text-xl md:text-2xl text-charcoal-950 leading-tight mb-3">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xl font-bold text-charcoal-950">${quickViewProduct.price}</span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">${quickViewProduct.originalPrice}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5 pr-2">
                {quickViewProduct.description}
              </p>

              {/* Color Picker */}
              {quickViewProduct.colors && (
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block mb-2">
                    Color: <span className="font-normal text-gray-500">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {quickViewProduct.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all cursor-pointer relative ${
                          selectedColor === color.name ? 'border-charcoal-950 scale-110 shadow-sm' : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check className="w-3.5 h-3.5 text-white stroke-[3px] absolute drop-shadow-md" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Picker */}
              {quickViewProduct.sizes && (
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block mb-2">
                    Select Size
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs uppercase tracking-wider px-3.5 py-2 border transition-all font-medium cursor-pointer ${
                          selectedSize === size
                            ? 'bg-charcoal-950 text-beige-50 border-charcoal-950 font-bold scale-102'
                            : 'bg-white text-charcoal-800 border-charcoal-200 hover:border-charcoal-950'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bullet Features */}
              {quickViewProduct.features && (
                <div className="border-t border-charcoal-100 pt-4 mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-850 mb-2">Product Details</h4>
                  <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 leading-relaxed">
                    {quickViewProduct.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="flex-1 overflow-y-auto">
                <ReviewSection productId={quickViewProduct.id} />
              </div>
            )}

            {/* Actions Footer - Only show on details tab */}
            {activeTab === 'details' && (
            <div className="flex gap-4 border-t border-charcoal-100 pt-4 mt-auto">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 text-beige-50 font-semibold text-xs uppercase tracking-[0.25em] py-3.5 flex items-center justify-center gap-2 transition-all duration-300 shadow cursor-pointer active:scale-98"
              >
                <ShoppingBag className="w-4 h-4" /> Add To Bag
              </button>
              
              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-3.5 border transition-all cursor-pointer ${
                  isWishlisted 
                    ? 'border-red-500 text-red-500 bg-red-50/50 hover:bg-red-50' 
                    : 'border-charcoal-200 text-charcoal-950 hover:border-charcoal-950'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4.5 h-4.5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
            </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
