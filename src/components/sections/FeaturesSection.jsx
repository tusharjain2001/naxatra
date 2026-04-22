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
    desc: 'Experience 10% higher average efficiency and 20% less weight – more power, less energy waste.',
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
    <section className="w-full bg-white" style={{ padding: '0' }}>
      <div style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative"
              style={{ padding: '50px 62px 50px 62px' }}
            >
              {/* SVG cut-corner background */}
              <img
                src={feature.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              {/* Content */}
              <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src={feature.icon} alt="" style={{ width: '36px', height: '37px', objectFit: 'contain' }} />
                <h3
                  className="font-nexa capitalize"
                  style={{ color: '#1863da', fontSize: '24.45px', lineHeight: '28.8px' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="font-metro"
                  style={{ color: '#000', fontSize: '15.7px', lineHeight: '24.45px' }}
                >
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
