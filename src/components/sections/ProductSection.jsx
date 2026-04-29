import productMotor from '../../assets/images/product-motor-rf55.png';
import productText from '../../assets/images/Antarix RF55.png';
import productEllipse from '../../assets/images/product-ellipse.svg';
import productBg from '../../assets/images/product-bg.svg';
import viewAllProducts from '../../assets/images/view-all-products.svg';

export default function ProductSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f5fafa] px-4 pb-[28px] pt-[58px] max-[720px]:px-4 max-[720px]:pb-6 max-[720px]:pt-10"
      id="products"
    >
      <div className="mx-auto max-w-[1680px]">
        <p className="font-metro text-center uppercase tracking-[0.1em] text-[#515151] text-[clamp(12px,1.25vw,24px)] leading-[1.1] max-[720px]:text-[12px]">
          THE PULSE BEHIND EVERY MOTION.
        </p>

        <h2 className="mt-[clamp(18px,2.2vw,38px)] font-nexa text-center font-semibold leading-[1.12] tracking-[-0.02em] text-[clamp(30px,4vw,68px)] max-[720px]:px-2 max-[720px]:text-[26px]">
          {/* Mobile layout */}
          <span className="hidden max-[720px]:block text-black">The Future of Drivetrains</span>
          <span className="hidden max-[720px]:block">
            <span className="text-black">is Here.</span>
            <span className="text-[#1863da]"> Smart, Compact &amp;</span>
          </span>
          <span className="hidden max-[720px]:block text-[#1863da]">Efficient</span>
          {/* Desktop layout */}
          <span className="text-black max-[720px]:hidden">The Future of Drivetrains is Here.</span>
          <span className="text-[#1863da] max-[720px]:hidden"><br />Smart, Compact &amp; Efficient</span>
        </h2>

        <div className="relative  h-[clamp(270px,26vw,500px)] max-[720px]:h-[240px]">
          <div
            className="pointer-events-none absolute left-1/2 top-[52%] z-0 aspect-square w-[clamp(330px,40vw,760px)] -translate-x-1/2 -translate-y-1/2 opacity-90"
          >
            <img src={productEllipse} alt="" className="h-full w-full object-contain" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2">
            <img
              src={productText}
              alt=""
              className="mx-auto block w-[clamp(760px,72vw,1380px)] object-contain max-[720px]:w-[92vw]"
            />
          </div>

          <div className="absolute left-[55%] top-[48%] z-10 w-[clamp(300px,31vw,590px)] -translate-x-1/2 -translate-y-1/2 max-[720px]:w-52.5 max-[720px]:h-44.25 max-[720px]:top-[58%]">
            <img
              src={productMotor}
              alt="Antarix RF55 Motor"
              className="block w-full object-contain"
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[clamp(320px,66vw,1254px)] max-[720px]:max-w-none">
          <img
            src={productBg}
            alt=""
            className="absolute inset-0 h-full w-full"
          />
          <div className="relative z-10 px-[clamp(22px,3vw,48px)] py-[clamp(24px,3vw,44px)] text-center max-[720px]:px-4 max-[720px]:py-5">
            <h3 className="font-nexa text-black text-[clamp(20px,2vw,38px)] leading-[1.28] max-[720px]:text-[14px]">
              <span className="max-[720px]:block">Explore our versatile range of</span>
              <span className="max-[720px]:block">motors from 1kW to 15kW.</span>
            </h3>
            <p className="mt-[clamp(8px,1vw,14px)] font-metro text-[#515151] text-[clamp(12px,1.25vw,24px)] leading-[1.45] max-[720px]:text-[10px]">
              <span className="max-[720px]:block">Perfect for electric vehicles, farming</span>
              <span className="max-[720px]:block">equipment, power tools and beyond.</span>
            </p>
            <a
              href="#products"
              className="mt-[clamp(12px,1.4vw,22px)] inline-flex items-center text-decoration-none"
              aria-label="View all products"
            >
              <img
                src={viewAllProducts}
                alt="View All Products"
                className="block h-auto w-[clamp(170px,14vw,272px)]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
