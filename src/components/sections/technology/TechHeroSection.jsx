import techHeroGrid from '../../../assets/images/tech-hero-grid.png';
import techHeroEllipse from '../../../assets/images/tech-hero-ellipse.png';
import techRightHero from '../../../assets/images/tech-right-hero.png';
import connectNow from '../../../assets/images/connect-now.svg';

export default function TechHeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ height: '90vh' }}>
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
        <a
          href="#contact"
          className="self-start"
        >
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
  );
}
