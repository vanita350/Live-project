import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Check, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout = ({ onBack, onComplete }) => {
  const { cart, cartSubtotal, clearCart, addOrder } = useShop();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    paymentMethod: 'card' // 'card', 'paypal', 'applepay'
  });

  const [orderPlaced, setOrderPlaced] = useState(null);

  const shippingCost = cartSubtotal > 100 ? 0 : 9.99;
  const tax = (cartSubtotal * 0.1).toFixed(2);
  const total = (parseFloat(cartSubtotal) + shippingCost + parseFloat(tax)).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    // Validate current step
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.city || !formData.state || !formData.zipCode) {
        alert('Please fill in all required fields');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePlaceOrder = () => {
    // Create order
    const order = {
      items: cart,
      customer: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country
      },
      paymentMethod: formData.paymentMethod,
      subtotal: cartSubtotal,
      shipping: shippingCost,
      tax: tax,
      total: total,
      createdAt: new Date().toISOString()
    };

    addOrder(cart);
    setOrderPlaced(order);
    setStep(3);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-charcoal-950 hover:text-gold-primary font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </button>
        <h1 className="text-2xl font-serif text-charcoal-950">Checkout</h1>
        <div className="w-24" />
      </div>

      {/* Progress Indicator */}
      <div className="flex gap-4 mb-10">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                step >= num
                  ? 'bg-gold-primary text-charcoal-950'
                  : 'bg-charcoal-100 text-charcoal-600'
              }`}
            >
              {step > num ? <Check className="w-4 h-4" /> : num}
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider">
              {num === 1 ? 'Shipping' : num === 2 ? 'Payment' : 'Confirmation'}
            </span>
            {num < 3 && <div className="w-6 h-[2px] bg-charcoal-100 ml-2" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-charcoal-950 mb-6">Shipping Information</h2>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="col-span-1 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="col-span-1 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="col-span-2 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="col-span-2 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
              </div>

              <input
                type="text"
                name="address"
                placeholder="Street Address *"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="col-span-1 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province *"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="col-span-1 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP/Postal Code *"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="col-span-1 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="col-span-1 px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-gold-primary"
                >
                  <option>USA</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                onClick={handleNextStep}
                className="w-full px-6 py-3 bg-charcoal-950 text-beige-50 hover:bg-gold-primary hover:text-charcoal-950 font-semibold rounded transition mt-6"
              >
                Continue to Payment
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-charcoal-950 mb-6">Payment Method</h2>

              <div className="space-y-3">
                {['card', 'paypal', 'applepay'].map((method) => (
                  <label key={method} className="flex items-center p-4 border-2 border-charcoal-200 rounded cursor-pointer hover:border-gold-primary transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="ml-4 font-semibold text-charcoal-950 capitalize">
                      {method === 'applepay' ? 'Apple Pay' : method === 'paypal' ? 'PayPal' : 'Credit Card'}
                    </span>
                  </label>
                ))}
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="mt-6 p-4 bg-beige-100 rounded">
                  <p className="text-sm text-charcoal-600 mb-4">Credit card information (demo)</p>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border border-charcoal-200 rounded focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="px-4 py-3 border border-charcoal-200 rounded focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3 border border-charcoal-950 text-charcoal-950 hover:bg-charcoal-50 font-semibold rounded transition"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="flex-1 px-6 py-3 bg-gold-primary text-charcoal-950 hover:bg-charcoal-950 hover:text-beige-50 font-semibold rounded transition flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" /> Place Order
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-charcoal-950 mb-3">Order Confirmed!</h2>
              <p className="text-charcoal-600 mb-2">Order #: {orderPlaced?.id || 'ORD-' + Date.now()}</p>
              <p className="text-charcoal-600 mb-6">A confirmation email has been sent to {formData.email}</p>
              
              <button
                onClick={() => {
                  clearCart();
                  onComplete?.();
                }}
                className="px-6 py-3 bg-charcoal-950 text-beige-50 hover:bg-gold-primary hover:text-charcoal-950 font-semibold rounded transition"
              >
                Continue Shopping
              </button>
            </motion.div>
          )}
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-6 bg-beige-100 p-6 rounded border border-charcoal-100">
            <h3 className="text-lg font-semibold text-charcoal-950 mb-4">Order Summary</h3>

            <div className="space-y-3 mb-6 pb-6 border-b border-charcoal-200">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex justify-between text-sm">
                  <span className="text-charcoal-600">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-semibold text-charcoal-950">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6 pb-6 border-b border-charcoal-200 text-sm">
              <div className="flex justify-between">
                <span className="text-charcoal-600">Subtotal</span>
                <span className="text-charcoal-950">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-600">Shipping</span>
                <span className="text-charcoal-950">
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-600">Tax</span>
                <span className="text-charcoal-950">${tax}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-charcoal-950">Total</span>
              <span className="text-2xl font-bold text-gold-primary">${total}</span>
            </div>

            <p className="text-xs text-charcoal-500 mt-4 text-center">
              {shippingCost === 0 ? '✓ FREE SHIPPING' : 'Free shipping on orders over $100'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
