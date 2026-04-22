import heroBg from '../../assets/images/hero-bg.svg';
import heroOverlay from '../../assets/images/hero-overlay.svg';
import heroMotor from '../../assets/images/hero-motor.png';
import exploreOptions from '../../assets/images/explore-options.png';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white mt-10 pt-[49px]">
      <div className="hero-shell relative mx-auto">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full" />
        <div className="hero-grid absolute inset-0 pointer-events-none" />

        <div className="hero-copy absolute">
          <h1 className="font-nexa font-semibold text-black">
            <span className="block text-[#1863da]">Advanced</span>
            <span className="block">Motors &amp;</span>
            <span className="block">Controllers</span>
          </h1>
          <p className="font-metro text-[#515151]">
            Powering The Future Of Electric Mobility
          </p>
        </div>

        <a href="#products" className="hero-cta absolute" aria-label="Explore Options">
          <img src={exploreOptions} alt="" />
        </a>

        <div className="hero-motor-frame absolute">
          <img
            src={heroMotor}
            alt="Advanced Motor"
            className="absolute hero-motor-img object-contain"
          />
          <img src={heroOverlay} alt="" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
