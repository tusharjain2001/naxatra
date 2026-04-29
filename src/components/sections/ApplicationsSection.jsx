import efficientMotors from '../../assets/images/efficient-motors.png';
import scooter from '../../assets/images/scooter.jpg';

const categories = [
  {
    label: 'EV Scooters',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  { label: 'Agricultural Equipment' },
  { label: 'Power Tools' },
  { label: 'Drone' },
];

export default function ApplicationsSection() {
  const activeCategory = categories[0];
  const inactiveCategories = categories.slice(1);

  return (
    <section className="w-full bg-[#f5fafa] py-[clamp(42px,5vw,96px)] max-[720px]:py-10">
      <div className="mx-auto grid max-w-[1840px] grid-cols-[clamp(300px,27vw,455px)_minmax(0,1fr)] gap-[clamp(36px,5vw,104px)] px-[clamp(20px,4.2vw,80px)] max-[1080px]:grid-cols-1 max-[720px]:px-[18px] max-[720px]:gap-0">
        <div className="max-w-[455px] max-[720px]:max-w-full max-[720px]:pb-5">
          {/* Desktop label image */}
          <img
            src={efficientMotors}
            alt="Efficient Motors, Cleaner Future"
            className="h-auto w-[clamp(230px,24vw,330px)] object-contain max-[720px]:hidden"
          />
          {/* Mobile label text */}
          <p className="hidden max-[720px]:flex items-center justify-center gap-2 font-metro text-[10px] uppercase tracking-widest text-[#515151]">
            <span className="text-[#1863da]">[</span>
            Efficient Motors, Cleaner Future
            <span className="text-[#1863da]">]</span>
          </p>

          <h2
            className="mt-[clamp(18px,2vw,34px)] font-nexa font-light tracking-[-0.03em] text-black max-[1080px]:max-w-[620px] max-[720px]:max-w-full max-[720px]:mt-3 text-[44px] leading-[1.12] max-[720px]:text-[26px] max-[720px]:text-center"
          >
            <span>From Ground To Sky,</span>
            <br />
            <span className="text-[#1863da]">We Power It All</span>
          </h2>
        </div>

        <div className="w-full max-[720px]:border-t max-[720px]:border-black/12 max-[720px]:pt-5">
          <div className="border-t border-black/12 pt-[clamp(16px,1.2vw,20px)] max-[720px]:border-t-0 max-[720px]:pt-0">
            <div className="grid grid-cols-[clamp(260px,25vw,410px)_minmax(0,1fr)] items-start gap-[clamp(24px,3.2vw,60px)] max-[920px]:grid-cols-1">
              <img
                src={scooter}
                alt="EV Scooters"
                className="block aspect-[424/259] w-full object-cover max-[720px]:w-[276px] max-[720px]:h-[168.594px] max-[720px]:aspect-auto max-[720px]:mx-auto"
              />

              <div className="pt-[clamp(6px,0.4vw,10px)]">
                <h3
                  className="font-nexa font-light leading-none text-[#1863da] text-[36px] max-[720px]:text-[16px]"
                >
                  {activeCategory.label}
                </h3>
                <p
                  className="mt-[clamp(14px,1vw,18px)] max-w-[620px] font-metro leading-[1.55] text-black text-[19.537px] max-[720px]:text-[10px]"
                >
                  {activeCategory.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(20px,1.8vw,34px)] border-t border-black/12">
            {inactiveCategories.map((category) => (
              <div
                key={category.label}
                className="border-b border-black/12 py-[clamp(12px,1.1vw,20px)]"
              >
                <p className="font-nexa text-[clamp(18px,1.5vw,30px)] font-light leading-[1.2] text-[#515151]/55 max-[920px]:text-left min-[921px]:pl-[clamp(300px,31vw,470px)] max-[720px]:flex max-[720px]:items-center max-[720px]:justify-between">
                  <span>{category.label}</span>
                  <span className="hidden max-[720px]:inline text-[#515151] text-[18px] font-light leading-none shrink-0">+</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
