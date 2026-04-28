import cardBorder from '../../../assets/images/tech-about-image.svg';
import techSectionTwo from '../../../assets/images/tech-sectiontwo.png';

export default function TechAboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: 'clamp(220px, 18vw, 340px)' }}>
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
        className="relative mx-auto flex flex-wrap items-center justify-center"
        style={{
          maxWidth: '1840px',
          padding: 'clamp(20px, 2.2vw, 42px) clamp(20px, 4.2vw, 80px)',
          gap: 'clamp(16px, 3vw, 56px)',
        }}
      >
        <div className="relative flex-shrink-0" style={{ width: 'clamp(320px, 40.5vw, 778px)', minHeight: 'clamp(180px, 18.8vw, 361px)', marginBottom: '0' }}>
          <img
            src={cardBorder}
            alt=""
            className="absolute inset-0 h-full w-full pointer-events-none"
            style={{ objectFit: 'fill' }}
          />

          <div
            className="relative flex flex-col items-start justify-center h-full"
            style={{
              padding: 'clamp(28px, 2.8vw, 54px) clamp(32px, 3.2vw, 62px)',
              gap: 'clamp(20px, 2.5vw, 48px)',
            }}
          >
            <div style={{ lineHeight: 0 }}>
              <p
                className="font-nexa capitalize"
                style={{ color: '#1863da', fontSize: 'clamp(28px, 3.23vw, 62px)', lineHeight: '1.1', marginBottom: '5px', fontWeight: 400 }}
              >
                Naxatra Labs™
              </p>
              <p
                className="font-nexa capitalize"
                style={{ color: '#000', fontSize: 'clamp(16px, 1.67vw, 32px)', lineHeight: '1.22', fontWeight: 400 }}
              >
                Innovating the Future of Electric Mobility
              </p>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center">
              <img
                src={techSectionTwo}
                alt="Learn More About Our Tailored Solutions"
                className="block h-auto object-contain"
                style={{ width: 'clamp(200px, 22vw, 420px)' }}
              />
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 'clamp(300px, 35vw, 670px)', marginBottom: '0' }}>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', lineHeight: '1.65', marginBottom: '1.35em' }}
          >
            Naxatra Labs™ is an innovation-driven EV powertrain technology company, dedicated to engineering high-performance, lightweight, and efficient solutions. We specialize in delivering powerful motor technologies for diverse verticals, including electric vehicles, agricultural machinery, and power tools.
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', lineHeight: '1.65' }}
          >
            Backed by over four years of research and development, our solutions meet industry performance, durability, and efficiency standards. Our cutting-edge portfolio includes both axial and radial flux motor technologies, pushing the boundaries of electric mobility and sustainable innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
