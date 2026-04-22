import Navbar from '../components/sections/Navbar';
import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactFormSection from '../components/sections/contact/ContactFormSection';
import Footer from '../components/sections/Footer';

export default function ContactPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <ContactHeroSection />
        <ContactFormSection />
        <Footer />
      </div>
    </div>
  );
}
