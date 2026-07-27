import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/products';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomerReviews = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-beige-50 border-b border-charcoal-100/30">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">CLIENTELE VOICE</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-normal uppercase tracking-wide">Journal Reviews</h2>
          <div className="w-12 h-[1px] bg-gold-primary mx-auto mt-4"></div>
        </div>

        {/* Large Quote Icon decoration */}
        <div className="flex justify-center text-gold-primary/10 mb-2">
          <Quote className="w-16 h-16 stroke-[1px] fill-gold-primary/5" />
        </div>

        {/* Review Content Slider */}
        <div className="relative min-h-[220px] md:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Rating */}
              <div className="flex text-gold-primary justify-center mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="font-serif text-base md:text-lg text-charcoal-950 italic leading-relaxed max-w-2xl mb-8 tracking-wide">
                "{testimonials[current].text}"
              </p>

              {/* Avatar and Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-11 h-11 rounded-full object-cover border border-charcoal-100"
                />
                <div className="text-left font-sans">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal-950">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevReview}
            className="w-8 h-8 rounded-full border border-charcoal-200 text-charcoal-950 hover:border-charcoal-950 hover:bg-beige-100 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  current === index ? 'w-5 h-1.5 bg-gold-primary' : 'w-1.5 h-1.5 bg-charcoal-200 hover:bg-charcoal-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextReview}
            className="w-8 h-8 rounded-full border border-charcoal-200 text-charcoal-950 hover:border-charcoal-950 hover:bg-beige-100 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
