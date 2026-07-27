import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { toggleWishlist, wishlist, addToCart, setQuickViewProduct, setCartOpen } = useShop();
  const [hovered, setHovered] = useState(false);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div
      className="group relative flex flex-col bg-beige-50 font-sans"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-50 mb-4 shadow-sm">
        
        {/* Main Image & Hover Swap Image */}
        <img
          src={hovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out scale-100 group-hover:scale-103"
          loading="lazy"
        />

        {/* Badges Overlay (Left) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-charcoal-950 text-beige-50 text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="bg-gold-primary text-charcoal-950 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button Overlay (Right) */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 backdrop-blur-sm cursor-pointer z-10 ${
            isWishlisted
              ? 'bg-red-500 border-red-500 text-white hover:bg-red-600'
              : 'bg-white/80 border-charcoal-100 text-charcoal-950 hover:bg-white hover:scale-105'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Button Overlay (Center Slide-Up) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/15 backdrop-blur-[1px]">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="bg-beige-50/95 text-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 font-semibold text-[10px] uppercase tracking-widest px-4 py-2.5 flex items-center gap-1.5 shadow-lg transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>

        {/* Add To Cart Drawer Slide-Up (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
          <button
            onClick={() => {
              addToCart(product, product.sizes[0] || 'M');
              setCartOpen(true);
            }}
            className="w-full bg-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 text-beige-50 font-semibold text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Add To Bag
          </button>
        </div>

      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-grow">
        
        {/* Rating and Reviews */}
        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex text-gold-primary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'fill-gold-primary text-gold-primary' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">({product.reviews})</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-sm md:text-base text-charcoal-950 tracking-wide mb-1 leading-tight hover:text-gold-primary transition-colors cursor-pointer" onClick={() => setQuickViewProduct(product)}>
          {product.name}
        </h3>

        {/* Pricing details */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-sm md:text-base font-semibold text-charcoal-950">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

      </div>

    </div>
  );
};

export default ProductCard;
