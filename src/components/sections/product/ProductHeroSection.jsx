import { useState } from 'react';
import downloadBrochure from '../../../assets/images/download-brochure.svg';
import greenBg from '../../../assets/images/green-bg.png';
import motorHero from '../../../assets/images/product-motor-hero.png';
import productText from '../../../assets/images/Antarix RF55.png';
import DownloadBrochureModal from './DownloadBrochureModal';

export default function ProductHeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden mt-10"
      style={{ background: '#f5fafa', minHeight: 'clamp(320px, 44vw, 800px)' }}
    >
      {/* Green glow */}
      <div
        className="pointer-events-none absolute max-[560px]:h-[420px] max-[560px]:w-[420px]"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: 'clamp(20px, 10vw, 190px)',
          width: 'clamp(540px, 56vw, 980px)',
          height: 'clamp(540px, 56vw, 980px)',
          zIndex: 0,
        }}
      >
        <img src={greenBg} alt="" className="h-full w-full object-contain" />
      </div>

      {/* Main heading */}
      <h1
        className="font-nexa font-semibold text-center capitalize absolute w-full max-[560px]:px-4"
        style={{
          top: 'clamp(30px, 3.6vw, 64px)',
          fontSize: 'clamp(28px, 5.2vw, 100px)',
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
        className="font-metro text-center capitalize absolute w-full max-[560px]:px-4 max-[560px]:text-[12px]"
        style={{
          top: 'clamp(66px, 7.6vw, 142px)',
          fontSize: 'clamp(11px, 1.25vw, 24px)',
          lineHeight: '1.6',
          color: '#515151',
        }}
      >
        Lighter, Stronger, Smarter Motors for the Future.
      </p>

      <div
        className="absolute inset-x-0"
        style={{ top: 'clamp(62px, 14vw, 250px)', zIndex: 1 }}
      >
        <div
          className="relative mx-auto"
          style={{ width: 'min(86vw, 1320px)', height: 'clamp(255px, 26vw, 480px)' }}
        >
          {/* Watermark text image */}
          <img
            src={productText}
            alt=""
            className="pointer-events-none absolute left-1/2 top-[38%] block h-auto -translate-x-1/2 -translate-y-1/2 select-none max-[720px]:!w-[88%]"
            style={{ width: 'min(100%, 1320px)', zIndex: 1 }}
          />

          {/* Motor image */}
          <div
            className="absolute left-1/2 top-[36%] max-[720px]:!w-[170px] max-[720px]:!h-[130px]"
            style={{
              transform: 'translateX(-50%) translateY(-50%) rotate(180deg)',
              width: 'clamp(320px, 33vw, 590px)',
              height: 'clamp(240px, 27vw, 500px)',
              zIndex: 2,
            }}
          >
            <img
              src={motorHero}
              alt="Antarix RF55 Motor"
              className="h-full w-full object-contain"
            />
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="absolute left-1/2 top-[84%] -translate-x-1/2 bg-transparent p-0 max-[560px]:top-[66%]"
            style={{
              zIndex: 3,
              border: 'none',
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
        </div>
      </div>

      {/* Spacer to give section its height */}
      <div style={{ height: 'clamp(320px, 44vw, 800px)' }} />

      <DownloadBrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
