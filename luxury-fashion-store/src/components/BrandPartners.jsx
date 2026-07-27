import React from 'react';
import { partners } from '../data/products';

const BrandPartners = () => {
  return (
    <section className="bg-beige-100 py-10 border-y border-charcoal-100/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Mobile horizontal scroll / Desktop flex container */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-around gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-85 transition-all duration-700">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-center font-serif text-xl md:text-2xl font-bold tracking-[0.35em] text-charcoal-800 hover:text-gold-dark hover:scale-105 transition-all select-none cursor-default"
            >
              {partner.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandPartners;
