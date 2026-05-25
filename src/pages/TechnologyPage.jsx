import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import TechHeroSection from '../components/sections/technology/TechHeroSection';
import TechAboutSection from '../components/sections/technology/TechAboutSection';
import TechPlatformSection from '../components/sections/technology/TechPlatformSection';
import TechStatsSection from '../components/sections/technology/TechStatsSection';
import TechPowerSection from '../components/sections/technology/TechPowerSection';
import Footer from '../components/sections/Footer';

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex flex-1 flex-col pt-[55px]">
        <div className="flex-1">
          <TechHeroSection />
          <InViewReveal delay={40}>
            <TechAboutSection />
          </InViewReveal>
          <InViewReveal delay={55}>
            <TechPlatformSection />
          </InViewReveal>
          <InViewReveal delay={70}>
            <TechStatsSection />
          </InViewReveal>
          <InViewReveal delay={100}>
            <TechPowerSection />
          </InViewReveal>
        </div>
        <InViewReveal delay={70}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
