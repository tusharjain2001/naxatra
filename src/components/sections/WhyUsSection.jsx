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
        paddingTop: 'clamp(48px, 4.64vw, 89px)',
        paddingBottom: 'clamp(70px, 8.18vw, 157px)',
      }}
      id="technology"
    >
      <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 clamp(32px, 8.5vw, 211px)' }}>
        <h2
          className="font-nexa text-center capitalize"
          style={{
            color: '#fff',
            fontSize: 'clamp(40px, 2.81vw, 54px)',
            lineHeight: 1.45,
            marginBottom: 'clamp(54px, 6.51vw, 125px)',
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
              style={{ aspectRatio: '457 / 620', minWidth: 0 }}
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
                  padding: '7.22% 6.78% 7.5%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: '100%',
                    aspectRatio: '393 / 281',
                    objectFit: 'cover',
                    borderRadius: '5.5px',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-nexa capitalize"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(24px, 2.08vw, 40px)',
                    lineHeight: 1.2,
                    marginTop: 'clamp(16px, 1.82vw, 35px)',
                    marginBottom: 'clamp(10px, 1.04vw, 20px)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-metro"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(12px, 0.83vw, 16px)',
                    lineHeight: 1.56,
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
