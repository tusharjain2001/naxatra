import iconInnovation from '../../../assets/images/about-icon-innovation.svg';
import iconSustainability from '../../../assets/images/about-icon-sustainability.svg';
import iconCollaboration from '../../../assets/images/about-icon-collaboration.svg';
import iconSimplicity from '../../../assets/images/about-icon-simplicity.svg';
import iconPrecision from '../../../assets/images/about-icon-precision.svg';

const VALUES = [
  {
    icon: iconInnovation,
    title: 'Relentless Innovation',
    body: 'We push the boundaries of technology, challenge the status quo, and pioneer cutting-edge solutions in electric motor engineering.',
  },
  {
    icon: iconSustainability,
    title: 'Sustainability With Purpose',
    body: 'We are committed to eco-conscious engineering, reducing carbon footprints, and building a greener, more sustainable future.',
  },
  {
    icon: iconCollaboration,
    title: 'Collaboration For Impact',
    body: 'We partner with visionaries, industries, and experts to accelerate advancements and make electric mobility the future of transportation.',
  },
  {
    icon: iconSimplicity,
    title: 'Simplicity In Excellence',
    body: 'Strip away complexity to deliver high-performance, efficient, and scalable solutions that redefine industry standards.',
  },
  {
    icon: iconPrecision,
    title: 'Precision In Execution',
    body: 'Every motor undergoes rigorous testing to ensure unmatched reliability and efficiency.',
  },
];

const clippedCorner = 'polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)';

function ValueCard({ icon, title, body }) {
  return (
    <div
      style={{
        clipPath: clippedCorner,
        background: '#cbd8d5',
        padding: '1px',
      }}
    >
      <div
        className="flex flex-col items-start"
        style={{
          clipPath: clippedCorner,
          background: '#f5fbfa',
          minHeight: 'clamp(98px, 10.6vw, 150px)',
          padding: 'clamp(16px, 1.7vw, 24px) clamp(20px, 2.2vw, 32px)',
        }}
      >
        <img
          src={icon}
          alt=""
          style={{
            width: 'clamp(24px, 2.35vw, 34px)',
            height: 'clamp(24px, 2.35vw, 34px)',
            objectFit: 'contain',
            marginBottom: 'clamp(10px, 0.9vw, 14px)',
          }}
        />
        <h3
          className="font-nexa capitalize"
          style={{
            color: '#1863da',
            fontSize: 'clamp(16px, 1.5vw, 22px)',
            lineHeight: 1.15,
            fontWeight: 400,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          className="font-metro text-black"
          style={{
            fontSize: 'clamp(9px, 0.72vw, 11px)',
            lineHeight: 1.55,
            margin: 'clamp(5px, 0.45vw, 7px) 0 0',
            maxWidth: 'clamp(280px, 37vw, 560px)',
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function AboutValuesSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-col lg:flex-row items-start"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(42px, 6vw, 96px) clamp(24px, 9.9vw, 191px)',
          gap: 'clamp(32px, 4.4vw, 84px)',
        }}
      >
        <div
          className="flex-shrink-0"
          style={{
            width: 'clamp(280px, 28vw, 538px)',
            paddingTop: 'clamp(0px, 0.5vw, 8px)',
          }}
        >
          <h2
            className="font-nexa capitalize text-black"
            style={{
              fontSize: 'clamp(22px, 2.3vw, 34px)',
              lineHeight: 1.2,
              fontWeight: 600,
              margin: 0,
            }}
          >
            {'Our Commitment To '}
            <span style={{ color: '#1863da' }}>Innovation, Precision, And Sustainability</span>
            {' Drives Every Decision We Make'}
          </h2>
        </div>

        <div
          className="flex flex-col"
          style={{
            flex: '1 1 auto',
            width: '100%',
            maxWidth: 'clamp(540px, 43vw, 820px)',
            gap: 'clamp(18px, 2vw, 28px)',
          }}
        >
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
