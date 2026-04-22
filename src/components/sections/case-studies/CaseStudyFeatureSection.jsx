import { Link } from 'react-router-dom';
import caseStudyCard from '../../../assets/images/case-study-card.png';
import cardBg from '../../../assets/images/case-study-bg.svg';

export default function CaseStudyFeatureSection() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ minHeight: 'clamp(420px, 40vw, 768px)' }}
    >
      {/* Background card shape — centered horizontally */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, calc(-50% + 1.77vw))',
          width: 'clamp(560px, 86.7vw, 1664px)',
          height: 'clamp(160px, 25vw, 480px)',
        }}
      >
        <img src={cardBg} alt="" className="w-full h-full" style={{ objectFit: 'fill' }} />
      </div>

      {/* Content row */}
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(40px, 5.2vw, 100px) clamp(24px, 10.5vw, 201px)',
          gap: '40px',
        }}
      >
        {/* Left: title + CTA */}
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 'clamp(280px, 47vw, 881px)', gap: 'clamp(24px, 2.1vw, 40px)' }}
        >
          <h2
            className="font-nexa capitalize"
            style={{
              fontSize: 'clamp(24px, 2.8vw, 54px)',
              lineHeight: '1.26',
              fontWeight: 400,
            }}
          >
            <span style={{ color: '#1863da' }}>
              Boosting Power Tool Performance{' '}
            </span>
            <span style={{ color: '#000' }}>
              with Naxatra Labs' Advanced BLDC Motor Solution
            </span>
          </h2>

          <Link
            to="/case-studies/bldc-power-tools"
            className="inline-flex items-center justify-center bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              paddingInline: 'clamp(16px, 1.25vw, 24px)',
              paddingBlock: 'clamp(10px, 0.83vw, 16px)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Read Case Studies
          </Link>
        </div>

        {/* Right: case study card image */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(220px, 31.9vw, 612px)',
            height: 'clamp(180px, 26vw, 500px)',
            overflow: 'hidden',
          }}
        >
          <div
            className="absolute"
            style={{
              left: '9.3%',
              bottom: 0,
              width: '81.4%',
              borderRadius: '7.6px 7.6px 0 0',
              boxShadow: '0px 0px 26.6px 0px rgba(0,0,0,0.5)',
              overflow: 'hidden',
            }}
          >
            <img
              src={caseStudyCard}
              alt="Boosting Power Tool Performance — Case Study"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
