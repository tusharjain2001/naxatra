import energyLeft from '../../../assets/images/energyleft.png';

export default function CaseStudyImpact() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="mx-auto"
        style={{ maxWidth: 'min(1600px, 83vw)', padding: 'clamp(24px, 3vw, 14px) clamp(20px, 4.2vw, 80px) clamp(40px, 5vw, 16px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(24px, 2.34vw, 45px)', lineHeight: '1.24', fontWeight: 600, marginBottom: 'clamp(24px, 2.6vw, 48px)' }}
        >
          <span style={{ color: '#000' }}>Energy And Cost </span>
          <span style={{ color: '#1863da' }}>Impact</span>
        </h2>

        <div
          className="flex items-start"
          style={{ gap: 'clamp(24px, 3vw, 56px)', flexWrap: 'nowrap' }}
        >
          <div style={{ width: 'clamp(220px, 28vw, 540px)', flexShrink: 0 }}>
            <img
              src={energyLeft}
              alt="Energy and cost impact summary"
              className="block w-full h-auto"
            />
          </div>

          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p
              className="font-metro text-black"
              style={{ fontSize: '20px', lineHeight: '1.72' }}
            >
              For reference a 150W tool, BLDC being about 30% more efficient, if the tool operates about 3,000 hrs. in a year, the energy saved is about 135 kWh. That&apos;s about 1,350 INR (at 10 rupee/ unit) saved every year not to mention the savings due to reduced down-time and maintenance costs. Thereby also reducing the overall Total Cost of Ownership. Reduced energy consumption aligns with potential future regulations and appeals to environmentally conscious customers and corporations with sustainability mandates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
