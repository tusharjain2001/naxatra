import heroBg from '../../assets/images/hero-bg.svg';
import exploreOptions from '../../assets/images/explore-options.svg';
import heroVideo from '../../assets/videos/Hero frame_1.webm';
import AnimatedTextReveal, { countAnimatedCharacters } from '../common/AnimatedTextReveal';

export default function HeroSection() {
  const advancedText = 'Advanced';
  const motorsText = 'Motors &';
  const controllersText = 'Controllers';
  const heroTextStagger = 0.03;
  const heroTextDuration = 0.58;
  const motorsDelay = countAnimatedCharacters(advancedText) * heroTextStagger;
  const controllersDelay = motorsDelay + countAnimatedCharacters(motorsText) * heroTextStagger;

  return (
    <section className="relative w-full overflow-hidden bg-white pt-[96px]">
      <div className="relative mx-auto h-[clamp(300px,34vw,590px)] w-[calc(100%_-_46px)] max-w-[1793px] max-[720px]:h-[400px] max-[720px]:w-[calc(100%_-_40px)]">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full max-[720px]:hidden" />
        <div
          className="absolute inset-0 hidden max-[720px]:block"
          style={{
            background: 'rgba(77, 214, 196, 0.04)',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 hidden max-[720px]:block">
          <div className="absolute left-0 right-0 top-0 border-t border-[#9D9D9D]" />
          <div className="absolute bottom-0 left-0 right-[24px] border-t border-[#9D9D9D]" />
          <div className="absolute bottom-[24px] right-0 top-0 border-r border-[#9D9D9D]" />
          <div className="absolute bottom-0 left-0 top-0 border-l border-[#9D9D9D]" />
          <div
            className="absolute bottom-[12px] right-[-4.5px] h-px w-[34px] bg-[#9D9D9D]"
            style={{ transform: 'rotate(-45deg)' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[image:linear-gradient(rgba(77,214,196,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(77,214,196,0.18)_1px,transparent_1px)] bg-[length:108px_100px]" />

        <div className="absolute left-[clamp(44px,5vw,132px)] top-[clamp(32px,4vw,92px)] w-[min(43vw,560px)] max-[720px]:left-0 max-[720px]:right-0 max-[720px]:top-[32px] max-[720px]:w-full max-[720px]:px-3 max-[720px]:text-center">
          <h1 className="font-nexa text-[clamp(43px,5.2vw,100px)] font-semibold leading-[0.91] tracking-normal text-black max-[720px]:text-[26px]">
            <span className="block max-[720px]:mr-[0.2em] max-[720px]:inline text-[#1863da]">
              <AnimatedTextReveal text={advancedText} stagger={heroTextStagger} duration={heroTextDuration} />
            </span>
            <span className="block max-[720px]:inline">
              <AnimatedTextReveal text={motorsText} delay={motorsDelay} stagger={heroTextStagger} duration={heroTextDuration} />
            </span>
            <span className="block">
              <AnimatedTextReveal text={controllersText} delay={controllersDelay} stagger={heroTextStagger} duration={heroTextDuration} />
            </span>
          </h1>
          <p className="mt-[clamp(10px,0.95vw,18px)] font-metro text-[clamp(10px,1.15vw,22px)] leading-[1.25] text-[#515151] max-[720px]:text-[12px]">
            Powering The Future Of Electric Mobility
          </p>
        </div>

        <a
          href="#products"
          className="absolute bottom-[clamp(44px,4vw,82px)] left-[clamp(44px,5vw,132px)] inline-flex items-center justify-center no-underline max-[720px]:top-[330px] max-[720px]:bottom-auto max-[720px]:left-0 max-[720px]:right-0 max-[720px]:justify-center"
          aria-label="Explore Options"
        >
          <img
            src={exploreOptions}
            alt=""
            className="block h-auto w-[clamp(85px,10.4vw,200px)] max-[720px]:w-[160px]"
          />
        </a>

        <div className="absolute right-[clamp(72px,10vw,210px)] top-[clamp(28px,3.8vw,104px)] w-[588px] h-[451px] max-[720px]:left-0 max-[720px]:right-0 max-[720px]:mx-auto max-[720px]:top-[155px] max-[720px]:w-[199px] max-[720px]:h-[153.943px]">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Advanced Motor"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
