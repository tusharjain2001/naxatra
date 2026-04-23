import { Link } from 'react-router-dom';
import aheadMotor from '../../../assets/images/cs-ahead-motor.png';
import wayAheadCta from '../../../assets/images/awy-ahead-cta.png';

export default function CaseStudyWayAhead() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(40px, 4.8vw, 92px) clamp(24px, 10.5vw, 201px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{
            fontSize: 'clamp(32px, 3.54vw, 68px)',
            lineHeight: '1.15',
            fontWeight: 400,
            marginBottom: 'clamp(32px, 3.1vw, 60px)',
          }}
        >
          <span style={{ color: '#000' }}>The way </span>
          <span style={{ color: '#1863da' }}>Ahead</span>
        </h2>

        <div className="flex flex-wrap gap-10 items-start">
          <div className="flex-shrink-0 overflow-hidden rounded" style={{ width: 'clamp(220px, 29.4vw, 565px)' }}>
            <img
              src={aheadMotor}
              alt="Future of Power Tools with BLDC"
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            className="flex flex-col items-start"
            style={{ flex: '1 1 clamp(260px, 46.8vw, 898px)', gap: 'clamp(20px, 1.88vw, 36px)' }}
          >
            <p
              className="font-metro text-black"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
            >
              As the industry shifts toward brushless systems, offering BLDC-powered tools is no longer a premium
              add-on - it's becoming a baseline expectation. The results of this study unequivocally demonstrate that
              Naxatra Labs' motor technology provides a transformative upgrade over traditional brushed DC motors for
              power tool applications. The documented improvements in efficiency, power, battery runtime, durability,
              thermal management, and noise reduction collectively address the core limitations of brushed technology
              and directly translate into significant business advantages for power tool manufacturers.
            </p>
            <p
              className="font-metro text-black"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
            >
              If you're a power tool manufacturer looking to future-proof your products and stay ahead of the curve,
              Naxatra Labs can help. Our team specializes in custom BLDC motor solutions designed for high-performance
              industrial applications.
            </p>

            <div
              className="flex flex-col items-start"
              style={{
                width: '100%',
                gap: 'clamp(24px, 2.6vw, 50px)',
                marginTop: 'clamp(8px, 1vw, 18px)',
              }}
            >
              <a href="#contact" className="inline-flex items-center justify-center">
                <img
                  src={wayAheadCta}
                  alt="Contact us to explore collaboration opportunities"
                  className="block h-auto object-contain"
                  style={{ width: 'clamp(280px, 33.4vw, 641px)' }}
                />
              </a>

              <Link
                to="/case-studies"
                className="font-metro underline flex items-center gap-2 self-end"
                style={{
                  color: '#1863da',
                  fontSize: 'clamp(12px, 1.04vw, 20px)',
                  lineHeight: '1.5',
                  marginRight: 'clamp(48px, 9vw, 170px)',
                }}
              >
                Back to Case Studies
                <span style={{ fontSize: '1.1em' }}>-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
