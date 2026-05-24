import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import CaseStudyDetailHero from '../components/sections/case-studies/CaseStudyDetailHero';
import CaseStudyContent from '../components/sections/case-studies/CaseStudyContent';
import CaseStudyFeatures from '../components/sections/case-studies/CaseStudyFeatures';
import CaseStudyComparison from '../components/sections/case-studies/CaseStudyComparison';
import CaseStudyImpact from '../components/sections/case-studies/CaseStudyImpact';
import CaseStudyWayAhead from '../components/sections/case-studies/CaseStudyWayAhead';
import Footer from '../components/sections/Footer';

export default function CaseStudyDetailPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <CaseStudyDetailHero />
        <InViewReveal delay={40}>
          <CaseStudyContent />
        </InViewReveal>
        <InViewReveal delay={70}>
          <CaseStudyFeatures />
        </InViewReveal>
        <InViewReveal delay={100}>
          <CaseStudyComparison />
        </InViewReveal>
        <InViewReveal delay={130}>
          <CaseStudyImpact />
        </InViewReveal>
        <InViewReveal delay={160}>
          <CaseStudyWayAhead />
        </InViewReveal>
        <InViewReveal delay={120}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
