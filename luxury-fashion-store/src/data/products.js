export const categories = [
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
    itemCount: '124 Products'
  },
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
    itemCount: '98 Products'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop',
    itemCount: '45 Products'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoo4EmMAjlQL3E_a1cvpTkGt1pJF7W6xWxCGCc-iNZg&s=10',
    itemCount: '62 Products'
  }
];

export const products = [
  {
    id: 1,
    name: 'Tailored Wool Trench Coat',
    category: 'women',
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviews: 124,
    discount: 30,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    description: 'An elegant longline wool trench coat with structured shoulders, double-breasted button closures, and a belted waist. Perfect for sophisticated winter layering.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Beige', hex: '#E6DFD3' },
      { name: 'Charcoal Black', hex: '#1C1C1C' }
    ],
    features: ['100% Virgin Wool', 'Fully lined with premium satin', 'Dry clean only', 'Ethically sourced material']
  },
  {
    id: 2,
    name: 'Classic Linen Blazer',
    category: 'men',
    price: 189,
    originalPrice: 249,
    rating: 4.6,
    reviews: 84,
    discount: 24,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop',
    description: 'A breathable, half-lined linen blazer tailored for a modern, relaxed fit. Features notch lapels, patch pockets, and premium horn buttons.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sand Beige', hex: '#E5DDCB' },
      { name: 'Navy Blue', hex: '#1B2C3F' }
    ],
    features: ['100% Organic Linen', 'Breathable half-lining', 'Double back vents', 'Made in Portugal']
  },
  {
    id: 3,
    name: 'Minimalist Leather Shoulder Bag',
    category: 'accessories',
    price: 220,
    rating: 4.9,
    reviews: 210,
    badge: 'Luxury',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop',
    description: 'Crafted from butter-soft Italian pebble-grain leather, this shoulder bag features a structural silhouette, gold-tone hardware, and adjustable strap.',
    sizes: ['OS'],
    colors: [
      { name: 'Tan Brown', hex: '#A67C52' },
      { name: 'Noir Black', hex: '#000000' }
    ],
    features: ['Italian Calfskin Leather', 'Gold-plated hardware', 'Internal zip pocket', 'Dust bag included']
  },
  {
    id: 4,
    name: 'Kids Organic Knit Sweater',
    category: 'kids',
    price: 59,
    originalPrice: 79,
    rating: 4.7,
    reviews: 42,
    discount: 25,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop',
    description: 'Ultra-soft, non-itchy knit sweater knitted from certified organic cotton. Featuring a sweet ribbed neck and relaxed drop shoulders.',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: [
      { name: 'Sage Green', hex: '#A3B19B' },
      { name: 'Cream White', hex: '#F6F3EC' }
    ],
    features: ['100% GOTS Organic Cotton', 'Hypoallergenic dyes', 'Ribbed cuffs and hem', 'Machine washable']
  },
  {
    id: 5,
    name: 'Suede Biker Jacket',
    category: 'men',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviews: 95,
    discount: 33,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
    description: 'A luxurious suede biker jacket featuring asymmetric zipper, snap-down lapels, and zipped cuffs. Heavyweight premium texture with a soft touch.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Tobacco Brown', hex: '#6E4E37' },
      { name: 'Camel Tan', hex: '#C29B70' }
    ],
    features: ['100% Suede Leather', 'Premium silver zippers', 'Polyester satin lining', 'Professionally clean only']
  },
  {
    id: 6,
    name: 'Silk Slip Midi Dress',
    category: 'women',
    price: 180,
    rating: 4.7,
    reviews: 112,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
    description: 'Cut on the bias for an elegant drape, this mulberry silk dress features adjustable cross-back straps, a cowl neckline, and a subtle side slit.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne Gold', hex: '#F0E6D2' },
      { name: 'Emerald Green', hex: '#0B4F35' }
    ],
    features: ['100% Mulberry Silk (19 Momme)', 'Bias cut', 'Adjustable straps', 'Cowl neckline']
  },
  {
    id: 7,
    name: '18K Gold Plated Chain',
    category: 'accessories',
    price: 110,
    originalPrice: 150,
    rating: 4.5,
    reviews: 67,
    discount: 26,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    description: 'A versatile herringbone chain plated in thick 18k gold over sterling silver. tarnish-resistant coating allows for everyday wear.',
    sizes: ['16"', '18"', '20"'],
    colors: [
      { name: 'Yellow Gold', hex: '#E5C060' }
    ],
    features: ['18K Gold Plating', 'Sterling Silver Base', 'Tarnish-free coating', 'Lobster clasp closure']
  },
  {
    id: 8,
    name: 'Kids Denim Sherpa Jacket',
    category: 'kids',
    price: 65,
    originalPrice: 90,
    rating: 4.8,
    reviews: 31,
    discount: 27,
    badge: 'Warm',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1ue71Nt337W3NPtwscAYfqGrMqWGdBi4VaI3DKj2Tw&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1ue71Nt337W3NPtwscAYfqGrMqWGdBi4VaI3DKj2Tw&s=10',
    description: 'Classic denim jacket lined with cozy thick faux-sherpa. Metal buttons, fleece collar, and front flap chest pockets make it both functional and stylish.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [
      { name: 'Medium Wash Denim', hex: '#4B6B94' }
    ],
    features: ['100% Cotton Denim outer', 'Recycled faux-sherpa lining', 'Snap button cuffs', 'Four pocket build']
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Victoria Vance',
    role: 'Fashion Consultant',
    text: 'AURA completely captures the spirit of modern luxury. The Tailored Wool Trench is absolute perfection - the draping, weight, and warmth rival high-end heritage fashion houses. A masterclass in accessible luxury.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Creative Director',
    text: 'Impressed by the detailing on the Linen Blazer. Fits like a custom bespoke piece, and the breathable half-lining is perfect for warm studio days. Shipping was prompt, and the premium packaging felt like a true event.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sophia Lorenze',
    role: 'Style Editor',
    text: 'The Leather Shoulder Bag has become my daily driver. Premium Italian calfskin that actually gets softer with use, and the gold hardware is extremely classy. A staple accessory that elevates any outfit.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  }
];

export const instagramFeed = [
  { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=350&auto=format&fit=crop', likes: '1.2k' },
  { id: 2, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=350&auto=format&fit=crop', likes: '3.4k' },
  { id: 3, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=350&auto=format&fit=crop', likes: '942' },
  { id: 4, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=350&auto=format&fit=crop', likes: '2.1k' },
  { id: 5, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=350&auto=format&fit=crop', likes: '1.8k' },
  { id: 6, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=350&auto=format&fit=crop', likes: '4.5k' }
];

export const partners = [
  { name: 'Vogue', logo: 'VOGUE' },
  { name: 'GQ', logo: 'GQ' },
  { name: 'Harper\'s Bazaar', logo: 'BAZAAR' },
  { name: 'Elle', logo: 'ELLE' },
  { name: 'WWD', logo: 'WWD' }
];
