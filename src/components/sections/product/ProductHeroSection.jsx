import { useState } from 'react';
import downloadBrochure from '../../../assets/images/download-brochure.svg';
import greenBg from '../../../assets/images/green-bg.png';
import DownloadBrochureModal from './DownloadBrochureModal';
import AnimatedTextReveal, { countAnimatedCharacters } from '../../common/AnimatedTextReveal';

export default function ProductHeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const powerText = 'Power ';
  const movesText = 'That Moves You.';
  const movesDelay = countAnimatedCharacters(powerText) * 0.018;

  return (
    <section
      className="relative w-full overflow-hidden mt-10 text-center"
      style={{ background: '#f5fafa' }}
    >
      {/* Green glow - decorative background only */}
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

      <div className="relative z-10 pt-[clamp(30px,3.6vw,64px)] pb-10">
        {/* Main heading */}
        <h1
          className="font-nexa font-semibold capitalize whitespace-nowrap max-[560px]:px-4"
          style={{
            fontSize: 'clamp(24px, 5.2vw, 100px)',
            lineHeight: '0.933',
            color: '#000',
            letterSpacing: 'normal',
          }}
        >
          <span style={{ color: '#1863da' }}><AnimatedTextReveal text={powerText} /></span>
          {' '}
          <AnimatedTextReveal text={movesText} delay={movesDelay} />
        </h1>

        {/* Subtitle */}
        <p
          className="font-metro capitalize max-[560px]:px-4 max-[560px]:text-[12px] mt-[clamp(8px,1.5vw,20px)]"
          style={{
            fontSize: 'clamp(11px, 1.25vw, 24px)',
            lineHeight: '1.6',
            color: '#515151',
          }}
        >
          Lighter, Stronger, Smarter Motors for the Future
        </p>

        {/* Video */}
        <div className="flex items-center justify-center my-[clamp(24px,4vw,64px)] max-[720px]:my-6">
          <video
            src="https://res.cloudinary.com/dgr33gxhd/video/upload/v1778512413/Alternatye_aniamtion_2_tuner4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[clamp(760px,72vw,1380px)] h-[clamp(270px,26vw,500px)] object-cover max-[720px]:w-[92vw] max-[720px]:h-60"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="cta-asset bg-transparent p-0"
            style={{ border: 'none', cursor: 'pointer' }}
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
      <DownloadBrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
