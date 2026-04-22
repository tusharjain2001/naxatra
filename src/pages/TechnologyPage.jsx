import Navbar from '../components/sections/Navbar';
import TechHeroSection from '../components/sections/technology/TechHeroSection';
import TechAboutSection from '../components/sections/technology/TechAboutSection';
import TechStatsSection from '../components/sections/technology/TechStatsSection';
import TechPowerSection from '../components/sections/technology/TechPowerSection';
import Footer from '../components/sections/Footer';

export default function TechnologyPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <TechHeroSection />
        <TechAboutSection />
        <TechStatsSection />
        <TechPowerSection />
        <Footer />
      </div>
    </div>
  );
}
