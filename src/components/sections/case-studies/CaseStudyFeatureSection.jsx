import { Link } from 'react-router-dom';
import caseStudyCard from '../../../assets/images/case-study-card.png';
import cardBg from '../../../assets/images/case-study-bg.svg';
import featureGrid from '../../../assets/images/feature-grid.png';
import readCaseCta from '../../../assets/images/read-case-cta.svg';

export default function CaseStudyFeatureSection() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden"
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
            <span style={{ color: '#1863da' }}>Boosting Power Tool Performance </span>
            <span style={{ color: '#000' }}>
              with Naxatra Labs' Advanced BLDC Motor Solution
            </span>
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
  );
}
