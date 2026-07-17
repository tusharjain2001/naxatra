import Navbar from '../components/sections/Navbar';
import HeroSection from '../components/sections/HeroSection';
import InViewReveal from '../components/common/InViewReveal';
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
import usePageMeta from '../hooks/usePageMeta';

export default function HomePage() {
  usePageMeta(
    null,
    'The future of electric mobility starts here. Naxatra Labs builds next-generation BLDC motors and controllers designed for power, efficiency, and longevity.'
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <InViewReveal delay={40}>
        <AboutSection />
      </InViewReveal>
      <InViewReveal delay={70}>
        <FeaturesSection />
      </InViewReveal>
      <InViewReveal delay={90}>
        <ProductSection />
      </InViewReveal>
      <InViewReveal delay={110}>
        <StatsSection />
      </InViewReveal>
      <InViewReveal delay={130}>
        <ApplicationsSection />
      </InViewReveal>
      <InViewReveal delay={150}>
        <WhyUsSection />
      </InViewReveal>
      <InViewReveal delay={170}>
        <InnovationSection />
      </InViewReveal>
      <InViewReveal delay={190}>
        <CTASection />
      </InViewReveal>
      <InViewReveal delay={210}>
        <JourneySection />
      </InViewReveal>
      <InViewReveal delay={230}>
        <BlogsSection />
      </InViewReveal>
      <InViewReveal delay={120}>
        <Footer />
      </InViewReveal>
    </div>
  );
}
