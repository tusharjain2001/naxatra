import ctaBg from '../../assets/images/cta-bg.svg';
import learnMore from '../../assets/images/learn-more.png';
import browseOur from '../../assets/images/browse-our.png';
import oneSize from '../../assets/images/one-size.png';

export default function CTASection() {
  return (
    <section className="relative w-full" style={{ height: 'clamp(460px, 32.08vw, 616px)' }}>
      {/* Dark cut-corner background */}
      <img
        src={ctaBg}
        alt=""
        className="absolute"
        style={{
          top: 'clamp(40px, 2.76vw, 53px)',
          left: 'clamp(24px, 3.85vw, 74px)',
          width: 'calc(100% - clamp(48px, 7.7vw, 148px))',
          height: 'clamp(360px, 26.56vw, 510px)',
          display: 'block',
        }}
      />

      {/* Content */}
      <div
        className="absolute"
        style={{
          top: 'clamp(112px, 8.33vw, 160px)',
          left: 'clamp(72px, 10.94vw, 210px)',
          right: 'clamp(72px, 8.91vw, 171px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(420px, 0.95fr) minmax(360px, 0.75fr)',
          gap: 'clamp(56px, 8.18vw, 157px)',
        }}
      >
        {/* Left */}
        <div>
          {/* Badge */}
          <div style={{ marginBottom: '24px' }}>
            <img
              src={oneSize}
              alt="One Size Doesn't Fit All. We Customize."
              style={{ height: 'clamp(28px, 2.19vw, 42px)', width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>

          {/* Heading */}
          <h2 className="font-nexa capitalize" style={{ fontSize: 'clamp(44px, 3.56vw, 68.35px)', lineHeight: 1.26 }}>
            <span style={{ color: '#fff' }}>From Ground to Sky, </span>
            <span style={{ color: '#1863da' }}>We Power It All</span>
          </h2>
        </div>

        {/* Right */}
        <div style={{ paddingTop: '0' }}>
          <p
            className="font-metro"
            style={{
              color: '#fff',
              fontSize: 'clamp(15px, 1.02vw, 19.54px)',
              lineHeight: 1.56,
              marginBottom: 'clamp(20px, 1.61vw, 31px)',
            }}
          >
            Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions,
            our motors deliver unmatched durability and performance wherever the journey takes you.
          </p>

          {/* Learn More button */}
          <a
            href="#contact"
            aria-label="Learn More About Our Tailored Solutions"
            style={{
              width: 'min(100%, 528px)',
              height: 'clamp(54px, 3.75vw, 72px)',
              display: 'block',
              textDecoration: 'none',
              marginBottom: '16px',
              marginLeft: 'calc(clamp(32px, 2.08vw, 40px) * -1)',
            }}
          >
            <img
              src={learnMore}
              alt=""
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
            />
          </a>

          {/* Browse button */}
          <a
            href="#products"
            aria-label="Browse Our Motor Catalog"
            style={{
              width: 'min(100%, 373px)',
              height: 'clamp(54px, 3.75vw, 72px)',
              display: 'block',
              textDecoration: 'none',
              marginLeft: 'calc(clamp(32px, 2.08vw, 40px) * -1)',
            }}
          >
            <img
              src={browseOur}
              alt=""
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
