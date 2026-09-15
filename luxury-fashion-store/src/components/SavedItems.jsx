import React from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

const SavedItems = () => {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="border border-dashed border-charcoal-200 bg-beige-50 px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold mb-3">            
                Saved For Later
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 uppercase tracking-wide">
                Curate your personal edit
              </h2>
            </div>
            <div className="text-sm text-charcoal-700 max-w-xl">
              Tap the heart on any product to build your luxury wishlist and return to your curated favourites anytime.
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold mb-2">
            Personalized Picks
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 uppercase tracking-wide">
            Saved for later
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal-700">
          <span>{wishlist.length} items</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="group bg-beige-50 border border-charcoal-100 p-3 shadow-sm">
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-50 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-red-500 flex items-center justify-center shadow-sm cursor-pointer"
                aria-label="Remove from wishlist"
              >
                <Heart className="w-4 h-4 fill-red-500" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-charcoal-500">{product.category}</p>
                <h3 className="font-serif text-xl text-charcoal-950 mt-1">{product.name}</h3>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-semibold text-charcoal-950">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product, product.sizes?.[0] || 'M')}
                  className="bg-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 text-beige-50 text-[10px] uppercase tracking-[0.2em] px-3 py-2 transition-colors cursor-pointer"
                >
                  Add
                </button>
              </div>

              <button
                onClick={() => toggleWishlist(product)}
                className="w-full flex items-center justify-center gap-2 border border-charcoal-200 text-charcoal-800 text-[10px] uppercase tracking-[0.2em] py-2 hover:border-charcoal-950 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedItems;
