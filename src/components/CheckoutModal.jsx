import React from 'react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import Checkout from './Checkout';

const CheckoutModal = () => {
  const { checkoutOpen, setCheckoutOpen, setCartOpen } = useShop();

  return (
    <AnimatePresence>
      {checkoutOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="min-h-screen bg-beige-50 py-8"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <Checkout
                onBack={() => {
                  setCheckoutOpen(false);
                  setCartOpen(true);
                }}
                onComplete={() => {
                  setCheckoutOpen(false);
                  setCartOpen(false);
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
