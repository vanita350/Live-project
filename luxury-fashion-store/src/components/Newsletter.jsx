import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const { addToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      addToast('Please provide a valid email address.', 'info');
      return;
    }

    setSubscribed(true);
    addToast('Subscription successful! Check your inbox for the welcome gift.', 'success');
    setEmail('');
  };

  return (
    <section className="py-24 bg-charcoal-950 text-beige-50 relative overflow-hidden border-b border-charcoal-800">
      
      {/* Soft light halo glow background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <span className="text-[10px] md:text-xs tracking-[0.35em] font-semibold text-gold-primary uppercase block mb-4">
          THE MEMBERS CLUB
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight uppercase tracking-wider mb-6">
          Subscribe For Privilege
        </h2>
        <p className="text-beige-300 text-xs md:text-sm font-sans tracking-wide leading-relaxed max-w-lg mx-auto mb-10 text-opacity-80 font-light">
          Join our global network to acquire private season launch entries, digital style books, and a complimentary 15% voucher for your next checkout.
        </p>

        {subscribed ? (
          <div className="bg-charcoal-800/40 border border-charcoal-800 p-8 max-w-md mx-auto rounded animate-fade-in">
            <h4 className="font-serif text-lg text-gold-primary uppercase tracking-wider mb-2">Welcome to Aura</h4>
            <p className="text-xs text-beige-200 mb-4 font-sans">Use discount code at cart for 15% off:</p>
            <span className="font-mono text-base bg-charcoal-950 px-4 py-2 border border-gold-primary/30 rounded text-gold-primary font-bold tracking-widest block max-w-xs mx-auto select-all">
              AURAMEMBER15
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex border-b border-beige-100/30 pb-2.5 items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none text-beige-50 text-sm tracking-widest focus:outline-none placeholder-gray-500 uppercase font-sans"
                required
              />
              <button
                type="submit"
                className="text-beige-50 hover:text-gold-primary transition-colors cursor-pointer p-1"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[9px] text-gray-500 tracking-wider mt-4 uppercase leading-relaxed text-center font-sans font-light">
              By subscribing, you agree to our Privacy Policy and Terms of Services. Opt out at any time.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};

export default Newsletter;
