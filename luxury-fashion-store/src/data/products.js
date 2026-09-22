const FALLBACK_FASHION_IMAGE = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop';

export const categories = [
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    itemCount: '124 Products'
  },
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=900&auto=format&fit=crop',
    itemCount: '98 Products'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=900&auto=format&fit=crop',
    itemCount: '45 Products'
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkKHYQ8tG2Viu2Xc_GI-otop6WrE23hVev5LBYzg0kg&s=10',
    itemCount: '62 Products'
  }
];

export { FALLBACK_FASHION_IMAGE };

export const products = [
  {
    id: 1,
    name: 'Tailored Wool Trench Coat',
    category: 'women',
    subcategory: 'coats',
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviews: 124,
    discount: 30,
    badge: 'Trending',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVK5vOOgNdb2o-oyrZ7PM2WvNrR9cdahAMMXAJPnkA_A&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsE7nso2ZrTrjW26jAKCPoDShtNlYXwQTp_YMrD2WgXA&s',
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
    subcategory: 'suits',
    price: 189,
    originalPrice: 249,
    rating: 4.6,
    reviews: 84,
    discount: 24,
    badge: 'Best Seller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkcU9_DRbLbxE01rbPIEitjZ9PVBE2zxEoFoEnzVPLw&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFn9aHeaKqc05cibxmuSsx6gPkmnz_Mxer19bIfxTcQ&s=10',
    description: 'A breathable, half-lined linen blazer tailored for a modern, relaxed fit. Features notch lapels, patch pockets, and premium horn buttons.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sand Beige', hex: '#E5DDCB' },
      { name: 'Navy Blue', hex: '#1B2C3F' }
    ],
    features: ['100% Organic Linen', 'Breathable half-lining', 'Double back vents', 'Made in Portugal']
  },
  {
    id: 12,
    name: 'Monarch Cotton Shirt',
    category: 'men',
    subcategory: 'shirts',
    price: 110,
    originalPrice: 140,
    rating: 4.7,
    reviews: 68,
    discount: 21,
    badge: 'Popular',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40joW8Ut6rA4i8TIls1LYH4RSIy__dmDybcFZccXt7g&s',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJIOx-F93foQ8hjOI5_UdBDU4kNMrIrJ83jIxLMYx0A&s=10',
    description: 'Tailored cotton shirt with refined collar structure and a crisp finish for elevated everyday styling.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Soft White', hex: '#F5F1EA' },
      { name: 'Midnight Blue', hex: '#1A2433' }
    ],
    features: ['Premium cotton twill', 'Structured collar', 'Tailored silhouette', 'Italian-inspired finish']
  },
  {
    id: 13,
    name: 'Heritage Pleat Trouser',
    category: 'men',
    subcategory: 'trousers',
    price: 156,
    originalPrice: 195,
    rating: 4.8,
    reviews: 76,
    discount: 20,
    badge: 'Best Seller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwIeOpsMoB8PrJ_1lh77f4fJjl6z18YpXpsksMBM4uA&s',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRer0TMx3ln9hGlaFa6IOdzIScnPrWdOyM7uU4pMzIHXA&s',
    description: 'High-waist pleated trousers cut for a sharp drape and premium movement with a clean modern finish.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stone Grey', hex: '#B8B2AA' },
      { name: 'Espresso Brown', hex: '#5D473D' }
    ],
    features: ['Stretch wool blend', 'Soft drape finish', 'Structured waistband', 'Tailored pleat']
  },
  {
    id: 3,
    name: 'Minimalist Leather Shoulder Bag',
    category: 'accessories',
    subcategory: 'bags',
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
    id: 15,
    name: 'Signature Leather Belt',
    category: 'accessories',
    subcategory: 'belts',
    price: 92,
    rating: 4.6,
    reviews: 49,
    badge: 'Luxury',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LCu7skpAqPjiTC9vHwOmvdMgM6FB8FwpY8li1uKhmA&s',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7P-aSL-3iC3ZmFQLx0c5NV4WrHXFWUdY4M4Yp15Z_QQ&s=10',
    description: 'A polished leather belt with a minimal buckle and a refined finish tailored for daily luxury styling.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Cognac', hex: '#7A4A38' },
      { name: 'Black', hex: '#171717' }
    ],
    features: ['Full-grain leather', 'Polished buckle finish', 'Soft edge detail', 'Crafted in small batches']
  },
  {
    id: 4,
    name: 'Kids Organic Knit Sweater',
    category: 'kids',
    subcategory: 'sweaters',
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
    id: 14,
    name: 'Little Explorer Set',
    category: 'kids',
    subcategory: 'sets',
    price: 78,
    originalPrice: 95,
    rating: 4.6,
    reviews: 35,
    discount: 18,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop',
    description: 'Coordinated play set featuring a soft knit top and relaxed bottoms in easy-care fabric for everyday comfort.',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    colors: [
      { name: 'Sky Blue', hex: '#B7D9E8' },
      { name: 'Peach Pink', hex: '#F4C8B8' }
    ],
    features: ['Stretch soft fabric', 'Easy-care finish', 'Coordinated set', 'Comfort-first fit']
  },
  {
    id: 5,
    name: 'Suede Biker Jacket',
    category: 'men',
    subcategory: 'jackets',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviews: 95,
    discount: 33,
    badge: 'Premium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpT98bCSKDA2Q0JDcTV0-D7EU_8KTDyxsc9Qf6Of1Pw&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGapO1jivrOCuvtfA8A5O7JD6Gd1CIbUBQDSafm8BZBw&s=10',
    imageByColor: {
      'Tobacco Brown': 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
      'Camel Tan': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop'
    },
    description: 'A luxurious suede biker jacket featuring asymmetric zipper, snap-down lapels, and zipped cuffs. Heavyweight premium texture with a soft touch.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Tobacco Brown', hex: '#6E4E37' },
      { name: 'Camel Tan', hex: '#C29B70' }
    ],
    features: ['100% Suede Leather', 'Premium silver zippers', 'Polyester satin lining', 'Professionally clean only']
  },
  {
    id: 17,
    name: 'Ashford Wool Jacket',
    category: 'men',
    subcategory: 'jackets',
    price: 288,
    originalPrice: 360,
    rating: 4.8,
    reviews: 61,
    discount: 20,
    badge: 'Trending',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm4leyaEKp2UFY8Xgiepopso-mRYCTX-ryYorc9xyZA&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QNSMGuKXm6LE_2IP847pFfIaOJr5yBtMk58ml4S-JQ&s',
    description: 'A refined wool-blend jacket with a clean shoulder line and soft structure, designed for elevated layering.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Camel', hex: '#C79A6B' },
      { name: 'Midnight', hex: '#1F2B3A' }
    ],
    features: ['Wool blend construction', 'Soft shoulder tailoring', 'Structured collar', 'Premium lining']
  },
  {
    id: 6,
    name: 'Silk Slip Midi Dress',
    category: 'women',
    subcategory: 'dresses',
    price: 180,
    rating: 4.7,
    reviews: 112,
    badge: 'Popular',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRqRqNutnhSyEc0BsUikCT21eyuhEDb6l93Z5y_eNxg&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhvtoFDwJ77WuQ7-R_uZeO5XrB50hmYyVCfDDf2Epkg&s=10',
    description: 'Cut on the bias for an elegant drape, this mulberry silk dress features adjustable cross-back straps, a cowl neckline, and a subtle side slit.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne Gold', hex: '#F0E6D2' },
      { name: 'Emerald Green', hex: '#0B4F35' }
    ],
    features: ['100% Mulberry Silk (19 Momme)', 'Bias cut', 'Adjustable straps', 'Cowl neckline']
  },
  {
    id: 9,
    name: 'Aster Cotton Kurta',
    category: 'women',
    subcategory: 'kurtas',
    price: 128,
    originalPrice: 160,
    rating: 4.6,
    reviews: 58,
    discount: 20,
    badge: 'New',
    image: 'https://www.fashionwallah.in/uploads/vikify-women-pure-cotton-kurta-pant-set-4b506cfe.png',
    hoverImage: 'https://www.fashionwallah.in/uploads/vikify-women-pure-cotton-kurta-pant-set-4b506cfe.png',
    description: 'A breathable cotton kurta with refined details, gentle structure, and a flattering straight silhouette for both day and evening wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory White', hex: '#F3EFE7' },
      { name: 'Terracotta', hex: '#C66B4A' }
    ],
    features: ['100% Cotton', 'Ankle-length cut', 'Soft hand-feel finish', 'Lightweight comfort']
  },
  {
    id: 10,
    name: 'Contour Legging Set',
    category: 'women',
    subcategory: 'leggings',
    price: 96,
    originalPrice: 120,
    rating: 4.7,
    reviews: 72,
    discount: 20,
    badge: 'Popular',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gyvdYrmk-Hy1uQqqnsSecLvOc7r7eQXJGrv5OpUcMQ&s=10',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gyvdYrmk-Hy1uQqqnsSecLvOc7r7eQXJGrv5OpUcMQ&s=10',
    description: 'Soft-touch leggings with sculpting fit and high-rise waistband designed for polished comfort and movement.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Moss Green', hex: '#6D8A6C' },
      { name: 'Jet Black', hex: '#1B1B1B' }
    ],
    features: ['High-rise contour fit', 'Stretch-soft fabric blend', 'All-day comfort', 'Smooth finish']
  },
  {
    id: 11,
    name: 'Seamline Wide Leg Jeans',
    category: 'women',
    subcategory: 'jeans',
    price: 142,
    originalPrice: 178,
    rating: 4.8,
    reviews: 90,
    discount: 20,
    badge: 'Best Seller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHOl0Ok67F2097lzOoXPuJlaH8hjL2fcBSOzV3joBnQ&s',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PL9XbBaTMxu4htQpgrMECwD2hzrEgwdQMFMcmiUH-g&s',
    description: 'Relaxed, wide-leg denim with premium stretch and a flattering rise, perfect for everyday sophistication.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Indigo Wash', hex: '#3A4E7A' },
      { name: 'Stone Blue', hex: '#A3B6C9' }
    ],
    features: ['Stretch premium denim', 'Wide-leg tailored fit', 'Soft brushed finish', 'Comfortably structured']
  },
  {
    id: 7,
    name: '18K Gold Plated Chain',
    category: 'accessories',
    subcategory: 'jewelry',
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
    id: 18,
    name: 'Velvet Pearl Drops',
    category: 'accessories',
    subcategory: 'jewelry',
    price: 136,
    rating: 4.7,
    reviews: 54,
    badge: 'Luxury',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbJjpmomrU7JhvVSeunykT5r5dcDNu8I9iI9kDi5dcw&s=10',
    description: 'Elegant pearl drop earrings with a polished finish that elevates both daywear and evening looks.',
    sizes: ['One Size'],
    colors: [
      { name: 'Pearl White', hex: '#F1ECE3' },
      { name: 'Rose Gold', hex: '#C98E7B' }
    ],
    features: ['Premium pearl finish', 'Lightweight feel', 'Gift-ready packaging', 'Fine-detail polish']
  },
  {
    id: 19,
    name: 'Lune Compact Wallet',
    category: 'accessories',
    subcategory: 'wallets',
    price: 88,
    originalPrice: 120,
    rating: 4.6,
    reviews: 43,
    discount: 27,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop',
    description: 'A slim, structured wallet designed for everyday organization with premium leather texture and hidden compartments.',
    sizes: ['Standard'],
    colors: [
      { name: 'Espresso', hex: '#5E443E' },
      { name: 'Ivory', hex: '#F5F1EA' }
    ],
    features: ['Italian leather', 'Compact structure', 'Multiple pockets', 'Soft-touch finish']
  },
  {
    id: 8,
    name: 'Kids Denim Sherpa Jacket',
    category: 'kids',
    subcategory: 'jackets',
    price: 65,
    originalPrice: 90,
    rating: 4.8,
    reviews: 31,
    discount: 27,
    badge: 'Warm',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop',
    description: 'Classic denim jacket lined with cozy thick faux-sherpa. Metal buttons, fleece collar, and front flap chest pockets make it both functional and stylish.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [
      { name: 'Medium Wash Denim', hex: '#4B6B94' }
    ],
    features: ['100% Cotton Denim outer', 'Recycled faux-sherpa lining', 'Snap button cuffs', 'Four pocket build']
  },
  {
    id: 16,
    name: 'Wash & Wear Denim',
    category: 'kids',
    subcategory: 'denim',
    price: 70,
    originalPrice: 88,
    rating: 4.7,
    reviews: 28,
    discount: 20,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    description: 'Classic denim essential with durable weaving, soft stretch, and a relaxed fit designed for all-day comfort.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [
      { name: 'Classic Indigo', hex: '#3B5A8B' },
      { name: 'Washed Light', hex: '#8EA2B6' }
    ],
    features: ['Soft-stretch denim', 'Durable finish', 'Easy movement fit', 'Wash-friendly fabric']
  },
  {
    id: 20,
    name: 'Cozy Knit Hoodie',
    category: 'kids',
    subcategory: 'sweaters',
    price: 62,
    originalPrice: 82,
    rating: 4.7,
    reviews: 40,
    discount: 24,
    badge: 'Warm',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop',
    description: 'A soft knit hoodie for playful days and cozy evenings, with a gentle feel and easy comfort fit.',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: [
      { name: 'Rose Dust', hex: '#DFA9A0' },
      { name: 'Cloud Grey', hex: '#CED2D7' }
    ],
    features: ['Ultra-soft knit', 'Warm fleece lining', 'Stretch comfort', 'Easy wash care']
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
