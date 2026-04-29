import { useEffect, useRef, useState } from 'react';
import greenBg from '../../../assets/images/green-bg.png';

import j1 from '../../../assets/images/journey-1.jpg';
import j2 from '../../../assets/images/journey-2.jpg';
import j3 from '../../../assets/images/journey-3.jpg';
import j4 from '../../../assets/images/journey-4.jpg';
import j5 from '../../../assets/images/journey-5.jpg';
import j6 from '../../../assets/images/journey-6.jpg';
import j7 from '../../../assets/images/journey-7.jpg';
import j8 from '../../../assets/images/journey-8.jpg';
import j9 from '../../../assets/images/journey-9.jpg';
import j10 from '../../../assets/images/journey-10.jpg';
import j11 from '../../../assets/images/journey-11.jpg';
import j12 from '../../../assets/images/journey-12.jpg';
import j13 from '../../../assets/images/journey-13.jpg';
import j14 from '../../../assets/images/journey-14.jpg';
import j15 from '../../../assets/images/journey-15.jpg';
import j16 from '../../../assets/images/journey-16.jpg';

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

export default function AboutJourneySection() {
  const cardsRef = useRef(null);
  const mobileCardsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

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

  useEffect(() => {
    const cards = mobileCardsRef.current;
    if (!cards) return;

    const onCardScroll = () => {
      const nextIndex = Math.round(cards.scrollTop / cards.clientHeight);
      setMobileActiveIndex(Math.min(nextIndex, milestones.length - 1));
    };

    cards.addEventListener('scroll', onCardScroll, { passive: true });
    return () => {
      cards.removeEventListener('scroll', onCardScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f5fafa] max-[768px]:pb-0" style={{ padding: '20px 0 120px' }}>
      <div className="relative z-10 md:hidden" style={{ padding: '18px 14px 4px' }}>
        <div className="mx-auto" style={{ maxWidth: '460px' }}>
          <p
            className="font-metro uppercase text-center"
            style={{ color: '#747474', fontSize: '10px', lineHeight: '14px', letterSpacing: '1px', marginBottom: '16px' }}
          >
            [ A JOURNEY FROM 2020 TO BEYOND ]
          </p>

          <h2
            className="font-nexa text-center"
            style={{ fontSize: '20px', lineHeight: '1.12', fontWeight: 400, marginBottom: '18px' }}
          >
            <span style={{ color: '#000' }}>The Road To </span>
            <span style={{ color: '#1863da' }}>A Sustainable Future</span>
            <span style={{ color: '#000' }}> Begins Here</span>
          </h2>

          <p
            className="font-metro text-center"
            style={{ color: '#000', fontSize: '10px', lineHeight: '1.55', marginBottom: '34px' }}
          >
            The future of electric mobility starts here. At Naxatra Labs, we create next-generation
            motors designed for power, efficiency, and longevity. Our Axial and Radial flux motors,
            developed through 4+ years of research, deliver industry-leading performance with
            uncompromising reliability.
          </p>

          <div className="flex flex-col items-center">
            <div style={{ width: '296px', marginBottom: '18px', textAlign: 'center' }}>
              <p className="font-nexa" style={{ color: '#1863da', fontSize: '20px', lineHeight: '1', fontWeight: 400 }}>
                {milestones[mobileActiveIndex].year}
              </p>
              <p className="font-metro" style={{ color: '#000', fontSize: '10px', lineHeight: '1.4', marginTop: '4px' }}>
                {mobileActiveIndex === 0 ? 'The Spark of Innovation' : milestones[mobileActiveIndex].title}
              </p>
              <div style={{ position: 'relative', width: '20px', height: '38px', margin: '10px auto 0' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '14px',
                    height: '28px',
                    background: 'rgba(24,99,218,0.12)',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    background: '#1863da',
                    margin: '0 auto',
                  }}
                />
              </div>
            </div>

            <div
              ref={mobileCardsRef}
              style={{
                width: '296px',
                height: '304px',
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
                    height: '304px',
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '296px',
                      background: '#fff',
                      border: '1px solid rgba(24,99,218,0.14)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      padding: '18px 16px 24px',
                    }}
                  >
                    <img
                      src={m.img}
                      alt={m.title}
                      style={{ width: '100%', height: '183px', objectFit: 'cover', display: 'block', marginBottom: '24px', borderRadius: '4px' }}
                    />
                    <h3 className="font-nexa capitalize text-center" style={{ color: '#1863da', fontSize: '16px', lineHeight: '1.2', fontWeight: 400, marginBottom: '10px' }}>
                      {m.title}
                    </h3>
                    <p className="font-metro text-center" style={{ color: '#000', fontSize: '10px', lineHeight: '1.5', margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[36px] top-[-12px] hidden h-[680px] w-[680px] pointer-events-none md:block">
        <img src={greenBg} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute left-[86px] top-[92px] hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(77,214,196,0.28)_0%,rgba(77,214,196,0.14)_42%,rgba(77,214,196,0)_74%)] pointer-events-none md:block" />

      <div
        className="relative z-10 hidden md:block"
        style={{
          maxWidth: '1920px',
          margin: '0 auto',
          padding: '0 clamp(24px, 9.9vw, 191px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(420px, calc(420px + (100vw - 960px) * 0.14), 560px) minmax(430px, 1fr)',
            gap: 'clamp(56px, calc(56px + (100vw - 960px) * 0.18), 220px)',
            alignItems: 'start',
            paddingLeft: 'clamp(30px, 6.2vw, 119px)',
          }}
        >
          <div style={{ paddingTop: 0 }}>
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

          <div style={{ width: '430px', justifySelf: 'end' }}>
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
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '370px',
                      minHeight: '505px',
                      background: '#fff',
                      border: '1px solid rgba(24,99,218,0.14)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      padding: '33px 28px 38px',
                    }}
                  >
                    <img
                      src={m.img}
                      alt={m.title}
                      style={{ width: '314px', height: '202px', objectFit: 'cover', display: 'block', marginBottom: '30px', borderRadius: '8px' }}
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
