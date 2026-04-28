import Navbar from '../components/sections/Navbar';
import AboutHeroSection from '../components/sections/about/AboutHeroSection';
import AboutValuesSection from '../components/sections/about/AboutValuesSection';
import AboutGoalSection from '../components/sections/about/AboutGoalSection';
import AboutTeamSection from '../components/sections/about/AboutTeamSection';
import AboutInvestorsSection from '../components/sections/about/AboutInvestorsSection';
import AboutGallerySection from '../components/sections/about/AboutGallerySection';
import AboutJourneySection from '../components/sections/about/AboutJourneySection';
import Footer from '../components/sections/Footer';

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <AboutHeroSection />
        <AboutValuesSection />
        <AboutGoalSection />
        <AboutTeamSection />
        <AboutInvestorsSection />
        <AboutJourneySection />
        <AboutGallerySection />
        <Footer />
      </div>
    </div>
  );
}
