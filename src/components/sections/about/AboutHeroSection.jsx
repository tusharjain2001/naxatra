import heroBike from '../../../assets/images/about-hero-bike.png';

export default function AboutHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
    >
      {/* Decorative ellipse glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(300px, 43vw, 826px)',
          height: 'clamp(300px, 43vw, 826px)',
          top: '50%',
          right: '-6%',
          transform: 'translateY(-50%) rotate(-45deg)',
          border: '1px solid rgba(77,214,196,0.2)',
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9.9vw, 191px)',
          gap: '40px',
        }}
      >
        {/* Left: text */}
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(280px, 28vw, 538px)', gap: 'clamp(16px, 1.67vw, 32px)' }}
        >
          <h1
            className="font-nexa"
            style={{ fontSize: 'clamp(32px, 5.2vw, 100px)', lineHeight: '1.01', fontWeight: 400 }}
          >
            <span className="text-white">What </span>
            <span style={{ color: '#4dd6c4' }}>Drives Us?</span>
          </h1>
          <p
            className="font-metro"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', color: '#d9d9d9', lineHeight: '1.6', fontWeight: 600 }}
          >
            Powering the Future with Efficient, Compact and High torque motors.
          </p>
          <p
            className="font-metro"
            style={{ fontSize: 'clamp(12px, 1.04vw, 20px)', color: '#d9d9d9', lineHeight: '1.6' }}
          >
            At Naxatra Labs, we understand that every application has unique requirements. They're engineered to fit your needs. We customize every detail to ensure optimal performance and efficiency.
          </p>
        </div>

        {/* Right: EV bike */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(240px, 40.1vw, 770px)',
            height: 'clamp(160px, 27.3vw, 524px)',
          }}
        >
          <img
            src={heroBike}
            alt="Naxatra Labs Electric Vehicle"
            className="w-full h-full object-contain"
            style={{ opacity: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
}
