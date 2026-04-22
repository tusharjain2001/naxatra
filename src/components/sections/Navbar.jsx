import logo from "../../assets/images/logo.png";
import contact from "../../assets/images/contactus.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/80 flex px-10 py-4 items-center justify-between">
      <div className="h-6 w-auto">
        <img
          src={logo}
          alt="Naxatra Labs"
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-8">
        <a
          href="#"
          className="text-[#515151] text-sm uppercase tracking-wide font-medium hover:text-[#1863da] transition-colors"
        >
          Home
        </a>
        <a
          href="#products"
          className="text-[#515151] text-sm uppercase tracking-wide font-medium hover:text-[#1863da] transition-colors"
        >
          Products
        </a>
        <a
          href="#technology"
          className="text-[#515151] text-sm uppercase tracking-wide font-medium hover:text-[#1863da] transition-colors"
        >
          Technology
        </a>
        <a
          href="#case-studies"
          className="text-[#515151] text-sm uppercase tracking-wide font-medium hover:text-[#1863da] transition-colors"
        >
          Case Studies
        </a>
        <a
          href="#blogs"
          className="text-[#515151] text-sm uppercase tracking-wide font-medium hover:text-[#1863da] transition-colors"
        >
          Insights &amp; Blogs
        </a>
        <a
          href="#about"
          className="text-[#515151] text-sm uppercase tracking-wide font-medium hover:text-[#1863da] transition-colors"
        >
          About
        </a>
      </div>

      <a href="#contact">
        <img src={contact} />
      </a>
    </nav>
  );
}
