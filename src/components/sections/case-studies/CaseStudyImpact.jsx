import energyLeft from '../../../assets/images/energyleft.png';

export default function CaseStudyImpact() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="mx-auto"
        style={{ maxWidth: '1840px', padding: 'clamp(24px, 3vw, 14px) clamp(20px, 4.2vw, 80px) clamp(40px, 5vw, 16px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(24px, 2.34vw, 45px)', lineHeight: '1.24', fontWeight: 600, marginBottom: 'clamp(24px, 2.6vw, 48px)' }}
        >
          <span style={{ color: '#000' }}>Energy And Cost </span>
          <span style={{ color: '#1863da' }}>Impact</span>
        </h2>

        <div
          className="flex flex-wrap items-start"
          style={{ gap: 'clamp(24px, 3vw, 56px)' }}
        >
          <div style={{ width: 'clamp(280px, 34vw, 650px)', flexShrink: 0 }}>
            <img
              src={energyLeft}
              alt="Energy and cost impact summary"
              className="block w-full h-auto"
            />
          </div>

          <div style={{ flex: '1 1 clamp(320px, 42vw, 820px)', maxWidth: 'none' }}>
            <p
              className="font-metro text-black"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.72', marginBottom: '1.2em' }}
            >
              By switching from traditional brushed DC motors to Naxatra Labs&apos; BLDC motor solution, manufacturers can unlock meaningful operating savings at scale. Higher efficiency means less wasted energy, lower heat generation, and improved electrical utilization across every usage cycle.
            </p>

            <p
              className="font-metro text-black"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.72', marginBottom: '1.2em' }}
            >
              For a reference 150W tool operating roughly 3,000 hours per year, the improved efficiency can translate into substantial annual electricity savings per motor, while also reducing downtime, maintenance intervention, and replacement frequency over the product lifecycle.
            </p>

            <p
              className="font-metro text-black"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.72' }}
            >
              Beyond cost, the impact is strategic: lower energy consumption, reduced component wear, and greener operation make BLDC-powered tools more attractive to industrial buyers seeking performance, reliability, and sustainability in one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
