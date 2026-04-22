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
        <a
          href="#technology"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Technology
        </a>
        <a
          href="#case-studies"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Case Studies
        </a>
        <a
          href="#blogs"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          Insights &amp; Blogs
        </a>
        <a
          href="#about"
          className="text-[clamp(12px,0.55vw,10px)] uppercase font-medium text-[#515151] transition-colors hover:text-[#1863da]"
        >
          About
        </a>
      </div>

      <a href="#contact">
        <img src={contact} alt="Contact us" className="h-[30px] w-auto" />
      </a>
    </nav>
  );
}
