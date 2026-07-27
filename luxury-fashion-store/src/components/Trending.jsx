import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { products } from '../data/products';

const Trending = () => {
  const { setQuickViewProduct } = useShop();
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Focus on trench coat (product 1) and leather bag (product 3)
  const hotspots = [
    {
      id: 1,
      top: '25%',
      left: '42%',
      product: products[0], // Trench Coat
      label: 'Tailored Trench - $349'
    }, 
    {
      id: 2,
      top: '72%',
      left: '52%',
      product: products[2], // Leather Bag
      label: 'Calfskin Bag - $220'
    }
  ];

  return (
    <section className="py-24 bg-beige-100 border-y border-charcoal-100/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Hotspot Lookbook Image */}
          <div className="w-full lg:w-1/2 relative aspect-[3/4] max-w-lg mx-auto bg-charcoal-50 shadow-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop"
              alt="Editorial Lookbook"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-103"
            />
            
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all" />

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-10"
                style={{ top: spot.top, left: spot.left }}
              >
                {/* Pulsing button anchor */}
                <button
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setQuickViewProduct(spot.product)}
                  className="w-6 h-6 rounded-full bg-beige-50/95 shadow-lg border border-charcoal-800/20 flex items-center justify-center relative cursor-pointer group/spot transition-transform hover:scale-110 active:scale-95"
                  aria-label={`Hotspot ${spot.id}`}
                >
                  <span className="absolute inset-0 rounded-full bg-beige-50 animate-ping opacity-60"></span>
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-primary"></div>
                </button>
                
                {/* Info Card Popover */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-8 bg-charcoal-950 text-beige-50 text-[10px] tracking-widest uppercase font-semibold px-3 py-2 whitespace-nowrap border border-charcoal-800 shadow-2xl transition-all duration-300 pointer-events-none ${
                    activeHotspot === spot.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                  }`}
                >
                  {spot.label}
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-charcoal-950 rotate-45 border-r border-b border-charcoal-800" />
                </div>
              </div>
            ))}

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-beige-50 text-charcoal-950 text-[9px] uppercase tracking-widest font-semibold px-3.5 py-1.5 flex items-center gap-1.5 border border-charcoal-100 shadow">
              <Sparkles className="w-3.5 h-3.5 text-gold-primary" /> SHOP THE LOOK
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-4">
              EDITORIAL INSIGHT
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal-950 font-normal leading-tight uppercase mb-6 tracking-wide">
              The Autumn Harmony Lookbook
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-sans leading-relaxed tracking-wide mb-6 font-light max-w-xl">
              An expression of contemporary minimalism. The Pre-Fall 2026 Collection unites double-breasted structure with lightweight, flowing organic linings. Designed for shifting temperatures, each look explores the interplay of warm oatmeal linen, deep tobacco suedes, and gold-plated hardware.
            </p>
            <p className="text-gray-500 text-xs md:text-sm font-sans italic leading-relaxed mb-8 border-l-2 border-gold-primary pl-4 max-w-lg">
              "We sought to eliminate the noise of seasonal trends. Every seam, pocket, and horn button is placed with architectural purpose, forming a wardrobe that is both functional and beautifully poetic."
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => setQuickViewProduct(products[0])}
                className="bg-charcoal-950 hover:bg-gold-primary hover:text-charcoal-950 text-beige-50 text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                Inspect Trench Coat <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#shop-section"
                className="text-xs uppercase tracking-widest font-bold text-charcoal-950 hover:text-gold-primary transition-colors border-b border-charcoal-950 hover:border-gold-primary pb-1 flex items-center gap-1"
              >
                Explore Whole Collection
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Trending;
