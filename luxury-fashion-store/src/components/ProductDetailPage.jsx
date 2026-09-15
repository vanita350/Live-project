import React, { useEffect, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Check, Gift, Heart, Minus, Plus, ShieldCheck, ShoppingBag, Sparkles, Star, Truck } from 'lucide-react';
import { FALLBACK_FASHION_IMAGE, products } from '../data/products';
import SizeGuideModal from './SizeGuideModal';

const ProductDetailPage = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    setCartOpen
  } = useShop();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  useEffect(() => {
    if (!selectedProduct) return;
    setSelectedSize(selectedProduct.sizes?.[0] || 'OS');
    setSelectedColor(selectedProduct.colors ? selectedProduct.colors[0].name : 'Default');
    setActiveImage(selectedProduct.imageByColor?.[selectedProduct.colors?.[0]?.name] || selectedProduct.image);
    setQuantity(1);
  }, [selectedProduct]);

  useEffect(() => {
    if (!selectedProduct || !selectedColor) return;
    const nextImage = selectedProduct.imageByColor?.[selectedColor] || selectedProduct.image;
    setActiveImage(nextImage);
  }, [selectedColor, selectedProduct]);

  if (!selectedProduct) return null;

  const isWishlisted = wishlist.some((item) => item.id === selectedProduct.id);
  const relatedProducts = products
    .filter((product) => product.category === selectedProduct.category && product.id !== selectedProduct.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
    setCartOpen(true);
  };

  return (
    <div className="bg-beige-50 min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <button
          onClick={() => setSelectedProduct(null)}
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-charcoal-700 hover:text-gold-primary transition-colors cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-50 shadow-sm">
              <img
                src={activeImage || FALLBACK_FASHION_IMAGE}
                alt={selectedProduct.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_FASHION_IMAGE;
                }}
              />
              {selectedProduct.discount && (
                <span className="absolute top-4 left-4 bg-charcoal-950 text-beige-50 text-[10px] uppercase tracking-[0.25em] font-semibold px-3 py-1.5">
                  {selectedProduct.discount}% OFF
                </span>
              )}
            </div>

            {selectedProduct.hoverImage && (
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveImage(selectedProduct.image)}
                  className={`w-20 h-24 border-2 overflow-hidden bg-white cursor-pointer ${
                    activeImage === selectedProduct.image ? 'border-gold-primary' : 'border-transparent opacity-75'
                  }`}
                >
                  <img
                    src={selectedProduct.image || FALLBACK_FASHION_IMAGE}
                    alt="Product thumbnail 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_FASHION_IMAGE;
                    }}
                  />
                </button>
                <button
                  onClick={() => setActiveImage(selectedProduct.hoverImage)}
                  className={`w-20 h-24 border-2 overflow-hidden bg-white cursor-pointer ${
                    activeImage === selectedProduct.hoverImage ? 'border-gold-primary' : 'border-transparent opacity-75'
                  }`}
                >
                  <img
                    src={selectedProduct.hoverImage || FALLBACK_FASHION_IMAGE}
                    alt="Product thumbnail 2"
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

          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal-500">
                {selectedProduct.category}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex text-gold-primary">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.floor(selectedProduct.rating) ? 'fill-gold-primary' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal-600">({selectedProduct.reviews})</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              {selectedProduct.badge && (
                <span className="bg-charcoal-950 text-beige-50 text-[9px] uppercase tracking-[0.25em] px-2 py-1">
                  {selectedProduct.badge}
                </span>
              )}
              {selectedProduct.discount && (
                <span className="bg-gold-primary text-charcoal-950 text-[9px] uppercase tracking-[0.25em] font-bold px-2 py-1">
                  Save {selectedProduct.discount}%
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-charcoal-950 leading-tight mb-4">
              {selectedProduct.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-3xl font-bold text-charcoal-950">${selectedProduct.price}</span>
              {selectedProduct.originalPrice && (
                <span className="text-xl text-gray-400 line-through">${selectedProduct.originalPrice}</span>
              )}
            </div>

            <p className="text-base leading-relaxed text-charcoal-700 mb-7">
              {selectedProduct.description}
            </p>

            <div className="grid grid-cols-3 gap-3 border-y border-charcoal-100 py-4 mb-7">
              <div className="flex items-center gap-2 text-sm text-charcoal-700">
                <Truck className="w-4 h-4 text-gold-primary" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-700">
                <ShieldCheck className="w-4 h-4 text-gold-primary" />
                <span>Easy returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-700">
                <Sparkles className="w-4 h-4 text-gold-primary" />
                <span>Premium finish</span>
              </div>
            </div>

            {selectedProduct.colors && (
              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold">Color</span>
                  <span className="text-sm text-charcoal-600">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-9 h-9 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColor === color.name ? 'border-charcoal-950 scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check className="w-4 h-4 text-white stroke-[3px] absolute inset-0 m-auto drop-shadow-md" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedProduct.sizes && (
              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold">Size</span>
                  <span className="text-sm text-charcoal-600">{selectedSize}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
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

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold">Quantity</span>
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

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 text-beige-50 text-[10px] uppercase tracking-[0.25em] font-semibold py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" /> Add to bag
              </button>
              <button
                onClick={() => toggleWishlist(selectedProduct)}
                className={`px-5 border transition-all cursor-pointer ${
                  isWishlisted ? 'border-red-500 text-red-500 bg-red-50/50 hover:bg-red-50' : 'border-charcoal-200 text-charcoal-950 hover:border-charcoal-950'
                }`}
                aria-label="Toggle wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold border-b border-charcoal-950 pb-1 hover:text-gold-primary hover:border-gold-primary transition-colors cursor-pointer"
              >
                Size guide
              </button>
              <span className="text-xs text-charcoal-500">Fit guide available</span>
            </div>

            <div className="rounded-none border border-charcoal-100 bg-beige-50 p-4 text-sm text-charcoal-700">
              <div className="flex items-center gap-2 text-charcoal-950 font-medium mb-2">
                <Gift className="w-4 h-4 text-gold-primary" />
                Complimentary gift wrap included
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Add a handwritten note and premium packaging at no extra cost with every luxury order.
              </p>
            </div>
          </div>
        </div>

        {selectedProduct.features && (
          <div className="mt-20 border-t border-charcoal-100 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-semibold mb-4">Crafted details</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 mb-6">Why this piece feels elevated</h2>
                <ul className="space-y-4 text-base text-charcoal-700">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-charcoal-950 text-beige-50 p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light mb-4">Styling notes</p>
                <h3 className="font-serif text-3xl leading-tight mb-5">Designed to be worn beautifully.</h3>
                <p className="text-base text-beige-100 leading-relaxed mb-6">
                  Pair this piece with tailored essentials and refined accessories to create a polished, statement-making look that feels timeless rather than trend-led.
                </p>
                <div className="space-y-3 text-sm text-beige-100">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>Fabric feel</span>
                    <span className="font-medium">Soft luxury</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>Fit</span>
                    <span className="font-medium">Modern tailored</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Finish</span>
                    <span className="font-medium">Effortless elegance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-semibold mb-2">Complete the look</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950">You may also like</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="text-left group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-50 mb-3">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal-500 mb-2">{product.badge}</p>
                  <h3 className="font-serif text-xl text-charcoal-950 mb-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-semibold text-charcoal-950">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={selectedProduct.category}
        productName={selectedProduct.name}
      />
    </div>
  );
};

export default ProductDetailPage;
