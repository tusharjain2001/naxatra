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
    <section className="w-full bg-white" style={{ paddingTop: 'clamp(58px, 5.2vw, 96px)', paddingBottom: 'clamp(58px, 5.2vw, 96px)' }}>
      <div style={{ maxWidth: '1840px', margin: '0 auto', padding: '0 clamp(20px, 4.2vw, 80px)' }}>
        <h2
          className="font-nexa text-center font-semibold"
          style={{ fontSize: 'clamp(34px, 3.6vw, 68px)', lineHeight: '1.05', marginBottom: 'clamp(34px, 3.8vw, 68px)' }}
        >
          <span style={{ color: '#000' }}>How Do We </span>
          <span style={{ color: '#1863da' }}>Power Innovation?</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'clamp(24px, 2.2vw, 42px)' }}>
          {cards.map((card, i) => (
            <div key={i} className="relative" style={{ minHeight: 'clamp(250px, 21vw, 364px)', padding: 'clamp(28px, 2.2vw, 42px) clamp(26px, 2vw, 40px) clamp(24px, 1.9vw, 36px)' }}>
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={card.icon} alt="" style={{ width: 'clamp(36px, 2.8vw, 54px)', height: 'clamp(36px, 2.8vw, 54px)', objectFit: 'contain' }} />
                <h3
                  className="font-nexa capitalize"
                  style={{ color: '#1863da', fontSize: 'clamp(18px, 1.4vw, 27px)', lineHeight: '1.18', marginTop: 'clamp(16px, 1.2vw, 24px)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-metro"
                  style={{ color: '#000', fontSize: 'clamp(12px, 0.82vw, 15.72px)', lineHeight: '1.52', marginTop: 'clamp(10px, 0.8vw, 16px)' }}
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
