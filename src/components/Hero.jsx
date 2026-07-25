import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'NEW SEASON COLLECTION 2026',
    title: 'Discover Your Style',
    description: 'Explore our latest curation of minimal silhouettes, luxury outerwear, and lightweight linen staples. Designed to endure.',
    primaryBtn: 'Shop Now',
    secondaryBtn: 'Explore Collection',
    align: 'left'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'THE ESSENTIAL LOOKBOOK',
    title: 'Timeless Elegance',
    description: 'An editorial collection featuring soft neutral tones, premium linen tailoring, and handcrafted leather accessories.',
    primaryBtn: 'Shop Outerwear',
    secondaryBtn: 'Watch Lookbook',
    align: 'right'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'EXCLUSIVELY CRAFTED',
    title: 'Modern Craftsmanship',
    description: 'Sustainably sourced fabrics, artisan assembly, and modern architectural detailing define our pre-fall line.',
    primaryBtn: 'Browse Luxury',
    secondaryBtn: 'Our Process',
    align: 'center'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-charcoal-950">

      {/* Slides Background Zoom Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'linear' }}
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Soft Dark Gradients Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            {slides[current].align === 'right' && (
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
            )}
            {slides[current].align === 'center' && (
              <div className="absolute inset-0 bg-black/40" />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Text Content */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full flex flex-col justify-center">

          <div
            className={`w-full max-w-xl text-beige-50 pointer-events-auto flex flex-col ${slides[current].align === 'right'
              ? 'ml-auto text-right items-end'
              : slides[current].align === 'center'
                ? 'mx-auto text-center items-center'
                : 'text-left items-start'
              }`}
          >
            {/* Subtitle */}
            <motion.span
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[10px] md:text-xs tracking-[0.35em] font-medium text-gold-primary uppercase mb-4 block"
            >
              {slides[current].subtitle}
            </motion.span>

            {/* Title (Playfair Display Serif) */}
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-wide mb-6 uppercase drop-shadow-sm"
            >
              {slides[current].title}
            </motion.h1>
           

            {/* Description */}
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-beige-200 text-xs md:text-sm font-sans tracking-wide leading-relaxed max-w-md mb-8 md:mb-10 text-opacity-90 font-light"
            >
              {slides[current].description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              key={`btn-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#shop-section"
                className="bg-beige-100 hover:bg-gold-primary text-charcoal-950 text-xs uppercase tracking-widest font-semibold px-6 md:px-8 py-3.5 shadow-lg transition-all duration-300 hover:scale-102 flex items-center gap-2"
              >
                {slides[current].primaryBtn} <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#shop-section"
                className="border border-beige-100 hover:bg-beige-100 hover:text-charcoal-950 text-beige-100 text-xs uppercase tracking-widest font-semibold px-6 md:px-8 py-3.5 transition-all duration-300 backdrop-blur-sm"
              >
                {slides[current].secondaryBtn}
              </a>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Left/Right Slider Nav Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/35 hover:scale-105 border border-beige-100/10 text-beige-50 p-2.5 rounded-full transition-all cursor-pointer backdrop-blur-sm hidden md:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/35 hover:scale-105 border border-beige-100/10 text-beige-50 p-2.5 rounded-full transition-all cursor-pointer backdrop-blur-sm hidden md:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Pagination Indicators (Bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 cursor-pointer ${current === index
              ? 'w-8 h-1.5 bg-gold-primary'
              : 'w-2 h-1.5 bg-beige-100/40 hover:bg-beige-100/85'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
