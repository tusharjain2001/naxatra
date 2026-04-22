import heroMotor from '../../../assets/images/hero-motor.png';
import heroOverlay from '../../../assets/images/hero-overlay.svg';

export default function CaseStudyDetailHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: 'clamp(400px, 36.2vw, 695px)' }}>
      {/* Background glow right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', right: '-5%', transform: 'translateY(-50%)',
          width: 'clamp(300px, 45vw, 867px)', height: 'clamp(300px, 45vw, 867px)',
          background: 'radial-gradient(ellipse at center, rgba(77,214,196,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Left content */}
      <div
        className="absolute flex flex-col"
        style={{
          left: 'clamp(40px, 10vw, 191px)',
          top: 'clamp(100px, 16vw, 307px)',
          gap: 'clamp(12px, 0.83vw, 16px)',
          maxWidth: 'clamp(300px, 59.2vw, 1137px)',
        }}
      >
        <p
          className="font-metro uppercase"
          style={{ color: '#4dd6c4', fontSize: 'clamp(14px, 1.25vw, 24px)', lineHeight: '1.27', letterSpacing: '0.04em' }}
        >
          Case Study
        </p>
        <h1
          className="font-nexa capitalize text-white"
          style={{ fontSize: 'clamp(26px, 2.81vw, 54px)', lineHeight: '1.26', fontWeight: 400 }}
        >
          Boosting Power Tool Performance with Naxatra Labs' Advanced BLDC Motor Solution
        </h1>
      </div>

      {/* Right: Motor diagram */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 'clamp(60px, 6.6vw, 100px)', right: 'clamp(30px, 5vw, 80px)',
          width: 'clamp(180px, 26vw, 500px)', aspectRatio: '729 / 537', opacity: 0.6,
        }}
      >
        <img src={heroMotor} alt="" className="absolute object-contain"
          style={{ width: '76.7%', height: '95.3%', bottom: 0, left: '11.5%', top: '4.7%' }} />
        <img src={heroOverlay} alt="" className="absolute inset-0 w-full h-full" />
      </div>
    </section>
  );
}
