import featureDark from '../../../assets/images/cs-feature-dark.svg';
import featureLight from '../../../assets/images/cs-feature-light.svg';

const features = [
  {
    title: 'Electronic Commutation',
    body: 'Replaces brushes with sensor-driven electronic switching, enabling frictionless operation, minimal wear, and zero sparking.',
    card: 'dark',
  },
  {
    title: 'Optimized Stator-Rotor Design',
    body: 'Uses neodymium permanent magnets on the rotor and copper windings in the stator, enabling higher torque and power density in a smaller form factor.',
    card: 'dark',
  },
  {
    title: 'Superior Thermal Management',
    body: 'Heat is dissipated more effectively from the stator, keeping operating temperatures lower and extending component lifespan.',
    card: 'light',
  },
  {
    title: 'Integrated Control & Intelligence',
    body: 'Enables precision features such as variable speed control, torque limiting, soft start/stop profiles, and safety interlocks - features impossible with mechanical commutation.',
    card: 'light',
  },
];

export default function CaseStudyFeatures() {
  return (
    <section className="w-full bg-white">
      <div className="md:hidden" style={{ padding: '22px 10px 34px' }}>
        <div className="mx-auto" style={{ maxWidth: '460px' }}>
          <h2
            className="font-nexa capitalize text-center"
            style={{ fontSize: '20px', lineHeight: '1.2', fontWeight: 400, marginBottom: '16px' }}
          >
            <span style={{ color: '#1863da' }}>Key </span>
            <span style={{ color: '#000' }}>Features</span>
          </h2>

          <div className="flex flex-col" style={{ gap: '10px' }}>
            {features.map((f) => (
              <div key={f.title} className="relative">
                <img
                  src={f.card === 'dark' ? featureDark : featureLight}
                  alt=""
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ objectFit: 'fill' }}
                />
                <div
                  className="relative flex flex-col"
                  style={{ padding: '16px 18px 18px', gap: '6px' }}
                >
                  <h3
                    className="font-nexa capitalize"
                    style={{ color: '#1863da', fontSize: '16px', lineHeight: '1.18', fontWeight: 400 }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="font-metro text-black"
                    style={{ fontSize: '10px', lineHeight: '1.5', margin: 0 }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto hidden md:block"
        style={{ maxWidth: 'min(1600px, 83vw)', padding: 'clamp(40px, 5vw, 96px) clamp(20px, 4.2vw, 80px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(24px, 2.34vw, 45px)', lineHeight: '1.24', fontWeight: 600, marginBottom: 'clamp(32px, 3.1vw, 60px)' }}
        >
          <span style={{ color: '#1863da' }}>Key </span>
          <span style={{ color: '#000' }}>Features</span>
        </h2>

        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(24px, 2.5vw, 48px)' }}
        >
          {features.map((f) => (
            <div key={f.title} className="relative">
              <img
                src={f.card === 'dark' ? featureDark : featureLight}
                alt=""
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ objectFit: 'fill' }}
              />
              <div
                className="relative flex flex-col"
                style={{ padding: 'clamp(18px, 1.55vw, 28px) clamp(20px, 2.1vw, 40px)', gap: 'clamp(6px, 0.45vw, 10px)' }}
              >
                <h3
                  className="font-nexa capitalize"
                  style={{ color: '#1863da', fontSize: 'clamp(18px, 2.08vw, 40px)', lineHeight: '1.2', fontWeight: 400 }}
                >
                  {f.title}
                </h3>
                <p
                  className="font-metro text-black"
                  style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.52' }}
                >
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
