import Navbar from '../components/sections/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ProductSection from '../components/sections/ProductSection';
import StatsSection from '../components/sections/StatsSection';
import ApplicationsSection from '../components/sections/ApplicationsSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import InnovationSection from '../components/sections/InnovationSection';
import CTASection from '../components/sections/CTASection';
import JourneySection from '../components/sections/JourneySection';
import BlogsSection from '../components/sections/BlogsSection';
import Footer from '../components/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProductSection />
      <StatsSection />
      <ApplicationsSection />
      <WhyUsSection />
      <InnovationSection />
      <CTASection />
      <JourneySection />
      <BlogsSection />
      <Footer />
    </div>
  );
}
