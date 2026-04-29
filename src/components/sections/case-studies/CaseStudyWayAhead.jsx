import { Link } from 'react-router-dom';
import aheadMotor from '../../../assets/images/cs-ahead-motor.png';
import wayAheadCta from '../../../assets/images/awy-ahead-cta.png';

export default function CaseStudyWayAhead() {
  return (
    <section className="w-full bg-white">
      <div className="md:hidden" style={{ padding: '22px 18px 34px' }}>
        <div className="mx-auto" style={{ maxWidth: '460px' }}>
          <h2
            className="font-nexa capitalize text-center"
            style={{
              fontSize: '20px',
              lineHeight: '1.15',
              fontWeight: 400,
              marginBottom: '18px',
            }}
          >
            <span style={{ color: '#000' }}>The way </span>
            <span style={{ color: '#1863da' }}>Ahead</span>
          </h2>

          <div className="mx-auto" style={{ width: '236px', marginBottom: '18px' }}>
            <img
              src={aheadMotor}
              alt="Future of Power Tools with BLDC"
              className="block w-full h-auto object-cover"
            />
          </div>

          <p
            className="font-metro text-black text-center"
            style={{ fontSize: '10px', lineHeight: '1.55', marginBottom: '1em' }}
          >
            As the industry shifts toward brushless systems, offering BLDC-powered tools is
            no longer a premium add-on - it&apos;s becoming a baseline expectation. The result of
            this study unequivocally demonstrates that Naxatra Labs&apos; motor technology
            provides a transformative upgrade over traditional brushed DC motors for power
            tools applications. The documented improvements in efficiency, power, battery
            runtime, durability, thermal management, and noise reduction collectively address
            the core limitations of brushed technology and directly translate into significant
            business advantages for power tool manufacturers.
          </p>
          <p
            className="font-metro text-black text-center"
            style={{ fontSize: '10px', lineHeight: '1.55', marginBottom: '24px' }}
          >
            If you&apos;re a power tool manufacturer looking to future-proof your products and
            stay ahead of the curve, Naxatra Labs can help. Our team specializes in custom
            BLDC motor solutions designed for high-performance industrial applications.
          </p>

          <div className="flex flex-col items-center" style={{ gap: '12px' }}>
            <a href="#contact" className="inline-flex items-center justify-center">
              <img
                src={wayAheadCta}
                alt="Contact us to explore collaboration opportunities"
                className="block h-auto object-contain"
                style={{ width: '299px' }}
              />
            </a>

            <Link
              to="/case-studies"
              className="font-metro underline flex items-center gap-2"
              style={{
                color: '#1863da',
                fontSize: '10px',
                lineHeight: '1.5',
              }}
            >
              Back to Case Studies
              <span style={{ fontSize: '1.1em' }}>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mx-auto hidden md:block"
        style={{ maxWidth: 'min(1600px, 83vw)', padding: 'clamp(40px, 5vw, 96px) clamp(20px, 4.2vw, 80px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{
            fontSize: 'clamp(24px, 2.34vw, 45px)',
            lineHeight: '1.15',
            fontWeight: 600,
            marginBottom: 'clamp(32px, 3.1vw, 60px)',
          }}
        >
          <span style={{ color: '#000' }}>The way </span>
          <span style={{ color: '#1863da' }}>Ahead</span>
        </h2>

        <div className="flex items-start" style={{ gap: 'clamp(24px, 3vw, 56px)', flexWrap: 'nowrap' }}>
          <div className="flex-shrink-0 overflow-hidden rounded" style={{ width: 'clamp(200px, 26vw, 500px)' }}>
            <img
              src={aheadMotor}
              alt="Future of Power Tools with BLDC"
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            className="flex flex-col items-start"
            style={{ flex: '1 1 0', minWidth: 0, gap: 'clamp(20px, 1.88vw, 36px)' }}
          >
            <p
              className="font-metro text-black"
              style={{ fontSize: '14px', lineHeight: '1.7' }}
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
              style={{ fontSize: '14px', lineHeight: '1.7' }}
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
                marginTop: 'clamp(24px, 3vw, 56px)',
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
                className="font-metro underline flex mt-10 items-center gap-2 self-end"
                style={{
                  color: '#1863da',
                  fontSize: 'clamp(12px, 1.04vw, 20px)',
                  lineHeight: '1.5',
                  marginRight: 0,
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
