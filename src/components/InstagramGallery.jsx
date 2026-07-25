import React from 'react';
import { instagramFeed } from '../data/products';
import { Heart, ShoppingBag } from 'lucide-react';

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-beige-100 border-b border-charcoal-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">SOCIAL LOOKBOOK</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-normal uppercase tracking-wide">Shop Our Instagram</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-gold-primary transition-colors mt-3 inline-flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @aura_boutique
          </a>
          <div className="w-12 h-[1px] bg-gold-primary mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramFeed.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block shadow bg-charcoal-50"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-beige-50 gap-2">
                <svg className="w-5 h-5 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold mt-1">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" /> {post.likes}
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium bg-beige-50/15 border border-white/20 px-2.5 py-1 rounded-full mt-2 backdrop-blur-sm">
                  Shop Post
                </span>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramGallery;
