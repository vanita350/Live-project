import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider'); 
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('aura_cart');
    return localCart ? JSON.parse(localCart) : [];
  }); 

  const [wishlist, setWishlist] = useState(() => {
    const localWishlist = localStorage.getItem('aura_wishlist');
    return localWishlist ? JSON.parse(localWishlist) : [];
  });

  const [orders, setOrders] = useState(() => {
    const localOrders = localStorage.getItem('aura_orders');
    return localOrders ? JSON.parse(localOrders) : [];
  });

  const [reviews, setReviews] = useState(() => {
    const localReviews = localStorage.getItem('aura_reviews');
    return localReviews ? JSON.parse(localReviews) : [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [toasts, setToasts] = useState([]);

  // Filter & Sort State
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    sortBy: 'newest' // 'newest', 'price-low', 'price-high', 'rating', 'popular'
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('aura_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('aura_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Toast Helper
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, size = 'M', color = null, quantity = 1) => {
    const chosenColor = color || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const chosenSize = size || 'OS';
    setCartOpen(true);
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === chosenSize &&
          item.color === chosenColor
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        addToast(`Updated quantity of "${product.name}" in cart!`, 'info');
        return newCart;
      } else {
        addToast(`Added "${product.name}" to cart!`, 'success');
        return [...prevCart, { product, size: chosenSize, color: chosenColor, quantity }];
      }
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCart((prevCart) => {
      const item = prevCart.find(
        (i) => i.product.id === productId && i.size === size && i.color === color
      );
      if (item) {
        addToast(`Removed "${item.product.name}" from cart`, 'info');
      }
      return prevCart.filter(
        (i) => !(i.product.id === productId && i.size === size && i.color === color)
      );
    });
  };

  const updateCartQuantity = (productId, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => { 
    setCart([]);
    addToast('Cart cleared', 'info');
  };

  const addOrder = (cartItems) => {
    if (!cartItems || cartItems.length === 0) return;
    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const order = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      items: cartItems,
      subtotal,
      total: subtotal,
    };
    setOrders((prev) => [order, ...prev]);
    addToast('Order added to history', 'success');
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isAlreadyWishlisted = prevWishlist.some((item) => item.id === product.id);
      if (isAlreadyWishlisted) {
        addToast(`Removed "${product.name}" from wishlist`, 'info');
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        addToast(`Added "${product.name}" to wishlist!`, 'success');
        return [...prevWishlist, product];
      }
    });
  };

  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Filter operations
  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 1000,
      minRating: 0,
      sortBy: 'newest'
    });
  };

  // Review operations
  const addReview = (productId, review) => {
    const newReview = {
      id: Date.now(),
      productId,
      author: review.author || 'Anonymous',
      rating: review.rating || 5,
      title: review.title || '',
      comment: review.comment || '',
      createdAt: new Date().toISOString(),
      verified: review.verified || false,
      helpful: review.helpful || 0
    };
    setReviews((prev) => [newReview, ...prev]);
    addToast('Review submitted successfully!', 'success');
    return newReview;
  };

  const getProductReviews = (productId) => {
    return reviews.filter((r) => r.productId === productId);
  };

  const getAverageRating = (productId) => {
    const productReviews = getProductReviews(productId);
    if (productReviews.length === 0) return 0;
    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / productReviews.length).toFixed(1);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        cartOpen,
        setCartOpen,
        checkoutOpen,
        setCheckoutOpen,
        searchOpen,
        setSearchOpen,
        searchModalOpen,
        setSearchModalOpen,
        searchQuery,
        setSearchQuery,
        quickViewProduct,
        setQuickViewProduct,
        toasts,
        addToast,
        removeToast,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addOrder,
        toggleWishlist,
        activeCategory,
        setActiveCategory,
        cartSubtotal,
        cartCount,
        orders,
        reviews,
        addReview,
        getProductReviews,
        getAverageRating,
        filters,
        updateFilters,
        resetFilters
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
