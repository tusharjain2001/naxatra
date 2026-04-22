import heroDevice from '../../../assets/images/blogs-hero-device.png';

export default function BlogsHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(420px, 51vw, 980px)' }}
    >
      {/* Decorative ellipse */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(200px, 28vw, 540px)',
          height: 'clamp(200px, 28vw, 540px)',
          top: '-10%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(77,214,196,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content row */}
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(80px, 8.3vw, 160px) clamp(24px, 10.5vw, 201px)',
          gap: '40px',
        }}
      >
        {/* Left: heading + subheading */}
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(300px, 52vw, 1000px)', gap: 'clamp(16px, 1.56vw, 30px)' }}
        >
          <h1
            className="font-nexa text-white"
            style={{
              fontSize: 'clamp(28px, 5.2vw, 100px)',
              lineHeight: '1.2',
              fontWeight: 400,
            }}
          >
            Get the latest{' '}
            <span style={{ color: '#4dd6c4' }}>updates and innovations</span>
            {' '}from Naxatra Labs.
          </h1>
          <p
            className="font-metro text-white"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              lineHeight: '1.5',
              opacity: 0.85,
            }}
          >
            Follow us on LinkedIn to stay ahead!
          </p>
        </div>

        {/* Right: device mockup */}
        <div
          className="relative flex-shrink-0 flex items-end justify-center"
          style={{
            width: 'clamp(180px, 24vw, 460px)',
            height: 'clamp(220px, 30vw, 580px)',
          }}
        >
          <img
            src={heroDevice}
            alt="Naxatra Labs LinkedIn"
            className="w-full h-full object-contain"
            style={{ transform: 'rotate(-15.26deg)', transformOrigin: 'bottom center' }}
          />
        </div>
      </div>
    </section>
  );
}
