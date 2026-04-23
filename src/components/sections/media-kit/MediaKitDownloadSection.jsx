import cardBg from '../../../assets/images/media-kit-card-bg.svg';

export default function MediaKitDownloadSection() {
  return (
    <section id="download" className="w-full bg-white" style={{ padding: 'clamp(48px, 6.25vw, 120px) 0' }}>
      <div
        className="mx-auto flex flex-wrap items-center"
        style={{
          maxWidth: '1574px',
          padding: '0 clamp(24px, 4.2vw, 80px)',
          gap: 'clamp(24px, 3.13vw, 60px)',
          minHeight: 'clamp(120px, 11.7vw, 224px)',
        }}
      >
        {/* Left: heading */}
        <div className="flex-shrink-0" style={{ width: 'clamp(180px, 17vw, 327px)' }}>
          <h2
            className="font-nexa"
            style={{
              fontSize: 'clamp(22px, 2.6vw, 50px)',
              lineHeight: '1.24',
              fontWeight: 400,
              color: '#1863da',
            }}
          >
            Download Media Kit
          </h2>
        </div>

        {/* Right: card with note + button */}
        <div
          className="relative flex-1"
          style={{ minHeight: 'clamp(120px, 11.7vw, 224px)' }}
        >
          {/* SVG cut-corner card background */}
          <img
            src={cardBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ objectFit: 'fill' }}
          />

          {/* Card content */}
          <div
            className="relative flex flex-col items-start justify-center h-full"
            style={{
              padding: 'clamp(20px, 2.08vw, 40px) clamp(24px, 3.13vw, 60px)',
              gap: 'clamp(16px, 1.56vw, 30px)',
            }}
          >
            <p
              className="font-metro text-black"
              style={{
                fontSize: 'clamp(13px, 1.04vw, 20px)',
                lineHeight: '1.7',
                maxWidth: 'clamp(280px, 55.4vw, 1064px)',
              }}
            >
              <strong>Note:</strong> Always follow these Branding Guidelines while publishing information relevant to Naxatra Labs. Download the Branding Kit below.
            </p>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
              style={{
                fontSize: 'clamp(14px, 1.25vw, 24px)',
                paddingInline: 'clamp(16px, 1.25vw, 24px)',
                paddingBlock: 'clamp(10px, 0.83vw, 16px)',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Download Kit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v8M8 10l-3-3M8 10l3-3M2 13h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
