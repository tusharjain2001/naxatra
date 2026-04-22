import ctaBg from '../../assets/images/cta-bg.svg';
import ctaBrowseBtn from '../../assets/images/cta-browse-btn.svg';
import learnMore from '../../assets/images/learn-more.png';
import oneSize from '../../assets/images/one-size.png';

export default function CTASection() {
  return (
    <section className="relative w-full" style={{ height: '616px' }}>
      {/* Dark cut-corner background */}
      <img
        src={ctaBg}
        alt=""
        className="absolute"
        style={{ top: '53px', left: '74px', width: '1772px', height: '510px', display: 'block' }}
      />

      {/* Content */}
      <div
        className="absolute"
        style={{
          top: '160px',
          left: '210px',
          right: '171px',
          display: 'grid',
          gridTemplateColumns: '700px 1fr',
          gap: '157px',
        }}
      >
        {/* Left */}
        <div>
          {/* Badge */}
          <div style={{ marginBottom: '24px' }}>
            <img
              src={oneSize}
              alt="One Size Doesn't Fit All. We Customize."
              style={{ height: '42px', width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>

          {/* Heading */}
          <h2 className="font-nexa capitalize" style={{ fontSize: '68.35px', lineHeight: '86px' }}>
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
              fontSize: '19.54px',
              lineHeight: '30.39px',
              marginBottom: '31px',
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
              width: '528px',
              height: '72px',
              display: 'block',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            <img
              src={learnMore}
              alt=""
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
            />
          </a>

          {/* Browse button with cut-corner bg */}
          <div className="relative" style={{ width: '373px', height: '72px' }}>
            <img
              src={ctaBrowseBtn}
              alt=""
              className="absolute inset-0 w-full h-full"
              style={{ display: 'block' }}
            />
            <a
              href="#products"
              className="relative z-10 flex items-center justify-center font-nexa capitalize w-full h-full"
              style={{
                color: '#fff',
                fontSize: '24px',
                lineHeight: '20px',
                letterSpacing: '0.24px',
                textDecoration: 'none',
              }}
            >
              Browse our motor catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
