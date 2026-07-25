import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    collections: [
      { name: 'Women Edition', href: '#shop-section' },
      { name: 'Men Collection', href: '#shop-section' },
      { name: 'Kids Outwear', href: '#shop-section' },
      { name: 'Accessories', href: '#shop-section' },
      { name: 'New Arrivals', href: '#shop-section' },
      { name: 'Bestsellers', href: '#shop-section' }
    ],
    services: [
      { name: 'Stylist Concierge', href: '#' },
      { name: 'Premium Tailoring', href: '#' },
      { name: 'Complimentary Returns', href: '#' },
      { name: 'Secure Delivery', href: '#' },
      { name: 'Virtual Showroom', href: '#' }
    ],
    company: [
      { name: 'Our Heritage', href: '#' },
      { name: 'Ecological Promise', href: '#' },
      { name: 'Press & Media', href: '#' },
      { name: 'Careers Portal', href: '#' },
      { name: 'Flagship Stores', href: '#' }
    ]
  };

  return (
    <footer id="footer-section" className="bg-charcoal-950 text-beige-100 font-sans border-t border-charcoal-800 relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 border-b border-charcoal-800 pb-16 mb-12">
          
          {/* Logo & Brand Bio */}
          <div className="lg:col-span-2 text-left max-w-sm">
            <h3 className="font-serif text-2xl tracking-[0.25em] text-beige-50 mb-6 uppercase">AURA</h3>
            <p className="text-gray-400 text-xs tracking-wider leading-relaxed mb-6 font-light">
              Founded on principles of architectural tailoring, sustainably sourced textiles, and timeless elegance. We craft pieces that outlive standard fast-fashion catalogs.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gold-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gold-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gold-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Youtube" className="text-gray-400 hover:text-gold-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Links: Collections */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-beige-50 mb-5 border-b border-charcoal-800 pb-2">Collections</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 tracking-wider">
              {footerLinks.collections.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Services */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-beige-50 mb-5 border-b border-charcoal-800 pb-2">Services</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 tracking-wider">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Office Info */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-beige-50 mb-5 border-b border-charcoal-800 pb-2">Concierge</h4>
            <div className="text-xs text-gray-400 tracking-wider space-y-3.5 leading-relaxed font-light">
              <p>AURA MAISON<br />742 FIFTH AVENUE<br />NEW YORK, NY 10019</p>
              <p>SUPPORT: +1 (800) 123-AURA</p>
              <p>EMAIL: concierge@aurafashion.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-gray-500 tracking-widest font-medium uppercase border-t border-charcoal-900 pt-8">
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>© {new Date().getFullYear()} AURA Retail Ltd.</span>
            <a href="#" className="hover:text-beige-100 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-beige-100 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-beige-100 transition-colors">Cookie Controls</a>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map((pay) => (
              <span
                key={pay}
                className="bg-charcoal-800/40 text-[9px] text-gray-400 tracking-widest px-2.5 py-1 border border-charcoal-800 select-none"
              >
                {pay}
              </span>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 hover:text-gold-primary transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            Top <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
