import React from 'react';
import { categories } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

const Categories = () => {
  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">CURATED DEPARTMENTS</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-normal uppercase tracking-wide">Shop By Category</h2>
          <div className="w-12 h-[1px] bg-gold-primary mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#shop-section"
              className="relative aspect-[3/4] overflow-hidden group block shadow-md hover:shadow-xl transition-shadow duration-500 bg-charcoal-100"
            >
              {/* Category Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/75 transition-all duration-500" />

              {/* Bottom White Overlay Details */}
              <div className="absolute bottom-6 left-6 right-6 bg-beige-50/90 backdrop-blur-md p-5 border border-white/20 shadow-lg flex items-center justify-between transition-all duration-500 group-hover:bg-charcoal-950 group-hover:text-beige-50">
                <div>
                  <h3 className="font-serif text-base uppercase tracking-wider font-semibold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 group-hover:text-beige-300 transition-colors">
                    {cat.itemCount}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-charcoal-300 flex items-center justify-center group-hover:border-beige-50 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
