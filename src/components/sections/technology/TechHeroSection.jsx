import techHeroGrid from '../../../assets/images/tech-hero-grid.png';
import techHeroEllipse from '../../../assets/images/tech-hero-ellipse.png';
import techRightHero from '../../../assets/images/tech-right-hero.png';
import connectNow from '../../../assets/images/connect-now.svg';

export default function TechHeroSection() {
  return (
    <>
      {/* ── MOBILE LAYOUT (pixel-matched to Figma node 3309:3308, frame 402×268px) ── */}
      <section
        className="relative w-full bg-black overflow-hidden md:hidden"
        style={{ height: '268px' }}
      >
        {/* Large background — motor render with glow (Group1000005649)
            ~352×352px, centered, starts at top: -46px */}
        <img
          src={techRightHero}
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

        {/* Circuit ellipse overlay (Group1000005662): 140×144px, centered, opacity 0.7 */}
        <img
          src={techHeroEllipse}
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

        {/* Heading: top 77px, 26px, centered, width 350px */}
        <h1
          className="absolute font-nexa capitalize text-white text-center"
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
          {'From '}
          <span style={{ color: '#4dd6c4' }}>Concept to Creation,</span>
          {' Driving EV Innovation'}
        </h1>

        {/* Subtitle: top 143px, 10px Metropolis, centered */}
        <p
          className="absolute font-metro text-white text-center whitespace-nowrap"
          style={{
            left: '50%',
            transform: 'translateX(calc(-50% - 5px))',
            top: '143px',
            fontSize: '10px',
            lineHeight: '14px',
          }}
        >
          Lighter, Stronger, Smarter Motors for the Future.
        </p>

        {/* Connect Now button: centered, top 188px, height 27px */}
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
            src={connectNow}
            alt="Connect Now"
            className="block object-contain"
            style={{ height: '27px', width: 'auto' }}
          />
        </a>
      </section>

      {/* ── DESKTOP LAYOUT (unchanged) ── */}
      <section className="relative w-full bg-black overflow-hidden hidden md:block" style={{ height: '90vh' }}>
        {/* Background radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            width: 'clamp(400px, 50vw, 867px)',
            height: 'clamp(400px, 50vw, 867px)',
            background: 'radial-gradient(ellipse at center, rgba(77,214,196,0.2) 0%, rgba(77,214,196,0.08) 38%, rgba(0,0,0,0) 72%)',
            borderRadius: '50%',
          }}
        />

        {/* Left content */}
        <div
          className="absolute flex flex-col"
          style={{
            left: 'clamp(40px, 10vw, 191px)',
            top: 'clamp(96px, 24vw, 240px)',
            gap: 'clamp(32px, 4.2vw, 20px)',
          }}
        >
          {/* Heading + subtitle */}
          <div className="flex flex-col" style={{ gap: 'clamp(12px, 1.67vw, 10px)' }}>
            <h1
              className="font-nexa capitalize text-white"
              style={{
                fontSize: 'clamp(36px, 5.2vw, 100px)',
                lineHeight: '1.01',
                maxWidth: 'clamp(300px, 49.7vw, 954px)',
                fontWeight: 600,
              }}
            >
              {'From '}
              <span style={{ color: '#4dd6c4' }}>Concept to Creation,</span>
              {' Driving EV Innovation'}
            </h1>
            <p
              className="font-metro text-white"
              style={{ fontSize: 'clamp(14px, 1.25vw, 24px)', lineHeight: '1.5', whiteSpace: 'nowrap' }}
            >
              Lighter, Stronger, Smarter Motors for the Future.
            </p>
          </div>

          {/* CTA image */}
          <a href="#contact" className="self-start">
            <img
              src={connectNow}
              alt="Connect Now"
              className="block h-auto object-contain"
              style={{ width: 'clamp(160px, 18vw, 160px)' }}
            />
          </a>
        </div>

        {/* Right: Motor image */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 'clamp(56px, 9vw, 130px)',
            right: 'clamp(-24px, 1vw, 18px)',
            width: 'clamp(520px, 45vw, 867px)',
            aspectRatio: '867 / 598',
          }}
        >
          <img
            src={techHeroGrid}
            alt=""
            className="absolute inset-0 w-full h-full object-fill"
          />
          <img
            src={techHeroEllipse}
            alt="Motor Diagram"
            className="absolute z-10 block h-auto object-contain"
            style={{
              width: 'clamp(150px, 17vw, 325px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={techRightHero}
            alt="Motor Render"
            className="absolute z-20 block h-auto object-contain"
            style={{
              width: 'clamp(150px, 17vw, 325px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </section>
    </>
  );
}
