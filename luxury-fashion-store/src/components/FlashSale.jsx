import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Timer, ArrowRight, Percent } from 'lucide-react';

const FlashSale = () => {
  // Set target date: 1 day, 5 hours, 45 minutes from when the page is loaded
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 5,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    // Total seconds left initial calc
    let totalSeconds = 
      timeLeft.days * 86400 + 
      timeLeft.hours * 3600 + 
      timeLeft.minutes * 60 + 
      timeLeft.seconds;

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        return;
      }
      
      totalSeconds -= 1;
      
      const d = Math.floor(totalSeconds / 86400);
      const h = Math.floor((totalSeconds % 86400) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      
      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format single digits with leading zero
  const formatTime = (num) => String(num).padStart(2, '0');

  // Filter sale products (items with discounts)
  const saleProducts = products.filter(p => p.discount).slice(0, 3);

  return (
    <section id="flash-sale-section" className="py-24 bg-beige-50 border-b border-charcoal-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Premium Dark Timer Box */}
          <div className="w-full lg:w-5/12 bg-charcoal-950 text-beige-50 p-8 md:p-12 flex flex-col justify-between rounded shadow-2xl relative overflow-hidden border border-charcoal-800">
            
            {/* Ambient gold glow */}
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-gold-primary text-xs tracking-[0.3em] font-semibold uppercase mb-6">
                <Percent className="w-5 h-5" /> LIMITED ARCHIVE DEBUT
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-normal leading-tight uppercase tracking-wider mb-6">
                The Sundown Flash Sale
              </h3>
              <p className="text-beige-300 text-sm font-sans tracking-wide leading-relaxed mb-10 font-light text-opacity-80">
                Exclusive architectural cuts and luxury textiles from our autumn archive catalog. Marked down for a temporary period. Complimentary premium canvas dustbags included.
              </p>
            </div>

            {/* Countdown Grid */}
            <div className="mb-10 lg:mb-0">
              <span className="text-[10px] tracking-[0.25em] text-gray-500 uppercase block mb-3 font-semibold">Offer Closes In:</span>
              <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-sm text-center">
                
                {/* Days */}
                <div className="bg-charcoal-800/40 border border-charcoal-800 backdrop-blur-sm p-3 rounded">
                  <span className="font-serif text-2xl md:text-3xl font-normal text-beige-100 block">
                    {formatTime(timeLeft.days)}
                  </span>
                  <span className="text-[9px] text-gray-400 tracking-wider uppercase block mt-1">Days</span>
                </div>

                {/* Hours */}
                <div className="bg-charcoal-800/40 border border-charcoal-800 backdrop-blur-sm p-3 rounded">
                  <span className="font-serif text-2xl md:text-3xl font-normal text-beige-100 block">
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] text-gray-400 tracking-wider uppercase block mt-1">Hrs</span>
                </div>

                {/* Minutes */}
                <div className="bg-charcoal-800/40 border border-charcoal-800 backdrop-blur-sm p-3 rounded">
                  <span className="font-serif text-2xl md:text-3xl font-normal text-beige-100 block">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] text-gray-400 tracking-wider uppercase block mt-1">Mins</span>
                </div>

                {/* Seconds */}
                <div className="bg-charcoal-800/40 border border-charcoal-800 backdrop-blur-sm p-3 rounded animate-pulse">
                  <span className="font-serif text-2xl md:text-3xl font-normal text-gold-primary block">
                    {formatTime(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] text-gold-primary/75 tracking-wider uppercase block mt-1">Secs</span>
                </div>

              </div>
            </div>

            <div className="mt-8 lg:mt-0 pt-6 border-t border-charcoal-800 flex items-center justify-between text-xs tracking-wider text-beige-300">
              <span>*COMPLIMENTARY SHIPPING FOR MEMBERS</span>
              <a href="#shop-section" className="text-gold-primary hover:underline flex items-center gap-1 font-bold">
                View All Sale <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Sale Products Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlashSale;
