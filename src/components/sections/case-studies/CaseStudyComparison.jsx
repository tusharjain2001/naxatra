const rows = [
  { feature: 'Peak Efficiency',         brushed: '~70%',                         bldc: '90%',                          improvement: '+29%' },
  { feature: 'Battery Runtime',         brushed: 'Baseline (1.0X cycles/charge)', bldc: '1.2X cycles/charge',           improvement: '+20%' },
  { feature: 'Est. Motor Lifespan',     brushed: '~2000–4000 hrs.',               bldc: '>10,000 hrs.',                  improvement: '+2.5x' },
  { feature: 'Heat Generation',         brushed: 'High (>100°C)',                 bldc: 'Lower (<85°C)',                improvement: 'Significantly Less' },
  { feature: 'Noise Level',             brushed: 'Higher (>85 dBA)',              bldc: 'Lower (<65 dBA)',              improvement: 'Noticeably Quieter' },
  { feature: 'Maintenance',             brushed: 'Regular Brush Replacement',     bldc: 'Virtually Maintenance-Free',   improvement: 'Eliminated' },
  { feature: 'Arcing Effect',           brushed: 'High (due to brushed)',         bldc: 'None',                         improvement: 'Improved Safety' },
  { feature: 'Initial Cost',            brushed: 'Low',                           bldc: 'High',                         improvement: '—' },
  { feature: 'Total Cost of Ownership', brushed: 'High',                          bldc: 'Low',                          improvement: 'Savings from efficiency & lower maintenance' },
];

const TH = ({ children, align = 'left' }) => (
  <th
    className="font-nexa"
    style={{
      textAlign: align,
      fontSize: 'clamp(13px, 1.25vw, 24px)',
      lineHeight: '1.5',
      fontWeight: 400,
      color: '#000',
      padding: 'clamp(10px, 0.83vw, 16px) clamp(8px, 0.63vw, 12px)',
      borderBottom: '2px solid #d1d1d1',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </th>
);

const TD = ({ children, blue }) => (
  <td
    className="font-metro capitalize"
    style={{
      fontSize: 'clamp(12px, 1.04vw, 20px)',
      lineHeight: '1.6',
      color: blue ? '#1863da' : '#515151',
      padding: 'clamp(10px, 0.83vw, 16px) clamp(8px, 0.63vw, 12px)',
      borderBottom: '1px solid #e8e8e8',
      fontWeight: blue ? 500 : 400,
    }}
  >
    {children}
  </td>
);

export default function CaseStudyComparison() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(40px, 4.8vw, 92px) clamp(24px, 10.5vw, 201px)' }}
      >
        {/* Heading */}
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(28px, 2.6vw, 50px)', lineHeight: '1.24', fontWeight: 400, marginBottom: 'clamp(32px, 3.1vw, 60px)' }}
        >
          <span style={{ color: '#1863da' }}>Performance </span>
          <span style={{ color: '#000' }}>Comparison</span>
        </h2>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#f4fdfb' }}>
                <TH>Feature</TH>
                <TH>Traditional Brushed DC Motor (Previous)</TH>
                <TH>Naxatra Labs' BLDC (New)</TH>
                <TH>Improvement</TH>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <TD blue>{r.feature}</TD>
                  <TD>{r.brushed}</TD>
                  <TD>{r.bldc}</TD>
                  <TD>{r.improvement}</TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
