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
    title: 'Sustainability with Purpose',
    body: 'We are committed to eco-conscious engineering, reducing carbon footprints, and building a greener, more sustainable future.',
  },
  {
    icon: iconCollaboration,
    title: 'Collaboration for Impact',
    body: 'We partner with visionaries, industries, and experts to accelerate advancements and make electric mobility the future of transportation.',
  },
  {
    icon: iconSimplicity,
    title: 'Simplicity in Excellence',
    body: 'Strip away complexity to deliver high-performance, efficient, and scalable solutions that redefine industry standards.',
  },
  {
    icon: iconPrecision,
    title: 'Precision in Execution',
    body: 'Every motor undergoes rigorous testing to ensure unmatched reliability and efficiency.',
  },
];

export default function AboutValuesSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-wrap items-start"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 9.9vw, 191px)',
          gap: 'clamp(32px, 4.2vw, 80px)',
        }}
      >
        {/* Left: sticky heading */}
        <div
          className="flex-shrink-0"
          style={{ width: 'clamp(240px, 29.5vw, 566px)', paddingTop: 'clamp(8px, 0.83vw, 16px)' }}
        >
          <h2
            className="font-nexa text-black"
            style={{
              fontSize: 'clamp(22px, 2.08vw, 40px)',
              lineHeight: '1.3',
              fontWeight: 400,
              position: 'sticky',
              top: 'calc(55px + clamp(20px, 2vw, 40px))',
            }}
          >
            Our commitment to innovation, precision, and sustainability drives every decision we make
          </h2>
        </div>

        {/* Right: values list */}
        <div
          className="flex flex-col"
          style={{ flex: '1 1 clamp(280px, 42.7vw, 820px)', gap: 0 }}
        >
          {VALUES.map((v, i) => (
            <div key={i}>
              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: '#d9d9d9', marginBottom: 'clamp(20px, 2.08vw, 40px)' }} />
              <div
                className="flex items-start"
                style={{ gap: 'clamp(16px, 1.56vw, 30px)', marginBottom: 'clamp(20px, 2.08vw, 40px)' }}
              >
                {/* Icon */}
                <img
                  src={v.icon}
                  alt={v.title}
                  className="flex-shrink-0"
                  style={{ width: 'clamp(40px, 3.9vw, 75px)', height: 'clamp(40px, 3.9vw, 75px)', objectFit: 'contain' }}
                />
                {/* Text */}
                <div className="flex flex-col" style={{ gap: 'clamp(8px, 0.83vw, 16px)' }}>
                  <h3
                    className="font-nexa"
                    style={{ fontSize: 'clamp(16px, 2.08vw, 40px)', color: '#1863da', fontWeight: 400, lineHeight: '1.2' }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="font-metro text-black"
                    style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.6' }}
                  >
                    {v.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Final divider */}
          <div style={{ height: '1px', backgroundColor: '#d9d9d9' }} />
        </div>
      </div>
    </section>
  );
}
