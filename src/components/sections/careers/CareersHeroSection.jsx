export default function CareersHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
    >
      {/* Decorative glow rings */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(300px, 43vw, 826px)',
          height: 'clamp(300px, 43vw, 826px)',
          top: '50%',
          right: '-8%',
          transform: 'translateY(-50%) rotate(-45deg)',
          border: '1px solid rgba(77,214,196,0.25)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(200px, 28vw, 540px)',
          height: 'clamp(200px, 28vw, 540px)',
          top: '-15%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(77,214,196,0.14) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-wrap items-center"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9.3vw, 179px)',
          gap: '40px',
        }}
      >
        {/* Left: heading + CTA */}
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(280px, 40vw, 760px)', gap: 'clamp(24px, 2.5vw, 48px)' }}
        >
          <h1
            className="font-nexa"
            style={{ fontSize: 'clamp(32px, 5.2vw, 100px)', lineHeight: '1.01', fontWeight: 400 }}
          >
            <span className="text-white block">Join us in</span>
            <span style={{ color: '#4dd6c4' }}>The Future </span>
            <span className="text-white">Together!</span>
          </h1>

          <button
            className="inline-flex items-center justify-center bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              paddingInline: 'clamp(16px, 1.25vw, 24px)',
              paddingBlock: 'clamp(10px, 0.83vw, 16px)',
              letterSpacing: '0.01em',
            }}
          >
            Request Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
