import heroVehicle from '../../../assets/images/contact-hero-vehicle.png';

export default function ContactHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
    >
      {/* Decorative ellipse glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(200px, 30vw, 580px)',
          height: 'clamp(200px, 30vw, 580px)',
          top: '-15%',
          right: '18%',
          background: 'radial-gradient(circle, rgba(77,214,196,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9.3vw, 179px)',
          gap: '40px',
        }}
      >
        {/* Left: text + CTA */}
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(280px, 34.6vw, 664px)', gap: 'clamp(24px, 2.5vw, 48px)' }}
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

          <button
            className="inline-flex items-center justify-center bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              paddingInline: 'clamp(16px, 1.25vw, 24px)',
              paddingBlock: 'clamp(10px, 0.83vw, 16px)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Request Brochure
          </button>
        </div>

        {/* Right: vehicle wireframe */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(240px, 36.5vw, 700px)',
            height: 'clamp(160px, 25.1vw, 482px)',
          }}
        >
          <img
            src={heroVehicle}
            alt="Naxatra Labs Electric Vehicle"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
