import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, Info, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ToastContainer = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto bg-charcoal-950 text-beige-50 shadow-2xl border border-charcoal-800 p-4 rounded flex items-start justify-between gap-3 overflow-hidden backdrop-blur-md bg-opacity-95"
          >
            <div className="flex items-start gap-3">
              {toast.type === 'success' && (
                <CheckCircle className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
              )}
              {toast.type === 'info' && (
                <Info className="w-5 h-5 text-beige-300 shrink-0 mt-0.5" />
              )}
              {toast.type === 'wishlist' && (
                <Heart className="w-5 h-5 text-red-500 fill-red-500 shrink-0 mt-0.5" />
              )}
              <p className="text-sm font-sans tracking-wide leading-relaxed">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-beige-300 hover:text-white transition-colors p-0.5 rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
