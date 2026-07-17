import Navbar from '../components/sections/Navbar';
import InViewReveal from '../components/common/InViewReveal';
import BlogsHeroSection from '../components/sections/blogs/BlogsHeroSection';
import BlogsFeaturedSection from '../components/sections/blogs/BlogsFeaturedSection';
import BlogsAllArticlesSection from '../components/sections/blogs/BlogsAllArticlesSection';
import Footer from '../components/sections/Footer';
import usePageMeta from '../hooks/usePageMeta';

export default function BlogsPage() {
  usePageMeta(
    'Insights & Blogs',
    'Get the latest updates and innovations from Naxatra Labs — insights on electric motors, controllers, and EV technology.'
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <BlogsHeroSection />
        <InViewReveal delay={40}>
          <BlogsFeaturedSection />
        </InViewReveal>
        <InViewReveal delay={70}>
          <BlogsAllArticlesSection />
        </InViewReveal>
        <InViewReveal delay={100}>
          <Footer />
        </InViewReveal>
      </div>
    </div>
  );
}
