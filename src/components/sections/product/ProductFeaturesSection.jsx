import iconSustainable from '../../../assets/images/product-icon-sustainable.png';
import iconPlatforms from '../../../assets/images/product-icon-platforms.png';
import iconEngineer from '../../../assets/images/product-icon-engineer.png';
import iconCustomize from '../../../assets/images/product-icon-customize.png';

const FEATURES = [
  {
    icon: iconSustainable,
    title: 'Smart, Scalable, Sustainable',
    description:
      'Future-proof your operations with solutions that scale as your needs grow while maintaining efficiency and sustainability.',
  },
  {
    icon: iconPlatforms,
    title: 'Versatile Across Platforms',
    description:
      'Designed for the future of mobility. Our solutions cater to a wide range of emobility platforms, adapting to diverse industry demands and evolving technologies.',
  },
  {
    icon: iconEngineer,
    title: 'Engineered for Safety, Built for the Future',
    description:
      'At Naxatra Labs, safety is our promise. Engineered for durability and performance, our solutions meet the toughest challenges with uncompromising quality.',
  },
  {
    icon: iconCustomize,
    title: 'Customisable to Your Needs',
    description:
      'Unlock endless possibilities with our adaptable solutions. Tailor functionalities to meet your exact requirements and create a platform that aligns perfectly with your market goals.',
  },
];

export default function ProductFeaturesSection() {
  return (
    <section
      className="w-full"
      style={{ background: '#fff', padding: 'clamp(48px, 7.7vw, 148px) clamp(16px, 7.8vw, 149px)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          maxWidth: '1622px',
          margin: '0 auto',
          borderTop: '0.5px solid #e0e0e0',
          borderBottom: '0.5px solid #e0e0e0',
        }}
        className="max-[980px]:grid-cols-2 max-[560px]:grid-cols-1"
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={idx}
            style={{
              padding: 'clamp(20px, 2.08vw, 40px) clamp(16px, 1.67vw, 32px)',
              borderLeft: idx > 0 ? '0.5px solid #e0e0e0' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(12px, 1.04vw, 20px)',
            }}
            className="max-[980px]:border-l-0 max-[980px]:border-t max-[980px]:border-[#e0e0e0] max-[560px]:border-l-0"
          >
            {/* Icon */}
            <div style={{ width: 'clamp(28px, 2.4vw, 46px)', height: 'clamp(28px, 2.4vw, 46px)' }}>
              <img
                src={feature.icon}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3
              className="font-nexa capitalize"
              style={{
                color: '#1863da',
                fontSize: 'clamp(14px, 1.27vw, 24.45px)',
                lineHeight: '1.18',
              }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="font-metro"
              style={{
                color: '#000',
                fontSize: 'clamp(11px, 0.82vw, 15.7px)',
                lineHeight: '1.555',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
