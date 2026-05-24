import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import MediaKitHeroSection from '../components/sections/media-kit/MediaKitHeroSection';
import MediaKitDownloadSection from '../components/sections/media-kit/MediaKitDownloadSection';
import Footer from '../components/sections/Footer';

export default function MediaKitPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <MediaKitHeroSection />
        <InViewReveal delay={40}>
          <MediaKitDownloadSection />
        </InViewReveal>
        <InViewReveal delay={70}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
