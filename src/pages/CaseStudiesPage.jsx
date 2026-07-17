import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import CaseStudiesHeroSection from '../components/sections/case-studies/CaseStudiesHeroSection';
import CaseStudyFeatureSection from '../components/sections/case-studies/CaseStudyFeatureSection';
import Footer from '../components/sections/Footer';
import usePageMeta from '../hooks/usePageMeta';

export default function CaseStudiesPage() {
  usePageMeta(
    'Case Studies',
    'Engineering real-world electric mobility — case studies of Naxatra Labs motors powering EVs, power tools, and industrial machines.'
  );

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
