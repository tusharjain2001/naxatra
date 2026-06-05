import { useState } from 'react';
import ctaBg from '../../assets/images/cta-bg.svg';
import DownloadBrochureModal from './product/DownloadBrochureModal';

const primaryButtonClip = 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 16px) 100%, 0 100%)';
const secondaryButtonClip = 'polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)';

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <section className="w-full bg-[#f5fafa]">
      <div className="home-cta-desktop relative max-[560px]:hidden" style={{ height: 'clamp(460px, 32.08vw, 616px)' }}>
        {/* Dark cut-corner background */}
        <img
          src={ctaBg}
          alt=""
          className="home-cta-bg absolute"
          style={{
            top: 'clamp(40px, 2.76vw, 53px)',
            left: 'clamp(24px, 3.85vw, 74px)',
            width: 'calc(100% - clamp(48px, 7.7vw, 148px))',
            height: 'clamp(360px, 26.56vw, 510px)',
            display: 'block',
          }}
        />

        {/* Content */}
        <div
          className="home-cta-content absolute"
          style={{
            top: 'clamp(112px, 8.33vw, 160px)',
            left: 'clamp(72px, 10.94vw, 210px)',
            right: 'clamp(72px, 8.91vw, 171px)',
            display: 'grid',
            gridTemplateColumns: 'minmax(420px, 0.95fr) minmax(360px, 0.75fr)',
            gap: 'clamp(56px, 8.18vw, 157px)',
          }}
        >
          <div>
            <div style={{ marginBottom: '24px' }}>
              <p
                className="home-cta-eyebrow font-metro"
                aria-label="One Size Doesn't Fit All. We Customize."
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'clamp(12px, 0.95vw, 18px)',
                  color: '#f3f5f8',
                  fontSize: 'clamp(16px, 1.4vw, 27px)',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(34px, 2.85vw, 55px)',
                    lineHeight: 0.75,
                    fontWeight: 300,
                  }}
                >
                  [
                </span>
                <span>One Size Doesn't Fit All. We Customize</span>
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(34px, 2.85vw, 55px)',
                    lineHeight: 0.75,
                    fontWeight: 300,
                  }}
                >
                  ]
                </span>
              </p>
            </div>

            <h2 className="home-cta-heading font-nexa capitalize" style={{ fontSize: 'clamp(44px, 3.56vw, 68.35px)', lineHeight: 1.26 }}>
              <span style={{ color: '#fff' }}>From Ground to Sky, </span>
              <span style={{ color: '#1863da' }}>We Power It All</span>
            </h2>
          </div>

          <div className="home-cta-copy-panel" style={{ paddingTop: '0' }}>
            <p
              className="home-cta-copy font-metro"
              style={{
                color: '#fff',
                fontSize: 'clamp(15px, 1.02vw, 19.54px)',
                lineHeight: 1.56,
                marginBottom: 'clamp(20px, 1.61vw, 31px)',
              }}
            >
              Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions,
              our motors deliver unmatched durability and performance wherever the journey takes you.
            </p>

            <a
              href="/products"
              aria-label="Learn More About Our Tailored Solutions"
              className="home-cta-primary font-nexa"
              style={{
                width: 'min(100%, 560px)',
                height: 'clamp(54px, 3.75vw, 72px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                marginBottom: '16px',
                backgroundColor: '#1863da',
                clipPath: primaryButtonClip,
                color: '#fff',
                fontSize: 'clamp(18px, 1.18vw, 22px)',
                lineHeight: 1,
                fontWeight: 600,
                padding: '0 0 0 clamp(18px, 1.3vw, 24px)',
                textAlign: 'left',
                whiteSpace: 'nowrap',
              }}
            >
              Learn More About Our Tailored Solutions
            </a>

            <div
              className="home-cta-secondary-wrap"
              style={{
                width: 'min(100%, 373px)',
                height: 'clamp(54px, 3.75vw, 72px)',
                clipPath: secondaryButtonClip,
                backgroundColor: '#ffffff',
                padding: '2px',
              }}
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label="Browse Our Motor Catalog"
                className="home-cta-secondary font-nexa"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  textDecoration: 'none',
                  clipPath: secondaryButtonClip,
                  color: '#fff',
                  fontSize: 'clamp(18px, 1.2vw, 22px)',
                  lineHeight: 1,
                  fontWeight: 600,
                  padding: '0 0 0 clamp(18px, 1.3vw, 24px)',
                  textAlign: 'left',
                  backgroundColor: '#050608',
                  whiteSpace: 'nowrap',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Browse Our Motor Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden max-[560px]:block px-4 pt-7 pb-9">
        <div className="mx-auto max-w-[378px]">
          <p className="flex items-center justify-center gap-2 font-metro text-[10px] uppercase tracking-[0.08em] text-[#4b5567]">
            <span className="text-[18px] leading-none text-[#4b5567]">[</span>
            <span>One Size Doesn't Fit All. We Customize.</span>
            <span className="text-[18px] leading-none text-[#4b5567]">]</span>
          </p>

          <h2 className="mt-4 text-center font-nexa text-[26px] leading-[1.05]">
            <span className="block text-[#42506a]">From Ground To Sky,</span>
            <span className="block text-[#1863da]">We Power It All</span>
          </h2>

          <div
            className="mt-7 bg-[#050608] px-4 pt-[38px] pb-[36px]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)' }}
          >
            <p className="mx-auto max-w-[278px] text-center font-metro text-[10px] leading-[1.6] text-white">
              Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.
            </p>

            <a
              href="/products"
              aria-label="Learn More About Our Tailored Solutions"
              className="mx-auto mt-8 flex h-[31px] w-[239px] items-center justify-center bg-[#1863da] px-3 text-center font-nexa text-[10px] font-semibold leading-none text-white no-underline"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 10px) 100%, 0 100%)' }}
            >
              Learn More About Our Tailored Solutions
            </a>

            <div
              className="mx-auto mt-[10px] h-[34px] w-[170px] bg-white p-[1px]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label="Browse Our Motor Catalog"
                className="flex h-full w-full items-center justify-center bg-[#050608] font-nexa text-[10px] font-semibold leading-none text-white no-underline"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Browse Our Motor Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <DownloadBrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
