import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import CaseStudiesHeroSection from '../components/sections/case-studies/CaseStudiesHeroSection';
import CaseStudyFeatureSection from '../components/sections/case-studies/CaseStudyFeatureSection';
import Footer from '../components/sections/Footer';

export default function CaseStudiesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <CaseStudiesHeroSection />
        <InViewReveal delay={40}>
          <CaseStudyFeatureSection />
        </InViewReveal>
        <InViewReveal delay={70}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
