import Navbar from '../components/sections/Navbar';
import CareersHeroSection from '../components/sections/careers/CareersHeroSection';
import CareersJobsSection from '../components/sections/careers/CareersJobsSection';
import CareersApplySection from '../components/sections/careers/CareersApplySection';
import Footer from '../components/sections/Footer';

export default function CareersPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <CareersHeroSection />
        <CareersJobsSection />
        <CareersApplySection />
        <Footer />
      </div>
    </div>
  );
}
