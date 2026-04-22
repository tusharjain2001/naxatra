import Navbar from '../components/sections/Navbar';
import BlogsHeroSection from '../components/sections/blogs/BlogsHeroSection';
import BlogsFeaturedSection from '../components/sections/blogs/BlogsFeaturedSection';
import BlogsAllArticlesSection from '../components/sections/blogs/BlogsAllArticlesSection';
import Footer from '../components/sections/Footer';

export default function BlogsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <BlogsHeroSection />
        <BlogsFeaturedSection />
        <BlogsAllArticlesSection />
        <Footer />
      </div>
    </div>
  );
}
