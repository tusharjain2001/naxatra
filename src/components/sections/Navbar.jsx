import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import contact from "../../assets/images/navbar-contact.svg";

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/technology', label: 'Technology' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/insights-blogs', label: 'Insights & Blogs' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const isDark = pathname !== '/' && pathname !== '/products' && !pathname.startsWith('/products/');
  const linkClass = `group inline-flex items-center text-[clamp(10px,0.55vw,12px)] uppercase font-medium transition-colors duration-300 ${
    isDark ? 'text-white hover:text-[#8bb5ff]' : 'text-[#515151] hover:text-[#1863da]'
  }`;
  const bracketClass = `inline-block transition-all duration-300 ${
    isDark ? 'text-[#8bb5ff]' : 'text-[#1863da]'
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
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass}
            >
              <span className={`${bracketClass} mr-[1px] -translate-x-[4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100`}>
                [
              </span>
              <span>{item.label}</span>
              <span className={`${bracketClass} ml-[1px] translate-x-[4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100`}>
                ]
              </span>
            </Link>
          ))}
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
