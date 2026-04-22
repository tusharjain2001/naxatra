import cardBorder from '../../../assets/images/tech-about-image.svg';

export default function TechAboutSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ minHeight: 'clamp(420px, 32.1vw, 616px)' }}>
      {/* Background wave/glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '-10%',
          transform: 'translateY(-50%)',
          width: 'clamp(380px, 45vw, 867px)',
          height: 'clamp(380px, 45vw, 867px)',
          background: 'radial-gradient(ellipse at center, rgba(77,214,196,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative mx-auto flex flex-wrap items-center justify-between" style={{ maxWidth: '1720px', padding: 'clamp(40px, 5.2vw, 100px) clamp(24px, 5vw, 167px)' }}>
        {/* Left card */}
        <div className="relative flex-shrink-0" style={{ width: 'clamp(280px, 40.6vw, 778px)', marginBottom: '32px' }}>
          {/* Card shape background */}
          <img
            src={cardBorder}
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ objectFit: 'fill' }}
          />
          <div
            className="relative flex flex-col items-start"
            style={{
              padding: 'clamp(28px, 3.1vw, 60px) clamp(24px, 3.1vw, 60px)',
              gap: 'clamp(20px, 2.1vw, 40px)',
            }}
          >
            {/* Heading */}
            <div style={{ lineHeight: 0 }}>
              <p
                className="font-nexa capitalize"
                style={{ color: '#1863da', fontSize: 'clamp(28px, 3.28vw, 63px)', lineHeight: '1.2', marginBottom: '4px', fontWeight: 400 }}
              >
                Naxatra Labs™
              </p>
              <p
                className="font-nexa capitalize"
                style={{ color: '#000', fontSize: 'clamp(14px, 1.68vw, 32px)', lineHeight: '1.45', fontWeight: 400 }}
              >
                Innovating the Future of Electric Mobility
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
              style={{
                fontSize: 'clamp(12px, 1vw, 19px)',
                paddingInline: 'clamp(16px, 1.25vw, 24px)',
                paddingBlock: 'clamp(10px, 0.83vw, 16px)',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Learn More About Our Tailored Solutions
            </a>
          </div>
        </div>

        {/* Right text */}
        <div style={{ maxWidth: 'clamp(280px, 38.9vw, 747px)', marginBottom: '32px' }}>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7', marginBottom: '1em' }}
          >
            Naxatra Labs™ is an innovation-driven EV powertrain technology company, dedicated to engineering high-performance, lightweight, and efficient solutions. We specialize in delivering powerful motor technologies for diverse verticals, including electric vehicles, agricultural machinery, and power tools.
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
          >
            Backed by over four years of research and development, our solutions meet industry performance, durability, and efficiency standards. Our cutting-edge portfolio includes both axial and radial flux motor technologies, pushing the boundaries of electric mobility and sustainable innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
