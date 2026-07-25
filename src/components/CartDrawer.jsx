import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
// import { X, Plus, Minus, Trash2, ShieldCheck, Truck } from 'lucide-react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Truck,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const {
    cart,
    cartOpen,
    setCartOpen,
    updateCartQuantity,
    removeFromCart,
    cartSubtotal,
    clearCart,
    addToast,
    addOrder,
    cartCount
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' or 'processing' or 'success'

  const FREE_SHIPPING_THRESHOLD = 200;
  const shippingRemaining = FREE_SHIPPING_THRESHOLD - cartSubtotal;
  const shippingProgress = Math.min((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  const finalSubtotal = discountApplied ? cartSubtotal * 0.8 : cartSubtotal;
  const estimatedShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : 15;
  const totalCost = finalSubtotal + estimatedShipping;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'AURA20') {
      setDiscountApplied(true);
      addToast('Promo code "AURA20" applied! 20% discount activated.', 'success');
    } else {
      addToast('Invalid promo code. Try "AURA20".', 'info');
    }
  };

  const handleCheckout = () => {
    setCheckoutStep('processing');
    setTimeout(() => {
      addOrder(cart);
      setCheckoutStep('success');
      addToast('Mock order placed successfully!', 'success');
      clearCart();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (checkoutStep !== 'processing') {
                setCartOpen(false);
                setCheckoutStep('cart');
              }
            }}
            className="fixed inset-0 bg-black z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-beige-50 shadow-2xl z-50 p-6 md:p-8 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-charcoal-100 pb-4 mb-4">
              <h3 className="font-serif text-lg uppercase tracking-wider text-charcoal-950">Shopping Bag{cartCount > 0 ? ` (${cartCount})` : ''}</h3>
              <button
                disabled={checkoutStep === 'processing'}
                onClick={() => {
                  setCartOpen(false);
                  setCheckoutStep('cart');
                }}
                className="text-charcoal-950 hover:opacity-70 p-1 cursor-pointer disabled:opacity-50"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {checkoutStep === 'processing' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-12 h-12 border-4 border-gold-primary border-t-transparent rounded-full animate-spin"></div>
                <h4 className="font-serif text-lg tracking-wide text-charcoal-950 mt-2">Authenticating Transaction</h4>
                <p className="text-gray-500 text-sm max-w-xs font-sans tracking-wide">Securing connection with bank server. Please do not close or reload the browser.</p>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center text-gold-primary mb-2">
                  <ShieldCheck className="w-10 h-10 stroke-[1.5px]" />
                </div>
                <h4 className="font-serif text-xl tracking-wider text-charcoal-950">Order Complete</h4>
                <p className="text-gray-500 text-sm max-w-xs font-sans leading-relaxed">
                  Your luxury order has been registered. An invoice and tracking number have been sent to your email.
                </p>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    setCheckoutStep('cart');
                    setDiscountApplied(false);
                  }}
                  className="mt-4 bg-charcoal-950 text-beige-50 text-xs uppercase tracking-widest font-semibold px-8 py-3 hover:bg-gold-primary hover:text-charcoal-950 transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            )}

            {checkoutStep === 'cart' && (
              <>
                {/* Free Shipping Alert */}
                {cart.length > 0 && (
                  <div className="bg-charcoal-50 p-4 border border-charcoal-100 rounded mb-4 font-sans">
                    <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-charcoal-800 mb-2">
                      <Truck className="w-4 h-4 text-gold-primary shrink-0" />
                      {shippingRemaining > 0 ? (
                        <span>YOU ARE <span className="font-bold">${shippingRemaining}</span> AWAY FROM COMPLIMENTARY SHIPPING</span>
                      ) : (
                        <span className="font-bold text-gold-dark">CONGRATULATIONS! YOU QUALIFY FOR FREE SHIPPING</span>
                      )}
                    </div>
                    <div className="w-full bg-charcoal-200 h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-gold-primary h-full transition-all duration-500"
                        style={{ width: `${shippingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Cart Items List */}
                {cart.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                    <ShoppingBag className="w-12 h-12 text-gray-300 stroke-[1px]" />
                    <p className="text-gray-500 font-sans tracking-wide text-sm">Your shopping bag is currently empty.</p>
                    <a
                      href="#shop-section"
                      onClick={() => setCartOpen(false)}
                      className="mt-2 text-xs uppercase tracking-widest font-semibold border-b border-charcoal-950 pb-1 hover:text-gold-primary hover:border-gold-primary transition-colors"
                    >
                      Browse Trends
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4 pr-1">
                      {cart.map((item) => (
                        <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 rounded-3xl border border-charcoal-100 bg-beige-50 p-4 shadow-sm">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-24 h-24 rounded-3xl object-cover object-center bg-gray-100 shrink-0"
                          />

                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-3">
                                <div>
                                  <h4 className="font-serif text-sm text-charcoal-950 line-clamp-2">{item.product.name}</h4>
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-2">{item.product.category}</p>
                                  <div className="flex items-center gap-2 mt-3">
                                    <span className="text-sm font-semibold text-charcoal-950">${item.product.price}</span>
                                    {item.product.originalPrice && (
                                      <span className="text-[10px] text-gray-400 line-through">${item.product.originalPrice}</span>
                                    )}
                                  </div>
                                </div>
                                <button
                                  onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-xs text-gray-500 uppercase tracking-widest mt-3">Size: {item.size} • Color: {item.color}</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-2 rounded-full border border-charcoal-200 bg-white px-2 py-1">
                                <button
                                  onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                                  className="p-1 hover:bg-beige-100 transition-colors text-charcoal-950"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-medium text-charcoal-950">{item.quantity}</span>
                                <button
                                  onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                                  className="p-1 hover:bg-beige-100 transition-colors text-charcoal-950"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <span className="text-sm font-semibold text-charcoal-950">${item.product.price * item.quantity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Summary Footer */}
                    <div className="border-t border-charcoal-100 pt-4 mt-4 font-sans">

                      {/* Promo Code Form */}
                      <form onSubmit={handleApplyPromo} className="flex gap-2 mb-4">
                        <input
                          type="text"
                          placeholder="PROMO CODE (AURA20)"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-1 bg-white border border-charcoal-200 px-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-gold-primary text-charcoal-950"
                        />
                        <button
                          type="submit"
                          className="bg-charcoal-950 text-beige-50 hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-xs uppercase tracking-widest font-semibold px-4 cursor-pointer"
                        >
                          Apply
                        </button>
                      </form>

                      {/* Calculations */}
                      <div className="flex flex-col gap-2.5 text-sm tracking-wide mb-6">
                        <div className="flex justify-between text-gray-500">
                          <span>Subtotal</span>
                          <span>${cartSubtotal}</span>
                        </div>
                        {discountApplied && (
                          <div className="flex justify-between text-green-700">
                            <span>Promo Discount (20%)</span>
                            <span>-${Math.round(cartSubtotal * 0.2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-gray-500">
                          <span>Delivery</span>
                          <span>{estimatedShipping === 0 ? 'Complimentary' : `$${estimatedShipping}`}</span>
                        </div>
                        <div className="flex justify-between text-base text-charcoal-950 font-bold border-t border-charcoal-100 pt-3.5 mt-1">
                          <span>Total</span>
                          <span>${totalCost}</span>
                        </div>
                      </div>

                      {/* Checkout Button */}
                      <button
                        onClick={handleCheckout}
                        className="w-full bg-charcoal-950 text-beige-50 hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-xs uppercase tracking-[0.2em] font-semibold py-4 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        Secure Checkout
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
