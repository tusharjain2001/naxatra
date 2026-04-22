import heroMotor from '../../../assets/images/hero-motor.png';
import heroOverlay from '../../../assets/images/hero-overlay.svg';

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
          top: 'clamp(130px, 36.4vw, 350px)',
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

      {/* Right: Motor diagram */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 'clamp(80px, 13.6vw, 214px)',
          right: 'clamp(40px, 6.5vw, 100px)',
          width: 'clamp(220px, 32vw, 620px)',
          aspectRatio: '729 / 537',
        }}
      >
        <img
          src={heroMotor}
          alt="Motor Diagram"
          className="absolute object-contain"
          style={{
            width: '76.7%',
            height: '95.3%',
            bottom: 0,
            left: '11.5%',
            right: '11.8%',
            top: '4.7%',
          }}
        />
        <img src={heroOverlay} alt="" className="absolute inset-0 w-full h-full" />
      </div>
    </section>
  );
}
