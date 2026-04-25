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
      <div className="mx-auto grid max-w-[1840px] grid-cols-[clamp(300px,27vw,455px)_minmax(0,1fr)] gap-[clamp(36px,5vw,104px)] px-[clamp(20px,4.2vw,80px)] max-[1080px]:grid-cols-1 max-[720px]:px-[18px]">
        <div className="max-w-[455px]">
          <img
            src={efficientMotors}
            alt="Efficient Motors, Cleaner Future"
            className="h-auto w-[clamp(230px,24vw,330px)] object-contain"
          />

          <h2
            className="mt-[clamp(18px,2vw,34px)] font-nexa font-light tracking-[-0.03em] text-black max-[1080px]:max-w-[620px]"
            style={{ fontSize: '44px', lineHeight: '1.12' }}
          >
            <span>From Ground To Sky,</span>
            <br />
            <span className="text-[#1863da]">We Power It All</span>
          </h2>
        </div>

        <div className="w-full">
          <div className="border-t border-black/12 pt-[clamp(16px,1.2vw,20px)]">
            <div className="grid grid-cols-[clamp(260px,25vw,410px)_minmax(0,1fr)] items-start gap-[clamp(24px,3.2vw,60px)] max-[920px]:grid-cols-1">
              <img
                src={scooter}
                alt="EV Scooters"
                className="block aspect-[424/259] w-full object-cover"
              />

              <div className="pt-[clamp(6px,0.4vw,10px)]">
                <h3
                  className="font-nexa font-light leading-none text-[#1863da]"
                  style={{ fontSize: '36px' }}
                >
                  {activeCategory.label}
                </h3>
                <p
                  className="mt-[clamp(14px,1vw,18px)] max-w-[620px] font-metro leading-[1.55] text-black"
                  style={{ fontSize: '19.537px' }}
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
                <p className="font-nexa text-[clamp(18px,1.5vw,30px)] font-light leading-[1.2] text-[#515151]/55 max-[920px]:text-left min-[921px]:pl-[clamp(300px,31vw,470px)]">
                  {category.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
