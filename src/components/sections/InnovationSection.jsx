import iconPerf from '../../assets/images/innovation-icon-perf.svg';
import iconWorld from '../../assets/images/innovation-icon-world.svg';
import iconTrusted from '../../assets/images/innovation-icon-trusted.svg';
import bg1 from '../../assets/images/innovation-bg-1.svg';
import bg2 from '../../assets/images/innovation-bg-2.svg';

const cards = [
  {
    icon: iconPerf,
    bg: bg1,
    title: 'Smarter Design, Superior Performance',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  {
    icon: iconWorld,
    bg: bg2,
    title: 'Virtual Testing, Real-World Impact',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  {
    icon: iconTrusted,
    bg: bg2,
    title: 'Tested, Trusted, Trailblazing',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
];

export default function InnovationSection() {
  return (
    <section className="w-full bg-white pt-[clamp(58px,5.2vw,96px)] pb-[clamp(58px,5.2vw,96px)] max-[560px]:mt-6 max-[560px]:pt-[22px] max-[560px]:pb-7">
      <div className="mx-auto max-w-[1840px] px-[clamp(20px,4.2vw,80px)] max-[560px]:px-[16px]">
        <h2
          className="font-nexa text-center font-semibold text-[clamp(34px,3.6vw,68px)] leading-[1.05] mb-[clamp(34px,3.8vw,68px)] max-[560px]:mb-9 max-[560px]:text-[27px] max-[560px]:leading-[1.02]"
        >
          <span className="max-[560px]:hidden">
            <span className="text-black">How Do We </span>
            <span className="text-[#1863da]">Power Innovation?</span>
          </span>
          <span className="hidden max-[560px]:block">
            <span className="block text-black">
              How Do We <span className="text-[#1863da]">Power</span>
            </span>
            <span className="block text-[#1863da]">Innovation?</span>
          </span>
        </h2>

        <div className="grid grid-cols-3 gap-[clamp(24px,2.2vw,42px)] max-[980px]:grid-cols-1 max-[560px]:gap-[18px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative min-h-[clamp(250px,21vw,364px)] px-[clamp(26px,2vw,40px)] pt-[clamp(28px,2.2vw,42px)] pb-[clamp(24px,1.9vw,36px)] max-[560px]:min-h-0 max-[560px]:px-5 max-[560px]:pt-4 max-[560px]:pb-[18px]"
            >
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              <div className="relative z-10 flex flex-col">
                <img
                  src={card.icon}
                  alt=""
                  className="h-[clamp(36px,2.8vw,54px)] w-[clamp(36px,2.8vw,54px)] object-contain max-[560px]:h-[30px] max-[560px]:w-[30px]"
                />
                <h3
                  className="mt-[clamp(16px,1.2vw,24px)] font-nexa text-[clamp(18px,1.4vw,27px)] capitalize leading-[1.18] text-[#1863da] max-[560px]:mt-[26px] max-[560px]:text-[16px]"
                >
                  {card.title}
                </h3>
                <p
                  className="mt-[clamp(10px,0.8vw,16px)] font-metro text-[clamp(12px,0.82vw,15.72px)] leading-[1.52] text-black max-[560px]:mt-5 max-[560px]:text-[10px]"
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
