import energyCostImpact from '../../../assets/images/energy-cost-impact.png';

export default function CaseStudyImpact() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="mx-auto"
        style={{ maxWidth: '1840px', padding: 'clamp(20px, 2.6vw, 48px) clamp(20px, 4.2vw, 80px) clamp(40px, 5vw, 96px)' }}
      >
        <img
          src={energyCostImpact}
          alt="Energy and Cost Impact"
          className="block w-full h-auto"
        />
      </div>
    </section>
  );
}
