import React from 'react';
import { ShopProvider } from './context/ShopContext';
import PromoBar from './components/PromoBar';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandPartners from './components/BrandPartners';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import Trending from './components/Trending';
import FlashSale from './components/FlashSale';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerReviews from './components/CustomerReviews';
import InstagramGallery from './components/InstagramGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import ToastContainer from './components/Toast';
import SearchModal from './components/SearchModal';
import CheckoutModal from './components/CheckoutModal';
import { useShop } from './context/ShopContext';

const AppSearchWrapper = () => {
  const { searchModalOpen, setSearchModalOpen } = useShop();
  return <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />;
};

const AppContent = () => {
  return (
    <div className="relative min-h-screen bg-beige-50 flex flex-col font-sans antialiased">
      {/* Promo banner at the very top */}
      {/* <PromoBar /> */}
      
      {/* Sticky header floating over sections */}
      <Header />
      
      {/* Content wrapper */} 
      <main className="flex-1">
        <Hero />
        <BrandPartners />
        <Categories />
        <ProductSection />
        <Trending />
        <FlashSale />
        <WhyChooseUs />
        <CustomerReviews />
        <InstagramGallery />
        <Newsletter />
      </main>
      
      {/* Footer at the bottom */}
      <Footer />

      {/* Global Overlays & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <ToastContainer />
      <AppSearchWrapper />
      <CheckoutModal />
    </div>
  );
};

function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;
