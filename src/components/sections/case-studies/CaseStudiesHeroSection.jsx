import techHeroGrid from '../../../assets/images/tech-hero-grid.png';
import techHeroEllipse from '../../../assets/images/case-hero-ellipse.png';
import techRightHero from '../../../assets/images/case-right-hero.png';

export default function CaseStudiesHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
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
          top: 'clamp(56px, 20vw, 190px)',
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
          top: 'clamp(16px, 5vw, 86px)',
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
            width: 'clamp(300px, 33vw, 635px)',
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
