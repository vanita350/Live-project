import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, User, Menu, X, ArrowRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

const Header = () => {
  const {
    cartCount,
    wishlist,
    toggleWishlist,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    addToCart,
    setQuickViewProduct,
    setActiveCategory,
    orders
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);

  // Monitor scroll for header background opacity change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products based on search query
  const filteredProducts = searchQuery.trim() === ''
    ? []
    : products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#shop-section', category: 'all' },
    { name: 'Men', href: '#shop-section', category: 'men' },
    { name: 'Women', href: '#shop-section', category: 'women' },
    { name: 'Kids', href: '#shop-section', category: 'kids' },
    { name: 'New Arrivals', href: '#shop-section', category: 'all' },
    { name: 'Sale', href: '#flash-sale-section' },
    { name: 'Contact', href: '#footer-section' }
  ];

  const handleNavClick = (category) => {
    if (category) {
      setActiveCategory(category);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b border-transparent ${isScrolled
            ? 'bg-beige-50/95 backdrop-blur-md py-4 shadow-sm border-charcoal-100'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-charcoal-950 hover:opacity-75 transition-opacity cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Elegant Serif Logo */}
          <a href="#" className="font-serif text-2xl md:text-3xl font-normal tracking-[0.25em] text-charcoal-950 hover:opacity-80 transition-opacity">
            AURA
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.category)}
              className="text-xs uppercase tracking-[0.2em] text-charcoal-950 hover:text-gold-primary transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-charcoal-950 hover:text-gold-primary transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
 
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="text-charcoal-950 hover:text-gold-primary transition-colors cursor-pointer flex items-center"
                aria-label="Profile"
              >
                <User className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {profileDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setProfileDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-48 bg-beige-50 border border-charcoal-100 shadow-xl rounded py-2 z-20"
                    >
                      <div className="px-4 py-2 border-b border-charcoal-100 mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Welcome Back</p>
                        <p className="text-sm font-medium text-charcoal-950 truncate">Victoria Vance</p>
                      </div>
                      <a href="#" className="block px-4 py-2 text-sm text-charcoal-980 hover:bg-beige-100 hover:text-gold-primary transition-colors">My Profile</a>
                      <button
                        type="button"
                        // onClick={() => {
                        //   setProfileDropdownOpen(false);
                        //   setOrderHistoryOpen(true);
                        // }}
                        className="w-full text-left px-4 py-2 text-sm text-charcoal-980 hover:bg-beige-100 hover:text-gold-primary transition-colors"
                      >
                        Order History
                      </button>
                      <a href="#" className="block px-4 py-2 text-sm text-charcoal-980 hover:bg-beige-100 hover:text-gold-primary transition-colors">Settings</a>
                      <div className="border-t border-charcoal-100 mt-1 pt-1">
                        <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-beige-100 transition-colors">Sign Out</button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Wishlist Icon with count */}
            <div className="relative">
              <button
                onClick={() => setWishlistOpen(true)}
                className="text-charcoal-950 hover:text-gold-primary transition-colors cursor-pointer flex items-center relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold-primary text-charcoal-950 font-semibold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </div>

            {/* Shopping Cart Icon with count */}
            <button
              onClick={() => setCartOpen(true)}
              className="text-charcoal-950 hover:text-gold-primary transition-colors cursor-pointer flex items-center relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-charcoal-950 text-beige-50 font-semibold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Slide-out Wishlist Sidebar */}
      <AnimatePresence>
        {wishlistOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setWishlistOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-beige-50 shadow-2xl z-50 p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-charcoal-100 pb-4 mb-6">
                <h3 className="font-serif text-lg uppercase tracking-wider text-charcoal-950">Your Wishlist ({wishlist.length})</h3>
                <button
                  onClick={() => setWishlistOpen(false)}
                  className="text-charcoal-950 hover:opacity-70 p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {wishlist.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <Heart className="w-12 h-12 text-gray-300 stroke-[1px]" />
                  <p className="text-gray-500 font-sans tracking-wide text-sm">Your wishlist is currently empty.</p>
                  <a
                    href="#shop-section"
                    onClick={() => setWishlistOpen(false)}
                    className="mt-2 text-xs uppercase tracking-widest font-semibold border-b border-charcoal-950 pb-1 hover:text-gold-primary hover:border-gold-primary transition-colors"
                  >
                    Explore Products
                  </a>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4">
                  {wishlist.map((product) => (
                    <div key={product.id} className="flex gap-4 border-b border-charcoal-50 pb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-24 object-cover object-center bg-gray-100"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-sm text-charcoal-950 line-clamp-1">{product.name}</h4>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{product.category}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-semibold text-charcoal-950">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-3 mt-2">
                          <button
                            onClick={() => {
                              addToCart(product, product.sizes[0]);
                              toggleWishlist(product);
                            }}
                            className="bg-charcoal-950 text-beige-50 text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 hover:bg-gold-primary hover:text-charcoal-950 transition-colors cursor-pointer"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => toggleWishlist(product)}
                            className="text-gray-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {orderHistoryOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => {
                setOrderHistoryOpen(false);
                setProfileDropdownOpen(false);
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-beige-50 shadow-2xl z-20 p-6 md:p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-charcoal-100 pb-4 mb-4">
                <h3 className="font-serif text-lg uppercase tracking-wider text-charcoal-950">Order History</h3>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setOrderHistoryOpen(false);
                    setProfileDropdownOpen(false);
                  }}
                  className="inline-flex items-center gap-2 text-charcoal-950 hover:text-gold-primary hover:opacity-80 transition-colors px-3 py-2 border border-charcoal-200 rounded-full"
                  aria-label="Close order history"
                >
                  <X className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.2em]">Close</span>
                </button>
              </div>

              {orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 mt-10">
                  <p className="text-gray-500 font-sans tracking-wide text-sm">No orders yet. Completed orders will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="rounded-3xl border border-charcoal-100 bg-beige-50 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Order #{order.id}</p>
                          <p className="text-xs text-gray-500 mt-1">{new Date(order.createdAt).toLocaleString()}</p>
                        </div>
                        <p className="text-sm font-semibold text-charcoal-950">${order.total}</p>
                      </div>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={`${order.id}-${item.product.id}-${item.size}-${item.color}`} className="flex items-center gap-3">
                            <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-3xl object-cover bg-gray-100" />
                            <div className="flex-1">
                              <p className="font-serif text-sm text-charcoal-950">{item.product.name}</p>
                              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-1">{item.product.category}</p>
                              <p className="text-[10px] text-gray-500 mt-1">Size: {item.size} • Color: {item.color}</p>
                            </div>
                            <p className="text-sm font-semibold text-charcoal-950">x{item.quantity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-full max-w-xs bg-beige-50 shadow-2xl z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-charcoal-100 pb-4 mb-6">
                <a href="#" className="font-serif text-xl font-normal tracking-[0.2em] text-charcoal-950">AURA</a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-charcoal-950 hover:opacity-75 p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-6 font-sans">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest text-charcoal-950 hover:text-gold-primary transition-colors font-medium border-b border-charcoal-50 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="border-t border-charcoal-100 pt-6 mt-auto">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Customer Support</p>
                <p className="text-sm text-charcoal-950 font-medium mb-1">+1 (800) 123-AURA</p>
                <p className="text-sm text-gray-500">concierge@aurafashion.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full-screen Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-beige-50/98 backdrop-blur-md z-50 p-6 md:p-12 flex flex-col overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto w-full flex flex-col flex-1">

              {/* Close Button */}
              <div className="flex justify-end mb-8 md:mb-12">
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="text-charcoal-950 hover:opacity-70 p-2 cursor-pointer flex items-center gap-2 text-xs uppercase tracking-widest font-semibold"
                >
                   <X className="w-5 h-5" />
                </button>
              </div>

              {/* Input Field */}
              <div className="relative border-b border-charcoal-800 pb-3 flex items-center gap-4">
                <Search className="w-6 h-6 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="SEARCH THE COLLECTION..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-charcoal-950 text-xl md:text-3xl font-serif tracking-widest focus:outline-none placeholder-gray-300 uppercase"
                  autoFocus
                />
              </div>

              {/* Suggestions / Results */}
              <div className="mt-8 flex-1">
                {searchQuery.trim() === '' ? (
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-4">Popular Searches</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Trench Coat', 'Linen Blazer', 'Silk Dress', 'Suede Jacket', 'Gold Chain'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-950 text-xs uppercase tracking-widest px-4 py-2 border border-charcoal-100 transition-colors font-medium cursor-pointer"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-6">
                      Results for "{searchQuery}" ({filteredProducts.length})
                    </h4>

                    {filteredProducts.length === 0 ? (
                      <p className="text-gray-500 text-sm font-sans tracking-wide">No items found matching your search. Try adjusting spelling or category.</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                          <div
                            key={product.id}
                            className="flex gap-4 group cursor-pointer border-b border-charcoal-50 pb-4"
                            onClick={() => {
                              setQuickViewProduct(product);
                              setSearchOpen(false);
                              setSearchQuery('');
                            }}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-20 object-cover object-center bg-gray-100 group-hover:opacity-90 transition-opacity"
                            />
                            <div className="flex flex-col justify-center">
                              <h5 className="font-serif text-sm text-charcoal-950 group-hover:text-gold-primary transition-colors">{product.name}</h5>
                              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{product.category}</p>
                              <span className="text-sm font-semibold text-charcoal-950 mt-1">${product.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Info Banner */}
              <div className="border-t border-charcoal-100 pt-6 mt-auto text-center flex items-center justify-between text-xs text-gray-500 tracking-wider">
                <p>COMPLIMENTARY RETURNS ON ALL DOMESTIC ORDERS</p>
                <div className="flex items-center gap-1 font-semibold text-charcoal-950 hover:text-gold-primary transition-colors cursor-pointer" onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
                  View All Shop <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
