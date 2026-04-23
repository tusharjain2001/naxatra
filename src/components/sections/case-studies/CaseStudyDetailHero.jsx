import detailCaseStudy from '../../../assets/images/detail-case-study.svg';

export default function CaseStudyDetailHero() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: 'clamp(320px, 36.2vw, 695px)' }}
    >
      <img
        src={detailCaseStudy}
        alt="Boosting Power Tool Performance with Naxatra Labs' Advanced BLDC Motor Solution"
        className="block w-full h-auto"
        style={{ minHeight: '100%', objectFit: 'cover', objectPosition: 'center -36px' }}
      />
    </section>
  );
}
