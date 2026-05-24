import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactFormSection from '../components/sections/contact/ContactFormSection';
import Footer from '../components/sections/Footer';

export default function ContactPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <ContactHeroSection />
        <InViewReveal delay={40}>
          <ContactFormSection />
        </InViewReveal>
        <InViewReveal delay={70}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
