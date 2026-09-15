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
import SavedItems from './components/SavedItems';
import ProductDetailPage from './components/ProductDetailPage';
import { useShop } from './context/ShopContext';

const AppSearchWrapper = () => {
  const { searchModalOpen, setSearchModalOpen } = useShop();
  return <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />;
};

const AppContent = () => {
  const { selectedProduct } = useShop();

  return (
    <div className="relative min-h-screen bg-beige-50 flex flex-col font-sans antialiased">
      <Header />

      {selectedProduct ? (
        <main className="flex-1">
          <ProductDetailPage />
        </main>
      ) : (
        <main className="flex-1">
          <Hero />
          <BrandPartners />
          <Categories />
          <ProductSection />
          <Trending />
          <SavedItems />
          <FlashSale />
          <WhyChooseUs />
          <CustomerReviews />
          <InstagramGallery />
          <Newsletter />
        </main>
      )}

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
