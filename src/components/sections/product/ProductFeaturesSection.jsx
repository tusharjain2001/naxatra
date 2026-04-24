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
          gap: 'clamp(16px, 1.5vw, 28px)',
          maxWidth: '1622px',
          margin: '0 auto',
        }}
        className="max-[980px]:grid-cols-2 max-[560px]:grid-cols-1"
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              padding: 'clamp(28px, 2.3vw, 42px) clamp(22px, 2vw, 34px) clamp(34px, 2.7vw, 52px)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(14px, 1.1vw, 22px)',
              minHeight: 'clamp(240px, 27vw, 392px)',
              overflow: 'hidden',
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 383 427"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              <path
                d="M6.63965 0.553711H376.36C379.722 0.553711 382.446 3.2784 382.446 6.63965V381.967L353.061 426.446H6.63965C3.27841 426.446 0.553711 423.722 0.553711 420.36V6.63965C0.553711 3.27841 3.27841 0.553711 6.63965 0.553711Z"
                fill="rgba(77,214,196,0.06)"
                stroke="#9D9D9D"
                strokeWidth="1.10656"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Icon */}
            <div style={{ width: 'clamp(24px, 1.9vw, 36px)', height: 'clamp(24px, 1.9vw, 36px)', position: 'relative', zIndex: 1 }}>
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
                fontSize: 'clamp(20px, 1.55vw, 30px)',
                lineHeight: '1.15',
                maxWidth: '12ch',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="font-metro"
              style={{
                color: '#1f1f1f',
                fontSize: 'clamp(12px, 0.92vw, 17px)',
                lineHeight: '1.6',
                maxWidth: '28ch',
                position: 'relative',
                zIndex: 1,
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
