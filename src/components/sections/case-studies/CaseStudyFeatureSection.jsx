import { Link } from 'react-router-dom';
import caseStudyCard from '../../../assets/images/case-study-card.png';
import caseStudyCardMobile from '../../../assets/images/case-study-card-mobile.png';
import cardBg from '../../../assets/images/case-study-bg.svg';
import featureGrid from '../../../assets/images/feature-grid.png';
import readCaseCta from '../../../assets/images/read-case-cta.svg';

export default function CaseStudyFeatureSection() {
  return (
    <>
      {/* ── MOBILE LAYOUT (pixel-matched to Figma node 3091:6982, inner 347×378px) ── */}
      <section
        className="w-full bg-white md:hidden"
        style={{ padding: '28px 0' }}
      >
        {/* Inner container: 347px wide, 378px tall, centered — all positions are relative to this */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{ width: 'min(347px, 94vw)', height: '378px' }}
        >
          {/* cardBg: inlined SVG at exact Figma dimensions 347.079×369px */}
          <svg
            className="absolute pointer-events-none"
            style={{ top: 0, left: 0 }}
            width="347.079"
            height="369"
            viewBox="0 0 1664 480"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.63965 0.553711H1657.36C1660.72 0.553711 1663.45 3.27841 1663.45 6.63965L1663.45 409.27L1593.27 479.446H6.63965C3.2784 479.446 0.553711 476.722 0.55371 473.36V6.63965C0.55371 3.27841 3.27841 0.553711 6.63965 0.553711Z"
              fill="#4DD6C4"
              fillOpacity="0.06"
              stroke="#9D9D9D"
              strokeWidth="1.10656"
            />
          </svg>

          {/* Heading: top 34px, 24px, 310px wide, centered */}
          <p
            className="absolute font-nexa capitalize text-center"
            style={{
              top: '34px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '310px',
              fontSize: '0',
              lineHeight: '0',
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: '24px', lineHeight: '23.977px', color: '#1863da' }}>
              {'Boosting Power Tool Performance '}
            </span>
            <span style={{ fontSize: '24px', lineHeight: '23.977px', color: '#000' }}>
              {"with Naxatra Labs' Advanced BLDC Motor Solution"}
            </span>
          </p>

          {/* Read Case Studies CTA: top 163px, centered, 129×26px */}
          <Link
            to="/case-studies/bldc-power-tools"
            className="absolute inline-flex items-center justify-center"
            style={{ top: '163px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
          >
            <img
              src={readCaseCta}
              alt="Read Case Studies"
              style={{ width: '129px', height: 'auto' }}
            />
          </Link>

          {/* Card: Figma left:86px (66+20) top:212px (61+151), w:176px */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: '212px',
              left: '86px',
              width: '175.726px',
              borderRadius: '0.944px 0.944px 0 0',
              boxShadow: '0px 0px 9.366px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src={caseStudyCardMobile}
              alt="Boosting Power Tool Performance - Case Study"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── DESKTOP LAYOUT (unchanged) ── */}
      <section
        className="relative w-full bg-white overflow-hidden hidden md:block"
        style={{ padding: 'clamp(48px, 7vw, 132px) clamp(20px, 6.7vw, 129px)' }}
      >
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            maxWidth: '1664px',
            minHeight: 'clamp(260px, 25vw, 480px)',
          }}
        >
          <img
            src={cardBg}
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ objectFit: 'fill' }}
          />

          <img
            src={featureGrid}
            alt=""
            className="absolute pointer-events-none"
            style={{
              right: 'clamp(-8px, 0vw, 0px)',
              top: 'clamp(12px, 1.8vw, 34px)',
              width: 'clamp(360px, 45vw, 869px)',
              height: 'auto',
              zIndex: 1,
            }}
          />

          <div
            className="relative z-10 flex flex-col items-start"
            style={{
              padding: 'clamp(42px, 5.2vw, 100px) clamp(28px, 4.6vw, 88px)',
              width: 'clamp(300px, 48vw, 920px)',
              gap: 'clamp(18px, 1.9vw, 36px)',
            }}
          >
            <h2
              className="font-nexa capitalize"
              style={{
                fontSize: 'clamp(24px, 2.65vw, 51px)',
                lineHeight: '1.18',
                fontWeight: 400,
                margin: 0,
              }}
            >
              <span style={{ color: '#1863da', whiteSpace: 'nowrap' }}>Boosting Power Tool Performance</span>
              <br />
              <span style={{ color: '#000', whiteSpace: 'nowrap' }}>With Naxatra Labs' Advanced</span>
              <br />
              <span style={{ color: '#000', whiteSpace: 'nowrap' }}>BLDC Motor Solution</span>
            </h2>

            <Link
              to="/case-studies/bldc-power-tools"
              className="inline-flex items-center justify-center"
            >
              <img
                src={readCaseCta}
                alt="Read Case Studies"
                className="block h-auto object-contain"
                style={{ width: 'clamp(160px, 14vw, 269px)' }}
              />
            </Link>
          </div>

          <div
            className="absolute"
            style={{
              right: 'clamp(48px, 10.8vw, 208px)',
              bottom: 0,
              width: 'clamp(220px, 28vw, 538px)',
              height: 'clamp(120px, 18.8vw, 360px)',
              overflow: 'hidden',
              zIndex: 2,
            }}
          >
            <div
              className="absolute"
              style={{
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                borderRadius: '7.6px 7.6px 0 0',
                boxShadow: '0px 0px 26.6px 0px rgba(0,0,0,0.5)',
                overflow: 'hidden',
              }}
            >
              <img
                src={caseStudyCard}
                alt="Boosting Power Tool Performance - Case Study"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
