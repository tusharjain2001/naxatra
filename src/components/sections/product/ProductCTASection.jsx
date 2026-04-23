import ctaBg from '../../../assets/images/product-cta-bg.png';
import motorHero from '../../../assets/images/product-motor-hero.png';

export default function ProductCTASection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'clamp(260px, 32.1vw, 616px)' }}
    >
      {/* Background image */}
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.1) 100%)' }}
      />

      {/* Motor image on the right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg)',
          width: 'clamp(200px, 35.9vw, 690px)',
          height: 'clamp(150px, 26.6vw, 510px)',
        }}
      >
        <img
          src={motorHero}
          alt=""
          className="w-full h-full object-contain"
          style={{ opacity: 0.75 }}
        />
      </div>

      {/* Text content */}
      <div
        className="relative"
        style={{
          maxWidth: '1060px',
          padding: 'clamp(48px, 8.1vw, 156px) clamp(20px, 5.6vw, 108px) clamp(48px, 8.1vw, 156px) clamp(20px, 11.3vw, 217px)',
          zIndex: 1,
        }}
      >
        <h2
          className="font-nexa capitalize"
          style={{
            fontSize: 'clamp(20px, 2.1vw, 40px)',
            lineHeight: '1.45',
            color: '#fff',
            marginBottom: 'clamp(28px, 2.97vw, 57px)',
          }}
        >
          Explore{' '}
          <span style={{ color: '#4dd6c4' }}>
            detailed specifications, performance insights, and applications
          </span>{' '}
          for our range of motors and controllers.
        </h2>

        <a
          href="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1863da',
            borderRadius: '4px',
            padding: '16px 24px',
            textDecoration: 'none',
            minWidth: 'clamp(200px, 27.7vw, 532px)',
          }}
        >
          <span
            className="font-nexa capitalize"
            style={{ color: '#fff', fontSize: 'clamp(13px, 1.25vw, 24px)', lineHeight: '20px', letterSpacing: '0.01em' }}
          >
            Learn more about our tailored solutions
          </span>
        </a>
      </div>
    </section>
  );
}
