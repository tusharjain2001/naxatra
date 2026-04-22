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
    <section className="w-full bg-white" style={{ paddingTop: '152px', paddingBottom: '152px' }}>
      <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 133px' }}>
        <h2
          className="font-nexa text-center"
          style={{ fontSize: '68px', lineHeight: '64px', marginBottom: '104px' }}
        >
          <span style={{ color: '#000' }}>How Do We </span>
          <span style={{ color: '#1863da' }}>Power Innovation?</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '42px' }}>
          {cards.map((card, i) => (
            <div key={i} className="relative" style={{ minHeight: '400px', padding: '62px 58px 48px 58px' }}>
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={card.icon} alt="" style={{ width: '69px', height: '69px', objectFit: 'contain' }} />
                <h3
                  className="font-nexa capitalize"
                  style={{ color: '#1863da', fontSize: '24.45px', lineHeight: '28.818px', marginTop: '40px' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-metro"
                  style={{ color: '#000', fontSize: '15.72px', lineHeight: '24.45px', marginTop: '16px' }}
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
