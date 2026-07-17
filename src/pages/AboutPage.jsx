import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import AboutHeroSection from '../components/sections/about/AboutHeroSection';
import AboutValuesSection from '../components/sections/about/AboutValuesSection';
import AboutGoalSection from '../components/sections/about/AboutGoalSection';
import AboutTeamSection from '../components/sections/about/AboutTeamSection';
import AboutInvestorsSection from '../components/sections/about/AboutInvestorsSection';
import AboutJourneySection from '../components/sections/about/AboutJourneySection';
import Footer from '../components/sections/Footer';
import usePageMeta from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta(
    'About Us',
    'What drives us? Learn about Naxatra Labs — our values, team, investors, and journey in electric mobility.'
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <AboutHeroSection />
        <InViewReveal delay={40}>
          <AboutValuesSection />
        </InViewReveal>
        <InViewReveal delay={70}>
          <AboutGoalSection />
        </InViewReveal>
        <InViewReveal delay={100}>
          <AboutTeamSection />
        </InViewReveal>
        <InViewReveal delay={130}>
          <AboutInvestorsSection />
        </InViewReveal>
        <InViewReveal delay={160}>
          <AboutJourneySection />
        </InViewReveal>
        <InViewReveal delay={120}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
