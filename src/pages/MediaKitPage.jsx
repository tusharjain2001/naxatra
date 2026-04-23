import Navbar from '../components/sections/Navbar';
import MediaKitHeroSection from '../components/sections/media-kit/MediaKitHeroSection';
import MediaKitDownloadSection from '../components/sections/media-kit/MediaKitDownloadSection';
import Footer from '../components/sections/Footer';

export default function MediaKitPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <MediaKitHeroSection />
        <MediaKitDownloadSection />
        <Footer />
      </div>
    </div>
  );
}
