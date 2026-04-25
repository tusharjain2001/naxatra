import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import contact from "../../assets/images/navbar-contact.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const isDark = pathname !== '/' && pathname !== '/products' && !pathname.startsWith('/products/');
  const linkClass = `text-[clamp(10px,0.55vw,12px)] uppercase font-medium transition-colors ${
    isDark ? 'text-white hover:text-[#8bb5ff]' : 'text-[#515151] hover:text-[#1863da]'
  }`;

  return (
    <nav
      className="fixed left-0 top-0 z-50 h-[82px] w-full backdrop-blur-sm"
      style={{ background: isDark ? '#4a4a4a' : 'rgba(255,255,255,0.9)' }}
    >
      <div className="mx-auto flex h-full w-[calc(100%_-_46px)] max-w-[1793px] items-center justify-between max-[720px]:w-[calc(100%_-_24px)]">
        <div className="h-[18px] w-auto">
          <img
            src={logo}
            alt="Naxatra Labs"
            className="h-full w-auto object-contain"
            style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
          />
        </div>

        <div className="hidden items-center gap-[clamp(18px,3.4vw,62px)] md:flex">
          <Link
            to="/"
            className={linkClass}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={linkClass}
          >
            Products
          </Link>
          <Link
            to="/technology"
            className={linkClass}
          >
            Technology
          </Link>
          <Link
            to="/case-studies"
            className={linkClass}
          >
            Case Studies
          </Link>
          <Link
            to="/insights-blogs"
            className={linkClass}
          >
            Insights &amp; Blogs
          </Link>
          <Link
            to="/about"
            className={linkClass}
          >
            About
          </Link>
        </div>

        <Link
          to="/contact"
          className="overflow-hidden"
          style={{
            height: '42px',
            clipPath: 'polygon(0 0, 100% 0, 100% 71%, 84% 100%, 0 100%)',
          }}
        >
          <img src={contact} alt="Contact us" className="h-full w-auto" />
        </Link>
      </div>
    </nav>
  );
}
