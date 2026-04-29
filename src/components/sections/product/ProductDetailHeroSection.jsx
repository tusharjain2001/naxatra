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
    <>
      {/* ── MOBILE LAYOUT (pixel-matched to Figma node 3076:5222, frame width 402px) ── */}
      <section
        className="relative w-full flex flex-col md:hidden"
        style={{ background: '#f5fafa', overflow: 'hidden' }}
      >
        {/* Motor area: 267px tall (CTAs start at 322px from page top; section starts at 55px) */}
        <div className="relative w-full" style={{ height: '267px' }}>
          {/* Glow: Figma top=41px from page → 41-55=-14px from section */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '50%',
              top: '-14px',
              transform: 'translateX(-50%)',
              width: '330px',
              height: '330px',
              background: 'radial-gradient(circle, rgba(24,99,218,0.10) 0%, transparent 68%)',
              borderRadius: '50%',
            }}
          />

          {/* Watermark: Figma top=102px from page → 47px from section, fontSize 50px */}
          <p
            className="absolute w-full text-center font-nexa capitalize pointer-events-none select-none"
            style={{
              top: '47px',
              fontSize: '50px',
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

          {/* Motor image: Figma top=122px from page → 67px from section, width 222px, rotated 180deg */}
          <img
            src={product.image}
            alt={product.name}
            style={{
              position: 'absolute',
              top: '67px',
              left: '50%',
              transform: 'translateX(-50%) rotate(180deg)',
              width: '222px',
              maxWidth: '55vw',
              height: 'auto',
              objectFit: 'contain',
              zIndex: 2,
            }}
          />
        </div>

        {/* CTAs: 167px wide container, centered
            Spec Sheet at left:20px inside container
            Customization full-width */}
        <div style={{ width: '167px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ paddingLeft: '20px' }}>
            <a href="#" aria-label={`Request spec sheet for ${product.name}`}>
              <img
                src={reqSpecSheet}
                alt="Request Spec Sheet"
                style={{ height: '24px', width: 'auto', display: 'block' }}
              />
            </a>
          </div>
          <button
            type="button"
            style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'block', width: '167px' }}
            aria-label={`Request customization for ${product.name}`}
          >
            <img
              src={reqForCust}
              alt="Request for Customization"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </button>
        </div>

        {/* Name + specs container: 234px wide, centered
            Starts at ~360px from section (415px page - 55px navbar) */}
        <div style={{ width: '234px', maxWidth: '90vw', margin: '36px auto 32px' }}>
          {/* Product name: 16px blue, centered */}
          <h1
            className="font-nexa capitalize text-center"
            style={{
              color: '#1863da',
              fontSize: '16px',
              lineHeight: '16.331px',
              marginBottom: '20px',
            }}
          >
            {product.name}
          </h1>

          {/* Specs: absolute grid, positions from Figma node 3083:5287
              Container starts at top 45.19px within the 125px name+specs box.
              All positions below are relative to this specs sub-container. */}
          <div className="relative" style={{ height: '80px' }}>
            {/* Col 1, Row 1 — centered at x=45.5px */}
            <div style={{ position: 'absolute', left: '45.5px', top: 0, transform: 'translateX(-50%)', textAlign: 'center' }}>
              <p className="font-nexa capitalize" style={{ color: '#1863da', fontSize: '10px', lineHeight: '8.375px', margin: 0, whiteSpace: 'nowrap' }}>
                {specs[0].value}
              </p>
              <p className="font-metro" style={{ color: '#000', fontSize: '6px', lineHeight: '8px', margin: '3px 0 0', whiteSpace: 'nowrap' }}>
                {specs[0].label}
              </p>
            </div>
            {/* Divider col 1 row 1: left 7px, top 24px (Figma: 69-45=24) */}
            <div style={{ position: 'absolute', left: '7px', top: '24px', height: '1px', width: '75.794px', background: '#d9d9d9' }} />

            {/* Col 2, Row 1 — centered at x=196px */}
            <div style={{ position: 'absolute', left: '196px', top: 0, transform: 'translateX(-50%)', textAlign: 'center' }}>
              <p className="font-nexa capitalize" style={{ color: '#1863da', fontSize: '10px', lineHeight: '8.375px', margin: 0, whiteSpace: 'nowrap' }}>
                {specs[1].value}
              </p>
              <p className="font-metro" style={{ color: '#000', fontSize: '6px', lineHeight: '8px', margin: '3px 0 0', whiteSpace: 'nowrap' }}>
                {specs[1].label}
              </p>
            </div>
            {/* Divider col 2 row 1: left 158px, top 24px */}
            <div style={{ position: 'absolute', left: '158px', top: '24px', height: '1px', width: '75.794px', background: '#d9d9d9' }} />

            {/* Col 1, Row 2 — centered at x=45px */}
            <div style={{ position: 'absolute', left: '45px', top: '52px', transform: 'translateX(-50%)', textAlign: 'center' }}>
              <p className="font-nexa capitalize" style={{ color: '#1863da', fontSize: '10px', lineHeight: '8.375px', margin: 0, whiteSpace: 'nowrap' }}>
                {specs[2].value}
              </p>
              <p className="font-metro" style={{ color: '#000', fontSize: '6px', lineHeight: '8px', margin: '3px 0 0', whiteSpace: 'nowrap' }}>
                {specs[2].label}
              </p>
            </div>
            {/* Divider col 1 row 2: left 7px, top 80px */}
            <div style={{ position: 'absolute', left: '7px', top: '80px', height: '1px', width: '75.794px', background: '#d9d9d9' }} />

            {/* Col 2, Row 2 — centered at x=196.5px */}
            <div style={{ position: 'absolute', left: '196.5px', top: '52px', transform: 'translateX(-50%)', textAlign: 'center' }}>
              <p className="font-nexa capitalize" style={{ color: '#1863da', fontSize: '10px', lineHeight: '8.375px', margin: 0, whiteSpace: 'nowrap' }}>
                {specs[3].value}
              </p>
              <p className="font-metro" style={{ color: '#000', fontSize: '6px', lineHeight: '10px', margin: '3px 0 0', whiteSpace: 'nowrap' }}>
                {specs[3].label}
              </p>
            </div>
            {/* Divider col 2 row 2: left 158px, top 80px */}
            <div style={{ position: 'absolute', left: '158px', top: '80px', height: '1px', width: '75.794px', background: '#d9d9d9' }} />
          </div>
        </div>
      </section>

      {/* ── DESKTOP LAYOUT (unchanged) ── */}
      <section
        className="relative w-full overflow-hidden hidden md:flex"
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
    </>
  );
}
