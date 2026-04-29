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
      className="w-full bg-[#1863da] pt-[clamp(36px,3.6vw,68px)] pb-[clamp(34px,4.6vw,78px)]"
      id="technology"
    >
      <div
        className="mx-auto max-w-[1840px] px-[clamp(20px,4.2vw,80px)] max-[720px]:px-[18px]"
      >
        <h2
          className="font-nexa text-center font-semibold capitalize text-white text-[clamp(34px,2.45vw,48px)] leading-[1.2] mb-[clamp(28px,3.4vw,56px)] max-[720px]:text-[26px]"
        >
          Why Us?
        </h2>

        <div
          className="grid grid-cols-3 gap-[clamp(28px,3.33vw,64px)] max-[720px]:mx-auto max-[720px]:max-w-[268px] max-[720px]:grid-cols-1 max-[720px]:gap-7"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative max-[720px]:mx-auto max-[720px]:h-[317px] max-[720px]:w-[258px]"
              style={{ aspectRatio: '457 / 470', minWidth: 0 }}
            >
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />
              <div
                className="relative z-10 flex h-full flex-col px-[5.4%] pt-[5.2%] pb-[5.4%] max-[720px]:px-[11.5%] max-[720px]:pt-[6.2%] max-[720px]:pb-[7.5%]"
                style={{
                  height: '100%',
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="max-[720px]:mx-auto max-[720px]:h-[143.834px] max-[720px]:w-[201.368px] max-[720px]:rounded-[4px]"
                  style={{
                    width: '100%',
                    aspectRatio: '393 / 245',
                    objectFit: 'cover',
                    borderRadius: '5.5px',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-nexa capitalize text-white text-[clamp(20px,1.65vw,32px)] leading-[1.2] mt-[clamp(10px,1vw,18px)] mb-[clamp(6px,0.7vw,12px)] max-[720px]:text-center max-[720px]:text-[20px] max-[720px]:leading-[1.12]"
                >
                  {card.title}
                </h3>
                <p
                  className="font-metro text-white text-[clamp(11px,0.72vw,14px)] leading-[1.48] max-w-[95%] max-[720px]:max-w-none max-[720px]:text-center max-[720px]:text-[10px] max-[720px]:leading-[1.5]"
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
