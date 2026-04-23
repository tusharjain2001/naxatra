import t1 from '../../../assets/images/about-timeline-1.png';
import t2 from '../../../assets/images/about-timeline-2.png';
import t3 from '../../../assets/images/about-timeline-3.png';
import t4 from '../../../assets/images/about-timeline-4.png';
import t5 from '../../../assets/images/about-timeline-5.png';
import t6 from '../../../assets/images/about-timeline-6.png';
import t7 from '../../../assets/images/about-timeline-7.png';
import t8 from '../../../assets/images/about-timeline-8.png';
import t9 from '../../../assets/images/about-timeline-9.png';
import t10 from '../../../assets/images/about-timeline-10.png';
import t11 from '../../../assets/images/about-timeline-11.png';

const EVENTS = [
  { title: 'Born to Disrupt', body: 'Naxatra Labs takes flight with a mission to revolutionize hybrid drones.', img: t1 },
  { title: 'Electric Dreams Take Shape', body: 'Ventured into Axial Flux Motors for EVs, bringing cutting-edge hub and mid-drive technology to life.', img: t2 },
  { title: 'Gaining Recognition', body: 'Became a Finalist at Evangelise 2021, proving our innovation potential.', img: t3 },
  { title: 'Engineering the Future', body: 'In-House developed advanced magnet tech, cooling methods and electromagnetic designs for next-gen efficiency.', img: t4 },
  { title: 'Building Smarter, Faster Motors', body: 'Developed our first Radial Hub Motor, setting the stage for high-performance EVs.', img: t5 },
  { title: 'Evangelise 2022', body: 'Finalist at Evangelise 2022 by iCreate. Recognized for groundbreaking innovation in electric mobility.', img: t6 },
  { title: 'Pushing Boundaries', body: 'Began Radial Flux Motor development, refining performance and efficiency.', img: t7 },
  { title: 'From Idea to Industry', body: 'Established our first factory, turning prototypes into real-world solutions.', img: t8 },
  { title: 'Fueling the Vision', body: 'Secured Pre-Seed Funding to accelerate innovation.', img: t9 },
  { title: 'Powering Progress', body: 'Deployed motors in the agricultural industry, making farming more sustainable.', img: t10 },
  { title: 'Taking Flight', body: 'Expanded into aviation motors, bringing electric power to the skies.', img: t11 },
];

export default function AboutTimelineSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-wrap items-start"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 9.9vw, 191px)',
          gap: 'clamp(32px, 3.65vw, 70px)',
        }}
      >
        {/* Left: intro text */}
        <div
          className="flex-shrink-0 flex flex-col"
          style={{
            width: 'clamp(240px, 37.2vw, 715px)',
            position: 'sticky',
            top: 'calc(55px + clamp(20px, 2vw, 40px))',
            gap: 'clamp(16px, 1.56vw, 30px)',
          }}
        >
          <p className="font-metro" style={{ fontSize: 'clamp(12px, 1.25vw, 24px)', color: '#747474' }}>
            [A journey from 2020 to beyond.]
          </p>
          <h2
            className="font-nexa text-black"
            style={{ fontSize: 'clamp(24px, 2.81vw, 54px)', fontWeight: 400, lineHeight: '1.17' }}
          >
            The Road to a Sustainable Future Begins Here
          </h2>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.6', opacity: 0.8 }}
          >
            The future of electric mobility starts here. At Naxatra Labs, we create next-generation motors designed for power, efficiency, and longevity. Our Axial and Radial flux motors, developed through 4+ years of research, deliver industry-leading performance with uncompromising reliability.
          </p>
          {/* Year marker */}
          <div>
            <span
              className="font-nexa block"
              style={{ fontSize: 'clamp(28px, 2.81vw, 54px)', color: '#1863da', fontWeight: 400, lineHeight: '1' }}
            >
              2020
            </span>
            <span
              className="font-nexa text-black block"
              style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', fontWeight: 400 }}
            >
              The Spark of Innovation
            </span>
          </div>
        </div>

        {/* Right: timeline events */}
        <div
          className="flex flex-col"
          style={{ flex: '1 1 clamp(260px, 35vw, 680px)', gap: 'clamp(28px, 2.92vw, 56px)' }}
        >
          {EVENTS.map((ev, i) => (
            <div key={i} className="flex items-start" style={{ gap: 'clamp(12px, 1.25vw, 24px)' }}>
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: '24px', paddingTop: '4px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#1863da',
                    flexShrink: 0,
                  }}
                />
                {i < EVENTS.length - 1 && (
                  <div style={{ width: '2px', flex: 1, minHeight: '40px', backgroundColor: '#d9d9d9', marginTop: '4px' }} />
                )}
              </div>

              {/* Card */}
              <div className="flex flex-col" style={{ flex: 1, gap: 'clamp(8px, 0.83vw, 16px)', paddingBottom: 'clamp(8px, 0.83vw, 16px)' }}>
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: 'clamp(4px, 0.32vw, 6px)', aspectRatio: '16 / 9' }}
                >
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="font-nexa text-black"
                  style={{ fontSize: 'clamp(16px, 1.67vw, 32px)', fontWeight: 400, lineHeight: '1.2' }}
                >
                  {ev.title}
                </h3>
                <p
                  className="font-metro text-black"
                  style={{ fontSize: 'clamp(12px, 0.94vw, 18px)', lineHeight: '1.6', opacity: 0.75 }}
                >
                  {ev.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
