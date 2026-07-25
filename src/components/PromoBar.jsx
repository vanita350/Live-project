import React from 'react';

const PromoBar = () => {
  const announcements = [
    "COMPLIMENTARY SHIPPING ON ORDERS OVER $200",
    "USE CODE 'AURA20' FOR 20% OFF ON NEW DEBUT ITEMS",
    "DISCOVER THE SEASON 2026 PRE-FALL LOOKBOOK NOW LIVE",
    "JOIN THE MEMBERS CIRCLE FOR EXCLUSIVE LAUNCH ALERTS"
  ];

  // Repeat twice for infinite loop styling
  const scrollText = [...announcements, ...announcements].join("   •   ");

  return (
    <div className="w-full bg-charcoal-950 text-beige-100 text-xs tracking-widest py-2.5 overflow-hidden border-b border-charcoal-800 relative z-50">
      <div className="relative flex max-w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center font-medium select-none">
          <span className="inline-block px-4">{scrollText}</span>
          <span className="inline-block px-4">{scrollText}</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;
