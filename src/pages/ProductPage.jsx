import { useState } from 'react';
import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import Footer from '../components/sections/Footer';
import ProductHeroSection from '../components/sections/product/ProductHeroSection';
import ProductListingSection from '../components/sections/product/ProductListingSection';
import ProductCTASection from '../components/sections/product/ProductCTASection';
import ProductFeaturesSection from '../components/sections/product/ProductFeaturesSection';
import DownloadBrochureModal from '../components/sections/product/DownloadBrochureModal';

export default function ProductPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <ProductHeroSection onOpenBrochure={() => setModalOpen(true)} />
        <InViewReveal delay={40}>
          <ProductListingSection onOpenBrochure={() => setModalOpen(true)} />
        </InViewReveal>
        <InViewReveal delay={70}>
          <ProductCTASection />
        </InViewReveal>
        <InViewReveal delay={100}>
          <ProductFeaturesSection />
        </InViewReveal>
        <InViewReveal delay={130}>
          <Footer />
        </InViewReveal>
      </div>
      <DownloadBrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
