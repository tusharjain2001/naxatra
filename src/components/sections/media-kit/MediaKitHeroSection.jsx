export default function MediaKitHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
    >
      {/* Decorative wireframe globe — built with CSS rings */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%) rotate(-45deg)',
          width: 'clamp(300px, 45.2vw, 867px)',
          height: 'clamp(200px, 31.2vw, 599px)',
          opacity: 0.35,
        }}
      >
        {/* Outer ellipse rings */}
        {[100, 82, 64, 46, 28].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              border: '1px solid rgba(77,214,196,0.7)',
              width: `${size}%`,
              height: `${size}%`,
              top: `${(100 - size) / 2}%`,
              left: `${(100 - size) / 2}%`,
            }}
          />
        ))}
        {/* Horizontal lines through globe */}
        {[20, 35, 50, 65, 80].map((top, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${top}%`,
              left: '5%',
              width: '90%',
              height: '1px',
              backgroundColor: 'rgba(77,214,196,0.4)',
            }}
          />
        ))}
        {/* Vertical lines through globe */}
        {[20, 35, 50, 65, 80].map((left, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: '5%',
              height: '90%',
              width: '1px',
              backgroundColor: 'rgba(77,214,196,0.4)',
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(200px, 28vw, 540px)',
          height: 'clamp(200px, 28vw, 540px)',
          top: '-10%',
          right: '8%',
          background: 'radial-gradient(circle, rgba(77,214,196,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-wrap items-center"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9vw, 173px)',
          gap: '40px',
        }}
      >
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(280px, 38.4vw, 737px)', gap: 'clamp(24px, 2.5vw, 48px)' }}
        >
          <h1
            className="font-nexa"
            style={{ fontSize: 'clamp(32px, 5.2vw, 100px)', lineHeight: '1.01', fontWeight: 400 }}
          >
            <span style={{ color: '#4dd6c4' }}>Naxatra </span>
            <span className="text-white">Media </span>
            <span className="text-white block">Kit 2026</span>
          </h1>

          <a
            href="#download"
            className="inline-flex items-center justify-center bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              paddingInline: 'clamp(16px, 1.25vw, 24px)',
              paddingBlock: 'clamp(10px, 0.83vw, 16px)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Download kit
          </a>
        </div>
      </div>
    </section>
  );
}
