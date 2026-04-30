import careersHeroGrid from '../../../assets/images/careers-hero-grid.png';
import careersHeroEllipse from '../../../assets/images/careers-hero-elllipse.png';
import careersHeroImage from '../../../assets/images/careers-hero-image.png';
import requestBrochure from '../../../assets/images/request-brochure.png';

export default function CareersHeroSection() {
  return (
    <>
      <section
        className="relative w-full bg-black overflow-hidden md:hidden"
        style={{ height: '268px' }}
      >
        <img
          src={careersHeroGrid}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />

        <img
          src={careersHeroImage}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '205px',
            height: 'auto',
            left: '50%',
            top: '44px',
            transform: 'translateX(-50%)',
          }}
        />

        <img
          src={careersHeroEllipse}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '352px',
            height: 'auto',
            left: '50%',
            top: '-42px',
            transform: 'translateX(-50%)',
            opacity: 0.55,
          }}
        />

        <h1
          className="absolute font-nexa text-white text-center"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '88px',
            width: 'min(350px, 87vw)',
            fontSize: '26px',
            lineHeight: '26px',
            fontWeight: 400,
          }}
        >
          <span>Join Us In</span>
          <br />
          <span style={{ color: '#4dd6c4' }}>The Future Together!</span>
        </h1>

        <a
          href="#contact"
          className="absolute"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '152px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src={requestBrochure}
            alt="Request Brochure"
            className="block object-contain"
            style={{ height: '27px', width: 'auto' }}
          />
        </a>
      </section>

      <section
        className="relative hidden w-full bg-black overflow-hidden md:block"
        style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
      >
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 'clamp(200px, 28vw, 540px)',
            height: 'clamp(200px, 28vw, 540px)',
            top: '-15%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(77,214,196,0.14) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          className="relative mx-auto flex flex-wrap items-center justify-between lg:flex-nowrap"
          style={{
            maxWidth: '1920px',
            minHeight: 'inherit',
            padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9.3vw, 179px)',
            gap: '40px',
          }}
        >
          {/* Left: heading + CTA */}
          <div
            className="flex flex-col items-start"
            style={{ maxWidth: 'clamp(280px, 40vw, 760px)', gap: 'clamp(24px, 2.5vw, 48px)' }}
          >
            <h1
              className="font-nexa"
              style={{ fontSize: 'clamp(32px, 5.2vw, 100px)', lineHeight: '1.01', fontWeight: 400 }}
            >
              <span className="text-white block">Join us in</span>
              <span style={{ color: '#4dd6c4' }}>The Future </span>
              <span className="text-white">Together!</span>
            </h1>

            <button type="button" aria-label="Request Brochure" className="block">
              <img
                src={requestBrochure}
                alt="Request Brochure"
                className="block h-auto object-contain"
                style={{ width: 'clamp(150px, 13.6vw, 262px)' }}
              />
            </button>
          </div>

          {/* Right: layered hero visual */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 'clamp(520px, 45vw, 869px)',
              aspectRatio: '869 / 601',
              marginLeft: 'auto',
            }}
          >
            <img
              src={careersHeroGrid}
              alt=""
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
            <img
              src={careersHeroEllipse}
              alt=""
              className="absolute z-10 h-auto object-contain pointer-events-none"
              style={{
                width: 'clamp(300px, 33vw, 635px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <img
              src={careersHeroImage}
              alt="Join Naxatra Labs"
              className="absolute z-20 h-auto object-contain"
              style={{
                width: 'clamp(240px, 34vw, 650px)',
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
