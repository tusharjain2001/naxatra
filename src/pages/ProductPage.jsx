import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
import ProductHeroSection from '../components/sections/product/ProductHeroSection';
import ProductListingSection from '../components/sections/product/ProductListingSection';
import ProductCTASection from '../components/sections/product/ProductCTASection';
import ProductFeaturesSection from '../components/sections/product/ProductFeaturesSection';

export default function ProductPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <ProductHeroSection />
        <ProductListingSection />
        <ProductCTASection />
        <ProductFeaturesSection />
        <Footer />
      </div>
    </div>
  );
}
