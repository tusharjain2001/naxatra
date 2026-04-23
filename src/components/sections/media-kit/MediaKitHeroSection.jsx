import downloadKit from '../../../assets/images/download-kit.png';
import mediaKitHeroGrid from '../../../assets/images/meiakitgrid.png';
import mediaKitHeroEllipse from '../../../assets/images/mediakitellipse.png';
import mediaKitHeroImage from '../../../assets/images/mdiakitimage.png';

export default function MediaKitHeroSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: 'clamp(420px, 44vw, 860px)' }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(260px, 30vw, 580px)',
          height: 'clamp(260px, 30vw, 580px)',
          top: '8%',
          right: '9%',
          background: 'radial-gradient(circle, rgba(77,214,196,0.08) 0%, transparent 72%)',
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between lg:flex-nowrap"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(56px, 6vw, 116px) clamp(24px, 7.8vw, 150px)',
          gap: 'clamp(32px, 3vw, 56px)',
        }}
      >
        <div
          className="flex flex-col items-start"
          style={{
            maxWidth: 'clamp(280px, 30vw, 575px)',
            gap: 'clamp(20px, 2vw, 38px)',
            paddingTop: 'clamp(12px, 2vw, 36px)',
          }}
        >
          <h1
            className="font-nexa"
            style={{ fontSize: 'clamp(34px, 4.8vw, 92px)', lineHeight: '0.98', fontWeight: 400, margin: 0 }}
          >
            <span style={{ color: '#4dd6c4', whiteSpace: 'nowrap' }}>Naxatra </span>
            <span className="text-white" style={{ whiteSpace: 'nowrap' }}>Media</span>
            <br />
            <span className="text-white">Kit 2026</span>
          </h1>

          <a
            href="#download"
            aria-label="Download Kit"
            className="relative block"
            style={{ width: 'fit-content' }}
          >
            <img
              src={downloadKit}
              alt="Download Kit"
              className="block h-auto object-contain"
              style={{
                width: 'clamp(120px, 10.5vw, 202px)',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
              }}
            />
            <span
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                right: 0,
                bottom: 0,
                width: '16px',
                height: '16px',
                background: '#000000',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              }}
            />
          </a>
        </div>

        {/* Right: layered hero visual */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(360px, 42vw, 808px)',
            aspectRatio: '808 / 520',
            marginLeft: 'auto',
            marginRight: 'clamp(-6px, 1.5vw, 20px)',
          }}
        >
          <img
            src={mediaKitHeroGrid}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            style={{ opacity: 0.7 }}
          />
          <img
            src={mediaKitHeroEllipse}
            alt=""
            className="absolute z-10 h-auto object-contain pointer-events-none"
            style={{
              width: 'clamp(215px, 24vw, 470px)',
              top: '48%',
              left: '54%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.55,
            }}
          />
          <img
            src={mediaKitHeroImage}
            alt="Naxatra Labs media kit preview"
            className="absolute z-20 h-auto object-contain"
            style={{
              width: 'clamp(220px, 27vw, 500px)',
              top: '49%',
              left: '54%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
