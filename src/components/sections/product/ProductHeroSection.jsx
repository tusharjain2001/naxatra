import { useState } from 'react';
import downloadBrochure from '../../../assets/images/download-brochure.png';
import motorHero from '../../../assets/images/product-motor-hero.png';
import DownloadBrochureModal from './DownloadBrochureModal';

export default function ProductHeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#f5fafa', minHeight: 'clamp(480px, 56.4vw, 1083px)' }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: 'clamp(80px, 10vw, 193px)',
          width: 'clamp(300px, 39vw, 748px)',
          height: 'clamp(300px, 39vw, 748px)',
          background:
            'radial-gradient(circle, rgba(24,99,218,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Main heading */}
      <h1
        className="font-nexa text-center capitalize absolute w-full"
        style={{
          top: 'clamp(40px, 5.9vw, 114px)',
          fontSize: 'clamp(36px, 5.2vw, 100px)',
          lineHeight: '0.933',
          color: '#000',
          letterSpacing: 'normal',
        }}
      >
        <span style={{ color: '#1863da' }}>Power </span>
        That Moves You.
      </h1>

      {/* Subtitle */}
      <p
        className="font-metro text-center capitalize absolute w-full"
        style={{
          top: 'clamp(100px, 11.3vw, 217px)',
          fontSize: 'clamp(13px, 1.25vw, 24px)',
          lineHeight: '1.6',
          color: '#515151',
        }}
      >
        Lighter, Stronger, Smarter Motors for the Future.
      </p>

      {/* Watermark text */}
      <p
        className="font-nexa text-center capitalize absolute w-full pointer-events-none select-none"
        style={{
          top: 'clamp(220px, 26.7vw, 512px)',
          fontSize: 'clamp(40px, 7.1vw, 137px)',
          lineHeight: '1.04',
          background: 'linear-gradient(90deg, #f5fafa 0%, #515151 45%, #f5fafa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.67,
          letterSpacing: '0.1em',
        }}
      >
        Antarix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RF55
      </p>

      {/* Motor image */}
      <div
        className="absolute"
        style={{
          left: '50%',
          transform: 'translateX(calc(-50% + 3.4%)) rotate(180deg)',
          top: 'clamp(110px, 15.7vw, 301px)',
          width: 'clamp(220px, 32.3vw, 620px)',
          height: 'clamp(170px, 27.1vw, 521px)',
          zIndex: 2,
        }}
      >
        <img
          src={motorHero}
          alt="Antarix RF55 Motor"
          className="w-full h-full object-contain"
        />
      </div>

      {/* CTA Button */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="absolute"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: 'clamp(400px, 46.3vw, 889px)',
          zIndex: 3,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
        aria-label="Download Brochure"
      >
        <img
          src={downloadBrochure}
          alt="Download Brochure"
          className="block"
          style={{ width: 'clamp(160px, 14vw, 270px)', height: 'auto' }}
        />
      </button>

      {/* Spacer to give section its height */}
      <div style={{ height: 'clamp(480px, 56.4vw, 1083px)' }} />

      <DownloadBrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
