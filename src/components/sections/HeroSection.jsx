import heroBg from '../../assets/images/hero-bg.svg';
import heroOverlay from '../../assets/images/hero-overlay.svg';
import heroMotor from '../../assets/images/hero-motor.png';
import exploreOptions from '../../assets/images/explore-options.svg';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-[96px]">
      <div className="relative mx-auto h-[clamp(300px,34vw,590px)] w-[calc(100%_-_46px)] max-w-[1793px] max-[720px]:h-[520px] max-[720px]:w-[calc(100%_-_24px)]">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[image:linear-gradient(rgba(77,214,196,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(77,214,196,0.18)_1px,transparent_1px)] bg-[length:108px_100px]" />

        <div className="absolute left-[clamp(44px,5vw,132px)] top-[clamp(32px,4vw,92px)] w-[min(43vw,560px)] max-[720px]:left-[28px] max-[720px]:top-[44px] max-[720px]:w-[calc(100%_-_56px)]">
          <h1 className="font-nexa text-[clamp(43px,5.2vw,100px)] font-semibold leading-[0.91] tracking-normal text-black max-[720px]:text-[48px]">
            <span className="block text-[#1863da]">Advanced</span>
            <span className="block">Motors &amp;</span>
            <span className="block">Controllers</span>
          </h1>
          <p className="mt-[clamp(10px,0.95vw,18px)] font-metro text-[clamp(10px,1.15vw,22px)] leading-[1.25] text-[#515151] max-[720px]:text-[12px]">
            Powering The Future Of Electric Mobility
          </p>
        </div>

        <a
          href="#products"
          className="absolute bottom-[clamp(28px,3.1vw,64px)] left-[clamp(44px,5vw,132px)] inline-flex items-center justify-center no-underline max-[720px]:bottom-[36px] max-[720px]:left-[28px]"
          aria-label="Explore Options"
        >
          <img
            src={exploreOptions}
            alt=""
            className="block h-auto w-[clamp(85px,10.4vw,200px)]"
          />
        </a>

        <div className="absolute right-[clamp(48px,8vw,168px)] top-[clamp(44px,5vw,132px)] aspect-[729/537] w-[clamp(250px,33vw,610px)] max-[720px]:right-[22px] max-[720px]:top-[238px] max-[720px]:w-[calc(100%_-_66px)]">
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
