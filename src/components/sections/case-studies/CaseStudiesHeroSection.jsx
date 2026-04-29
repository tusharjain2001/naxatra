import techHeroGrid from '../../../assets/images/tech-hero-grid.png';
import techHeroEllipse from '../../../assets/images/case-hero-ellipse.png';
import techRightHero from '../../../assets/images/case-right-hero.png';
import mobileHero from '../../../assets/images/case-study-mobile-hero-section.svg';

export default function CaseStudiesHeroSection() {
  return (
    <>
      <section className="relative w-full bg-black overflow-hidden md:hidden">
        <img
          src={mobileHero}
          alt="Engineering Real-World Electric Mobility"
          className="block w-full h-auto"
        />
      </section>

      <section
        className="relative hidden w-full bg-black overflow-hidden md:block"
        style={{ minHeight: 'clamp(520px, 51vw, 979px)' }}
      >
        {/* Background radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            width: 'clamp(400px, 50vw, 867px)',
            height: 'clamp(400px, 50vw, 867px)',
            background:
              'radial-gradient(ellipse at center, rgba(24,99,218,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Left content */}
        <div
          className="absolute flex flex-col"
          style={{
            left: 'clamp(40px, 10vw, 191px)',
            top: 'clamp(150px, 16.2vw, 310px)',
            gap: 'clamp(16px, 1.67vw, 32px)',
          }}
        >
          <h1
            className="font-nexa capitalize text-white"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 100px)',
              lineHeight: '1.01',
              maxWidth: 'clamp(300px, 43.8vw, 841px)',
              fontWeight: 400,
            }}
          >
            {'Engineering '}
            <span style={{ color: '#4dd6c4' }}>Real-World</span>
            {' Electric Mobility'}
          </h1>
          <p
            className="font-metro text-white"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              lineHeight: '1.5',
            }}
          >
            Lighter, Stronger, Smarter Motors for the Future.
          </p>
        </div>

        {/* Right: Motor image */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 'clamp(106px, 9.2vw, 176px)',
            right: 'clamp(-24px, 1vw, 18px)',
            width: 'clamp(598px, 51.9vw, 997px)',
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
              width: 'clamp(345px, 38vw, 730px)',
              top: '51%',
              left: '47%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={techRightHero}
            alt="Motor Render"
            className="absolute z-20 block h-auto object-contain"
            style={{
              width: 'clamp(173px, 19.5vw, 374px)',
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
