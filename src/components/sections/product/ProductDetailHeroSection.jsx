import reqForCust from '../../../assets/images/req-for-cust.png';
import reqSpecSheet from '../../../assets/images/req-spec-sheet.png';

export default function ProductDetailHeroSection({ product }) {
  const specs = [
    { value: product.heroVoltage, label: 'Rated Voltage (DC)' },
    { value: product.heroTorque, label: 'Peak Torque' },
    { value: product.motorType, label: 'Motor type' },
    { value: product.coolingType, label: 'Cooling Type' },
  ];

  const sharedBottom = 'clamp(30px, 4.5vw, 86px)';

  return (
    <section
      className="relative w-full overflow-hidden flex"
      style={{ background: '#f5fafa', minHeight: 'clamp(380px, 40vw, 770px)' }}
    >
      {/* ── LEFT: Glow + watermark + motor + CTAs ── */}
      <div className="relative" style={{ width: '50%' }}>
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '50%', transform: 'translateX(-50%)',
            top: 'clamp(30px, 3.3vw, 63px)',
            width: 'clamp(260px, 38.3vw, 736px)',
            height: 'clamp(260px, 38.3vw, 736px)',
            background: 'radial-gradient(circle, rgba(24,99,218,0.10) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Watermark */}
        <p
          className="absolute w-full text-center font-nexa capitalize pointer-events-none select-none"
          style={{
            top: 'clamp(60px, 6.9vw, 133px)',
            left: 0,
            fontSize: 'clamp(48px, 7.3vw, 140px)',
            lineHeight: '1.04',
            background: 'linear-gradient(90deg, #f5fafa 12%, #b6b6b6 56%, #f5fafa 113%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.3,
            letterSpacing: '0.04em',
          }}
        >
          {product.shortName}
        </p>

        {/* Motor image */}
        <div
          className="absolute"
          style={{
            left: '50%',
            transform: 'translateX(calc(-50% + 3.4%)) rotate(180deg)',
            top: 'clamp(60px, 8vw, 155px)',
            width: 'clamp(200px, 32.3vw, 620px)',
            height: 'clamp(155px, 27.1vw, 521px)',
            zIndex: 2,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* CTAs — bottom-anchored to match specs bottom */}
        <div
          className="absolute"
          style={{
            bottom: sharedBottom,
            left: 'clamp(16px, 10.6vw, 203px)',
            zIndex: 3,
            display: 'flex',
            gap: 'clamp(12px, 1.25vw, 24px)',
            flexWrap: 'nowrap',
            alignItems: 'center',
          }}
        >
          <a
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            aria-label={`Request spec sheet for ${product.name}`}
          >
            <img
              src={reqSpecSheet}
              alt="Request Spec Sheet"
              className="block"
              style={{ width: 'auto', height: 'clamp(32px, 2.6vw, 50px)' }}
            />
          </a>

          <button
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            type="button"
            aria-label={`Request customization for ${product.name}`}
          >
            <img
              src={reqForCust}
              alt="Request for Customization"
              className="block"
              style={{ width: 'auto', height: 'clamp(32px, 2.6vw, 50px)' }}
            />
          </button>
        </div>
      </div>

      {/* ── RIGHT: Name + specs ── */}
      <div
        className="relative flex flex-col justify-end"
        style={{
          flex: 1,
          paddingBottom: sharedBottom,
          paddingRight: 'clamp(20px, 4vw, 80px)',
        }}
      >
        {/* Product name — floated to top */}
        <h1
          className="absolute font-nexa capitalize"
          style={{
            top: 'clamp(60px, 9.3vw, 179px)',
            left: 0,
            color: '#1863da',
            fontSize: 'clamp(28px, 3.54vw, 68px)',
            lineHeight: '1.15',
          }}
        >
          {product.name}
        </h1>

        {/* Specs — bottom-anchored to match CTAs bottom via paddingBottom */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(20px, 2.1vw, 40px) clamp(20px, 2.1vw, 40px)',
          }}
        >
          {specs.map((spec, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <p
                  className="font-nexa capitalize"
                  style={{ color: '#1863da', fontSize: 'clamp(16px, 1.67vw, 32px)', lineHeight: '1.25', marginBottom: '2px' }}
                >
                  {spec.value}
                </p>
                <p
                  className="font-metro"
                  style={{ color: '#000', fontSize: 'clamp(12px, 1.25vw, 24px)', lineHeight: '1.5' }}
                >
                  {spec.label}
                </p>
              </div>
              <div style={{ height: '1px', background: '#d9d9d9', width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
