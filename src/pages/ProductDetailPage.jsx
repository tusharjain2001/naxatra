import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
import ProductDetailHeroSection from '../components/sections/product/ProductDetailHeroSection';
import ProductDetailTechSection from '../components/sections/product/ProductDetailTechSection';
import ProductCTASection from '../components/sections/product/ProductCTASection';
import ProductFeaturesSection from '../components/sections/product/ProductFeaturesSection';
import { PRODUCTS } from '../data/products';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <div className="pt-[55px] flex flex-col items-center justify-center" style={{ minHeight: '60vh' }}>
          <p className="font-nexa text-[#515151] text-2xl">Product not found.</p>
          <Link
            to="/products"
            style={{
              marginTop: '24px',
              background: '#1863da',
              borderRadius: '4px',
              padding: '14px 28px',
              color: '#fff',
              textDecoration: 'none',
            }}
            className="font-nexa capitalize"
          >
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-[55px]">
        <ProductDetailHeroSection product={product} />
        <ProductDetailTechSection product={product} />
        <ProductCTASection />
        <ProductFeaturesSection />
        <Footer />
      </div>
    </div>
  );
}
