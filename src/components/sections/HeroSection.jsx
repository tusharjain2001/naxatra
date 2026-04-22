import heroBg from '../../assets/images/hero-bg.svg';
import heroOverlay from '../../assets/images/hero-overlay.svg';
import heroMotor from '../../assets/images/hero-motor.png';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ paddingTop: '116px' }}>
      {/* Hero grid lines */}
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-40" />

      {/* Main content area with cut-corner SVG bg */}
      <div className="relative mx-auto" style={{ maxWidth: '1920px', height: '879px' }}>
        {/* Cut-corner background shape */}
        <div className="absolute inset-[2.62%_0]">
          <img src={heroBg} alt="" className="w-full h-full" style={{ display: 'block' }} />
        </div>

        {/* Left text content */}
        <div className="absolute" style={{ left: '192px', top: '134px', width: '740px' }}>
          <h1 className="font-nexa font-light" style={{ fontSize: '120px', lineHeight: '109px' }}>
            <span style={{ color: '#1863da' }}>Advanced </span>
            <span style={{ color: '#000000' }}>Motors &amp; Controllers</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="absolute font-metro" style={{ left: '192px', top: '502px', color: '#515151', fontSize: '24px', lineHeight: '85px' }}>
          Powering the Future of Electric Mobility
        </div>

        {/* CTA Button */}
        <a
          href="#products"
          className="absolute flex items-center justify-center rounded capitalize font-nexa"
          style={{
            left: '192px',
            top: '709px',
            background: '#1863da',
            color: 'white',
            padding: '16px 24px',
            fontSize: '24px',
            lineHeight: '20px',
            letterSpacing: '0.24px',
            textDecoration: 'none',
          }}
        >
          Explore Options
        </a>

        {/* Right motor image with frame */}
        <div className="absolute" style={{ left: '956px', top: '214px', width: '727px', height: '535px' }}>
          {/* Motor image */}
          <div
            className="absolute"
            style={{
              left: '11.55%',
              right: '11.83%',
              top: '25px',
              bottom: '0',
            }}
          >
            <img
              src={heroMotor}
              alt="Advanced Motor"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Corner bracket overlay frame */}
          <img
            src={heroOverlay}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}
