export default function ProductDetailHeroSection({ product }) {
  const specs = [
    { value: product.heroVoltage, label: 'Rated Voltage (DC)' },
    { value: product.heroTorque, label: 'Peak Torque' },
    { value: product.motorType, label: 'Motor type' },
    { value: product.coolingType, label: 'Cooling Type' },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#f5fafa', minHeight: 'clamp(420px, 49.6vw, 953px)' }}
    >
      {/* ── LEFT: Glow + watermark + motor ── */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ width: '50%' }}
      >
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
      </div>

      {/* ── RIGHT: Name + specs + CTAs ── */}
      <div
        className="absolute"
        style={{
          left: '50.6%',
          top: 'clamp(60px, 9.3vw, 179px)',
          width: 'clamp(240px, 40vw, 760px)',
        }}
      >
        {/* Product name */}
        <h1
          className="font-nexa capitalize"
          style={{
            color: '#1863da',
            fontSize: 'clamp(28px, 3.54vw, 68px)',
            lineHeight: '1.15',
            marginBottom: 'clamp(24px, 3.6vw, 68px)',
          }}
        >
          {product.name}
        </h1>

        {/* Specs 2-column grid */}
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

      {/* ── Bottom CTAs ── */}
      <div
        className="absolute"
        style={{
          left: 'clamp(16px, 10.6vw, 203px)',
          top: 'clamp(340px, 37.9vw, 729px)',
          display: 'flex',
          gap: 'clamp(12px, 1.25vw, 24px)',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="#"
          style={{
            background: '#1863da',
            borderRadius: '4px',
            padding: '14px 24px',
            color: '#fff',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            className="font-nexa capitalize"
            style={{ fontSize: 'clamp(13px, 1.25vw, 24px)', lineHeight: '20px', letterSpacing: '0.01em' }}
          >
            Request Spec Sheet
          </span>
        </a>

        <button
          style={{
            background: 'transparent',
            border: '1px solid #1863da',
            borderRadius: '4px',
            padding: '14px 24px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            className="font-nexa capitalize"
            style={{ color: '#1863da', fontSize: 'clamp(13px, 1.25vw, 24px)', lineHeight: '20px', letterSpacing: '0.01em' }}
          >
            Request for Customization
          </span>
        </button>
      </div>

      {/* Spacer */}
      <div style={{ height: 'clamp(420px, 49.6vw, 953px)' }} />
    </section>
  );
}
