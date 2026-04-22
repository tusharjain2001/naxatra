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
    <section className="w-full" style={{ background: '#1863da', paddingTop: '89px', paddingBottom: '157px' }} id="technology">
      <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 211px' }}>
        <h2
          className="font-nexa text-center capitalize"
          style={{ color: '#fff', fontSize: '54px', lineHeight: '78.545px', marginBottom: '125px' }}
        >
          Why Us?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 457px)', gap: '64px' }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative"
              style={{ width: '457px', height: '620px' }}
            >
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              <div className="relative z-10">
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    position: 'absolute',
                    top: '33px',
                    left: '31px',
                    width: '393px',
                    height: '281px',
                    objectFit: 'cover',
                    borderRadius: '5.5px',
                  }}
                />
                <h3
                  className="font-nexa capitalize"
                  style={{
                    position: 'absolute',
                    top: '349px',
                    left: '31px',
                    width: '393px',
                    color: '#fff',
                    fontSize: '40px',
                    lineHeight: '48px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-metro"
                  style={{
                    position: 'absolute',
                    top: '468px',
                    left: '31px',
                    width: '373px',
                    color: '#fff',
                    fontSize: '16px',
                    lineHeight: '25px',
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
