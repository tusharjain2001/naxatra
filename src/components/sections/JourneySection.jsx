import { useEffect, useRef, useState } from 'react';
import greenBg from '../../assets/images/green-bg.png';

import j1 from '../../assets/images/journey-1.jpg';
import j2 from '../../assets/images/journey-2.jpg';
import j3 from '../../assets/images/journey-3.jpg';
import j4 from '../../assets/images/journey-4.jpg';
import j5 from '../../assets/images/journey-5.jpg';
import j6 from '../../assets/images/journey-6.jpg';
import j7 from '../../assets/images/journey-7.jpg';
import j8 from '../../assets/images/journey-8.jpg';
import j9 from '../../assets/images/journey-9.jpg';
import j10 from '../../assets/images/journey-10.jpg';
import j11 from '../../assets/images/journey-11.jpg';
import j12 from '../../assets/images/journey-12.jpg';
import j13 from '../../assets/images/journey-13.jpg';
import j14 from '../../assets/images/journey-14.jpg';
import j15 from '../../assets/images/journey-15.jpg';
import j16 from '../../assets/images/journey-16.jpg';

const milestones = [
  { year: '2020', title: 'Born to Disrupt', desc: 'Naxatra Labs takes flight with a mission to revolutionize hybrid drones.', img: j1 },
  { year: '2021', title: 'Electric Dreams Take Shape', desc: 'Ventured into Axial Flux Motors for EVs, bringing cutting-edge hub and mid-drive technology to life.', img: j2 },
  { year: '2021', title: 'Gaining Recognition', desc: 'Became a Finalist at Evangelise 2021, proving our innovation potential.', img: j3 },
  { year: '2021', title: 'Engineering the Future', desc: 'In-House developed advanced magnet tech, cooling methods and electromagnetic designs for next-gen efficiency.', img: j4 },
  { year: '2022', title: 'Building Smarter, Faster Motors', desc: 'Developed our first Radial Hub Motor, setting the stage for high-performance EVs.', img: j5 },
  { year: '2022', title: 'Evangelise 2022', desc: 'Finalist at Evangelise 2022 by iCreate. Recognized for groundbreaking innovation in electric mobility.', img: j6 },
  { year: '2022', title: 'Pushing Boundaries', desc: 'Began Radial Flux Motor development, refining performance and efficiency.', img: j7 },
  { year: '2023', title: 'From Idea to Industry', desc: 'Established our first factory, turning prototypes into real-world solutions.', img: j8 },
  { year: '2023', title: 'Fueling the Vision', desc: 'Secured Pre-Seed Funding to accelerate innovation.', img: j9 },
  { year: '2023', title: 'Powering Progress', desc: 'Deployed motors in the agricultural industry, making farming more sustainable.', img: j10 },
  { year: '2024', title: 'Taking Flight', desc: 'Expanded into aviation motors, bringing electric power to the skies.', img: j11 },
  { year: '2024', title: 'Scaling for Impact', desc: 'Announced our Seed Round to drive the next wave of breakthroughs.', img: j12 },
  { year: '2024', title: 'Supercharging Growth', desc: 'Expanding production capacity to 100K motors per year to meet global demand.', img: j13 },
  { year: '2025', title: 'Leading the Charge', desc: 'Showcasing at Bharat Mobility Expo, cementing our role as an industry pioneer.', img: j14 },
  { year: '2025', title: 'Another Production Facility', desc: 'Inaugurated our another state-of-the-art production unit in August 2025, enabling higher production capacity and precision manufacturing for next-generation motors.', img: j15 },
  { year: '2025', title: 'Showcasing Innovation', desc: 'Exhibited at EV India Expo 2025, presented our advancements in motor technologies and forging key international collaborations.', img: j16 },
];

export default function JourneySection() {
  const cardsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const onCardScroll = () => {
      const nextIndex = Math.round(cards.scrollTop / cards.clientHeight);
      setActiveIndex(Math.min(nextIndex, milestones.length - 1));
    };

    cards.addEventListener('scroll', onCardScroll, { passive: true });
    return () => {
      cards.removeEventListener('scroll', onCardScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f5fafa]" style={{ padding: '20px 0 120px' }}>
      {/* Background green glow */}
      <div className="absolute left-[36px] top-[-12px] h-[680px] w-[680px]  pointer-events-none">
        <img src={greenBg} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute left-[86px] top-[92px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(77,214,196,0.28)_0%,rgba(77,214,196,0.14)_42%,rgba(77,214,196,0)_74%)] pointer-events-none" />

      <div
        className="relative z-10"
        style={{
          maxWidth: '1920px',
          margin: '0 auto',
          padding: '0 clamp(100px, calc(100px + (100vw - 960px) * 0.1042), 200px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(420px, calc(420px + (100vw - 960px) * 0.14), 560px) 430px',
            gap: 'clamp(56px, calc(56px + (100vw - 960px) * 0.18), 220px)',
            alignItems: 'start',
          }}
        >
          {/* Left intro */}
          <div
            style={{
              paddingTop: 0,
            }}
          >
            <p className="font-metro uppercase" style={{ color: '#747474', fontSize: '14px', lineHeight: '18px', letterSpacing: '1.2px', marginBottom: '14px' }}>
              [A journey from 2020 to beyond.]
            </p>
            <h2 className="font-nexa mt-10" style={{ fontSize: '54px', lineHeight: '1.02', fontWeight: 600, marginBottom: '44px', maxWidth: '520px' }}>
              <span style={{ color: '#000' }}>The Road To </span>
              <span style={{ color: '#1863da' }}>A</span>
              <br />
              <span style={{ color: '#1863da' }}>Sustainable Future</span>
              <br />
              <span style={{ color: '#000' }}>Begins Here</span>
            </h2>
            <p className="font-metro" style={{ color: '#000', fontSize: '16px', lineHeight: '1.7', maxWidth: '540px' }}>
              The future of electric mobility starts here. At Naxatra Labs, we create next-generation motors
              designed for power, efficiency, and longevity. Our Axial and Radial flux motors, developed through
              4+ years of research, deliver industry-leading performance with uncompromising reliability.
            </p>
          </div>

          {/* Right timeline */}
          <div style={{ width: '430px' }}>
            <div style={{ zIndex: 50, background: '#f5fafa', padding: '0' }}>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <p className="font-nexa" style={{ color: '#1863da', fontSize: '42px', lineHeight: '42px', fontWeight: 400 }}>
                  {milestones[activeIndex].year}
                </p>
                <p className="font-metro" style={{ color: '#000', fontSize: '12px', lineHeight: '16px', marginTop: '4px' }}>
                  {milestones[activeIndex].title}
                </p>
                <div style={{ position: 'relative', width: '28px', height: '43px', margin: '13px auto 0' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '22px',
                      height: '29px',
                      background: 'rgba(24,99,218,0.12)',
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      width: '22px',
                      height: '22px',
                      borderRadius: '999px',
                      background: '#1863da',
                      margin: '0 auto',
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              ref={cardsRef}
              style={{
                width: '430px',
                height: '505px',
                overflowY: 'auto',
                overflowX: 'hidden',
                scrollSnapType: 'y mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    height: '505px',
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always',
                  }}
                >
                  <div
                    style={{
                      width: '370px',
                      minHeight: '505px',
                      background: '#fff',
                      border: '1px solid rgba(24,99,218,0.14)',
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
                      padding: '33px 28px 38px',
                    }}
                  >
                    <img
                      src={m.img}
                      alt={m.title}
                      style={{ width: '314px', height: '202px', objectFit: 'cover', display: 'block', marginBottom: '30px' }}
                    />
                    <h3 className="font-nexa capitalize" style={{ color: '#1863da', fontSize: '34px', lineHeight: '38px', fontWeight: 400, marginBottom: '10px' }}>
                      {m.title}
                    </h3>
                    <p className="font-metro" style={{ color: '#000', fontSize: '14px', lineHeight: '22px' }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
