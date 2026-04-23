import aboutHeroGrid from '../../../assets/images/about-hero-grid.png';
import aboutHeroEllipse from '../../../assets/images/about-hero-ellipse.png';
import aboutHeroImage from '../../../assets/images/about-hero-image.png';

export default function AboutHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(380px, 42.6vw, 818px)' }}
    >
      {/* Content */}
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(60px, 6.5vw, 124px) clamp(24px, 9.9vw, 191px)',
          gap: '40px',
        }}
      >
        {/* Left: text */}
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(280px, 28vw, 538px)', gap: 'clamp(16px, 1.67vw, 32px)' }}
        >
          <h1
            className="font-nexa"
            style={{ fontSize: 'clamp(32px, 5.2vw, 100px)', lineHeight: '1.01', fontWeight: 400 }}
          >
            <span className="text-white">What </span>
            <span style={{ color: '#4dd6c4' }}>Drives Us?</span>
          </h1>
          <p
            className="font-metro"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', color: '#d9d9d9', lineHeight: '1.6', fontWeight: 600 }}
          >
            Powering the Future with Efficient, Compact and High torque motors.
          </p>
          <p
            className="font-metro"
            style={{ fontSize: 'clamp(12px, 1.04vw, 20px)', color: '#d9d9d9', lineHeight: '1.6' }}
          >
            At Naxatra Labs, we understand that every application has unique requirements. They're engineered to fit your needs. We customize every detail to ensure optimal performance and efficiency.
          </p>
        </div>

        {/* Right: layered hero visual */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(340px, 45vw, 869px)',
            aspectRatio: '869 / 590',
          }}
        >
          <img
            src={aboutHeroGrid}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          <img
            src={aboutHeroEllipse}
            alt=""
            className="absolute z-10 h-auto object-contain pointer-events-none"
            style={{
              width: 'clamp(300px, 38vw, 735px)',
              top: '50%',
              left: '48%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={aboutHeroImage}
            alt="Naxatra Labs Electric Vehicle"
            className="absolute z-20 h-auto object-contain"
            style={{
              width: 'clamp(240px, 40.1vw, 770px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
