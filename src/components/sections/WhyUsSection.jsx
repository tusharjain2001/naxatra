import imgRD from '../../assets/images/why-us-rd.jpg';
import imgMotor from '../../assets/images/why-us-motor.jpg';
import imgRoad from '../../assets/images/why-us-road.jpg';
import bg1 from '../../assets/images/why-us-bg-1.svg';
import bg2 from '../../assets/images/why-us-bg-2.svg';

const cards = [
  {
    img: imgRD,
    bg: bg1,
    title: 'In-House R&D & Manufacturing',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  {
    img: imgMotor,
    bg: bg2,
    title: 'Future-Ready Technology',
    desc: 'Our axial and radial flux motors are designed for Indian conditions and global markets, delivering superior efficiency, durability, and performance.',
  },
  {
    img: imgRoad,
    bg: bg1,
    title: 'Sustainable & Smart Mobility',
    desc: "We're driving the EV revolution with eco-friendly innovation, reducing carbon footprints while maximizing power and reliability.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="w-full"
      style={{
        background: '#1863da',
        paddingTop: 'clamp(36px, 3.6vw, 68px)',
        paddingBottom: 'clamp(34px, 4.6vw, 78px)',
      }}
      id="technology"
    >
      <div style={{ maxWidth: '1840px', margin: '0 auto', padding: '0 clamp(20px, 4.2vw, 80px)' }}>
        <h2
          className="font-nexa text-center font-semibold capitalize"
          style={{
            color: '#fff',
            fontSize: 'clamp(34px, 2.45vw, 48px)',
            lineHeight: 1.2,
            marginBottom: 'clamp(28px, 3.4vw, 56px)',
          }}
        >
          Why Us?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(28px, 3.33vw, 64px)',
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative"
              style={{ aspectRatio: '457 / 470', minWidth: 0 }}
            >
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              <div
                className="relative z-10"
                style={{
                  height: '100%',
                  padding: '5.2% 5.4% 5.4%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: '100%',
                    aspectRatio: '393 / 245',
                    objectFit: 'cover',
                    borderRadius: '5.5px',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-nexa capitalize"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(20px, 1.65vw, 32px)',
                    lineHeight: 1.2,
                    marginTop: 'clamp(10px, 1vw, 18px)',
                    marginBottom: 'clamp(6px, 0.7vw, 12px)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-metro"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(11px, 0.72vw, 14px)',
                    lineHeight: 1.48,
                    maxWidth: '95%',
                  }}
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
