import heroBg from '../../assets/images/hero-bg.svg';
import heroOverlay from '../../assets/images/hero-overlay.svg';
import heroMotor from '../../assets/images/hero-motor.png';
import exploreOptions from '../../assets/images/explore-options.png';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white mt-10 pt-[49px]">
      <div className="relative mx-auto h-[clamp(302px,43.5vw,833px)] w-[calc(100%_-_46px)] max-w-[1793px] max-[720px]:h-[520px] max-[720px]:w-[calc(100%_-_24px)]">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[image:linear-gradient(rgba(77,214,196,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(77,214,196,0.18)_1px,transparent_1px)] bg-[length:108px_100px]" />

        <div className="absolute left-[clamp(46px,5vw,192px)] top-[clamp(39px,4.6vw,134px)] w-[min(52vw,740px)] max-[720px]:left-[28px] max-[720px]:top-[44px] max-[720px]:w-[calc(100%_-_56px)]">
          <h1 className="font-nexa text-[clamp(43px,6.26vw,120px)] font-semibold leading-[0.91] tracking-normal text-black max-[720px]:text-[48px]">
            <span className="block text-[#1863da]">Advanced</span>
            <span className="block">Motors &amp;</span>
            <span className="block">Controllers</span>
          </h1>
          <p className="mt-[clamp(10px,1vw,20px)] font-metro text-[clamp(10px,1.25vw,24px)] leading-[1.25] text-[#515151] max-[720px]:text-[12px]">
            Powering The Future Of Electric Mobility
          </p>
        </div>

        <a
          href="#products"
          className="absolute bottom-[clamp(34px,3.9vw,84px)] left-[clamp(46px,5vw,192px)] inline-flex items-center justify-center no-underline max-[720px]:bottom-[36px] max-[720px]:left-[28px]"
          aria-label="Explore Options"
        >
          <img
            src={exploreOptions}
            alt=""
            className="block h-auto w-[clamp(85px,12.3vw,236px)]"
          />
        </a>

        <div className="absolute right-[clamp(63px,9.2vw,237px)] top-[clamp(68px,8.2vw,214px)] aspect-[729/537] w-[clamp(267px,38vw,727px)] max-[720px]:right-[22px] max-[720px]:top-[238px] max-[720px]:w-[calc(100%_-_66px)]">
          <img
            src={heroMotor}
            alt="Advanced Motor"
            className="absolute bottom-0 left-[11.5%] right-[11.8%] top-[4.7%] h-[95.3%] w-[76.7%] object-contain"
          />
          <img src={heroOverlay} alt="" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
