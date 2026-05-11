import aboutHeroGrid from '../../../assets/images/about-hero-grid.png';
import aboutHeroEllipse from '../../../assets/images/about-hero-ellipse.png';
import aboutHeroImage from '../../../assets/images/about-hero-image.png';
import AnimatedTextReveal, { countAnimatedCharacters } from '../../common/AnimatedTextReveal';

export default function AboutHeroSection() {
  const textStagger = 0.03;
  const whatText = 'What ';
  const drivesText = 'Drives Us?';
  const drivesDelay = countAnimatedCharacters(whatText) * textStagger;

  return (
    <>
      <section className="relative w-full bg-black overflow-hidden md:hidden" style={{ minHeight: '268px' }}>
        <div
          className="absolute"
          style={{ bottom: '10px', right: '-2vw', width: '58vw', height: '194px' }}
        >
          <img
            src={aboutHeroGrid}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-fill opacity-38"
          />
          <img
            src={aboutHeroEllipse}
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[126%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-52"
          />
          <img
            src={aboutHeroImage}
            alt="Naxatra Labs Electric Vehicle"
            className="absolute bottom-[6px] left-1/2 h-auto w-[83%] -translate-x-1/2 object-contain opacity-95"
          />
        </div>

        <div className="relative z-10" style={{ paddingLeft: '4.7vw', paddingTop: '48px' }}>
          <h1
            className="font-nexa text-white"
            style={{ fontSize: '26px', lineHeight: '1.46', fontWeight: 400, margin: 0, whiteSpace: 'nowrap' }}
          >
            <span className="text-white">
              <AnimatedTextReveal text="What" stagger={textStagger} />
            </span>
            {' '}
            <span style={{ color: '#4dd6c4' }}>
              <AnimatedTextReveal text={drivesText} delay={drivesDelay} stagger={textStagger} />
            </span>
          </h1>

          <p
            className="font-metro"
            style={{
              width: '56vw',
              fontSize: '12px',
              lineHeight: '16px',
              color: '#d9d9d9',
              fontWeight: 600,
              marginTop: '5px',
              marginBottom: 0,
            }}
          >
            Powering the Future with Efficient, Compact and High torque motors.
          </p>
        </div>

        <p
          className="absolute font-metro text-white z-10"
          style={{
            left: '4.7vw',
            top: '150px',
            width: '39.3vw',
            fontSize: '10px',
            lineHeight: '14px',
          }}
        >
          At Naxatra Labs, we understand that every application has unique requirements. They&apos;re engineered to fit your needs. We customize every detail to ensure optimal performance and efficiency.
        </p>
      </section>

      <section
        className="relative hidden w-full bg-black overflow-hidden md:block"
        style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
      >
        {/* Content */}
        <div
          className="relative mx-auto flex flex-wrap items-center justify-between"
          style={{
            maxWidth: '1920px',
            minHeight: 'inherit',
            padding: 'clamp(110px, 9.1vw, 174px) clamp(24px, 9.9vw, 191px) clamp(10px, 3.9vw, 74px)',
            gap: '40px',
          }}
        >
          {/* Left: text */}
          <div
            className="flex flex-col items-start"
            style={{ maxWidth: 'clamp(280px, 28vw, 538px)', gap: 'clamp(8px, 0.8vw, 16px)' }}
          >
            <h1
              className="font-nexa"
              style={{ fontSize: 'clamp(32px, 5.2vw, 100px)', lineHeight: '1.01', fontWeight: 600 }}
            >
              <span className="text-white"><AnimatedTextReveal text="What" stagger={textStagger} /></span>
              {' '}
              <span style={{ color: '#4dd6c4' }}><AnimatedTextReveal text={drivesText} delay={drivesDelay} stagger={textStagger} /></span>
            </h1>
            <p
              className="font-metro"
              style={{ fontSize: '20px', color: '#d9d9d9', lineHeight: '1.6', fontWeight: 600 }}
            >
              Powering the Future with Efficient, Compact and High torque motors.
            </p>
            <p
              className="font-metro"
              style={{ fontSize: '16px', color: '#d9d9d9', lineHeight: '1.6' }}
            >
              At Naxatra Labs, we understand that every application has unique requirements. They&apos;re engineered to fit your needs. We customize every detail to ensure optimal performance and efficiency.
            </p>
          </div>

          {/* Right: layered hero visual */}
          <div
            className="relative shrink-0"
            style={{
              width: 'clamp(340px, 45vw, 869px)',
              aspectRatio: '869 / 590',
            }}
          >
            <img
              src={aboutHeroGrid}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <img
              src={aboutHeroEllipse}
              alt=""
              className="absolute z-10 h-auto object-contain pointer-events-none"
              style={{
                width: 'clamp(300px, 38vw, 735px)',
                top: '50%',
                left: '48%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <img
              src={aboutHeroImage}
              alt="Naxatra Labs Electric Vehicle"
              className="absolute z-20 h-auto object-contain"
              style={{
                width: 'clamp(240px, 40.1vw, 770px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
