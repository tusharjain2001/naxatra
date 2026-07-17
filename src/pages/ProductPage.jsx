import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import Footer from '../components/sections/Footer';
import ProductHeroSection from '../components/sections/product/ProductHeroSection';
import ProductListingSection from '../components/sections/product/ProductListingSection';
import ProductCTASection from '../components/sections/product/ProductCTASection';
import ProductFeaturesSection from '../components/sections/product/ProductFeaturesSection';
import usePageMeta from '../hooks/usePageMeta';

export default function ProductPage() {
  usePageMeta(
    'Power That Moves You',
    'Explore the Antarix range of BLDC motors and controllers from Naxatra Labs — lighter, stronger, smarter motors for the future of electric mobility.'
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <ProductHeroSection />
        <InViewReveal delay={40}>
          <ProductListingSection />
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
    </div>
  );
}
