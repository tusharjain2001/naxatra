import impactChart from '../../../assets/images/cs-impact-chart.png';

export default function CaseStudyImpact() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-wrap items-center gap-10"
        style={{ maxWidth: '1920px', padding: 'clamp(40px, 4.8vw, 92px) clamp(24px, 10.5vw, 201px)' }}
      >
        {/* Left: chart image */}
        <div className="flex-shrink-0" style={{ width: 'clamp(240px, 31vw, 595px)' }}>
          <img
            src={impactChart}
            alt="Energy and Cost Impact chart"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: text */}
        <div style={{ flex: '1 1 clamp(260px, 45.5vw, 874px)' }}>
          <h2
            className="font-nexa capitalize"
            style={{
              fontSize: 'clamp(28px, 2.6vw, 50px)',
              lineHeight: '1.24',
              fontWeight: 400,
              marginBottom: 'clamp(20px, 2.1vw, 40px)',
            }}
          >
            <span style={{ color: '#000' }}>Energy and Cost </span>
            <span style={{ color: '#1863da' }}>Impact</span>
          </h2>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7', marginBottom: '1em' }}
          >
            For reference, a 150W tool with BLDC being about 30% more efficient, if the tool operates about 3,000 hrs.
            in a year, the energy saved is about 135 kWh. That's about 1,350 INR (at ₹10/unit) saved every year —
            not to mention the savings due to reduced downtime and maintenance costs, thereby also reducing the overall
            Total Cost of Ownership.
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
          >
            Reduced energy consumption aligns with potential future regulations and appeals to environmentally
            conscious customers and corporations with sustainability mandates.
          </p>
        </div>
      </div>
    </section>
  );
}
