import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import contact from "../../assets/images/contactus.png";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[55px] w-full items-center justify-between bg-white/90 px-6 backdrop-blur-sm">
      <div className="h-[18px] w-auto">
        <img
          src={logo}
          alt="Naxatra Labs"
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="hidden items-center gap-[clamp(18px,3.4vw,62px)] md:flex">
        <a
          href="#"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Home
        </a>
        <a
          href="#products"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Products
        </a>
        <Link
          to="/technology"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Technology
        </Link>
        <Link
          to="/case-studies"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Case Studies
        </Link>
        <Link
          to="/insights-blogs"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Insights &amp; Blogs
        </Link>
        <a
          href="#about"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          About
        </a>
      </div>

      <Link to="/contact">
        <img src={contact} alt="Contact us" className="h-[30px] w-auto" />
      </Link>
    </nav>
  );
}
