import Navbar from '../components/sections/Navbar';
import CaseStudiesHeroSection from '../components/sections/case-studies/CaseStudiesHeroSection';
import CaseStudyFeatureSection from '../components/sections/case-studies/CaseStudyFeatureSection';
import Footer from '../components/sections/Footer';

export default function CaseStudiesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <CaseStudiesHeroSection />
        <CaseStudyFeatureSection />
        <Footer />
      </div>
    </div>
  );
}
