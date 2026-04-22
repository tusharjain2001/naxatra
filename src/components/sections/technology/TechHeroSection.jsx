import heroMotor from '../../../assets/images/hero-motor.png';
import heroOverlay from '../../../assets/images/hero-overlay.svg';

export default function TechHeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: 'clamp(520px, 51vw, 979px)' }}>
      {/* Background radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          width: 'clamp(400px, 50vw, 867px)',
          height: 'clamp(400px, 50vw, 867px)',
          background: 'radial-gradient(ellipse at center, rgba(24,99,218,0.18) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Left content */}
      <div
        className="absolute flex flex-col"
        style={{
          left: 'clamp(40px, 10vw, 191px)',
          top: 'clamp(120px, 31.4vw, 307px)',
          gap: 'clamp(32px, 4.2vw, 80px)',
        }}
      >
        {/* Heading + subtitle */}
        <div className="flex flex-col" style={{ gap: 'clamp(12px, 1.67vw, 32px)' }}>
          <h1
            className="font-nexa capitalize text-white"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 100px)',
              lineHeight: '1.01',
              maxWidth: 'clamp(300px, 49.7vw, 954px)',
              fontWeight: 400,
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

        {/* CTA button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center self-start bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
          style={{
            fontSize: 'clamp(16px, 1.25vw, 24px)',
            paddingInline: 'clamp(16px, 1.25vw, 24px)',
            paddingBlock: 'clamp(10px, 0.83vw, 16px)',
            letterSpacing: '0.01em',
          }}
        >
          Connect Now
        </a>
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
          className="absolute w-[76.7%] h-[95.3%] object-contain"
          style={{ bottom: 0, left: '11.5%', right: '11.8%', top: '4.7%' }}
        />
        <img src={heroOverlay} alt="" className="absolute inset-0 w-full h-full" />
      </div>
    </section>
  );
}
