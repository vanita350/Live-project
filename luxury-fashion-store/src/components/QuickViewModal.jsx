import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, Heart, ShoppingBag, Check, ShieldCheck, Truck, Sparkles, Gift, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewSection from './ReviewSection';
import { FALLBACK_FASHION_IMAGE, products } from '../data/products';
import SizeGuideModal from './SizeGuideModal';

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
  const [activeTab, setActiveTab] = useState('details');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      const defaultColor = quickViewProduct.colors ? quickViewProduct.colors[0].name : 'Default';
      setSelectedSize(quickViewProduct.sizes?.[0] || 'OS');
      setSelectedColor(defaultColor);
      setActiveImage(quickViewProduct.imageByColor?.[defaultColor] || quickViewProduct.image);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  useEffect(() => {
    if (!quickViewProduct || !selectedColor) return;
    const nextImage = quickViewProduct.imageByColor?.[selectedColor] || quickViewProduct.image;
    setActiveImage(nextImage);
  }, [selectedColor, quickViewProduct]);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.some((item) => item.id === quickViewProduct.id);
  const suggestedProducts = products
    .filter((product) => product.category === quickViewProduct.category && product.id !== quickViewProduct.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    setCartOpen(true);
    setQuickViewProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } }}
          exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }}
          className="relative bg-beige-50 max-w-6xl w-full rounded-none md:rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[92vh] z-10"
        >
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 text-charcoal-950 hover:opacity-75 z-20 bg-beige-50/80 backdrop-blur-sm p-2 rounded-full shadow cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full lg:w-[47%] flex flex-col p-4 md:p-6 bg-charcoal-50 justify-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden mb-3.5 bg-white shadow-sm">
              <img
                src={activeImage || FALLBACK_FASHION_IMAGE}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_FASHION_IMAGE;
                }}
              />
              {quickViewProduct.discount && (
                <span className="absolute top-4 left-4 bg-charcoal-950 text-beige-50 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                  {quickViewProduct.discount}% OFF
                </span>
              )}
            </div>

            {quickViewProduct.hoverImage && (
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveImage(quickViewProduct.image)}
                  className={`w-16 h-20 border-2 overflow-hidden bg-white cursor-pointer ${
                    activeImage === quickViewProduct.image ? 'border-gold-primary' : 'border-transparent opacity-70'
                  }`}
                >
                  <img
                    src={quickViewProduct.image || FALLBACK_FASHION_IMAGE}
                    alt="Thumbnail 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_FASHION_IMAGE;
                    }}
                  />
                </button>
                <button
                  onClick={() => setActiveImage(quickViewProduct.hoverImage)}
                  className={`w-16 h-20 border-2 overflow-hidden bg-white cursor-pointer ${
                    activeImage === quickViewProduct.hoverImage ? 'border-gold-primary' : 'border-transparent opacity-70'
                  }`}
                >
                  <img
                    src={quickViewProduct.hoverImage || FALLBACK_FASHION_IMAGE}
                    alt="Thumbnail 2"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_FASHION_IMAGE;
                    }}
                  />
                </button>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[53%] p-5 md:p-8 overflow-y-auto no-scrollbar flex flex-col">
            <div className="flex gap-4 border-b border-charcoal-100 mb-6">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  activeTab === 'details' ? 'text-charcoal-950 border-b-2 border-gold-primary' : 'text-charcoal-600 hover:text-charcoal-950'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  activeTab === 'reviews' ? 'text-charcoal-950 border-b-2 border-gold-primary' : 'text-charcoal-600 hover:text-charcoal-950'
                }`}
              >
                Reviews
              </button>
            </div>

            {activeTab === 'details' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-600">
                    {quickViewProduct.category}
                  </span>
                  <div className="flex items-center gap-1.5">
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
                    <span className="text-[11px] text-charcoal-600">({quickViewProduct.reviews})</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {quickViewProduct.badge && (
                      <span className="bg-charcoal-950 text-beige-50 text-[9px] uppercase tracking-widest px-2 py-1">
                        {quickViewProduct.badge}
                      </span>
                    )}
                    {quickViewProduct.discount && (
                      <span className="bg-gold-primary text-charcoal-950 text-[9px] uppercase tracking-widest font-bold px-2 py-1">
                        Save {quickViewProduct.discount}%
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 leading-tight mb-2">
                    {quickViewProduct.name}
                  </h2>

                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-bold text-charcoal-950">${quickViewProduct.price}</span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-base text-gray-400 line-through">${quickViewProduct.originalPrice}</span>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-charcoal-700">
                  {quickViewProduct.description}
                </p>

                <div className="grid grid-cols-3 gap-2 text-xs text-charcoal-700 border-y border-charcoal-100 py-4">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gold-primary" />
                    <span>Free delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-primary" />
                    <span>30-day return</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-primary" />
                    <span>Premium finish</span>
                  </div>
                </div>

                {quickViewProduct.colors && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold">
                        Color
                      </span>
                      <span className="text-xs text-charcoal-600">{selectedColor}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {quickViewProduct.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`relative w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                            selectedColor === color.name ? 'border-charcoal-950 scale-110' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                          aria-label={color.name}
                        >
                          {selectedColor === color.name && (
                            <Check className="w-3.5 h-3.5 text-white stroke-[3px] absolute inset-0 m-auto drop-shadow-md" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quickViewProduct.sizes && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold">
                        Size
                      </span>
                      <span className="text-xs text-charcoal-600">{selectedSize}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-[10px] uppercase tracking-[0.2em] px-3 py-2 border transition-all font-medium cursor-pointer ${
                            selectedSize === size
                              ? 'bg-charcoal-950 text-beige-50 border-charcoal-950'
                              : 'bg-white text-charcoal-800 border-charcoal-200 hover:border-charcoal-950'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold">
                      Quantity
                    </span>
                  </div>
                  <div className="inline-flex items-center border border-charcoal-200 bg-white">
                    <button
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                      className="p-3 hover:bg-charcoal-50 cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="min-w-12 text-center text-sm font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="p-3 hover:bg-charcoal-50 cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {quickViewProduct.features && (
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold mb-3">
                      Why it stands out
                    </h3>
                    <ul className="space-y-2 text-sm text-charcoal-700">
                      {quickViewProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-gold-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-none border border-charcoal-100 bg-beige-50 p-3 text-sm text-charcoal-700">
                  <div className="flex items-center gap-2 mb-1 text-charcoal-900 font-medium">
                    <Gift className="w-4 h-4 text-gold-primary" />
                    Complimentary gift wrap included
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    Add a handwritten note and premium packaging at no extra cost with every luxury order.
                  </p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-[10px] uppercase tracking-[0.25em] font-semibold text-charcoal-800 border-b border-charcoal-950 pb-1 hover:text-gold-primary hover:border-gold-primary transition-colors cursor-pointer"
                  >
                    Size guide
                  </button>
                  <span className="text-xs text-charcoal-500">Fit guide available</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 text-beige-50 font-semibold text-[10px] uppercase tracking-[0.25em] py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add To Bag
                  </button>
                  <button
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className={`px-4 border transition-all cursor-pointer ${
                      isWishlisted ? 'border-red-500 text-red-500 bg-red-50/50 hover:bg-red-50' : 'border-charcoal-200 text-charcoal-950 hover:border-charcoal-950'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
                  </button>
                </div>

                {suggestedProducts.length > 0 && (
                  <div className="pt-2 border-t border-charcoal-100">
                    <h3 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold mb-3">
                      Complete the look
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {suggestedProducts.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => setQuickViewProduct(product)}
                          className="text-left group cursor-pointer"
                        >
                          <div className="overflow-hidden bg-charcoal-50 mb-2">
                            <img src={product.image} alt={product.name} className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-charcoal-600 mb-1">{product.badge}</div>
                          <div className="font-serif text-sm text-charcoal-950">{product.name}</div>
                          <div className="text-xs text-charcoal-700 mt-1">${product.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="flex-1 overflow-y-auto">
                <ReviewSection productId={quickViewProduct.id} />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={quickViewProduct.category}
        productName={quickViewProduct.name}
      />
    </AnimatePresence>
  );
};

export default QuickViewModal;
