import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import CareersHeroSection from '../components/sections/careers/CareersHeroSection';
import CareersJobsSection from '../components/sections/careers/CareersJobsSection';
import CareersApplySection from '../components/sections/careers/CareersApplySection';
import Footer from '../components/sections/Footer';
import usePageMeta from '../hooks/usePageMeta';

export default function CareersPage() {
  usePageMeta(
    'Careers',
    'We’re hiring! Join Naxatra Labs and help build the future of electric mobility together.'
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <CareersHeroSection />
        <InViewReveal delay={40}>
          <CareersJobsSection />
        </InViewReveal>
        <InViewReveal delay={70}>
          <CareersApplySection />
        </InViewReveal>
        <InViewReveal delay={100}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
