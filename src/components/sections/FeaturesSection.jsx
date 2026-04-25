import featureBg2 from '../../assets/images/feature-bg-2.svg';
import featureBg1 from '../../assets/images/feature-bg-1.svg';
import iconGear from '../../assets/images/feature-icon-gear.svg';
import iconCompact from '../../assets/images/feature-icon-compact.svg';
import iconBike from '../../assets/images/feature-icon-bike.svg';
import iconFactory from '../../assets/images/feature-icon-factory.svg';

const features = [
  {
    icon: iconGear,
    bg: featureBg2,
    title: 'Performance That Matches Indian Conditions',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  {
    icon: iconCompact,
    bg: featureBg1,
    title: 'Smart, Compact & More Efficient',
    desc: 'Experience 10% higher average efficiency and 20% less weight - more power, less energy waste.',
  },
  {
    icon: iconBike,
    bg: featureBg1,
    title: 'Perfect Fit for Every Ride',
    desc: 'Our advanced motor technology adapts to bikes, scooters, and mopeds providing versatile, high-performance products for all your mobility needs.',
  },
  {
    icon: iconFactory,
    bg: featureBg2,
    title: 'In-House R&D and Production Setup',
    desc: 'Every motor is designed, tested, and manufactured in our cutting-edge R&D and production facility, ensuring the highest standards of quality and innovation.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1840px] px-[clamp(20px,4.2vw,80px)] py-[clamp(28px,4.8vw,72px)] max-[560px]:px-[18px] max-[560px]:py-[26px]">
        <div className="grid grid-cols-4 gap-[clamp(24px,1.9vw,35px)] max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative min-h-[clamp(170px,18.4vw,354px)] px-[clamp(22px,2.8vw,52px)] py-[clamp(22px,2.8vw,52px)] max-[560px]:min-h-[200px]"
            >
              <img
                src={feature.bg}
                alt=""
                className="absolute inset-0 h-full w-full"
              />
              <div className="relative z-10 flex max-w-[clamp(160px,15vw,290px)] flex-col items-start">
                <img
                  src={feature.icon}
                  alt=""
                  className="h-[clamp(17px,1.45vw,28px)] w-[clamp(17px,1.45vw,28px)] object-contain"
                />
                <h3 className="mt-[clamp(14px,1.2vw,24px)] font-nexa text-[clamp(12px,1.05vw,20px)] capitalize leading-[1.18] tracking-normal text-[#1863da] font-bold">
                  {feature.title}
                </h3>
                <p className="mt-[clamp(10px,0.95vw,18px)] font-metro text-[clamp(8px,0.72vw,14px)] leading-[1.5] tracking-normal text-black">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
