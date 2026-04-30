import heroGrid from '../../../assets/images/contact-hero-grid.png';
import heroEllipse from '../../../assets/images/contact-hero-ellipse.png';
import heroImage from '../../../assets/images/contact-hero-image.png';
import requestBrochure from '../../../assets/images/request-brochure.png';

export default function ContactHeroSection() {
  return (
    <>
      <section
        className="relative w-full bg-black overflow-hidden md:hidden"
        style={{ height: '268px' }}
      >
        <img
          src={heroImage}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '152px',
            height: 'auto',
            left: '50%',
            top: '70px',
            transform: 'translateX(calc(-50% - 5.84px))',
          }}
        />

        <img
          src={heroEllipse}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '352px',
            height: 'auto',
            left: '50%',
            top: '-50px',
            transform: 'translateX(calc(-50% - 5.84px))',
            opacity: 0.7,
          }}
        />

        <h1
          className="absolute font-nexa text-white text-center"
          style={{
            left: '50%',
            transform: 'translateX(calc(-50% - 5.5px))',
            top: '77px',
            width: 'min(350px, 87vw)',
            fontSize: '26px',
            lineHeight: '26px',
            fontWeight: 400,
          }}
        >
          <span>Let's Power The</span>
          <br />
          <span style={{ color: '#4dd6c4' }}>Future Together!</span>
        </h1>

        <a
          href="#contact"
          className="absolute"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '188px',
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
        {/* Content */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: '1920px',
            minHeight: 'inherit',
            padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9.3vw, 179px)',
          }}
        >
          {/* Left: text + CTA */}
          <div
            className="absolute z-20 flex flex-col items-start"
            style={{
              maxWidth: 'clamp(280px, 38vw, 730px)',
              gap: 'clamp(24px, 2.5vw, 48px)',
              left: 'clamp(40px, 10vw, 191px)',
              top: 'clamp(64px, 15vw, 250px)',
            }}
          >
            <h1
              className="font-nexa"
              style={{
                fontSize: 'clamp(28px, 5.2vw, 100px)',
                lineHeight: '1.01',
                fontWeight: 400,
              }}
            >
              <span className="text-white">Let's Power The </span>
              <span style={{ color: '#4dd6c4' }}>Future Together!</span>
            </h1>

            <button type="button" aria-label="Request Brochure" className="block">
              <img
                src={requestBrochure}
                alt="Request Brochure"
                className="block"
                style={{ width: 'clamp(150px, 13.6vw, 262px)', height: 'auto' }}
              />
            </button>
          </div>

          {/* Right: layered hero artwork */}
          <div
            className="absolute"
            style={{
              width: 'clamp(520px, 45vw, 867px)',
              aspectRatio: '869 / 601',
              top: 'clamp(44px, 7.2vw, 138px)',
              right: 'clamp(-10px, 3.2vw, 62px)',
            }}
          >
            <img
              src={heroGrid}
              alt=""
              className="absolute object-contain"
              style={{
                width: '100%',
                height: '100%',
                left: '0%',
                top: '0%',
                opacity: 1,
                filter: 'brightness(1.25) saturate(1.2)',
              }}
            />
            <img
              src={heroEllipse}
              alt=""
              className="absolute object-contain"
              style={{
                width: 'clamp(390px, 39vw, 750px)',
                left: '48%',
                top: '52%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.95,
              }}
            />
            <img
              src={heroImage}
              alt="Naxatra Labs electric mobility wireframe"
              className="absolute object-contain"
              style={{
                width: 'clamp(430px, 44vw, 845px)',
                left: '47%',
                top: '54%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
