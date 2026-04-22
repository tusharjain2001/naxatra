import ctaBg from '../../assets/images/cta-bg.svg';
import ctaBrowseBtn from '../../assets/images/cta-browse-btn.svg';
import ctaArrow from '../../assets/images/cta-arrow.svg';

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
          {/* Badge with brackets */}
          <div className="flex items-center gap-3" style={{ marginBottom: '24px' }}>
            <div style={{ width: '8px', height: '42px', borderLeft: '2px solid rgba(255,255,255,0.7)' }} />
            <p
              className="font-metro uppercase"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '24px', lineHeight: '24.45px' }}
            >
              One Size Doesn&apos;t Fit All. We Customize.
            </p>
            <div style={{ width: '8px', height: '42px', borderLeft: '2px solid rgba(255,255,255,0.7)' }} />
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
            className="flex items-center justify-center gap-2 font-nexa capitalize"
            style={{
              display: 'flex',
              background: '#1863da',
              color: '#fff',
              width: '528px',
              height: '72px',
              padding: '16px 24px',
              fontSize: '24px',
              lineHeight: '20px',
              letterSpacing: '0.24px',
              borderRadius: '4px',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            Learn More About Our Tailored Solutions
            <img src={ctaArrow} alt="" style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
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
