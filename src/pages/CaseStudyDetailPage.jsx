import Navbar from '../components/sections/Navbar';
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
        <CaseStudyContent />
        <CaseStudyFeatures />
        <CaseStudyComparison />
        <CaseStudyImpact />
        <CaseStudyWayAhead />
        <Footer />
      </div>
    </div>
  );
}
