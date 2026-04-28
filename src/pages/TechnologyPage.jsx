import Navbar from '../components/sections/Navbar';
import TechHeroSection from '../components/sections/technology/TechHeroSection';
import TechAboutSection from '../components/sections/technology/TechAboutSection';
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
          <TechAboutSection />
          <TechStatsSection />
          <TechPowerSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
