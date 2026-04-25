import cardBorder from '../../../assets/images/tech-about-image.svg';
import techSectionTwo from '../../../assets/images/tech-sectiontwo.png';

export default function TechAboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 'clamp(360px, 28vw, 540px)' }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '-6%',
          transform: 'translateY(-50%)',
          width: 'clamp(340px, 38vw, 760px)',
          height: 'clamp(340px, 38vw, 760px)',
          background: 'radial-gradient(ellipse at center, rgba(77,214,196,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1840px',
          padding: 'clamp(34px, 3.8vw, 72px) clamp(20px, 4.2vw, 80px)',
          gap: 'clamp(28px, 3vw, 56px)',
        }}
      >
        <div className="relative flex-shrink-0" style={{ width: 'clamp(320px, 33.5vw, 650px)', marginBottom: '0' }}>
          <img
            src={cardBorder}
            alt=""
            className="absolute inset-0 h-full w-full pointer-events-none"
            style={{ objectFit: 'fill' }}
          />

          <div
            className="relative flex flex-col items-start"
            style={{
              padding: 'clamp(30px, 2.8vw, 54px) clamp(26px, 2.9vw, 48px)',
              gap: 'clamp(18px, 1.8vw, 30px)',
            }}
          >
            <div style={{ lineHeight: 0 }}>
              <p
                className="font-nexa capitalize"
                style={{ color: '#1863da', fontSize: 'clamp(28px, 2.65vw, 51px)', lineHeight: '1.1', marginBottom: '6px', fontWeight: 400 }}
              >
                Naxatra Labs™
              </p>
              <p
                className="font-nexa capitalize"
                style={{ color: '#000', fontSize: 'clamp(18px, 1.82vw, 35px)', lineHeight: '1.22', fontWeight: 400, maxWidth: '18ch' }}
              >
                Innovating the Future of Electric Mobility
              </p>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center">
              <img
                src={techSectionTwo}
                alt="Learn More About Our Tailored Solutions"
                className="block h-auto object-contain"
                style={{ width: 'clamp(220px, 24vw, 430px)' }}
              />
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 'clamp(320px, 35vw, 670px)', marginBottom: '0' }}>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(14px, 1.02vw, 19px)', lineHeight: '1.72', marginBottom: '1.35em' }}
          >
            Naxatra Labs™ is an innovation-driven EV powertrain technology company, dedicated to engineering high-performance, lightweight, and efficient solutions. We specialize in delivering powerful motor technologies for diverse verticals, including electric vehicles, agricultural machinery, and power tools.
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(14px, 1.02vw, 19px)', lineHeight: '1.72' }}
          >
            Backed by over four years of research and development, our solutions meet industry performance, durability, and efficiency standards. Our cutting-edge portfolio includes both axial and radial flux motor technologies, pushing the boundaries of electric mobility and sustainable innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
