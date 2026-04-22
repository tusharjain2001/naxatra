import { useEffect, useRef, useState } from 'react';
import journeyEllipse from '../../assets/images/product-ellipse.svg';

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
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardHeight = 776;
      const idx = Math.round(el.scrollTop / cardHeight);
      setActiveIndex(Math.min(idx, milestones.length - 1));
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20 bg-[#f5fafa]">
      {/* Background ellipse */}
      <div className="absolute top-0 -left-24 w-[788px] h-[788px] opacity-40 pointer-events-none">
        <img src={journeyEllipse} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-16">
        {/* Left intro */}
        <div className="flex gap-24 items-start">
          <div className="w-[715px] sticky top-24 flex-shrink-0">
            <p className="text-[#747474] text-xl uppercase tracking-widest mb-4">
              [A journey from 2020 to beyond.]
            </p>
            <h2 className="text-6xl font-light leading-tight mb-8">
              <span className="text-black">The Road to </span>
              <span className="text-[#1863da]">a Sustainable Future </span>
              <span className="text-black">Begins Here</span>
            </h2>
            <p className="text-black text-xl leading-8">
              The future of electric mobility starts here. At Naxatra Labs, we create next-generation motors
              designed for power, efficiency, and longevity. Our Axial and Radial flux motors, developed through
              4+ years of research, deliver industry-leading performance with uncompromising reliability.
            </p>
          </div>

          {/* Right timeline */}
          <div className="flex-1 flex flex-col gap-0">
            {/* Year indicator */}
            <div className="text-center mb-4 sticky top-20 z-20 bg-[#f5fafa] py-4">
              <p className="text-[#1863da] text-5xl font-light">{milestones[activeIndex].year}</p>
              <p className="text-black text-lg">{milestones[activeIndex].title}</p>
              <div className="w-8 h-8 rounded-full bg-[#1863da] mx-auto mt-2" />
              <div className="w-0.5 h-6 bg-[#1863da]/30 mx-auto" />
            </div>

            {/* Scrollable cards */}
            <div
              ref={scrollRef}
              className="flex flex-col gap-14 max-h-[748px] overflow-y-auto scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden flex-shrink-0"
                  style={{ border: '1px solid rgba(24,99,218,0.15)', background: 'rgba(255,255,255,0.7)' }}
                >
                  <img src={m.img} alt={m.title} className="w-full h-[386px] object-cover" />
                  <div className="p-8">
                    <h3 className="text-[#1863da] text-4xl font-light capitalize mb-3">{m.title}</h3>
                    <p className="text-black text-lg leading-7">{m.desc}</p>
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
