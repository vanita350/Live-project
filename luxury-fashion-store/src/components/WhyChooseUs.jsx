import React from 'react';
import { ShieldCheck, Leaf, Sparkles, MessageSquare } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold-primary stroke-[1.25px]" />,
      title: 'Premium Textiles',
      description: 'We weave from certified GOTS organic cottons, virgin wools, and 100% Italian calfskins, ensuring maximum longevity.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-gold-primary stroke-[1.25px]" />,
      title: 'Sustainably Minded',
      description: 'Our suppliers adhere to strict ethical codes. We employ carbon-neutral delivery networks and reusable cardboard packagings.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-primary stroke-[1.25px]" />,
      title: 'Protected Handoff',
      description: 'Complimentary shipping over $200 with signature validation. Fully insured and trackable, from shipping port to your door.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gold-primary stroke-[1.25px]" />,
      title: 'Stylist Concierge',
      description: 'A dedicated team of luxury wardrobe advisors are available 24/7 to solve tailoring and styling inquiries.'
    }
  ];

  return (
    <section className="py-24 bg-beige-100 border-b border-charcoal-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">OUR CORE VALUES</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-normal uppercase tracking-wide">Why Choose Aura</h2>
          <div className="w-12 h-[1px] bg-gold-primary mx-auto mt-4"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-beige-50/50 hover:bg-beige-50 transition-colors duration-500 rounded border border-charcoal-100/20"
            >
              <div className="mb-5 bg-beige-100 p-4 rounded-full shadow-inner flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-base uppercase tracking-wider text-charcoal-950 font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 font-sans leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
